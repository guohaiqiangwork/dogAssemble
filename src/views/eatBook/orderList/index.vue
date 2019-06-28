<template>
    <div id="orderbook">
        <book-list :item="book" class="mt-space">
            <span slot="size" class="green size">{{book.cupName}}</span>
            <div slot="content">
                <div class="kind-list">
                    <span class="kind-item" v-for="(item,index) in book.cupInfos" :key="index">{{item.foodName+item.gram+'克'}}</span>
                </div>
            </div>
        </book-list>
    </div>
</template>
<script>
export default {
    components:{
        bookList:resolve => require(['../book/index.vue'],resolve),
    },
    data() {
        return {
            form: {
                openId:localStorage.getItem("openId"),
                id:"",
                type:""
            },
            book:{},
        }
    },
    methods: {
        getOrderList() {
            this.form.id = this.$route.query.id;
            this.form.type = this.$route.query.type;
            this.$fetch.post("fruits/app/recipe/getOrderRecipe",this.form).then(res => {
                console.log(res);
                if(res.msg == "success"){
                    this.book = {...res.obj}
                }
            })
        }
    },
    mounted() {
        console.log();
        this.getOrderList();
    },
}
</script>
<style lang="less">
#orderbook{
    height: 100%;
    width: 100%;
    background: #F3F5F8;
    overflow-x: hidden;
    .mt-space{
        margin-top: 0.3rem;
    }
}
</style>


