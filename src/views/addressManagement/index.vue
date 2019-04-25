<template>
  <div>
    <div class="backgroun_color_fff a_m_w" v-for="(item,index) in addressList">
      <div class="font_size_14 font_color_66 a_m_m">
        <span>{{item.receiver}}</span>
        {{item.phone}}
      </div>
      <div
        class="margin_top_div3 font_size_14 font_color_33"
        style="margin-left:4%"
      >{{item.province}}{{item.city}}{{item.area}}{{item.receiveAddress}}</div>
      <div
        class="div_display_flex margin_top_div5"
        style="padding:0 5% 5% 4%;justify-content:space-between;"
      >
        <div style="width:30%;display:flex;align-items:center;">
          <div @click="checkBtn(index,item.id)" :checked="item.isDefault">
            <check-icon
              :value.sync="item.isDefault"
              size="20px"
              style="display:flex;align-items:center;"
            ></check-icon>
          </div>
          <!-- <span class="radio" :class="{'on':item.isDelete}"></span>
          <input
            v-model="item.isDelete"
            :value="1"
            class="input-radio"
            :checked="item.isDelete"
            @click="checkAddress(index,item.id)"
            type="radio"
          >-->
          <!-- /weChat/order/updateIsDefault/{addressId}/{employeeId} -->
          <span style="font-size:14px;color:#666">默认地址</span>
        </div>
        <div class="div_display_flex operat_box">
          <div class="div_display_flex" @click="openAddressM(item,item.id)">
            <img src="../../assets/images/edit@2x.png" width="20px" height="20px" class="middle">
            <div style="font-size:14px;color:#666">编辑</div>
          </div>
          <div class="div_display_flex" @click="delAddress(item.id)">
            <img src="../../assets/images/delete@2x.png" width="20px" height="20px" class="middle">
            <div style="font-size:14px;color:#666">删除</div>
          </div>
        </div>
      </div>
    </div>
    <div style="margin-left: 20%; margin-top: 10%;">
      <div class="a_m_b backgroun_color_fe01" @click="openAddressM">+ 新增收货地址</div>
    </div>
    <!-- 新增地址 -->
    <!-- <div v-if="AddressMFalge" class="ofo_address_w">
        <div class="div_display_flex" style="width:100%;align-items:center;">
          <div class="" style="margin-right:2%;display:flex;align-items:center;">
            <span class="font_size_13 font_color_00">联系人:</span>
            <input  placeholder="请输入您的名字" style="margin-left:6px;width: calc(100% -  54px);vertical-align: middle;">
          </div>
          <div class=""  style="margin-left:2%;">
            <span class="font_size_13 font_color_00">手机号:</span>
            <input type="text" placeholder="请输入手机号 "  style="margin-left:6px;width: calc(100% -  54px)">
          </div>
        </div>
        <div class="margin_top_div5">
          <span class="font_size_13 font_color_00">所在地区：</span>
          <input type="text" placeholder="请选择您当前所在的地区" :style="{'width': '66%',color: address ? '#101010' : ''}" v-model="address" disabled>
          <img
            src="../../assets/images/dingdan_weizhankai@3x.png"
            style="width:8%;vertical-align: middle;"
            @click="goToAddressManagement"
          >
          <x-address style="display:none" @on-hide="logHide"  title="title" v-model="addressValue" :list="addressData" placeholder="请选择地址" :show.sync="showAddress"></x-address>
        </div>
        <div class="margin_top_div5">
          <span class="font_size_13 font_color_00">详细地址：</span>
          <input type="text" placeholder="请输入您的详细地址">
        </div>
        <div style="padding-bottom: 8%;">
          <div class="ofo_b_c_d" @click="saveAddress">保存地址</div>
        </div>
    </div>-->
    <div v-if="AddressMFalge">
      <div class="model_background" @click="closeAddressMFalge($event)">
        <div class="model_a_m" id="card">
          <div style="padding:0.8rem;">
            <div class="div_display_flex" style="width:100%;align-items:center;">
              <div class style="margin-left:0.2rem;display:flex;align-items:center;">
                <span class="font_size_13 font_color_00">联系人:</span>
                <input
                  placeholder="请输入您的名字"
                  style="width: calc(100% -  54px);vertical-align: middle;"
                  v-model="name"
                >
              </div>
              <div class style="margin-left:0.2rem;">
                <span class="font_size_13 font_color_00">手机号:</span>
                <input
                  type="text"
                  placeholder="请输入手机号 "
                  style="width: calc(100% -  54px)"
                  v-model="phoneNumber"
                >
              </div>
            </div>
            <div class="margin_top_div5 address_box">
              <span class="font_size_13 font_color_00">所在地区：</span>
              <input
                type="text"
                placeholder="请选择您当前所在的地区"
                :style="{'width': '66%',color: address ? '#101010' : ''}"
                v-model="address"
                disabled
              >
              <img
                src="../../assets/images/dingdan_weizhankai@3x.png"
                style="width:8%;vertical-align: middle;"
                @click.stop="goToAddressManagement"
              >
              <x-address
                style="display:none"
                @on-hide="logHide"
                title="title"
                v-model="addressValue"
                :list="addressData"
                placeholder="请选择地址"
                :show.sync="showAddress"
              ></x-address>
            </div>
            <div class="margin_top_div5">
              <span class="font_size_13 font_color_00">详细地址：</span>
              <input type="text" placeholder="请输入您的详细地址" v-model="detailedAddress">
            </div>
            <div>
              <div class="ofo_b_c_d" @click="saveAddress" v-if="!editFalg">保存地址</div>
              <div class="ofo_b_c_d" @click="editAddressD" v-if="editFalg">保存地址</div>
            </div>
            <!-- <div class="div_display_flex a_m_left4 margin_top_div5">
              <div class="ofo_w_50 ">
                <span class="font_size_13 font_color_00">联系人:</span>
                <input type="text" placeholder="请输入您的名字">
              </div>
              <div class="ofo_w_50">
                <span class="font_size_13 font_color_00">手机号:</span>
                <input type="text" placeholder="请输入手机号">
              </div>
            </div>
            <div class="margin_top_div5 a_m_left4" >
              <span class="font_size_13 font_color_00">所在地区：</span>
              <input type="text" placeholder="请选择您当前所在的地区" style=" width: 70%;">
              <img
                src="../../assets/images/dingdan_weizhankai@3x.png"
                style="width:8%;"
              >
            </div>
            <div class="margin_top_div5 a_m_left4">
              <span class="font_size_13 font_color_00">详细地址：</span>
              <input type="text" placeholder="请选择您的详细地址">
            </div>
            <div style="padding-bottom: 8%;">
              <div class="ofo_b_c_d">保存地址</div>
            </div>-->
          </div>
        </div>
      </div>
    </div>
    <confirm v-model="outPayFalge" title @on-cancel="onCancel" @on-confirm="onConfirm">
      <div style="text-align:center;font-size:18px;">删除当前地址？</div>
    </confirm>
  </div>
