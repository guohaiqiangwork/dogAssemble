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

};