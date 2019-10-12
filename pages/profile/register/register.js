const app = getApp()
const classes = {
  '浙江': ['杭州', '宁波', '温州', '嘉兴', '湖州'],
  '福建': ['福州', '厦门', '莆田', '三明', '泉州']
}

Page({
  /**
   * Page initial data
   */
  data: {
    show_classes: false,
    show_gender: false,
    columns_classes: [{
      values: Object.keys(classes),
      className: 'column1'
    },
    {
      values: classes['浙江'],
      className: 'column2',
      defaultIndex: 2
    }],
    columns_gender: ['男', '女'],
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
    nickname: {
      value: '',
      error: false,
      error_message: ''
    },
    bio: {
      value: '',
      error: false,
      error_message: ''
    },
    gender: {
      value: '男',
      error: false,
      error_message: ''
    },
    class: {
      value: '',
      error: false,
      error_message: ''
    },
    phone: {
      value: '',
      error: false,
      error_message: ''
    },
    qq: {
      value: '',
      error: false,
      error_message: ''
    },
    wechat: ''
  },

  // Picker
  OnFocus_Classes(event) {
    this.setData({ show_classes: true })
  },
  onClose_Classes() {
    this.setData({ show_classes: false })
  },
  onChange_Classes(event) {
    const { picker, value, index } = event.detail
    picker.setColumnValues(1, classes[value[0]])
    this.setData({ 'class.value': event.detail.value[0] + '/' + event.detail.value[1] })
  },
  OnFocus_Gender(event) {
    this.setData({ show_gender: true })
  },
  onClose_Gender() {
    this.setData({ show_gender: false })
  },
  onChange_Gender(event) {
    this.setData({ 'gender.value': event.detail.value })
  },
  // Field
  onChange_email(event) {
    this.setData({ 'email.value': event.detail })
  },
  onChange_password(event) {
    this.setData({ 'password.value': event.detail })
  },
  onChange_password2(event) {
    this.setData({ 'password2.value': event.detail })
  },
  onChange_nickname(event) {
    this.setData({ 'nickname.value': event.detail })
  },
  onChange_bio(event) {
    this.setData({ 'bio.value': event.detail })
  },
  onChange_gender(event) {
    this.setData({ 'gender.value': event.detail })
  },
  onChange_class(event) {
    this.setData({ 'class.value': event.detail })
  },
  onChange_phone(event) {
    this.setData({ 'phone.value': event.detail })
  },
  onChange_qq(event) {
    this.setData({ 'qq.value': event.detail })
  },
  onChange_wechat(event) {
    this.setData({ 'wechat': event.detail })
  },

  register: function() {
    const reg_email = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/
    const reg_phone = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/
    const reg_qq = /^[1-9][0-9]{4,}$/

    // E-mail
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
    // nickname
    if (this.data.nickname.value == '') {
      this.setData({ 'nickname.error': true })
    }
    else  {
      this.setData({ 'nickname.error': false })
    }
    // bio
    if (this.data.bio.value == '') {
      this.setData({ 'bio.error': true })
    }
    else {
      this.setData({ 'bio.error': false })
    }
    // class
    if (this.data.class.value == '') {
      this.setData({ 'class.error': true })
    }
    else {
      this.setData({ 'class.error': false })
    }
    // phone
    if (this.data.phone.value != '') {
      if (!reg_phone.test(this.data.phone.value)) {
        this.setData({
          'phone.error': true,
          'phone.error_message': '手机号不合法'
        })
      }
      else {
        this.setData({
          'phone.error': false,
          'phone.error_message': ''
        })
      }
    }
    // qq
    if (this.data.qq.value != '') {
      if (!reg_qq.test(this.data.qq.value)) {
        this.setData({
          'qq.error': true,
          'qq.error_message': 'qq号不合法'
        })
      }
      else {
        this.setData({
          'qq.error': false,
          'qq.error_message': ''
        })
      }
    }

    if (!this.data.email.error && !this.data.password.error && !this.data.password2.error && !this.data.nickname.error && !this.data.bio.error && !this.data.class.error && !this.data.gender.error && !this.data.phone.error && !this.data.qq.error) {
      // check unique email
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
            // register

          }
          else {
            app.globalData.Dialog.confirm({
              message: '该邮箱已被注册，请使用官网账号直接登录'
            })
            .then(() => {
              wx.navigateTo({
                url: '/pages/profile/login_web/login_web',
              })
            })
            .catch(() => {})
          }
        }
      })
    }
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    wx.getStorage({
      key: 'openid',
      success: function (res) {
        if (res.data) {
          Toast.fail('该账号已注册，请登录');
          wx.navigateTo({
            url: '/pages/profile/login/login',
          })
        }
        else {
          // Get user wechat info(nickname, gender)
          var _this = this
          wx.getSetting({
            success(res) {
              if (res.authSetting["scope.userInfo"]) {
                wx.getUserInfo({
                  success(res) {
                    var gender = '男'
                    if (res.userInfo.gender == 2) {
                      gender = '女'
                    }
                    _this.setData({
                      'nickname.value': res.userInfo.nickName,
                      'gender.value': gender
                    })
                  }
                })
              }
              else {
                // authorize
                wx.authorize({
                  scope: 'scope.userInfo',
                  // user agreed
                  success(res) {
                    wx.getUserInfo({
                      success(res) {
                        var gender = '男'
                        if (res.userInfo.gender == 2) {
                          gender = '女'
                        }
                        _this.setData({
                          'nickname.value': res.userInfo.nickName,
                          'gender.value': gender
                        })
                      }
                    })
                  },
                  // user declined
                  fail(res) {
                    Toast.fail('同意授权，以便获取您的昵称等信息');
                  }
                })
              }
            }
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