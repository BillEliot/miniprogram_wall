const app = getApp()

Component({
  data: {
    app: app,
    selected: 0,
    list: [{
      pagePath: "/pages/article/article",
      text: "大佬杂谈"
    }, 
    {
      pagePath: "/pages/wall/wall",
      text: "墙墙"
    },
    {
      "pagePath": "/pages/school/school",
      "text": "校园动态"
    },
    {
      "pagePath": "/pages/profile/profile",
      "text": "我"
    }],
    unreadCount: 0
  },

  methods: {
    onChange(e) {
      const url = this.data.list[e.detail].pagePath
      this.setData({
        selected: e.detail
      })
      wx.switchTab({ url })
    }
  },
  lifetimes: {
    attached: function () {
    }
  }
})
