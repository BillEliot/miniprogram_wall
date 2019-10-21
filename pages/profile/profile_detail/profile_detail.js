// pages/profile/profile_detail/profile_detail.js
Page({

  /**
   * Page initial data
   */
  data: {
    email: '',
    phone: '',
    qq: '',
    wechat: '',
    class: '',
    coin: '',
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    this.setData({
      email: options.email,
      phone: options.phone,
      qq: options.qq,
      wechat: options.wechat,
      class: options.class,
      coin: options.coin
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