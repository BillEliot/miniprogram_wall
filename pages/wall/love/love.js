const app = getApp()

Page({

  /**
   * Page initial data
   */
  data: {
    app: app,
    show_more: false,
    filterType: 'date',
    order: 'reverse',
    index: 0,
    loveList: [],
    moreList: []
  },

  more: function (e) {
    this.setData({ 
      moreList: e.currentTarget.dataset.userto,
      show_more: true
    })
  },
  onClose_more: function () {
    this.setData({ show_more: false })
  },
  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    let _this = this
    wx.request({
      url: app.globalData.url + '/api/getLoveList',
      method: 'post',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        filterType: this.data.filterType,
        order: this.data.order,
        index: this.data.index
      },
      success: function (res) {
        _this.setData({
          loveList: res.data.info
        })
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