import Dialog from 'miniprogram_npm/vant-weapp/dialog/dialog'
import Toast from 'miniprogram_npm/vant-weapp/toast/toast'

App({
  onLaunch: function () {
    // login and get user info
    let _this = this
    wx.login({
      success(res) {
        wx.request({
          url: _this.globalData.url + '/api/loginWX',
          method: 'post',
          header: {
            'content-type': 'application/x-www-form-urlencoded'
          },
          data: {
            code: res.code
          },
          success (res) {
            _this.globalData.user = res.data
          }
        })
      }
    })
  },
  globalData: {
    url: 'http://localhost:8000',
    user: null,
    Dialog: Dialog,
    Toast: Toast
  },
})
