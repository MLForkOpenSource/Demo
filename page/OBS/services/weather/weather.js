var initdata = '显示天气信息：\n';
var weatherUrl = [
    'http://apis.baidu.com/apistore/weatherservice/cityid',         //根据城市ID获取天气信息
    'http://apis.baidu.com/apistore/weatherservice/weather',        //根据城市拼音获取天气信息
    'http://apis.baidu.com/apistore/weatherservice/cityname'        //根据城市名称获取天气信息
]

Page({
  data: {
    array: ['代码', '拼音', '名称'],      //股票类型
    index: 0,               //股票类型索引
    weatherResult: initdata,
    weatherContent:{}         //天气信息返回的内容
  },
  formSubmit: function(e) {
    // console.log('form发生了submit事件，携带数据为：', e.detail.value)
    var that = this
    var weatherIndex = this.data.index

    if(weatherIndex == 0){
        //根据城市代码来查询天气信息
        wx.request({
            url: weatherUrl[weatherIndex],
            data: {
                cityid: e.detail.value.input
            },
            header: {
                'Content-Type': 'application/json',
                'apikey':'0379d60b4d898ec65feeb9b13f58943f'
            },
            success: function(res) {
                console.log(res.data)
                that.setData({
                    weatherContent : res.data.retData
                })
                that.update()
            }
        })
    }else if(weatherIndex == 1){
        //根据拼音来查询天气信息
        wx.request({
            url: weatherUrl[weatherIndex],
            data: {
                citypinyin: e.detail.value.input
            },
            header: {
                'Content-Type': 'application/json',
                'apikey':'0379d60b4d898ec65feeb9b13f58943f'
            },
            success: function(res) {
                console.log(res.data)
                that.setData({
                    weatherContent : res.data.retData
                })
                that.update()
            }
        })
    }else if(weatherIndex == 2){
        //根据名称来查询天气信息
        wx.request({
            url: weatherUrl[weatherIndex],
            data: {
                cityname: e.detail.value.input
            },
            header: {
                'Content-Type': 'application/json',
                'apikey':'0379d60b4d898ec65feeb9b13f58943f'
            },
            success: function(res) {
                console.log(res.data)
                that.setData({
                    weatherContent : res.data.retData
                })
                that.update()
            }
        })
    }
    
  },
  formReset: function(e) {
    // console.log('form发生了reset事件，携带数据为：', e.detail.value)
    this.setData({
      chosen: ''
    })
  },
  bindPickerChange:function(e){
    // console.log(e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
})
