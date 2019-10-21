const app = getApp()

Page({

  /**
   * Page initial data
   */
  data: {
    app: app,
    filterType: 'date',
    order: 'reverse',
    index: 0,
    deals: [],
    columns_date: ['最新', '最旧'],
    columns_new: ['最新', '最旧'],
    columns_price: ['最高', '最低'],
    columns_isSold: ['已售出', '未售出'],
    show_date: false,
    show_new: false,
    show_price: false,
    show_isSold: false,
    searchValue_item: '',
  },

  onDeal: function (e) {
    wx.navigateTo({
      url: '/pages/wall/deal/deal_detail/deal_detail?id=' + e.currentTarget.dataset.id
    })
  },

  flipPicker_date: function () {
    this.setData({ show_date: !this.data.show_date })
  },
  flipPicker_new: function () {
    this.setData({ show_date: !this.data.show_new })
  },
  flipPicker_price: function () {
    this.setData({ show_date: !this.data.show_price })
  },
  flipPicker_isSold: function () {
    this.setData({ show_date: !this.data.show_isSold })
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
  onConfirm_new: function (e) {
    const { picker, value, index } = e.detail
    if (value == '最新') {
      this.setData({
        filterType: 'new',
        order: 'positive',
        index: 0
      })
    }
    else if (value == '最旧') {
      this.setData({
        filterType: 'new',
        order: 'reverse',
        index: 0
      })
    }
    this.onLoad()
    this.setData({ show_new: false })
  },
  onConfirm_price: function (e) {
    const { picker, value, index } = e.detail
    if (value == '最高') {
      this.setData({
        filterType: 'price',
        order: 'reverse',
        index: 0
      })
    }
    else if (value == '最低') {
      this.setData({
        filterType: 'price',
        order: 'positive',
        index: 0
      })
    }
    this.onLoad()
    this.setData({ show_price: false })
  },
  onConfirm_isSold: function (e) {
    const { picker, value, index } = e.detail
    if (value == '已售出') {
      this.setData({
        filterType: 'isSold',
        order: 'reverse',
        index: 0
      })
    }
    else if (value == '未售出') {
      this.setData({
        filterType: 'isSold',
        order: 'positive',
        index: 0
      })
    }
    this.onLoad()
    this.setData({ show_isSold: false })
  },

  onSearchChange_item: function (e) {
    this.setData({ searchValue_item: e.detail })
  },
  onSearch_item: function () {
    let _this = this
    wx.request({
      url: app.globalData.url + '/api/searchDealItem',
      method: 'post',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        name: this.data.searchValue_item
      },
      success: function (res) {
        _this.setData({
          deals: res.data.info
        })
      }
    })
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    let _this = this
    wx.request({
      url: app.globalData.url + '/api/getDealList',
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
          deals: res.data.info
        })
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