<template>
      <div id="opt_address">
        <div class="address_top">
            <div class="address_item">
    
                <x-input label-width="4em" v-model="addressBC.name"  :title='`<span style="${style}">收货人</span>`' placeholder="姓名"></x-input>
            </div>
            <div class="address_item">
                <x-input label-width="4em" v-model="addressBC.phone"  :title='`<span style="${style}">手机号</span>`' placeholder="收货人电话" keyboard="number" is-type="china-mobile" :show-clear="false"></x-input>
            </div>
        </div>
        <div class="address_btm">
            <div class="address_item flex_between"  @click="showAddress = true">
                <x-input label-width="5em" v-model="address"   :class="[address?'font-color' :'']" :title='`<span style="${style}">所在城市</span>`' disabled placeholder="请选择您所在的城市" keyboard="number" ></x-input>
                <x-icon type="ios-arrow-right" class="icon_middle"></x-icon>
                <x-address v-show="false" @on-hide="logHide" @on-show="logShow"  :title="title" v-model="addressVal"   :list="addressData" @on-shadow-change="onShadowChange" placeholder="请选择地址" inline-desc="可以设置placeholder" :show.sync="showAddress"></x-address>
            </div>
            <div class="address_item">
            
                <x-input label-width="5em"  v-model="addressBC.details" :title='`<span style="${style}">收货地址</span>`' :show-clear="false"  @on-blur="onBlur"    placeholder="详细地址" >
                    
                </x-input>
            </div>
            <div class="address_item">
                 <x-switch style="padding:.28rem 0.1rem .28rem .28rem;" title="设为默认地址" v-model="addressBC.isDefault"></x-switch>
                <!-- <x-input label-width="4em" :title='`<span style="${style}">手机号</span>`' placeholder="收货人电话" keyboard="number" is-type="china-mobile"></x-input> -->
            </div>
        </div>
    <div class="save_btn" v-if="pathFx != 'ent'" @click="addressoptX">保存</div>
    <div class="save_btn" v-if="pathFx == 'ent'" @click="addressopt">保存</div>
  </div>
