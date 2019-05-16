<template>
    <div id="item_goods">
        <div class="item_list" v-for="(item,index) in itemList" :key="index">
            <img class="item_logo" :src="item.logo" alt="">
            <p class="item_tip">{{item.tip}}</p>
        </div>
    </div>
</template>
<script>
export default {
    // props:{

    // },
    data() {
        return {
            itemList: [
                {
                    logo:require('../../../assets/images/WechatIMG99(1).png'),
                    tip:'奶品水饮'
                },
                {
                    logo:require('../../../assets/images/WechatIMG99(1).png'),
                    tip:'休闲零食'
                },
                {
                    logo:require('../../../assets/images/WechatIMG99(1).png'),
                    tip:'母婴用品'
                },
                {
                    logo:require('../../../assets/images/WechatIMG99(1).png'),
                    tip:'厨房日用'
                }
            ]
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
#item_goods{
    display: flex;
    justify-content: space-between;
    // width: 100%;
    height: 1.44rem;
    padding: 0.36rem 0.6rem;
    // box-sizing: border-box;
    .item_list{
       width: 5.6rem;
    //    text-align: center;
    //    margin: 0 auto;
       display: flex;
       flex-direction: column;
       justify-content: space-between;
       align-items: center;
        .item_logo{
            width: 0.88rem;
            height: 0.88rem;
        }
        .item_tip{

        }
    }
}
</style>
