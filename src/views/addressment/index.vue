<template>
    <div id="address">
        <div class="address_container">
            <!-- <div class="address_list">

            </div> -->
            <swipeout v-for="(item,index) in addressList" :key="index">
                <swipeout-item @on-close="handleEvents('on-close')" @on-open="handleEvents('on-open')" transition-mode="follow">
                    <div slot="right-menu">
                    <swipeout-button @click.native="onButtonClick('fav')" type="primary" class="del_btn">{{'删除'}}</swipeout-button>
                    <!-- <swipeout-button @click.native="onButtonClick('delete')" type="warn">{{$t('Right')}}</swipeout-button> -->
                    </div>
                    <div slot="content" class=" vux-1px-t address_list">
                        <div class="name_size">
                            <p>{{item.name}}</p>
                            <span class="defalut_address" v-show="item.isdefalut">默认</span>
                        </div>
                        <div class="msg_mr">
                            <p>{{item.tel}}</p>
                            <p>{{item.address}}</p>
                        </div>
                        <div class="option">
                            <img  src="../../assets/images/edit.png" alt="">
                        </div>
                    </div>
                </swipeout-item>
            </swipeout>
        </div>
        <div class="add_button">新增收货地址</div>
    </div>
</template>
<script>
import { Swipeout, SwipeoutItem, SwipeoutButton } from 'vux'
export default {
    components:{
         Swipeout, SwipeoutItem, SwipeoutButton
    },
    data() {
        return {
            addressList: [
                {
                    id:null,
                    name:'吕小布',
                    address:'文化创意产业园B座广顺路北大街融创动力文化产业园 A205',
                    tel:'189****3837',
                    isdefalut:true,
                },
                {
                    id:null,
                    name:'吕小布',
                    address:'文化创意产业园B座广顺路北大街融创动力文化产业园 A205',
                    tel:'189****3837',
                    isdefalut:false,
                }
            ]
        }
    },
    methods: {
        handleEvents() {
            
        },
        handleEvents(){

        },
        onButtonClick(){

        }
    },
    created(){
        settitle('地址管理');
    },
    mounted() {
        
    },
}
</script>
<style lang="less">
#address{
    width: 100%;
    height: 100%;
    background: #F3F5F8;
    .vux-swipeout-content{
        border-radius:0.12rem;
    }
    .address_container{
        padding: 0.2rem;
        .del_btn{
            // border-radius:0rem 1rem 1rem 0rem;
        }
        .address_list{
            display: flex;
            justify-content: space-between;
            padding: 0.36rem 0.31rem 0.36rem 0.34rem;
            margin-bottom: 0.1rem;
            border-radius:0.01rem;
            .name_size{
                display: flex;
                justify-content: space-around;
                flex-direction: column;
                margin-right:0.3rem;
                font-size:0.32rem;
                // line-height:2.25rem;
                white-space: nowrap;
                .defalut_address{
                    display: inline-block;
                    // width: 2rem;
                    padding: 0.01rem 0.08rem;
                    margin: 0 auto;
                    font-size:0.2em;
                    color: #fff;
                    // line-height:1.2rem;
                    border-radius:1rem;
                    background: #FA8665;
                }
            }
            .msg_mr{
                margin-right: 0.2rem;
            }
            .option{
                display: flex;
                align-items: center;
                img{
                    width: 0.42rem;
                    height: 0.42rem;
                }
            }
            .option:before{
                content: '';
                display: inline-block;
                width: 0.01rem;
                height: 1rem;
                margin-right: 0.2rem;
                border-right: 1px solid #E9E9E9; 
            }
        }
    }
    .add_button{
        position: fixed;
        bottom: 2.04rem;
        left: 50%;
        width:6.9rem;
        height:0.9rem;
        // margin: 0 auto;
        background:rgba(74,123,103,1);
        border-radius:0.12rem;
        font-size:0.32rem;
        text-align: center;
        line-height: 0.9rem;
        color:rgba(255,255,255,1);
        transform: translateX(-50%);

    }
}
</style>
