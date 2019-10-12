import Dialog from 'miniprogram_npm/vant-weapp/dialog/dialog'
import Toast from 'miniprogram_npm/vant-weapp/toast/toast'

App({
  onLaunch: function () {

  },
  globalData: {
    url: 'http://localhost:8000',
    Dialog: Dialog,
    Toast: Toast
  }
})
