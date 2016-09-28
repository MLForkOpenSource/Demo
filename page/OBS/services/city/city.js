var initdata = '显示城市信息：\n';
var cityUrl = [
    'http://apis.baidu.com/apistore/weatherservice/cityinfo',       //精确查找城市
    'http://apis.baidu.com/apistore/weatherservice/citylist'        //模糊查找城市
]
Page({
  data: {
    array:["精确","模糊"],
    index:0,
    cityAccurate: 'show',   //精确
    cityVague: 'hidden',    //模糊
    cityResult: initdata,
    cityContent:{}          //城市返回的内容
  },
  formSubmit: function(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    console.log(this)
    var that = this
    var cityIndex = this.data.index

    if(cityIndex == 0){
      wx.request({
          url: cityUrl[cityIndex],
          data: {
              cityname: e.detail.value.input,
          },
          header: {
              'Content-Type': 'application/json',
              'apikey':'0379d60b4d898ec65feeb9b13f58943f'
          },
          success: function(res) {
              console.log('res---->')
              console.log(res.data)
              that.setData({
                  cityContent : res.data.retData,
                  cityAccurate: 'show',
                  cityVague: 'hidden'
              })
              that.update()
          }
      })
    }else if(cityIndex == 1){
      wx.request({
          url: cityUrl[cityIndex],
          data: {
              cityname: e.detail.value.input,
          },
          header: {
              'Content-Type': 'application/json',
              'apikey':'0379d60b4d898ec65feeb9b13f58943f'
          },
          success: function(res) {
              console.log('res2---->')
              console.log(res.data)
              that.setData({
                  cityContent : res.data.retData,
                  cityAccurate: 'hidden',
                  cityVague: 'show'
              })
              that.update()
          }
      })
    }

  },
  formReset: function(e) {
    console.log('form发生了reset事件，携带数据为：', e.detail.value)
    this.setData({
      chosen: ''
    })
  },
  bindPickerChange:function(e){
    this.setData({
      index: e.detail.value
    })
  },
})
