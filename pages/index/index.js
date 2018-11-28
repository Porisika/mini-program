/**index.js**/
const QQMapWX = require('../libs/qqmap-wx-jssdk.js');

Page({
  /**
   * 页面的初始数据
   */
  data: {
    arr:[4,2,32,12,65,23,6],
    temp:'12',
    weather:'晴天',
    city:'北京市',
    forecastList:null,
    weatherObj:{
      'sunny': '☀️',
      'cloudy': '☁️',
      'heavyrain': '⛈️',
      'snow': '❄️',
      'overcast': '☁️',
      'lightrain': '🌧️',
    },
    weatherTexObj:{
      'sunny': '晴天',
      'cloudy': '阴天',
      'heavyrain': '大雨',
      'snow': '雪',
      'overcast': '多云',
      'lightrain': '小雨',
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.playBackgroundAudio({
      dataUrl: 'http://m10.music.126.net/20181127194733/d5b81584395fadbdc952d05998703e2c/ymusic/869e/7a88/81a6/4d91fac1723ccc4ddeff46f1ad98b80a.mp3',
    })
    const that = this;
    const qqmapsdk = new QQMapWX({
      key:'ZJPBZ-464W4-TJ3UI-XGJYM-LIZ47-BVB2K'
    });
    wx.getLocation({
      success: function(res) {
        qqmapsdk.reverseGeocoder({
          location:{
            latitude: res.latitude,
            longitude: res.longitude
          },
          success(res){
            console.log(res);
            that.setData({
              city: res.result.address_component.province
            });
          }
        });
      },
    });
    this.getNowWeather();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  getNowWeather(){
    const that=this;
    wx.request({
      url: 'https://test-miniprogram.com/api/weather/now?',
      data: {
        city: that.data.city
      },
      success(res) {
        const result = res.data.result;
        that.setData({
          temp: result.now.temp + '°',
          weather: result.now.weather,
          forecastList:result.forecast,
        });
      },
    })
  },

  getForecastList(event){
    wx.navigateTo({
      url: '/pages/list/list?city='+this.data.city,
    })
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    this.getNowWeather();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
     wx.showShareMenu({
       withShareTicket: true
     })
  }
})