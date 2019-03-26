<template>
    <div>
   <mt-header title="我的">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    </div>
</template>
<script>
export default {
    name:'personal',
    data () {
        return {
            Personal:"我是个人中心"
        }
    },
    created() {
         this.routeParams = JSON.parse(this.$route.params.obj)
         console.log(  this.routeParams )
    },
    methods: {
        goToHome:function(){

        }
    },
}
</script>
<style scoped>
    
</style>

