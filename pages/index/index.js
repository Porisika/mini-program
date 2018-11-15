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
    city:'香港市',
  },
  getNow(){
    wx.request({
      url: 'https://test-miniprogram.com/api/weather/now',
      data: {
        city: '北京市',
      },
      success: res => {
        let result = res.data.result;
        let forecast = result.forecast;
        let nowTemp = result.now.temp;
        let nowWeather = result.now.weather;
        console.log(result);

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
  shareMessage(){
    wx.showShareMenu({
      withShareTicket: false,
      title: '蠡湖',
      imageUrl: 'https://images.unsplash.com/photo-1498335746477-0c73d7353a07?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1e8d56c5d16f5f0e6198f9920b9052dc&auto=format&fit=crop&w=700&q=60',
    });
  },
  onLoad(){
   this.getNow();
    this.shareMessage();
  },
  scrollX(){
    this.setData({
      city:'厦门市'
    });
    this.getNow();
  },
  changeNavigationBarColor(){
    wx.setNavigationBarTitle({
      title: '蠡湖',
    });
    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#ffffff',
    })
  },
  onPageScroll(){
    console.log('滚动中');
  },
})
