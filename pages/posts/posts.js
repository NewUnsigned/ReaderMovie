
var postsData = require('../../data/posts-data.js') // 只能用相对路径

Page({

  /**
   * 页面的初始数据
   */
  data: {
    date:"Nov 25 2017",
    posts_key:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    this.setData({
      posts_key: postsData.postList
    });
  },

  onPostTap:function(event){
    var postId = event.currentTarget.dataset.postid;
    // console.log(postId);
    wx.navigateTo({
      url: 'post-detail/post-detail?id=' + postId,
    })
  }
})