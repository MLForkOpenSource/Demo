var initdata = '显示电话信息：\n';
Page({
  data: {
    telResult:initdata,
    telContent:{}
  },
  formSubmit: function(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    console.log(e.detail.value.input)
    var that = this
    wx.request({
        url: 'http://apis.baidu.com/apistore/mobilenumber/mobilenumber',
        data: {
            phone: e.detail.value.input
        },
        header: {
            'Content-Type': 'application/json',
            'apikey':'0379d60b4d898ec65feeb9b13f58943f'
        },
        success: function(res) {
            console.log(res.data)
            that.setData({
                telContent : res.data.retData
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
  }
})
