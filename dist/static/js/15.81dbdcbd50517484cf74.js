webpackJsonp([15],{jjvh:function(t,e){},n6e1:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=o("vlHB"),n=o.n(i),s={data:function(){return{hotList:[{logo:o("nyO9"),tip:"蔬菜置物架",price:21.9},{logo:o("nyO9"),tip:"熊孩子蔬菜干",price:19.9}]}},computed:{type:function(){return localStorage.getItem("type")},home:function(){return"/home"==this.$route.path}},methods:{getRecommend:function(){var t=this,e={openId:localStorage.getItem("openId")};this.$fetch.post(n.a.getRecommend,e).then(function(e){0==e.code?(t.hotList=e.obj,t.hotList.forEach(function(t){t.price=t.price.toFixed(2),t.original=t.original.toFixed(2),t.picId=n.a.imgUrl+t.picId,console.log(t.picId)})):alert(e.msg)},function(t){alert("网络缓慢。。")})},goToDetail:function(t){this.$emit("goToDetail",t)}},mounted:function(){this.getRecommend()}},c={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"hot"}},[t.home&&t.hotList.length?o("div",{staticClass:"hot_tit"},[t._v("热门推荐")]):t._e(),t._v(" "),!t.home&&t.hotList.length?o("div",{staticClass:"foryou"},[t._v("为您推荐")]):t._e(),t._v(" "),o("div",{staticClass:"hot_item"},t._l(t.hotList,function(e,i){return o("div",{key:i,staticClass:"mt_size",on:{click:function(o){return t.goToDetail(e)}}},[o("img",{staticClass:"hot_logo",attrs:{src:e.picId,alt:""}}),t._v(" "),o("p",{staticClass:"hot_msg"},[o("span",[t._v(t._s(e.name))]),t._v(" "),o("br"),t._v(" "),o("span",{staticClass:"hot_price"},[t._v(t._s("￥"+(1==t.type?e.original:e.price)))]),t._v(" "),1!=t.type?o("span",{staticClass:"goods_discount"},[t._v("¥"+t._s(e.original))]):t._e()])])}),0)])},staticRenderFns:[]};var a=o("VU/8")(s,c,!1,function(t){o("jjvh")},null,null);e.default=a.exports},nyO9:function(t,e,o){t.exports=o.p+"static/img/WechatIMG102.6ddfe17.png"}});
//# sourceMappingURL=15.81dbdcbd50517484cf74.js.map