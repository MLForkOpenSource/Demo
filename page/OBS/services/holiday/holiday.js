var initdata = '显示节假日信息：\n';
Page({
  data: {
    holidayStatus:'hidden',
    holidayResult:initdata,
    holidayContent:{}
  },
  formSubmit: function(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    console.log(e.detail.value.input)
    var that = this
    wx.request({
        url: 'http://apis.baidu.com/xiaogg/holiday/holiday',
        data: {
            d: e.detail.value.input
        },
        header: {
            'Content-Type': 'application/json',
            'apikey':'0379d60b4d898ec65feeb9b13f58943f'
        },
        success: function(res) {
            console.log(res.data)
            var whatdate;
            if(res.data == 0){
              whatdate = '工作日'
            }else if(res.data == 1){
              whatdate = '休息日'
            }else if(res.data == 2){
              whatdate = '节假日'
            }else{
              whatdate = 'error'
            }
            that.setData({
                holidayContent : whatdate,
                holidayStatus:'show'
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
