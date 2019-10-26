const app = getApp()

Page({
  /**
   * Page initial data
   */
  data: {
    avatar: '',
    nickname: '',
    bio: '',
    auth: '',
    email: '',
    phone: '',
    qq: '',
    wechat: '',
    gender: '',
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

  previewAvatar: function () {
    wx.previewImage({
      urls: [this.data.avatar],
    })
  },
  changeAvatar: function () {
    let _this = this
    wx.chooseImage({
      count: 1,
      sourceType: ['album'],
      success: function(res) {
        let avatarPath = res.tempFilePaths[0]
        wx.uploadFile({
          url: app.globalData.url + '/api/uploadAvatar',
          header: {
            'content-type': 'multipart/form-data'
          },
          filePath: res.tempFilePaths[0],
          name: 'avatar',
          formData: {
            'uid': app.globalData.user.uid
          },
          success(res) {
            if (res.data == 0) {
              app.globalData.Toast.success('修改头像成功')
              _this.setData({ avatar: avatarPath })
            }
            else {
              app.globalData.Toast.fail('修改头像失败')
            }
          }
        })
      },
    })
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    this.setData({
      avatar: app.globalData.url + options.avatar,
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
