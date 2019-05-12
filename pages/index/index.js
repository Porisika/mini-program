// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nowTemp:'',
    nowWeather:'',
    nowWeatherBackground:'',
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
        var result = res.data.result;
        var temp = result.now.temp;
        var weather = result.now.weather;
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