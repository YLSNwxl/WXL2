var bMap = require('../../utils/bmap-wx.min.js');//结合AK，通过该文件里面api访问百度地图
const app = getApp();
Page({

  data:  {
    //设置标记点
    markers:  [
      {
        iconPath:  "/images/ljx.png",
        id:  4,
        latitude:  31.938841,
        longitude:  118.799698,
        width:  30,
        height:  30
      }
    ],
    //当前定位位置
    latitude: '',
    longitude:  ''
   
  },
  navigate:function()  {
    var that=this;
    ////使用微信内置地图查看标记点位置，并进行导航
   
    wx.openLocation({
      latitude:  this.data.markers[0].latitude,//要去的纬度-地址
      longitude:  this.data.markers[0].longitude,//要去的经度-地址
    })
  },
  onLoad:function()  {
    var that=this;
    //获取当前位置
    wx.getLocation({
      type:  'gcj02',
      success:  (res)  =>  {
        console.log(res)
        that.setData({
          latitude:  res.latitude,
          longitude:  res.longitude
        })
      }
    })
  }
 /* data: {
    getval: '',
    hello: 'hello',
    meslist: [],
    inputval:''
  },
 
  onLoad: function () {
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        wx.openLocation({
          latitude: latitude,
          longitude: longitude,
          name: "六盘水市博物馆",
          scale: 28
        })
      }
    })
    console.log('页面显示了');
    var that = this;
    wx.getStorage({
      key: 'meslist',
      success: function (res) {
        console.log(res.data)
        that.setData({
          meslist: res.data
        })
      }
    })
  },
  onHide: function () {
    var res = this.data.meslist;
    console.log('页面隐藏了');
    wx.setStorage({
      key: "meslist",
      data: res,
      success: function (res) {
        console.log('存储缓存成功')
      }
    })
  },
  getval: function (e) {

    this.setData({
      getval: e.detail.value
    })
  },
  dellist: function (res) {
    var u = res.target.dataset.index;
    var newlist = this.data.meslist;
    newlist.splice(u, 1);
    // var newlist = this.data.meslist.splice(u,1);
    // 这样的方法是错误的，splice方法返回的是被删除的元素，
    this.setData({
      meslist: newlist
    });
  },
  sbumit: function (options) {
    var that = this;
    console.log('-----设置前-------');
    console.log(that.data.getval);
    var list = that.data.meslist;
    if (that.data.getval) {
      list.push({
        mes: that.data.getval
      });
      that.setData({
        meslist: list,
        inputval: "",
        getval: ""
      });

    }
    else {
      wx.showModal({
        title: '提示',
        content: '请输入留言内容',
      })
    }
  },*/
})