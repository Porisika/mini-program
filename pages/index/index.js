//index.js
//获取应用实例
const app = getApp()

Page({
  data:{
    weather:'阴天',
    temp:'20"'
  },
  onLoad(){
    wx.request({
      url: 'https://test-miniprogram.com/api/weather/now',
      data: {
        city: '厦门市'
      },
      success: res => {
        let xiamenList = res.data.result;
        xiamenList.forecast.forEach(function(v){
          console.log(v.weather);
          console.log(v.temp);
        });
      }
    })
  },
})
