const app = getApp()

Page({

  /**
   * Page initial data
   */
  data: {
    app: app,
    user: null,
    lose: null,
    comment: ''
  },

  onInput_comment: function (e) {
    this.setData({ comment: e.detail.value })
  },
  onComment: function () {
    if (app.globalData.user.uid == -1) {
      Toast.fail('先登录再评论吧～')
    }
    else if (this.data.comment == '') {
      Toast.fail('说点什么吧～')
    }
    else {
      let _this = this
      wx.request({
        url: app.globalData.url + '/api/submitLoseComment',
        method: 'post',
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        data: {
          id: this.data.lose.id,
          uid: app.globalData.user.uid,
          content: this.data.comment
        },
        success: function (res) {
          if (res.data == 1) {
            app.globalData.Toast.fail('未知错误')
          }
          else {
            let newComment = [{
              uid: app.globalData.user.uid,
              avatar: app.globalData.user.avatar,
              nickname: app.globalData.user.nickname,
              content: _this.data.comment,
              date: '刚刚'
            }]
            _this.data.lose.comments = newComment.concat(_this.data.lose.comments);
            _this.setData({
              comment: '',
              'lose.comments': _this.data.lose.comments
            })
            app.globalData.Toast.success('评论成功')
          }
        }
      })
    }
  },

  onUser: function (e) {
    if (e.target.dataset.uid != -1) {
      wx.navigateTo({
        url: '/pages/profile/profile_other/profile_other?uid=' + e.target.dataset.uid,
      })
    }
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    this.setData({ user: app.globalData.user })

    let _this = this
    wx.request({
      url: app.globalData.url + '/api/getLoseDetail',
      method: 'post',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        id: options.id
      },
      success(res) {
        if (res.data == 1) {
          Toast.fail('未知错误')
        }
        else {
          _this.setData({ lose: res.data })
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