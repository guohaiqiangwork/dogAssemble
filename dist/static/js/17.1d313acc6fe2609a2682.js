webpackJsonp([17],{"FN+2":function(t,i,e){t.exports=e.p+"static/img/WechatIMG99(1).d75004e.png"},odez:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var o=e("vlHB"),n=e.n(o),s={data:function(){return{itemList:[{logo:e("FN+2"),tip:"奶品水饮"},{logo:e("FN+2"),tip:"休闲零食"},{logo:e("FN+2"),tip:"母婴用品"},{logo:e("FN+2"),tip:"厨房日用"},{logo:e("FN+2"),tip:"厨房日用"},{logo:e("FN+2"),tip:"厨房日用"}]}},methods:{getClassfications:function(){var t=this,i={openId:localStorage.getItem("openId")};this.$fetch.post(n.a.getClassfications,i).then(function(i){0==i.code?(t.itemList=i.obj,t.itemList.forEach(function(t){t.picId=n.a.imgUrl+t.picId})):alert(i.msg)},function(t){alert("网络缓慢。。")})},goto:function(t){this.$emit("getList",t)}},mounted:function(){this.getClassfications()}},c={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{attrs:{id:"item_goods"}},t._l(t.itemList,function(i,o){return e("div",{key:o,staticClass:"item_list"},[e("img",{staticClass:"item_logo",attrs:{src:i.picId,alt:""},on:{click:function(e){return t.goto(i.id)}}}),t._v(" "),e("p",{staticClass:"item_tip"},[t._v(t._s(i.name))])])}),0)},staticRenderFns:[]};var a=e("VU/8")(s,c,!1,function(t){e("qAU5")},null,null);i.default=a.exports},qAU5:function(t,i){}});
//# sourceMappingURL=17.1d313acc6fe2609a2682.js.map