</template>
<script>
import url from "../../bin/url";
import {
  CheckIcon,
  Confirm,
  XAddress,
  ChinaAddressV4Data,
  Value2nameFilter as value2name,
  TransferDomDirective as TransferDom
} from "vux";
export default {
  directives: {
    TransferDom
  },
  components: {
    CheckIcon,
    XAddress,
    Confirm
  },
  name: "addressManagement",
  data() {
    return {
      showAddress: false,
      addressValue: [],
      addressData: ChinaAddressV4Data,
      address: "",
      demo1: false, //默认
      outPayFalge: false,
      AddressMFalge: false, //添加地址
      addressList: [],
      name: "", //联系人姓名
      detailedAddress: "", //详细地址
      phoneNumber: "", //手机号码
      aemployeeId: "", //会员编码
      addressId: "", //地址id
      editFalg: false, //是否编辑
    };
  },
  methods: {
    //删除地址询问框
    delAddress(addressId) {
      this.outPayFalge = true;
      this.addressId = addressId;
    },
    // 地址删除取消
    onCancel() {},
    // 地址删除确认
    onConfirm() {
      this.$fetch
        .post("weChat/order/deleteAddress/" + this.addressId)
        .then(data => {
          if (data.success) {
            this.outPayFalge = false;
            this.getAddressList();
          }
        });
    },
    //  地址点击完成时
    logHide(str) {
      if (str) {
        var name = value2name(this.addressValue, ChinaAddressV4Data);
        this.addressF = name.trim().split(" ");
        this.address = name;
      }
    },
    //  新增地址 编辑地址
    openAddressM(item, id) {
      if (item.receiver) {
        this.name = item.receiver;
        this.address = item.province + "" + item.city + "" + item.area;
        this.phoneNumber = item.receiver;
        this.detailedAddress = item.receiveAddress;
        this.addressF = this.address.trim().split(" ");
        this.addressF[0] = item.province;
        this.addressF[1] = item.city;
        this.addressF[2] = item.area;
        this.editFalg = true;
        this.addressId = id;
      } else {
        this.editFalg = false;
      }

      this.AddressMFalge = true;
    },
    goToAddressManagement() {
      this.showAddress = true;
    },
    //   关闭
    closeAddressMFalge(e) {
      if (!e.target.offsetParent) {
        this.AddressMFalge = false;
        this.showAddress = false;
        this.name = "";
        this.address = "";
        this.phoneNumber = "";
        this.detailedAddress = "";
      }
    },
    // 获取地址列表
    getAddressList() {
      this.$fetch
        .post("weChat/order/getAddressList/" + this.token.employeeId)
        .then(data => {
          if (data.success) {
            this.addressList = data.obj;
            this.addressList.forEach((e, index) => {
              if (e.isDefault == 1) {
                e.isDefault = true;
              } else {
                e.isDefault = false;
              }
            });
          }
        });
    },
    // 地址保存
    saveAddress() {
      //  console.log( name1.trim().split(" "));
      this.AddressFalge = false;
      this.showMenus = true;
      this.$fetch
        .post(
          "weChat/order/saveAddress/" +
            this.token.employeeId +
            "/" +
            this.name +
            "/" +
            this.phoneNumber +
            "/" +
            this.detailedAddress +
            "/" +
            this.addressF[0] +
            "/" +
            this.addressF[1] +
            "/" +
            this.addressF[2]
        )
        .then(data => {
          if (data.success) {
            this.AddressMFalge = false;
            this.getAddressList();
          }
        });
    },
    // 编辑保存
    editAddressD() {
      this.$fetch
        .post(
          "weChat/order/editAddress/" +
            this.addressId +
            "/" +
            this.name +
            "/" +
            this.phoneNumber +
            "/" +
            this.detailedAddress +
            "/" +
            this.addressF[0] +
            "/" +
            this.addressF[1] +
            "/" +
            this.addressF[2]
        )
        .then(data => {
          if (data.success) {
            this.AddressMFalge = false;
            this.getAddressList();
          }
        });
    },

    // 选择框处理
    checkBtn(index, id) {
      // 先取消所有选中项
      this.addressList.forEach(item => {
        item.isDefault = false;
      });
      //再设置当前点击项选中
      this.radio = this.addressList[index].value;
      // 设置值，以供传递
      this.addressList[index].isDefault = true;
      console.log(this.radio);
      this.$fetch
        .post(
          "weChat/order/updateIsDefault/" + id + "/" + this.token.employeeId
        )
        .then(data => {
          if (data.success) {
            this.getAddressList();
          }
        });
    }
  },
  created() {
    console.log(this);
    settitle("地址管理");
    // this.routeParams = JSON.parse(this.$route.params.obj);
    // console.log(this.routeParams);
  },

  mounted() {
    // 获取地址列表
    this.getAddressList();
    // console.log(url);
  },
  computed: {
    token() {
      return JSON.parse(localStorage.getItem("user"));
    }
  }
};
</script>
<style >
.weui-icon-success,
.weui-icon-circle {
  font-size: 16px !important;
}
.weui-dialog__btn_primary {
  color: #ffe001 !important;
}
</style>

