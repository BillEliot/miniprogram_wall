const app = getApp()

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
    class: '',
    coin: '',
  },

  apply: function () {
    app.globalData.Dialog.alert({
      message: '请联系 qq1161142536 / eliotwjz@gmail.com 申请身份认证！'
    })
  },
  editProfile: function () {
    wx.navigateTo({
      url: '/pages/profile/profile_detail/editProfile/editProfile?nickname=' + this.data.nickname + '&bio=' + this.data.bio + '&phone=' + this.data.phone + '&qq=' + this.data.qq + '&wechat=' + this.data.wechat + '&class=' + this.data.class
    })
  },
  changePassword: function () {
    wx.navigateTo({
      url: '/pages/profile/profile_detail/changePassword/changePassword'
    })
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
