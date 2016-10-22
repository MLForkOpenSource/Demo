var initdata = '显示新闻频道信息：\n';
Page({
    data: {
        channel_newsStatus: 'hidden',
        channel_newsResult: initdata,
        channel_newsContent: {}
    },
    formSubmit: function(e) {
        console.log('form发生了submit事件，携带数据为：', e.detail.value)
        console.log(e.detail.value.input)
        var that = this
        wx.request({
            url: 'http://apis.baidu.com/showapi_open_bus/channel_news/channel_news',
            data: {
                //cardnum: e.detail.value.input
            },
            header: {
                'Content-Type': 'application/json',
                'apikey': '0379d60b4d898ec65feeb9b13f58943f'
            },
            success: function(res) {
                console.log(res)
                that.setData({
                    channel_newsContent: res.data.showapi_res_body,
                    channel_newsStatus: 'show'
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