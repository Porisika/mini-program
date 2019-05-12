// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nowTemp:'',
    nowWeather:'',
    nowWeatherBackground:'',
    forecast:[],
  },
  getNow(callback){
    console.log('小程序刚刚启动啦!');
    var that = this;
    wx.request({
      url: 'https://test-miniprogram.com/api/weather/now', // 仅为示例，并非真实的接口地址
      data: {
        city: '上海市'
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        const weatherMap = {
          'sunny': '晴天',
          'cloudy': '多云',
          'overcast': '阴',
          'lightrain': '小雨',
          'heavyrain': '大雨',
          'snow': '雪'
        }
        //导航栏颜色
        const weatherColorMap = {
          'sunny': '#cbeefd',
          'cloudy': '#deeef6',
          'overcast': '#c6ced2',
          'lightrain': '#bdd5e1',
          'heavyrain': '#c5ccd0',
          'snow': '#aae1fc'
        }
        let result = res.data.result;
        let temp = result.now.temp;
        let weather = result.now.weather;
        let forecastList = result.forecast;
        console.log(result);
        // 动态渲染当前天气状况(气温、天气描述、背景图片)
        that.setData({
          nowTemp: temp,
          nowWeather: weatherMap[weather],
          nowWeatherBackground: '/images/' + weather + '-bg.png'
        });
        //设置导航栏的颜色
        wx.setNavigationBarColor({
          frontColor: '#000000',
          backgroundColor: weatherColorMap[weather]
        });
        //获取天气预报
        let nowHour = new Date().getHours();
        let forecast =[];
        for (let i = 0; i < forecastList.length;i++){
          forecast.push({
            time: i===0? '现在':(i + nowHour)%24+'时',
            iconPath: '/images/' + forecastList[i].weather+'-icon.png',
            temp: forecastList[i].temp + '°'
          });
          that.setData({
            forecast:forecast
          });
        }
      },
      complete: () => {
        callback && callback()
      }
    })
  },
  /**
   * 下拉刷新重新发送请求加载数据
   * */
  onPullDownRefresh() {
    this.getNow(()=>{
    wx.stopPullDownRefresh()
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getNow();    
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

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
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
    
  }
})