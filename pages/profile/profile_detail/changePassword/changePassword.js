const app = getApp()
const md5 = require('../../../../utils/md5.js')

Page({

  /**
   * Page initial data
   */
  data: {
    originalPassword: {
      value: '',
      error: false,
      error_message: ''
    },
    password: {
      value: '',
      error: false,
      error_message: ''
    },
    password2: {
      value: '',
      error: false,
      error_message: ''
    }
  },

  onChange_originalPassword(event) {
    this.setData({ 'originalPassword.value': event.detail })
  },
  onChange_password(event) {
    this.setData({ 'password.value': event.detail })
  },
  onChange_password2(event) {
    this.setData({ 'password2.value': event.detail })
  },

  change: function () {
    // original password
    if (this.data.originalPassword.value == '') {
      this.setData({ 'originalPassword.error': true })
    }
    else {
      this.setData({ 'originalPassword.error': false })
    }
    // password
    if (this.data.password.value == '') {
      this.setData({ 'password.error': true })
    }
    else {
      this.setData({ 'password.error': false })
    }
    // password2
    if (this.data.password.value != this.data.password2.value) {
      this.setData({
        'password2.error': true,
        'password2.error_message': '两次输入密码不匹配'
      })
    }
    else {
      this.setData({
        'password2.error': false,
        'password2.error_message': ''
      })
    }

    if (!this.data.originalPassword.error && !this.data.password.error && !this.data.password2.error) {
      wx.request({
        url: app.globalData.url + '/api/changePassword',
        method: 'post',
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        data: {
          uid: app.globalData.user.uid,
          originPassword: md5.hexMD5(this.data.originalPassword.value),
          password: md5.hexMD5(this.data.password.value)
        },
        success: function (res) {
          if (res.data == 0) {
            app.globalData.Toast.success('修改成功')
            wx.navigateBack({})
          }
          else if (res.data == 1) {
            app.globalData.Toast.fail('密码错误')
          }
          else if (res.data == 2) {
            app.globalData.Toast.fail('未知错误')
          }
        }
      })
    }
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

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