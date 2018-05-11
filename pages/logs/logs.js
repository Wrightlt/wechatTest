//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
    console.log("logs page excute: onLoad ~~")
  },
  onReady() {
    console.log("logs page excute: onReady")
  },
  onShow() {
    console.log("logs page excute: onShow")
  },
  onHide() {
    console.log("logs page excute: onHide")
  },
  onUnload() {
    console.log("logs page excute: onUnload")
  },
  onPullDownRefresh() {
    console.log("logs page execute: onPullDowmRefresh")
  },
  onReachBottom() {
    console.log("logs page execute: onReachBottom")
  },
  onShareAppMessage() {
    return {
      title: '测试转发的标题1',
      path: 'pages/logs/logs'
    }
  }
})
