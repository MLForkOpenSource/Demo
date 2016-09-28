var initdata = '显示油价信息：\n';
var oilUrl = 'http://apis.baidu.com/showapi_open_bus/oil_price/find'
Page({
  data: {
    oilStatus: 'hidden',   
    oilResult: initdata,
    oilContent:{}          //城市返回的内容
  },
  formSubmit: function(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    console.log(this)
    var that = this
    var oilIndex = this.data.index
    wx.request({
        url: oilUrl,
        data: {
            prov: e.detail.value.input,
        },
        header: {
            'Content-Type': 'application/json',
            'apikey':'0379d60b4d898ec65feeb9b13f58943f'
        },
        success: function(res) {
            console.log('res---->')
            console.log(res.data)
            that.setData({
                oilContent : res.data.showapi_res_body.list[0],
                oilStatus: 'show'
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
  bindPickerChange:function(e){
    this.setData({
      index: e.detail.value
    })
  },
})
