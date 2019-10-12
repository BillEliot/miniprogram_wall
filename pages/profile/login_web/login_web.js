const app = getApp();

Page({
  /**
   * Page initial data
   */
  data: {
    email: {
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
    },
  },

  onChange_email(event) {
    this.setData({ 'email.value': event.detail })
  },
  onChange_password(event) {
    this.setData({ 'password.value': event.detail })
  },
  onChange_password2(event) {
    this.setData({ 'password2.value': event.detail })
  },

  login_web: function() {
    const reg_email = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/

    // email
    if (this.data.email.value == '') {
      this.setData({ 'email.error': true })
    }
    else {
      this.setData({ 'email.error': false })
    }
    if (!reg_email.test(this.data.email.value)) {
      this.setData({
        'email.error': true,
        'email.error_message': '邮箱格式不正确'
      })
    }
    else {
      this.setData({
        'email.error': false,
        'email.error_message': ''
      })
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
    if (this.data.password2.value == '') {
      this.setData({ 'password2.error': true })
    }
    else {
      this.setData({ 'password2.error': false })
    }

    if (!this.data.email.error && !this.data.password.error && !this.data.password2.error) {
      wx.request({
        url: app.globalData.url + '/api/checkUniqueEmail',
        method: 'post',
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        data: {
          email: this.data.email.value
        },
        success: function (res) {
          if (res.data == 'True') {
            app.globalData.Dialog.confirm({
              message: '未注册的邮箱，点击确定注册'
            })
              .then(() => {
                wx.navigateTo({
                  url: '/pages/profile/register/register',
                })
              })
              .catch(() => { })
          }
          else {
            // bind
            
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