</template>
<script>
import url from "../../bin/url";
import {
  XInput,
  XSwitch,
  XAddress,
  ChinaAddressV4Data,
  Value2nameFilter as value2name
} from "vux";
export default {
  components: {
    XInput,
    XSwitch,
    XAddress
  },
  data() {
    return {
      details: "",
      style: "",
      title: "",
      showAddress: false,
      addressVal: [],
      address: "",
      addressData: ChinaAddressV4Data,
      addressBC: {
        name: "", //姓名
        phone: "", //手机号码
        details: "", //详细地址
        isDefault: true,
        id: ""
      },
      addressF: "",
      pathFx:''
    };
  },
  methods: {
    getName(value) {
      return value2name(value, ChinaAddressV4Data);
    },
    logHide(str) {
      if (str) {
          console.log(this.addressVal,9999)
      console.log(this.address)
        this.address = value2name(this.addressVal, ChinaAddressV4Data);
        this.addressF = this.address.split(" ");
      }
    },
    logShow() {
    
    },
    onShadowChange(val) {
      console.log(val)
    },
    clearItem() {
      this.details = "";
      console.log(465);
    },
    onBlur(e, v, q) {
      console.log(e, v, q);
    },
    onChange(val){
      console.log(val,'ppp');
    },
    // 新增地址保存
    addressopt() {
      let _obj = {
        openId: localStorage.getItem("openId"),
        receiver: this.addressBC.name, //收货人
        phone: this.addressBC.phone, //电话
        province: this.addressVal[0],
        city: this.addressVal[1],
        area: this.addressVal[2],
        receiveAddress: this.addressBC.details,
        isDefault: this.addressBC.isDefault?1:0
      };
      if (_obj.isDefault) {
        _obj.isDefault = "1";
      } else {
        _obj.isDefault = "0";
      }
      this.$fetch.post(url.saveAddress, _obj).then(
        data => {
          if (data.code == 0) {
            // 刷新地址列表
            this.$router.push('/addressment?data='+this.$route.query.data+'&count='+this.$route.query.count+'&price='+this.$route.query.price)
          }else{
             alert(data.msg)
          }
        },
        err => {
          alert("网络缓慢。。");
        }
      );
    },
    // 修改地址保存
    addressoptX() {
      let _obj = {
        openId: localStorage.getItem("openId"),
         id: this.addressBC.id,
        receiver: this.addressBC.name, //收货人
        phone: this.addressBC.phone, //电话
        province: this.addressVal[0],
        city: this.addressVal[1],
        area: this.addressVal[2],
        receiveAddress: this.addressBC.details,
        isDefault: this.addressBC.isDefault,
       
      };
      if (_obj.isDefault) {
        _obj.isDefault = "1";
      } else {
        _obj.isDefault = "0";
      }
      this.$fetch.post(url.editAddress, _obj).then(
        data => {
          if (data.code == 0) {
            // 刷新地址列表
            this.$router.push({
        name: "addressment",
        params: {
          // obj: JSON.stringify({
          //   type: "profession",
          //   data: {
          //     item,
          //     pathF: this.pathF
          //   }
          // })
        },
        query:this.$route.query
      });
          }else{
             alert(data.msg)
          }
        },
        err => {
          alert("网络缓慢。。");
        }
      );
    },
    // 获取修改地址详情
    getAddress() {
      let _obj = {
        openId: localStorage.getItem("openId"),
        id: this.addressBC.id
      };
      this.$fetch.post(url.getAddress, _obj).then(
        data => {
          if (data.code == 0) {
            var addressValGet = [
              data.obj.province,
              data.obj.city,
              data.obj.area
            ];
            this.addressBC.name = data.obj.receiver,
            this.addressBC.details = data.obj.receiveAddress,
            this.addressBC.phone = data.obj.phone;
            this.addressBC.id = data.obj.id;
            this.addressVal[0] = data.obj.province;
            this.addressVal[1] = data.obj.city;
            this.addressVal[2] = data.obj.area;

            console.log(this.addressBC,'llllllll')
            this.address = value2name(addressValGet, ChinaAddressV4Data);
          }else{
            //  alert(data.msg)
          }
        },
        err => {
          alert("网络缓慢。。");
        }
      );
    }
  },
  created() {
    settitle("地址管理");
    console.log(this.$route,'kjklk')
    this.routeParams = JSON.parse(this.$route.params.obj);
    this.pathFx =this.routeParams.data.item
    if (this.routeParams.data.item != "ent") {
      console.log(this.routeParams,'iuyoiuoiuo')
        // this.addressBC.name = this.routeParams.data.item.receiver,
        // this.addressBC.details = this.routeParams.data.item.receiveAddress,
        // this.addressBC.phone = this.routeParams.data.item.phone;
        this.addressBC.id = this.routeParams.data.item.id;
    }
    this.getAddress();
  },
  mounted() {}
};
</script>
<style lang="less">
@switch-checked-bg-color: #000000;
.font-color.vux-x-input.disabled .weui-input{
   -webkit-text-fill-color: #333 !important;
  color: #333 !important;
}
#opt_address {
  width: 100%;
  height: 100%;
  background: #f3f5f8;
  overflow-x: hidden;
  .address_top {
    margin: 0.2rem;
    background: #fff;
    border-radius: 0.12rem;
  }
  .weui-cell__hd {
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
  }
  .flex_between {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .icon_middle {
      // vertical-align: middle;
    }
  }
  .address_item {
    margin: 0 0.2rem;
    border-bottom: 1px solid #f4f4f4;
    font-size: 0.32rem;
    .weui-cell {
      padding: 0.28rem 0.38rem;
    }
  }
  .address_btm {
    margin: 0.2rem;
    margin-top: 0;
    background: #fff;
    border-radius: 0.12rem;
  }
  .save_btn {
    width: 6.9rem;
    height: 0.9rem;
    margin: 1.27rem auto 0 auto;
    font-size: 0.32rem;
    color: #fff;
    text-align: center;
    line-height: 0.9rem;
    background: rgba(74, 123, 103, 1);
    border-radius: 0.12rem;
  }
}
</style>
