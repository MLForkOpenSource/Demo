var initdata = '显示解密MD5的信息：\n';
Page({
  data: {
    md5Status:'hidden',
    md5Result:initdata,
    md5Content:{}
  },
  formSubmit: function(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    console.log(e.detail.value.input)
    var that = this
    wx.request({
        url: 'http://apis.baidu.com/chazhao/md5decod/md5decod',
        data: {
            md5: e.detail.value.input
        },
        header: {
            'Content-Type': 'application/json',
            'apikey':'0379d60b4d898ec65feeb9b13f58943f'
        },
        success: function(res) {
            console.log(res)
            that.setData({
                md5Content : res.data.data,
                md5Status:'show'
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
