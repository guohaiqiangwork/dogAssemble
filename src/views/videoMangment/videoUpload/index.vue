<template>
    <div id="upload">
        <div class="cintainer">
            <!--  一级分类 -->
            <popup-picker v-show="false" :popup-title="'please select'" :title="title1" :data="list1" :show="pickershow" v-model="value1_1" cancel-text="x" @on-hide="onHide" @on-change="onChange" :placeholder="'please select'">
            </popup-picker>
            <!-- 二级分类 -->
            <popup-picker v-show="false" :popup-title="'please select'" :title="title1" :data="list1" :show="pickershow" v-model="value1_1" confirm-text="设置" cancel-text="x" @on-hide="onHide" @on-change="onChange" :placeholder="'please select'">
            </popup-picker>
            <div v-transfer-dom>
                <x-dialog v-model="show" class="dialog">
                    <div class="card">
                        <div class="card-title flex-between align-center">
                            <span @click="show =false">X</span>
                            <span class="flex-between align-center">
                                <x-icon type="ios-plus-empty" size="30"></x-icon>
                                <span class="btm-line">添加</span>
                            </span>
                        </div>
                        <div class="card-content">
                            <p class="line-txt" v-for="(item,index) in kindList" :key="index">
                                <x-input label-width="5em" :title='`<span style="${style}">二级分类:</span>`' placeholder="名字输入" keyboard="number" is-type="china-mobile"></x-input>
                            </p>
                            <!-- <p class="line-txt mt-space">
                                <x-input label-width="5em" :title='`<span style="${style}">二级分类:</span>`' placeholder="名字输入" keyboard="number" is-type="china-mobile"></x-input>
                            </p>
                            <p class="line-txt mt-space">
                                <x-input label-width="5em" :title='`<span style="${style}">二级分类:</span>`' placeholder="名字输入" keyboard="number" is-type="china-mobile"></x-input>
                            </p> -->
                        </div>
                    </div>
                    <div class="sub-btn">
                        提交
                    </div>
                </x-dialog>
                <!-- <alert v-model="show"  @on-show="onShow" @on-hide="atHide"> <div>dsad</div></alert> -->
            </div>

            <div class="list flex-between align-center"  @click="pickershow = true">
                <span>分类</span>
                <x-icon type="ios-arrow-right" class="icon_middle"></x-icon>
            </div>

            <div class="list flex-between align-center"  @click="pickershow = true">
                <span>二级分类</span>
                <x-icon type="ios-arrow-right" class="icon_middle"></x-icon>
            </div>

            <div class="list flex-between align-center"  @click="pickershow = true">
                <span>集序</span>
                <x-icon type="ios-arrow-right" class="icon_middle"></x-icon>
            </div>

            <div class="list">
                <x-input label-width="5em" :title='`<span style="${style}">视频链接</span>`' placeholder="请输入视频链接" keyboard="number" is-type="china-mobile"></x-input>
            </div>

            <div class="list">
                 <x-input label-width="5em" :title='`<span style="${style}">视频价格</span>`' placeholder="请输入视频价格" keyboard="number" is-type="china-mobile"></x-input>
            </div>

            <div class="list border_non">
                <p class="video_desc">视频说明</p>
                 <x-textarea :max="100" placeholder="请输入视频简介" @on-focus="onEvent('focus')" @on-blur="onEvent('blur')"></x-textarea>
            </div>

            <div class="upload_btn">
                上传
            </div>
        </div>
    </div>
</template>
<script>
import { XInput, XTextarea, PopupPicker, Alert, XDialog, TransferDomDirective as TransferDom  } from 'vux'
export default {
    directives: {
        TransferDom
    },
    components:{
        XInput,XTextarea,PopupPicker,Alert,XDialog
    },
    data() {
        return {
            style: '',
            title1: '手机机型',
            list1: [['小米', 'iPhone', '华为', '情怀', '三星', '其他', '不告诉你']],
            value1_1: ['iPhone'],
            pickershow:false,
            show:false,
            confirmtext:'',
            kindList:[
                {

                }
            ],
        }
    },
    methods: {
        onEvent() {
            
        },
        onHide(str){
            this.pickershow =false;
            this.show = str;
        },
        atHide(){

        },
        onChange(){},
    },
}
</script>
<style lang="less">
.weui-dialog{
    width: 80%;
    max-width: 80%;
}
.card{
    font-size: 0.3rem;
    .card-title{
        padding: 0.3rem 0.3rem 0.2rem 0.3rem;
        border-bottom: 1px solid #f4f4f4;
        .btm-line{
            text-decoration: underline;
        }
    }
    .card-content{
        padding: 0.38rem 0.36rem 0.4rem 0.36rem;
        .line-txt{
            line-height: 0.3rem;
        }
        .mt-space{
            margin-top: 0.33rem;
        }
    }
    .weui-cell{
        padding: 0;
    }
}
.sub-btn{
    width:100%;
    height:0.98rem;
    background:rgba(74,123,103,1);
    color: #fff;
    font-size: 0.32rem;
    text-align: center;
    line-height: 0.98rem;
    border-radius: 0 0 3px 3px;
}
#upload{
    width: 100%;
    height: 100%;
    background: #F3F5F8;
    overflow-x: hidden;
  
    .vux-x-icon {
        fill: #A1A1A1;
    }
    .vux-x-input.weui-cell{
        padding: 0;
    }
    .vux-x-textarea{
        border: 1px solid #F4F4F4;
    }
    .cintainer{
        margin: 0.2rem;
        background: #fff;
        height: calc(100% - 0.4rem);
        .list{
            padding: 0.27rem 0;
            margin: 0 0.42rem;
            border-bottom: 1px solid #F4F4F4;
        }
        .video_desc{
            margin: 0 0 0.14rem 0;
        }
        .border_non{
            border:none;
        }
        
    }
    .upload_btn{
        width:5.71rem;
        height:0.9rem;
        margin: 1rem auto 0;
        background:rgba(74,123,103,1);
        font-size:0.32rem;
        color: #fff;
        border-radius:0.12rem;
        text-align: center;
        line-height: 0.9rem;
    }
}
</style>
