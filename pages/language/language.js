//language.js
Page({
  data:{
    // text:"这是一个页面"
    title: '',
    items: [
      {name: 'CHN', value: '简体中文'},
      {name: 'ENG', value: 'English', checked: 'true'},
      {name: 'BRA', value: 'Brazia'},
      {name: 'JPN', value: 'Japanese'},
      {name: 'FRA', value: 'France'},
    ]
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
    for (var i = 0; i < this.data.items.length; i++) {
      var item = this.data.items[i];
      if(item.checked) {
        this.setData({title: item.value})
      }
    }

    wx.setNavigationBarTitle({ title: this.data.title })
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  radioChange: function(e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
    for (var i = 0; i < this.data.items.length; i++) {
      var item = this.data.items[i];
      if(item.name == e.detail.value) {
        this.setData({title: item.value})
      }
    }
    wx.setNavigationBarTitle({ title: this.data.title })
  },
})