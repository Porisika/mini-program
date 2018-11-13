//index.js
//获取应用实例
const weatherMap={
  'sunny':'晴天',
  'cloudy': '多云',
  'overcast': '阴天',
  'lightrain': '小雨',
  'heavyrain': '大雨',
  'snow': '雪',
};
const weatherColorMap = {
  'sunny': '#cbeefd',
  'cloudy': '#deeef6',
  'overcast': '#c6ced2',
  'lightrain': '#bdd5e1',
  'heavyrain': '#c5ccd0',
  'snow': '雪',
};

Page({
  data:{
    weather:'阴天',
    temp:'20"'
  },
  getNow(){
    wx.request({
      url: 'https://test-miniprogram.com/api/weather/now',
      data: {
        city: '厦门市'
      },
      success: res => {
        let result = res.data.result;
        let temp = result.now.temp;
        let weather = result.now.weather;
        console.log(result);
        console.log(temp);
        console.log(weather);
      }
    })
  },
  onPullDownRefresh(){
   this.getNow();
  },
  onLoad(){
   this.getNow();
  },
})
