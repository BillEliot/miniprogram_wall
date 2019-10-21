const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    app: app,
    isLogin: false,
    profile: null,
    str_comments: [],
    str_loves: [],
    str_loses: [],
    str_deals: [],
    str_helps: []
  },

  register: function () {
    wx.navigateTo({
      url: '/pages/profile/register/register',
    })
  },
  login_web: function () {
    wx.navigateTo({
      url: '/pages/profile/login_web/login_web',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (app.globalData.user.openid) {
      this.setData({ isLogin: true })
      let _this = this
      wx.request({
        url: app.globalData.url + '/api/getUserProfile',
        method: 'post',
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        data: {
          uid: app.globalData.user.uid
        },
        success: function (res) {
          if (res.data != 1) {
            _this.setData({
              profile: res.data,
              str_comments: JSON.stringify(res.data.comments),
              str_loves: JSON.stringify(res.data.loves),
              str_loses: JSON.stringify(res.data.loses),
              str_deals: JSON.stringify(res.data.deals),
              str_helps: JSON.stringify(res.data.helps)
            })
          }
        }
      })
    }
    else {
      this.setData({ isLogin: false })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 3
      })
    }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})