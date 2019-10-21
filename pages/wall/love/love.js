const app = getApp()

Page({

  /**
   * Page initial data
   */
  data: {
    app: app,
    show_more: false,
    filterType: 'date',
    order: 'reverse',
    index: 0,
    loveList: [],
    moreList: [],
    columns_date: ['最新', '最旧'],
    columns_thumbsUp: ['最多', '最少'],
    show_date: false,
    show_thumbsUp: false,
    searchValue_userFrom: '',
    searchValue_userTo: ''
  },

  onLove: function (e) {
    wx.navigateTo({
      url: '/pages/wall/love/love_detail/love_detail?id=' + e.currentTarget.dataset.id
    })
  },
  onThumbsUp: function (e) {
    let index = e.currentTarget.dataset.index
    let item = this.data.loveList[index]

    if (app.globalData.user.uid == -1) {
      app.globalData.Toast.fail('先登录吧～')
    }
    else {
      if (item.isThumbsUp) {
        item.isThumbsUp = false
        item.thumbsUp -= 1
        wx.request({
          url: app.globalData.url + '/api/thumbsUpLove',
          method: 'post',
          header: {
            'content-type': 'application/x-www-form-urlencoded'
          },
          data: {
            id: item.id,
            isThumbsUp: false,
            uid: app.globalData.user.uid
          }
        })
      }
      else {
        item.isThumbsUp = true
        item.thumbsUp += 1
        wx.request({
          url: app.globalData.url + '/api/thumbsUpLove',
          method: 'post',
          header: {
            'content-type': 'application/x-www-form-urlencoded'
          },
          data: {
            id: item.id,
            isThumbsUp: true,
            uid: app.globalData.user.uid
          }
        })
      }
      let s = 'loveList[' + index + ']'
      this.setData({ [s]: item })
    }
  },
  more: function (e) {
    this.setData({ 
      moreList: e.currentTarget.dataset.userto,
      show_more: true
    })
  },
  onClose_more: function () {
    this.setData({ show_more: false })
  },
  
  flipPicker_date: function () {
    this.setData({ show_date: !this.data.show_date })
  },
  flipPicker_thumbsUp: function () {
    this.setData({ show_thumbsUp: !this.data.show_thumbsUp })
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

  onSearchChange_userFrom: function (e) {
    this.setData({ searchValue_userFrom: e.detail })
  },
  onSearchChange_userTo: function (e) {
    this.setData({ searchValue_userTo: e.detail })
  },
  onSearch_userFrom: function () {
    let _this = this
    wx.request({
      url: app.globalData.url + '/api/searchLoveItem',
      method: 'post',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        name: this.data.searchValue_userFrom,
        object: 'from'
      },
      success: function (res) {
        _this.setData({
          loveList: res.data.info
        })
      }
    })
  },
  onSearch_userTo: function () {
    let _this = this
    wx.request({
      url: app.globalData.url + '/api/searchLoveItem',
      method: 'post',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        name: this.data.searchValue_userTo,
        object: 'to'
      },
      success: function (res) {
        _this.setData({
          loveList: res.data.info
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
      url: app.globalData.url + '/api/getLoveList',
      method: 'post',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        filterType: this.data.filterType,
        order: this.data.order,
        index: this.data.index,
        uid: app.globalData.user.uid
      },
      success: function (res) {
        _this.setData({
          loveList: res.data.info
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