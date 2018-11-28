// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    forecastList:[],
    date: new Date().getDay(),
    dateList: ['日', '一', '二', '三', '四', '五', '六'],
    weatherObj: {
      'sunny': '☀️',
      'cloudy': '☁️',
      'heavyrain': '⛈️',
      'snow': '❄️',
      'overcast': '☁️',
      'lightrain': '🌧️',
    },
    weatherTexObj: {
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
    const that = this;
    wx.request({
      url: 'https://test-miniprogram.com/api/weather/now?',
      data: {
        city: options.city
      },
      success(res) {
        const forecast = res.data.result.forecast;
        console.log(forecast);
        that.setData({
          forecastList:forecast
        });
      },
    })
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