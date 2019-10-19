const app = getApp()

Page({

  /**
   * Page initial data
   */
  data: {
    app: app,
    filterType: 'date',
    order: 'reverse',
    index: 0,
    loseList: []
  },

  onLose: function (e) {
    wx.navigateTo({
      url: '/pages/wall/lose/lose_detail/lose_detail?id=' + e.currentTarget.dataset.id
    })
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    let _this = this
    wx.request({
      url: app.globalData.url + '/api/getLoseList',
      method: 'post',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        filterType: this.data.filterType,
        order: this.data.order,
        index: this.data.index,
      },
      success: function (res) {
        _this.setData({ loseList: res.data.info })
      }
    })
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