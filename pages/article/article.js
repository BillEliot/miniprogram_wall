const app = getApp()

Page({
  /**
   * 页面的初始数据
   */
  data: {
    app: app,
    articles: [],
    numArticle: 0,
    filterType: 'date',
    order: 'reverse',
    index: 0,
    columns_date: ['最新', '最旧'],
    show_date: false
  },

  onArticle: function (e) {
    wx.navigateTo({
      url: '/pages/article/article_detail/article_detail?id=' + e.currentTarget.dataset.id
    })
  },
  onUser: function (e) {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let _this = this
    wx.request({
      url: app.globalData.url + '/api/getArticleList',
      method: 'post',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        filterType: this.data.filterType,
        order: this.data.order,
        index: this.data.index
      },
      success: function (res) {
        _this.setData({
          articles: res.data.list,
          numArticle: res.data.total
        })
      }
    })
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
        selected: 0
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

  },

  FlipPickerDate: function () {
    this.setData({
      show_date: !this.data.show_date
    })
  },
  onClosePicker_date: function() {
    this.setData({
      show_date: false
    })
  }
})
