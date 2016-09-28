var initdata = '显示图灵智能机器人应答信息：\n';
var weatherUrl = 'http://apis.baidu.com/turing/turing/turing'       //每天调用5000次

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
                key: '7cd209cfd11d493f90a282b38ac2d063',
                userid: 'zhao365845726',
                info: e.detail.value.input
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
