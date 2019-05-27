<template>
    <div id="allbook">
        <book-list></book-list>
    </div>
</template>
<script>
export default {
    components:{
        bookList:resolve => require(['../bookList/index.vue'],resolve),
    },
    data() {
        return {
            key: 'value'
        }
    },
    methods: {
        name() {
            
        }
    },
    mounted() {
        
    },
}
</script>
<style lang="less">
#allbook{
    height: 100%;
    padding: 0.4rem;
    overflow-x: hidden;
    box-sizing: border-box;
    background: #F3F5F8;
}
</style>
