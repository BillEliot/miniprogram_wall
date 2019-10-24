const app = getApp()

Page({

  /**
   * Page initial data
   */
  data: {
    show_classes: false,
    show_gender: false,
    columns_gender: ['男', '女'],
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
  onConfirm_Classes(event) {
    const { picker, value, index } = event.detail
    picker.setColumnValues(1, classes[value[0]])
    this.setData({ 
      'class.value': event.detail.value[0] + '/' + event.detail.value[1],
      show_classes: false
    })
  },
  OnFocus_Gender(event) {
    this.setData({ show_gender: true })
  },
  onClose_Gender() {
    this.setData({ show_gender: false })
  },
  onConfirm_Gender(event) {
    this.setData({ 
      'gender.value': event.detail.value,
      show_gender: false
    })
  },

  // Field
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

  change: function () {
    const reg_phone = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/
    const reg_qq = /^[1-9][0-9]{4,}$/

    // nickname
    if (this.data.nickname.value == '') {
      this.setData({ 'nickname.error': true })
    }
    else {
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

    if (!this.data.nickname.error && !this.data.bio.error && !this.data.class.error && !this.data.gender.error && !this.data.phone.error && !this.data.qq.error) {
      wx.request({
        url: app.globalData.url + '/api/updateUser',
        method: 'post',
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        data: {
          uid: app.globalData.user.uid,
          nickname: this.data.nickname.value,
          bio: this.data.bio.value,
          class: this.data.class.value,
          phone: this.data.phone.value,
          qq: this.data.qq.value,
          wechat: this.data.wechat
        },
        success: function (res) {
          if (res.data == 0) {
            app.globalData.Toast.success('修改成功')
            wx.navigateBack({})
          }
          else {
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
    this.setData({
      'nickname.value': options.nickname,
      'bio.value': options.bio,
      'phone.value': options.phone,
      'qq.value': options.qq,
      'wechat': options.wechat,
      'class.value': options.class,
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