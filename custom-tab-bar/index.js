// custom-tab-bar/index.js
Component({
  data: {
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
    }]
  },

  methods: {
    onChange(e) {
      const url = this.data.list[e.detail].pagePath
      this.setData({
        selected: e.detail
      })
      wx.switchTab({ url })
    }
  }
})
