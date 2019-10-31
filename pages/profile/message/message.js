const app = getApp()

Page({

  /**
   * Page initial data
   */
  data: {
    app: app,
    messageList: []
  },

  onLove: function(e) {
    wx.navigateTo({
      url: '/pages/wall/love/love_detail/love_detail?id=' + e.target.dataset.id
    })
  },
  onLose: function (e) {
    wx.navigateTo({
      url: '/pages/wall/lose/lose_detail/lose_detail?id=' + e.target.dataset.id
    })
  },
  onDeal: function (e) {
    wx.navigateTo({
      url: '/pages/wall/deal/deal_detail/deal_detail?id=' + e.target.dataset.id
    })
  },
  onHelp: function (e) {
    wx.navigateTo({
      url: '/pages/wall/help/help_detail/help_detail?id=' + e.target.dataset.id
    })
  },
  onArticle: function (e) {
    wx.navigateTo({
      url: '/pages/article/article_detail/article_detail?id=' + e.target.dataset.id
    })
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    let _this = this
    wx.request({
      url: app.globalData.url + '/api/getMessage',
      method: 'post',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        uid: app.globalData.user.uid
      },
      success: function (res) {
        _this.setData({ messageList: res.data.info })
      }
    })
    app.globalData.user.unreadcount = 0
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})