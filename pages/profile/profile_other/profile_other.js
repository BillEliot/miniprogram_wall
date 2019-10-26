const app = getApp()

Page({

  /**
   * Page initial data
   */
  data: {
    app: app,
    profile: null,
    str_loves: [],
    str_loses: [],
    str_deals: [],
    str_helps: []
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    let _this = this
    wx.request({
      url: app.globalData.url + '/api/getUserProfile',
      method: 'post',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        uid: options.uid
      },
      success: function (res) {
        if (res.data != 1) {
          _this.setData({
            profile: res.data,
            str_loves: JSON.stringify(res.data.loves),
            str_loses: JSON.stringify(res.data.loses),
            str_deals: JSON.stringify(res.data.deals),
            str_helps: JSON.stringify(res.data.helps)
          })
        }
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