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

<style>
 html,body,#app { height: 100%;margin: 0; padding: 0;
 
 font-family: PingFang-SC-Medium;
 font-weight: 500;
 }
 [v-cloak]{ display:none}
</style>
