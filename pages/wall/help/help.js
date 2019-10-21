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
    helpList: [],
    numHelp: 0,
    columns_date: ['最新', '最旧'],
    show_date: false
  },

  onHelp: function (e) {
    wx.navigateTo({
      url: '/pages/wall/help/help_detail/help_detail?id=' + e.currentTarget.dataset.id
    })
  },

  flipPicker_date: function () {
    this.setData({ show_date: !this.data.show_date })
  },

  onConfirm_date: function (e) {
    const { picker, value, index } = e.detail
    if (value == '最新') {
      this.setData({
        filterType: 'date',
        order: 'reverse',
        index: 0
      })
    }
    else if (value == '最旧') {
      this.setData({
        filterType: 'date',
        order: 'positive',
        index: 0
      })
    }
    this.onLoad()
    this.setData({ show_date: false })
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    let _this = this
    wx.request({
      url: app.globalData.url + '/api/getHelpList',
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
        _this.setData({
          helpList: res.data.list,
          numHelp: res.data.total
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