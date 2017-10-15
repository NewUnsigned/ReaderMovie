// pages/posts/post-detail/post-detail.js
var postsData = require('../../../data/posts-data.js') // 只能用相对路径

Page({

  /**
   * 页面的初始数据
   */
  data: {
    postData:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var postId = options.id;
    console.log(postId);
    var postData = postsData.postList[postId];
    this.setData({
        postData : postData
    });
  }
})