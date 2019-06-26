//页面请求的路径地址
module.exports = {
  openId: 'asdujfghwiue4yr298r32034ry2',//测试openId
  getMemberList: '/fruits/app/member/getMemberList',//会员操作--查询服务中订单的会员列表
  getOrderInfo: '/fruits/app/member/getOrderInfo',//会员操作--查看服务中订单详情
  checkMember: '/fruits/app/member/checkMember', //查询订单会员
  sureBigu: '/fruits/app/member/sureBigu',//辟谷套餐消费
  getRecipe: '/fruits/app/order/getRecipe',//新建订单--根据类型获取套餐信息
  getMemberRecipe: '/fruits/app/order/getMemberRecipe',//新建订单--会员套餐详情
  saveMemberRecipe: '/fruits/app/order/saveMemberRecipe',//新建订单--保存订单（会员套餐）
  checkCustomer: '/fruits/app/personal/checkCustomer',//个人中心--查询会员(充值/建单)
  saveInediaRecipe: '/fruits/app/order/saveInediaRecipe',//辟谷套餐保存
  getAllOrder: '/fruits/app/member/getAllOrder',//获取全部订单详情
  getAllUser: '/fruits/app/member/getAllUser',//获取全部会员
  getOrderById: '/fruits/app/member/getOrderById',//获取全部会员订单详情
  closeMemberOrder: '/fruits/app/member/closeMemberOrder',//结束会员订单
  saveMember: '/fruits/app/member/saveMember',//会员子套餐
  getGoodsList: '/fruits/app/blank/getGoodsList',//全部商品
  getClassfications: '/fruits/app/blank/getClassfications',//获取首页分类
  imgUrl: "//192.168.3.12:80/fruits/app/blank/showPicture?attachmentId=",//图片
  getRecommend: '/fruits/app/blank/getRecommend',//获取推荐列表
  deleteAddress: '/fruits/app/cart/deleteAddress',//删除地址
  saveAddress: '/fruits/app/cart/saveAddress',//保存地址接口
  getAddress: '/fruits/app/cart/getAddress',//修改获取地址
  // getGoodInfo:'/fruits/app/cart/getGoodInfo',//新增地址接口
  editAddress: '/fruits/app/cart/editAddress',//编辑地址保存
  selectAddress: '/fruits/app/cart/selectAddress',//修改地址获取
  getVideoOne: '/fruits/app/video/getVideoOne',//查询视频一级分类
  getVideoTwo: '/fruits/app/video/getVideoTwo',//查询视频2级分类
  getVideoList: '/fruits/app/video/getVideoList',//查询二级下分类
  getVideoOrder:'/fruits/app/video/getVideoOrder',//案例视频--视频订单
  getVideoLink: '/fruits/app/video/getVideoLink',//获取视频链接
  saveVideoOrder:'/fruits/app/personal/saveVideoOrder',//购买视频
  getRecommendB: '/fruits/app/bonus/getRecommend',//健康奖金推荐返佣
  getHealthBonus:'/fruits/app/bonus/getHealthBonus',//健康奖金金额统计
  getOrderDistri:'/fruits/app/bonus/getOrderDistri',//商城返佣列
  getVideoDistri:'/fruits/app/bonus/getVideoDistri',//视频返佣列表
};