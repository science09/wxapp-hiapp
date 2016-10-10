//index.js
//获取应用实例
var app = getApp()
var ajax = require('../../api/ajax.js')
var util = require('../../utils/util.js')
Page({
  data: {
    timeline: [],
    loading: false
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    this.getTimeline()
    // var that = this
    // //调用应用实例的方法获取全局数据
    // app.getUserInfo(function(userInfo){
    //   //更新数据
    //   that.setData({
    //     userInfo:userInfo
    //   })
    // })
  },
  getTimeline: function() {
    var _this = this
    _this.setData({loading: true})
    ajax({
        url: 'timeline.json',
        success: function(res) {
          var timeline = _this.formatTimeline(res.data)
          _this.setData({
            timeline: timeline
          })
        },
        complete: function() {
          _this.setData({
            loading: false
          })
        }
    })
  },
  formatTimeline: function(items) {
    items.forEach(function(item) {
      item.avatar = util.getAvatarUrl(item.avatar)
      item.time = util.timeFormat(item.created_at)
      return item
    })
    return items
  },
  previewImage: function(event) {
    wx.previewImage({
      current: '', 
      urls: [event.target.dataset.originalPic]
    })
  } 
})
