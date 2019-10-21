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
    columns_thumbsUp: ['最多', '最少'],
    columns_coin: ['最多', '最少'],
    show_date: false,
    show_thumbsUp: false,
    show_coin: false,
    searchValue_article: '',
    searchValue_user: ''
  },

  onArticle: function (e) {
    wx.navigateTo({
      url: '/pages/article/article_detail/article_detail?id=' + e.currentTarget.dataset.id
    })
  },

  flipPicker_date: function () {
    this.setData({ show_date: !this.data.show_date })
  },
  flipPicker_thumbsUp: function () {
    this.setData({ show_thumbsUp: !this.data.show_thumbsUp })
  },
  flipPicker_coin: function () {
    this.setData({ show_coin: !this.data.show_coin })
  },

  onConfirm_date: function (e) {
    const { picker, value, index } = e.detail
    if (value == '最新') {
      this.setData({
        filterType: 'date',
        order: 'reverse',
        index: 0
      })
    }
    else if (value == '最旧') {
      this.setData({
        filterType: 'date',
        order: 'positive',
        index: 0
      })
    }
    this.onLoad()
    this.setData({ show_date: false })
  },
  onConfirm_thumbsUp: function (e) {
    const { picker, value, index } = e.detail
    if (value == '最多') {
      this.setData({
        filterType: 'thumbsUp',
        order: 'reverse',
        index: 0
      })
    }
    else if (value == '最少') {
      this.setData({
        filterType: 'thumbsUp',
        order: 'positive',
        index: 0
      })
    }
    this.onLoad()
    this.setData({ show_thumbsUp: false })
  },
  onConfirm_coin: function (e) {
    const { picker, value, index } = e.detail
    if (value == '最多') {
      this.setData({
        filterType: 'coin',
        order: 'reverse',
        index: 0
      })
    }
    else if (value == '最少') {
      this.setData({
        filterType: 'coin',
        order: 'positive',
        index: 0
      })
    }
    this.onLoad()
    this.setData({ show_coin: false })
  },

  onSearchChange_article: function (e) {
    this.setData({ searchValue_article: e.detail })
  },
  onSearchChange_user: function (e) {
    this.setData({ searchValue_user: e.detail })
  },
  onSearch_article: function () {
    let _this = this
    wx.request({
      url: app.globalData.url + '/api/searchArticle',
      method: 'post',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        name: this.data.searchValue_article
      },
      success: function (res) {
        _this.setData({
          articles: res.data.list,
          numArticle: res.data.total
        })
      }
    })
  },
  onSearch_user: function () {
    let _this = this
    wx.request({
      url: app.globalData.url + '/api/searchArticleByUser',
      method: 'post',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        name: this.data.searchValue_user
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
})
