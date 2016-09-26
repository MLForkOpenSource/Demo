var initdata = '显示IP地址信息：\n';
var ipUrl = 'http://apis.baidu.com/apistore/iplookupservice/iplookup'
Page({
  data: {
    ipResult: initdata,
    ipContent:{}         //股票返回的内容
  },
  formSubmit: function(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    console.log(this)
    var that = this
    wx.request({
        url: ipUrl,
        data: {
            ip: e.detail.value.input,
        },
        header: {
            'Content-Type': 'application/json',
            'apikey':'0379d60b4d898ec65feeb9b13f58943f'
        },
        success: function(res) {
            // console.log('res---->' + res.data)
            that.setData({
                ipContent : res.data.retData
            })
            that.update()
        }
    })
  },
  formReset: function(e) {
    console.log('form发生了reset事件，携带数据为：', e.detail.value)
    this.setData({
      chosen: ''
    })
  },
})
