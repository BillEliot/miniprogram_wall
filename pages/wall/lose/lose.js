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
    loseList: [],
    columns_date: ['最新', '最旧'],
    columns_isFound: ['已找到', '未找到'],
    show_publicDate: false,
    show_loseDate: false,
    show_isFound: false,
    searchValue_item: '',
  },

  submit: function () {
    app.globalData.Dialog.alert({
      message: '请使用PC访问http://www.hnucmwall.top以获取更好的写作体验！'
    })
  },

  onLose: function (e) {
    wx.navigateTo({
      url: '/pages/wall/lose/lose_detail/lose_detail?id=' + e.currentTarget.dataset.id
    })
  },

  flipPicker_publicDate: function () {
    this.setData({ show_publicDate: !this.data.show_publicDate })
  },
  flipPicker_loseDate: function () {
    this.setData({ show_loseDate: !this.data.show_loseDate })
  },
  flipPicker_isFound: function () {
    this.setData({ show_isFound: !this.data.show_isFound })
  },

  onConfirm_publicDate: function (e) {
    const { picker, value, index } = e.detail
    if (value == '最新') {
      this.setData({
        filterType: 'publicTime',
        order: 'reverse',
        index: 0
      })
    }
    else if (value == '最旧') {
      this.setData({
        filterType: 'publicTime',
        order: 'positive',
        index: 0
      })
    }
    this.onLoad()
    this.setData({ show_publicDate: false })
  },
  onConfirm_loseDate: function (e) {
    const { picker, value, index } = e.detail
    if (value == '最新') {
      this.setData({
        filterType: 'loseTime',
        order: 'reverse',
        index: 0
      })
    }
    else if (value == '最旧') {
      this.setData({
        filterType: 'loseTime',
        order: 'positive',
        index: 0
      })
    }
    this.onLoad()
    this.setData({ show_loseDate: false })
  },
  onConfirm_isFound: function (e) {
    const { picker, value, index } = e.detail
    if (value == '已找到') {
      this.setData({
        filterType: 'isFound',
        order: 'reverse',
        index: 0
      })
    }
    else if (value == '未找到') {
      this.setData({
        filterType: 'isFound',
        order: 'positive',
        index: 0
      })
    }
    this.onLoad()
    this.setData({ show_isFound: false })
  },

  onSearchChange_item: function (e) {
    this.setData({ searchValue_item: e.detail })
  },
  onSearch_item: function () {
    let _this = this
    wx.request({
      url: app.globalData.url + '/api/searchLoseItem',
      method: 'post',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        name: this.data.searchValue_item
      },
      success: function (res) {
        _this.setData({
          loseList: res.data.info
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
      url: app.globalData.url + '/api/getLoseList',
      method: 'post',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        filterType: this.data.filterType,
        order: this.data.order,
        index: this.data.index,
      },
      success: function (res) {
        _this.setData({ loseList: res.data.info })
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