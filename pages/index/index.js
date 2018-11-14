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
};

Page({
  data:{
    temp: '',
    weather:'',
    forecastArr:[],
    weatherIocn:{
      'sunny': '☀️',
      'cloudy': '☁️',
      'overcast': '☁️',
      'lightrain': '☔️',
      'heavyrain': '⛈️',
      'snow': '❄️',
    },
    weatherMap:{
      'sunny': '晴天',
      'cloudy': '多云',
      'overcast': '阴天',
      'lightrain': '小雨',
      'heavyrain': '大雨',
      'snow': '雪',
    },
    citys:['北京市','香港市','厦门市'],
    // index:0,
    // city:citys[index],
  },
  // scrollX:()=>{
    // this.city = citys[index++],
  // },
  getNow(){
    wx.request({
      url: 'https://test-miniprogram.com/api/weather/now',
      data: {
        city: '厦门市'
      },
      success: res => {
        let result = res.data.result;
        let forecast = result.forecast;
        let nowTemp = result.now.temp;
        let nowWeather = result.now.weather;

        this.setData({
          temp: nowTemp,
          weather: weatherMap[nowWeather],
          forecastArr:forecast,
        });
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
