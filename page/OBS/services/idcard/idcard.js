var initdata = '显示身份证信息：\n';
Page({
  data: {
    idcardInfo:initdata,
    idcardContent:{}
  },
  formSubmit: function(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    console.log(e.detail.value.input)
    var that = this
    wx.request({
        url: 'http://apis.baidu.com/apistore/idservice/id',
        data: {
            id: e.detail.value.input
        },
        header: {
            'Content-Type': 'application/json',
            'apikey':'0379d60b4d898ec65feeb9b13f58943f'
        },
        success: function(res) {
            that.setData({
                idcardContent:res.data.retData
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
