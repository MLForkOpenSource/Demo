var initdata = '显示股票信息：\n';
var stockType = [
  'http://apis.baidu.com/apistore/stockservice/stock',      //A股
  'http://apis.baidu.com/apistore/stockservice/hkstock',    //港股
  'http://apis.baidu.com/apistore/stockservice/usastock'    //美股
]
Page({
  data: {
    array: ['A股', '港股', '美股'],      //股票类型
    index: 0,               //股票类型索引
    stockCount:1,           //默认股票数量
    stockPicker:0,          //股票选择的项目下标
    stockResult:initdata,   //股票初始化信息
    stockContent:{}         //股票返回的内容
  },
  formSubmit: function(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    // console.log(e)
    // console.log(this.data.array[0])
    console.log(this)
    var stockIndex = this.data.index
    var stockCount = this.data.stockCount
    console.log(stockCount)
    var that = this
    wx.request({
        url: stockType[stockIndex],
        data: {
            stockid: e.detail.value.input,
            list: stockCount
        },
        header: {
            'Content-Type': 'application/json',
            'apikey':'0379d60b4d898ec65feeb9b13f58943f'
        },
        success: function(res) {
            // console.log('res---->' + res.data)
            that.setData({
                stockContent : res.data.retData
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
  slider4change:function(e){
    this.setData({
      stockCount: e.detail.value
    })
  }
})
