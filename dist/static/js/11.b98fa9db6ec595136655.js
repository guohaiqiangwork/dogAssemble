webpackJsonp([11],{ReSf:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=o("Dd8w"),n=o.n(s),i={components:{bookList:function(t){return o.e(0).then(function(){var e=[o("RE0g")];t.apply(null,e)}.bind(this)).catch(o.oe)}},data:function(){return{form:{openId:localStorage.getItem("openId"),id:"",type:""},book:{}}},methods:{getOrderList:function(){var t=this;this.form.id=this.$route.query.id,this.form.type=this.$route.query.type,this.$fetch.post("fruits/app/recipe/getOrderRecipe",this.form).then(function(e){console.log(e),"success"==e.msg?t.book=n()({},e.obj):alert(data.msg)})}},mounted:function(){console.log(),this.getOrderList()}},r={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"orderbook"}},[o("book-list",{staticClass:"mt-space",attrs:{item:t.book}},[o("span",{staticClass:"green size",attrs:{slot:"size"},slot:"size"},[t._v(t._s(t.book.cupName))]),t._v(" "),o("div",{attrs:{slot:"content"},slot:"content"},[o("div",{staticClass:"kind-list"},t._l(t.book.cupInfos,function(e,s){return o("span",{key:s,staticClass:"kind-item"},[t._v(t._s(e.foodName+e.gram+"克"))])}),0)])])],1)},staticRenderFns:[]};var a=o("VU/8")(i,r,!1,function(t){o("k/BY")},null,null);e.default=a.exports},"k/BY":function(t,e){}});
//# sourceMappingURL=11.b98fa9db6ec595136655.js.map