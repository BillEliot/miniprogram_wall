const app = getApp()

Page({

  /**
   * Page initial data
   */
  data: {
    app: app,
    user: null,
    article: null,
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
        url: app.globalData.url + '/api/submitArticleComment',
        method: 'post',
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        data: {
          id: this.data.article.id,
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
            _this.data.article.comments = newComment.concat(_this.data.article.comments);
            _this.setData({
              comment: '',
              'article.comments': _this.data.article.comments
            })
            app.globalData.Toast.success('评论成功')
          }
        }
      })
    }
  },

  onUser: function (e) {
    wx.navigateTo({
      url: '/pages/profile/profile_other/profile_other?uid=' + e.target.dataset.uid,
    })
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    this.setData({ user: app.globalData.user })

    let _this = this
    wx.request({
      url: app.globalData.url + '/api/getArticleDetail',
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
          _this.setData({ article: res.data })
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