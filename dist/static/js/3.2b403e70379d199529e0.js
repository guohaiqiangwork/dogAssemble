webpackJsonp([3],{"162o":function(t,e,i){(function(t){var n=void 0!==t&&t||"undefined"!=typeof self&&self||window,s=Function.prototype.apply;function o(t,e){this._id=t,this._clearFn=e}e.setTimeout=function(){return new o(s.call(setTimeout,n,arguments),clearTimeout)},e.setInterval=function(){return new o(s.call(setInterval,n,arguments),clearInterval)},e.clearTimeout=e.clearInterval=function(t){t&&t.close()},o.prototype.unref=o.prototype.ref=function(){},o.prototype.close=function(){this._clearFn.call(n,this._id)},e.enroll=function(t,e){clearTimeout(t._idleTimeoutId),t._idleTimeout=e},e.unenroll=function(t){clearTimeout(t._idleTimeoutId),t._idleTimeout=-1},e._unrefActive=e.active=function(t){clearTimeout(t._idleTimeoutId);var e=t._idleTimeout;e>=0&&(t._idleTimeoutId=setTimeout(function(){t._onTimeout&&t._onTimeout()},e))},i("mypn"),e.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==t&&t.setImmediate||this&&this.setImmediate,e.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==t&&t.clearImmediate||this&&this.clearImmediate}).call(e,i("DuR2"))},fBcm:function(t,e,i){"use strict";var n=i("mvHQ"),s=i.n(n),o=i("Zrlr"),r=i.n(o),a=i("wxAW"),c=i.n(a),u=i("BEQ0"),h=i.n(u),l=function(t){return Array.prototype.slice.call(t)},d=function(){function t(e){if(r()(this,t),this._default={container:".vux-swiper",item:".vux-swiper-item",direction:"vertical",activeClass:"active",threshold:50,duration:300,auto:!1,loop:!1,interval:3e3,height:"auto",minMovingDistance:0},this._options=h()(this._default,e),this._options.height=this._options.height.replace("px",""),this._start={},this._move={},this._end={},this._eventHandlers={},this._prev=this._current=this._goto=0,this._width=this._height=this._distance=0,this._offset=[],this.$box=this._options.container,this.$container=this._options.container.querySelector(".vux-swiper"),this.$items=this.$container.querySelectorAll(this._options.item),this.count=this.$items.length,this.realCount=this.$items.length,this._position=[],this._firstItemIndex=0,this._isMoved=!1,this.count)return this._init(),this._auto(),this._bind(),this._onResize(),this}return c()(t,[{key:"_auto",value:function(){var t=this;t.stop(),t._options.auto&&(t.timer=setTimeout(function(){t.next()},t._options.interval))}},{key:"updateItemWidth",value:function(){this._width=this.$box.offsetWidth||document.documentElement.offsetWidth,this._distance="horizontal"===this._options.direction?this._width:this._height}},{key:"stop",value:function(){this.timer&&clearTimeout(this.timer)}},{key:"_loop",value:function(){return this._options.loop&&this.realCount>=3}},{key:"_onResize",value:function(){var t=this;this.resizeHandler=function(){setTimeout(function(){t.updateItemWidth(),t._setOffset(),t._setTransform()},100)},window.addEventListener("orientationchange",this.resizeHandler,!1)}},{key:"_init",value:function(){this._height="auto"===this._options.height?"auto":this._options.height-0,this.updateItemWidth(),this._initPosition(),this._activate(this._current),this._setOffset(),this._setTransform(),this._loop()&&this._loopRender()}},{key:"_initPosition",value:function(){for(var t=0;t<this.realCount;t++)this._position.push(t)}},{key:"_movePosition",value:function(t){if(t>0){var e=this._position.splice(0,1);this._position.push(e[0])}else if(t<0){var i=this._position.pop();this._position.unshift(i)}}},{key:"_setOffset",value:function(){var t=this,e=t._position.indexOf(t._current);t._offset=[],l(t.$items).forEach(function(i,n){t._offset.push((n-e)*t._distance)})}},{key:"_setTransition",value:function(t){var e="none"===(t=t||this._options.duration||"none")?"none":t+"ms";l(this.$items).forEach(function(t,i){t.style.webkitTransition=e,t.style.transition=e})}},{key:"_setTransform",value:function(t){var e=this;t=t||0,l(e.$items).forEach(function(i,n){var s=e._offset[n]+t,o="translate3d("+s+"px, 0, 0)";"vertical"===e._options.direction&&(o="translate3d(0, "+s+"px, 0)"),i.style.webkitTransform=o,i.style.transform=o,e._isMoved=!0})}},{key:"_bind",value:function(){var t=this,e=this;e.touchstartHandler=function(t){e.stop(),e._start.x=t.changedTouches[0].pageX,e._start.y=t.changedTouches[0].pageY,e._setTransition("none"),e._isMoved=!1},e.touchmoveHandler=function(i){if(1!==e.count){e._move.x=i.changedTouches[0].pageX,e._move.y=i.changedTouches[0].pageY;var n=e._move.x-e._start.x,s=e._move.y-e._start.y,o=s,r=Math.abs(n)>Math.abs(s);"horizontal"===e._options.direction&&r&&(o=n),t._options.loop||t._current!==t.count-1&&0!==t._current||(o/=3),((e._options.minMovingDistance&&Math.abs(o)>=e._options.minMovingDistance||!e._options.minMovingDistance)&&r||e._isMoved)&&e._setTransform(o),r&&i.preventDefault()}},e.touchendHandler=function(t){if(1!==e.count){e._end.x=t.changedTouches[0].pageX,e._end.y=t.changedTouches[0].pageY;var i=e._end.y-e._start.y;"horizontal"===e._options.direction&&(i=e._end.x-e._start.x),0!==(i=e.getDistance(i))&&e._options.minMovingDistance&&Math.abs(i)<e._options.minMovingDistance&&!e._isMoved||(i>e._options.threshold?e.move(-1):i<-e._options.threshold?e.move(1):e.move(0),e._loopRender())}},e.transitionEndHandler=function(t){e._activate(e._current);var i=e._eventHandlers.swiped;i&&i.apply(e,[e._prev%e.count,e._current%e.count]),e._auto(),e._loopRender(),t.preventDefault()},e.$container.addEventListener("touchstart",e.touchstartHandler,!1),e.$container.addEventListener("touchmove",e.touchmoveHandler,!1),e.$container.addEventListener("touchend",e.touchendHandler,!1),e.$items[1]&&e.$items[1].addEventListener("webkitTransitionEnd",e.transitionEndHandler,!1)}},{key:"_loopRender",value:function(){var t=this;t._loop()&&(0===t._offset[t._offset.length-1]?(t.$container.appendChild(t.$items[0]),t._loopEvent(1)):0===t._offset[0]&&(t.$container.insertBefore(t.$items[t.$items.length-1],t.$container.firstChild),t._loopEvent(-1)))}},{key:"_loopEvent",value:function(t){var e=this;e._itemDestoy(),e.$items=e.$container.querySelectorAll(e._options.item),e.$items[1]&&e.$items[1].addEventListener("webkitTransitionEnd",e.transitionEndHandler,!1),e._movePosition(t),e._setOffset(),e._setTransform()}},{key:"getDistance",value:function(t){return this._loop()?t:t>0&&0===this._current?0:t<0&&this._current===this.realCount-1?0:t}},{key:"_moveIndex",value:function(t){0!==t&&(this._prev=this._current,this._current+=this.realCount,this._current+=t,this._current%=this.realCount)}},{key:"_activate",value:function(t){var e=this._options.activeClass;Array.prototype.forEach.call(this.$items,function(i,n){i.classList.remove(e),t===Number(i.dataset.index)&&i.classList.add(e)})}},{key:"go",value:function(t){var e=this;return e.stop(),t=t||0,t+=this.realCount,t%=this.realCount,t=this._position.indexOf(t)-this._position.indexOf(this._current),e._moveIndex(t),e._setOffset(),e._setTransition(),e._setTransform(),e._auto(),this}},{key:"next",value:function(){return this.move(1),this}},{key:"move",value:function(t){return this.go(this._current+t),this}},{key:"on",value:function(t,e){return this._eventHandlers[t]&&console.error("[swiper] event "+t+" is already register"),"function"!=typeof e&&console.error("[swiper] parameter callback must be a function"),this._eventHandlers[t]=e,this}},{key:"_itemDestoy",value:function(){var t=this;this.$items.length&&l(this.$items).forEach(function(e){e.removeEventListener("webkitTransitionEnd",t.transitionEndHandler,!1)})}},{key:"destroy",value:function(){if(this.stop(),this._current=0,this._setTransform(0),window.removeEventListener("orientationchange",this.resizeHandler,!1),this.$container.removeEventListener("touchstart",this.touchstartHandler,!1),this.$container.removeEventListener("touchmove",this.touchmoveHandler,!1),this.$container.removeEventListener("touchend",this.touchendHandler,!1),this._itemDestoy(),this._options.loop&&2===this.count){var t=this.$container.querySelector(this._options.item+"-clone");t&&this.$container.removeChild(t),(t=this.$container.querySelector(this._options.item+"-clone"))&&this.$container.removeChild(t)}}}]),t}(),f=i("0FxO"),p=(Array,String,Boolean,Boolean,String,String,Boolean,Boolean,Number,Number,Number,String,Number,Number,Number,{name:"swiper",created:function(){this.index=this.value||0,this.index&&(this.current=this.index)},mounted:function(){var t=this;this.hasTwoLoopItem(),this.$nextTick(function(){t.list&&0===t.list.length||t.render(t.index),t.xheight=t.getHeight(),t.$emit("on-get-height",t.xheight)})},methods:{hasTwoLoopItem:function(){2===this.list.length&&this.loop?this.listTwoLoopItem=this.list:this.listTwoLoopItem=[]},clickListItem:function(t){Object(f.a)(t.url,this.$router),this.$emit("on-click-list-item",JSON.parse(s()(t)))},buildBackgroundUrl:function(t){return t.fallbackImg?"url("+t.img+"), url("+t.fallbackImg+")":"url("+t.img+")"},render:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.swiper&&this.swiper.destroy(),this.swiper=new d({container:this.$el,direction:this.direction,auto:this.auto,loop:this.loop,interval:this.interval,threshold:this.threshold,duration:this.duration,height:this.height||this._height,minMovingDistance:this.minMovingDistance,imgList:this.imgList}).on("swiped",function(e,i){t.current=i%t.length,t.index=i%t.length}),e>0&&this.swiper.go(e)},rerender:function(){var t=this;this.$el&&!this.hasRender&&(this.hasRender=!0,this.hasTwoLoopItem(),this.$nextTick(function(){t.index=t.value||0,t.current=t.value||0,t.length=t.list.length||t.$children.length,t.destroy(),t.render(t.value)}))},destroy:function(){this.hasRender=!1,this.swiper&&this.swiper.destroy()},getHeight:function(){var t=parseInt(this.height,10);return t?this.height:t?void 0:this.aspectRatio?this.$el.offsetWidth*this.aspectRatio+"px":"180px"}},props:{list:{type:Array,default:function(){return[]}},direction:{type:String,default:"horizontal"},showDots:{type:Boolean,default:!0},showDescMask:{type:Boolean,default:!0},dotsPosition:{type:String,default:"right"},dotsClass:String,auto:Boolean,loop:Boolean,interval:{type:Number,default:3e3},threshold:{type:Number,default:50},duration:{type:Number,default:300},height:{type:String,default:"auto"},aspectRatio:Number,minMovingDistance:{type:Number,default:0},value:{type:Number,default:0}},data:function(){return{hasRender:!1,current:this.index||0,xheight:"auto",length:this.list.length,index:0,listTwoLoopItem:[]}},watch:{auto:function(t){t?this.swiper&&this.swiper._auto():this.swiper&&this.swiper.stop()},list:function(t,e){s()(t)!==s()(e)&&this.rerender()},current:function(t){this.index=t,this.$emit("on-index-change",t)},index:function(t){var e=this;t!==this.current&&this.$nextTick(function(){e.swiper&&e.swiper.go(t)}),this.$emit("input",t)},value:function(t){this.index=t}},beforeDestroy:function(){this.destroy()}}),m={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-slider"},[i("div",{staticClass:"vux-swiper",style:{height:t.xheight}},[t._t("default"),t._v(" "),t._l(t.list,function(e,n){return i("div",{staticClass:"vux-swiper-item",attrs:{"data-index":n},on:{click:function(i){return t.clickListItem(e)}}},[i("a",{attrs:{href:"javascript:"}},[i("div",{staticClass:"vux-img",style:{backgroundImage:t.buildBackgroundUrl(e)}}),t._v(" "),t.showDescMask?i("p",{staticClass:"vux-swiper-desc"},[t._v(t._s(e.title))]):t._e()])])}),t._v(" "),t._l(t.listTwoLoopItem,function(e,n){return t.listTwoLoopItem.length>0?i("div",{staticClass:"vux-swiper-item vux-swiper-item-clone",attrs:{"data-index":n},on:{click:function(i){return t.clickListItem(e)}}},[i("a",{attrs:{href:"javascript:"}},[i("div",{staticClass:"vux-img",style:{backgroundImage:t.buildBackgroundUrl(e)}}),t._v(" "),t.showDescMask?i("p",{staticClass:"vux-swiper-desc"},[t._v(t._s(e.title))]):t._e()])]):t._e()})],2),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.showDots,expression:"showDots"}],class:[t.dotsClass,"vux-indicator","vux-indicator-"+t.dotsPosition]},t._l(t.length,function(e){return i("a",{attrs:{href:"javascript:"}},[i("i",{staticClass:"vux-icon-dot",class:{active:e-1===t.current}})])}),0)])},staticRenderFns:[]};var v=i("VU/8")(p,m,!1,function(t){i("p9A2")},null,null);e.a=v.exports},mypn:function(t,e,i){(function(t,e){!function(t,i){"use strict";if(!t.setImmediate){var n,s,o,r,a,c=1,u={},h=!1,l=t.document,d=Object.getPrototypeOf&&Object.getPrototypeOf(t);d=d&&d.setTimeout?d:t,"[object process]"==={}.toString.call(t.process)?n=function(t){e.nextTick(function(){p(t)})}:!function(){if(t.postMessage&&!t.importScripts){var e=!0,i=t.onmessage;return t.onmessage=function(){e=!1},t.postMessage("","*"),t.onmessage=i,e}}()?t.MessageChannel?((o=new MessageChannel).port1.onmessage=function(t){p(t.data)},n=function(t){o.port2.postMessage(t)}):l&&"onreadystatechange"in l.createElement("script")?(s=l.documentElement,n=function(t){var e=l.createElement("script");e.onreadystatechange=function(){p(t),e.onreadystatechange=null,s.removeChild(e),e=null},s.appendChild(e)}):n=function(t){setTimeout(p,0,t)}:(r="setImmediate$"+Math.random()+"$",a=function(e){e.source===t&&"string"==typeof e.data&&0===e.data.indexOf(r)&&p(+e.data.slice(r.length))},t.addEventListener?t.addEventListener("message",a,!1):t.attachEvent("onmessage",a),n=function(e){t.postMessage(r+e,"*")}),d.setImmediate=function(t){"function"!=typeof t&&(t=new Function(""+t));for(var e=new Array(arguments.length-1),i=0;i<e.length;i++)e[i]=arguments[i+1];var s={callback:t,args:e};return u[c]=s,n(c),c++},d.clearImmediate=f}function f(t){delete u[t]}function p(t){if(h)setTimeout(p,0,t);else{var e=u[t];if(e){h=!0;try{!function(t){var e=t.callback,n=t.args;switch(n.length){case 0:e();break;case 1:e(n[0]);break;case 2:e(n[0],n[1]);break;case 3:e(n[0],n[1],n[2]);break;default:e.apply(i,n)}}(e)}finally{f(t),h=!1}}}}}("undefined"==typeof self?void 0===t?this:t:self)}).call(e,i("DuR2"),i("W2nU"))},ns3e:function(t,e){},p9A2:function(t,e){},wu58:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("Gu7T"),s=i.n(n),o=i("fBcm"),r=i("162o"),a=(o.a,void 0),c={components:{Swiper:o.a,Itemes:function(t){return i.e(18).then(function(){var e=[i("odez")];t.apply(null,e)}.bind(this)).catch(i.oe)},hot:function(t){return i.e(15).then(function(){var e=[i("n6e1")];t.apply(null,e)}.bind(this)).catch(i.oe)},whoel:function(t){return i.e(17).then(function(){var e=[i("sWHW")];t.apply(null,e)}.bind(this)).catch(i.oe)}},watch:{},data:function(){return{str:"",iptVal:null,imgList:[{},{}],listId2:""}},computed:{},methods:{goToList1:function(t){console.log("监听"+t),this.listId2=t},Test:function(){this.$fetch.post("fruits/app/personal/checkCustomer",{openId:"52646465465",phone:"1"}).then(function(t){console.log(t)})},onIndexChange:function(t){},debounce:function(t,e,i){},queryImg:function(t){this.str=t,this.imgList=[],this.imgList.push({url:"javascript:",img:"//192.168.3.12:80/fruits/app/blank/showPicture?attachmentId="+t,title:"送你一朵fua"},{url:"javascript:",img:"http://m.imeitou.com/uploads/allimg/2019021309/ipijc3xjpfo.jpg",title:"送你一朵fua1"})},input:function(){var t=this;a&&window.clearTimeout(a._id),a=Object(r.setTimeout)(function(){console.log(t.iptVal),a=null},2e3)},filterList:function(t,e){return[].concat(s()(t)).map(function(t){}),[]}},created:function(){settitle("商城")},mounted:function(){var t=this;this.$fetch.post("fruits/app/blank/getBannerImg",{openId:123456}).then(function(e){console.log(e),e.obj.forEach(function(e){t.queryImg(e)})})}},u={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"home"}},[i("div",{staticClass:"head_box"},[i("swiper",{attrs:{list:t.imgList,"min-moving-distance":120,auto:"",loop:""},on:{"on-index-change":t.onIndexChange}}),t._v(" "),i("div",{staticClass:"search_box"},[i("i",{staticClass:"weui-icon-search search_icon"}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.iptVal,expression:"iptVal"}],attrs:{type:"text",placeholder:"搜索您想找的产品"},domProps:{value:t.iptVal},on:{input:[function(e){e.target.composing||(t.iptVal=e.target.value)},t.input]}}),t._v(" "),i("i")])],1),t._v(" "),i("itemes",{on:{getList:t.goToList1}}),t._v(" "),i("div",{staticClass:"hot_tit"},[t._v("热门推荐")]),t._v(" "),i("hot"),t._v(" "),i("div",{staticClass:"bg_gray"},[i("div",{staticClass:"hot_tit mt-space",on:{click:t.Test}},[t._v("全部商品")]),t._v(" "),i("whoel",{attrs:{listId:this.listId2}})],1)],1)},staticRenderFns:[]};var h=i("VU/8")(c,u,!1,function(t){i("ns3e")},null,null);e.default=h.exports}});
//# sourceMappingURL=3.2b403e70379d199529e0.js.map