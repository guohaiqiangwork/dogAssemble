<template>
  <div id="app" v-cloak>
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
 html,body { height: 100%;margin: 0; padding: 0;
 width: 100%;
 color: #102023;
 font-family: PingFang-SC-Medium;
 font-weight: 500;
   -webkit-tap-highlight-color:rgba(255,255,255,0);
   -webkit-appearance:none;
 }
 #app{
   height: 100%;
   width: 100%;
   overflow-x: hidden;
   font-size: 14px;
 }
  /* img{
      font-size: 0;
    } */
 [v-cloak]{ display:none}
</style>
