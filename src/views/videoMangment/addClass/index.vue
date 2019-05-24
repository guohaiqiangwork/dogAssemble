<template>
    <div id="addClasses">
        <div class="addfeal">
            <p class="flex-end align-center"> 
                <x-icon type="ios-plus-empty" size="30"></x-icon>
                <a href="#" @click.stop="Add">添加</a>
            </p>
            <div class="main">
                <div class="add-content" v-if="addShow">
                    <div class="add-input">
                        <x-input label-width="5em" :title='`<span style="${style}">二级分类</span>`' placeholder="请输入名称" keyboard="number" is-type="china-mobile">
                    
                        </x-input>
                    </div>
                    <p class="desc-name">视频说明</p>
                    <x-textarea :max="100" :placeholder="('placeholder')" @on-focus="onEvent('focus')" @on-blur="onEvent('blur')"></x-textarea>
                </div>


                <div class="add-content" v-else>
                    <div class="add-input flex-between align-center">
                        <p>
                            <span>二级分类</span><span class="ml-2">案例</span>
                        </p>
                        <img class="del-icon" src="../../../assets/images/del.png" alt="">
                    </div>
                    <p class="desc-name">视频说明</p>
                    <div class="desc-text">  查看此视频对糖尿病患者有帮助查看此视频对糖
                                    尿病患者有帮助查看此视频对糖尿病患者有帮助
                                    查看此视频对糖尿病患
                    </div>


                
                </div>
            </div>
            <div class="sub-btn">
                    提交
                </div>
        </div>
    </div>
</template>
<script>
import { XInput,XTextarea } from 'vux'
export default {
    components:{
        XInput,XTextarea
    },
    data() {
        return {
            style: '',
            addShow:false,
        }
    },
    methods: {
        onEvent() {
            
        },
        Add() {
            this.addShow = true;
        }
    },
    mounted() {
        
    },
}
</script>
<style lang="less">
#addClasses{
    height: 100%;
    width: 100%;
    background: #F3F5F8;
    overflow-x: hidden;
    .vux-x-input.weui-cell{
        padding: 0;
    }
    .weui-cell.vux-x-textarea{
        border: 1px solid #F4F4F4;
    }
    .ml-2{
        margin-left: 0.2rem;
    }
    .addfeal{
        margin: 0.2rem 0.2rem 0 0.2rem;
        padding: 0.4rem 0.34rem;
        background: #fff;
        height: calc(100% - 0.2rem);
        font-size: 0.3rem;
        box-sizing: border-box;
        border-radius: 0.12rem;
        a{
            color: #333;
        }
         .sub-btn{
                position: fixed;
                left: 0.7rem;
                bottom:0.4rem;
                width:5.71rem;
                height:0.9rem;
                background:rgba(74,123,103,1);
                border-radius:0.12rem;
            }
            .main{
                overflow-x: hidden;
            }
        .add-content{
            .add-input{
                padding: 0.5rem 0 0.27rem 0;
                border-bottom: 1px solid #F4F4F4;
                .del-icon{
                    width: 0.3rem;
                    height: 0.3rem;
                }
            }
            .desc-name{
                padding:0.3rem 0;
                
            }
            .desc-text{
                padding: 0.25rem;
                height: 2.5rem;
                max-height: 2.5rem;
                border: 1px solid #E9E9E9;
            }
           
        }
    }
}
</style>