<style scoped>
input {
  outline: none;
  border: none;
  background-color: #fff;
  font-size: 13px;
  font-family: PingFang-SC-Medium;
}
.space_round {
  justify-content: space-around;
}
.operat_box {
  width: 120px;
  line-height: 21px;
  justify-content: space-between;
  align-items: center;
}
.address_box {
  display: flex;
  justify-content: space-between;
  height: 1.6rem;
  align-items: center;
}
.middle {
  vertical-align: middle;
}
.model_background {
  z-index: 10;
}
.a_m_w {
  width: 90%;
  margin-top: 5%;
  margin-left: 5%;
}
.a_m_m {
  margin-left: 4%;
  padding-top: 4%;
}
.a_m_b {
  width: 250px;
  height: 40px;
  border-radius: 20px;
  text-align: center;
  line-height: 3;
  font-size: 14px;
  color: #000;
}
.model_a_m {
  position: fixed;
  display: block;
  z-index: 5000;
  width: 90%;
  margin: auto;
  background-color: #ffffff;
  border-radius: 3px;
  overflow: hidden;
  top: 25%;
  margin-left: 5%;
}
.ofo_b_c_d {
  width: 89px;
  height: 25px;
  border-radius: 13px;
  background-color: #101010;
  color: #fff;
  text-align: center;
  font-size: 13px;
  line-height: 2;
  margin-top: 8%;
  margin-left: 40%;
}
.ofo_w_50 {
  width: 50%;
}
.a_m_left4 {
  margin-left: 4%;
}
</style>