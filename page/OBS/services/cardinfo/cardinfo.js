var initdata = '显示银行卡信息：\n';
Page({
  data: {
    cardinfoStatus:'hidden',
    cardinfoResult:initdata,
    cardinfoContent:{}
  },
  formSubmit: function(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    console.log(e.detail.value.input)
    var that = this
    wx.request({
        url: 'http://apis.baidu.com/datatiny/cardinfo/cardinfo',
        data: {
            cardnum: e.detail.value.input
        },
        header: {
            'Content-Type': 'application/json',
            'apikey':'0379d60b4d898ec65feeb9b13f58943f'
        },
        success: function(res) {
            console.log(res)
            that.setData({
                cardinfoContent : res.data.data,
                cardinfoStatus:'show'
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
