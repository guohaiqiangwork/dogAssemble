webpackJsonp([1],{U3LG:function(t,s){},VBAt:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e("vlHB"),a=e.n(i),n={data:function(){return{videoList:"",list:[1,2,3]}},methods:{getVideoList:function(){var t=this,s={openId:localStorage.getItem("openId"),id:this.videoId};this.$fetch.post(a.a.getVideoList,s).then(function(s){0==s.code?t.videoList=s:alert(s.msg)},function(t){alert("网络缓慢。。")})}},mounted:function(){this.getVideoList()},created:function(){this.routeParams=JSON.parse(this.$route.query.obj),console.log("567890-"),this.videoId=this.routeParams.data.id}},o={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{attrs:{id:"piece"}},[i("div",{staticClass:"piece_box"},[i("p",{staticClass:"flex-between align-center"},[i("span",{staticClass:"case_tit"},[t._v(t._s(t.videoList.attributes.name))]),t._v(" "),i("img",{staticClass:"icon_size",attrs:{src:e("7/E+"),alt:""}})]),t._v(" "),i("div",{staticClass:"introduce"},[i("p",{staticClass:"tit"},[t._v("简介")]),t._v(" "),i("p",{staticClass:"video_des"},[t._v(t._s(t.videoList.attributes.description))])]),t._v(" "),i("div",{staticClass:"piece_list"},[i("p",{staticClass:"tit"},[t._v("选集")]),t._v(" "),i("ul",{staticClass:"flex-start"},t._l(t.videoList.obj,function(s,e){return i("li",{key:e,staticClass:"piece_item",attrs:{tabindex:"0"}},[i("span",[t._v(t._s(s.episode))]),t._v(" "),i("span",{staticClass:"pay_flag"})])}),0)])])])},staticRenderFns:[]};var c=e("VU/8")(n,o,!1,function(t){e("U3LG")},null,null);s.default=c.exports}});
//# sourceMappingURL=1.de845198fe04bc190b16.js.map