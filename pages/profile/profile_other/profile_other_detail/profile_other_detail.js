// pages/profile/profile_other/profile_other_detail/profile_other_detail.js
Page({

  /**
   * Page initial data
   */
  data: {
    nickname: '',
    bio: '',
    auth: '',
    email: '',
    phone: '',
    qq: '',
    wechat: '',
    gender: '',
    class: '',
    coin: ''
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    this.setData({
      nickname: options.nickname,
      bio: options.bio,
      auth: options.auth,
      email: options.email,
      phone: options.phone,
      qq: options.qq,
      wechat: options.wechat,
      gender: options.gender,
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