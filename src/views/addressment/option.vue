<template>
    <div id="opt_address">
        <div class="address_top">
            <div class="address_item">
                <x-input label-width="4em" :title='`<span style="${style}">收货人</span>`' placeholder="姓名"></x-input>
            </div>
            <div class="address_item">
                <x-input label-width="4em" :title='`<span style="${style}">手机号</span>`' placeholder="收货人电话" keyboard="number" is-type="china-mobile"></x-input>
            </div>
        </div>
        <div class="address_btm">
            <div class="address_item flex_between">
                <x-input label-width="5em" :title='`<span style="${style}">所在城市</span>`' disabled placeholder="请选择您所在的城市" keyboard="number" is-type="china-mobile"></x-input>
                <x-icon type="ios-arrow-right" class="icon_middle"></x-icon>
                
            </div>
            <div class="address_item">
                <x-input label-width="5em" :title='`<span style="${style}">收货地址</span>`' placeholder="详细地址" keyboard="number" is-type="china-mobile">
                    <x-icon slot="restricted-label" type="ios-arrow-right" class="icon_middle"></x-icon>
                </x-input>
            </div>
            <div class="address_item">
                 <x-switch title="设为默认地址"></x-switch>
                <!-- <x-input label-width="4em" :title='`<span style="${style}">手机号</span>`' placeholder="收货人电话" keyboard="number" is-type="china-mobile"></x-input> -->
            </div>
        </div>
        <div class="save_btn">保存</div>
    </div>
</template>
<script>
import { XInput,XSwitch } from 'vux'
export default {
    components:{
        XInput,
        XSwitch
    },
    data() {
        return {
            style: ''
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
@switch-checked-bg-color:#000000;
#opt_address{
    width: 100%;
    height: 100%;
    background: #F3F5F8;
    overflow-x: hidden;
    .address_top{
        margin: 0.2rem;
        background: #fff;
        border-radius: 0.12rem;
        
        
        
    }
    .weui-cell__hd{
        display: flex;
        align-items: center;
        flex-direction: row-reverse
    }
    .flex_between{
        display: flex;
        justify-content: space-between;
        align-items: center;
        .icon_middle{
           
            // vertical-align: middle;
        }
    }
    .address_item{
           
            margin: 0 0.2rem;
            border-bottom: 1px solid #F4F4F4;
            font-size: 0.32rem;
            .weui-cell{
                 padding: 0.28rem 0.38rem;
            }
           
        }
    .address_btm{
        margin: 0.2rem;
        margin-top: 0;
        background: #fff;
        border-radius: 0.12rem;
    }
    .save_btn{
        width:6.9rem;
        height:0.9rem;
        margin:1.27rem auto 0 auto;
        font-size:0.32rem;
        color: #fff;
        text-align:center;
        line-height: 0.9rem;
        background:rgba(74,123,103,1);
        border-radius:0.12rem;
    }
}
</style>
