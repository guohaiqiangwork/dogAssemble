<template>
  <div id="address">
    <div class="address_container" v-if="addressList.length != 0">
      <swipeout v-for="(item,index) in addressList" :key="index"  >
        <swipeout-item
      
          @on-close="handleEvents('on-close')"
          @on-open="handleEvents('on-open')"
          transition-mode="follow"
        >
          <div slot="right-menu">
            <swipeout-button
              @click.native="onButtonClick(item.id)"
              type="primary"
              class="del_btn"
            >{{'删除'}}</swipeout-button>
            <!-- <swipeout-button @click.native="onButtonClick('delete')" type="warn">{{$t('Right')}}</swipeout-button> -->
          </div>
          <div slot="content" class="vux-1px-t address_list"  @click="goBack(item)">
            <div class="name_size">
              <p>{{item.receiver}}</p>
              <span class="defalut_address" v-show="item.isDefault == 1">默认</span>
            </div>
            <div class="msg_mr">
              <p>{{item.phone}}</p>
              <p>{{item.receiveAddress}}</p>
            </div>
            <div class="option">
              <img @click.stop="addAddress(item)" src="../../assets/images/edit.png" alt>
            </div>
          </div>
        </swipeout-item>
      </swipeout>
    </div>
    <div v-if="addressList.length == 0" style="background-color: #fff;text-align: center;height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;">
        暂无地址
    </div>
    <div class="add_button">
      <x-icon type="ios-plus-outline" size="28"></x-icon>
      <span class="ml-space" @click="addAddress('ent')">新增收货地址</span>
    </div>
  </div>
</template>
<script>
import url from "../../bin/url";
import { Swipeout, SwipeoutItem, SwipeoutButton } from "vux";
export default {
  components: {
    Swipeout,
    SwipeoutItem,
    SwipeoutButton
  },
  data() {
    return {
      addressList: [
      ],
      sub:false,
    };
  },
    beforeRouteEnter (to, from, next) {
    if(from.name == 'setUp'){
      next(vm =>{
        vm.sub = true;
      })
    }else{
      next();
    }
  },
  methods: {
    handleEvents() {},
    handleEvents() {},
    // 删除地址
    onButtonClick(item) {
      let _obj = {
        openId: localStorage.getItem("openId"),
        id: item
      };
      this.$fetch.post(url.deleteAddress, _obj).then(
        data => {
          if (data.code == 0) {
            this.$vux.toast.text('地址删除成功')
            this.getAddress(); //刷新列表
          }else{
             alert(data.msg)
          }
        },
        err => {
          alert("网络缓慢。。");
        }
      );
    },
    goBack(item){
      if(this.sub){
        return
      }
      console.log(item,'000')
      // this.$router.push('/paysure',{
      //   data:{
          
      //   }
        
      // })
      console.log(this.$route.query.data,'jkj')
      // this.$route.query.data = JSON.stringify(this.$route.query.data);
      console.log(this.$route,888);
      this.$router.push({
        name: "paysure",
        params: {
          obj: JSON.stringify({
            data: {
              item:item.id
            }
          })
        },
        query:this.$route.query
      });
    },
    // addAddress() {
    //   this.$router.push("/addressopt");
    // },
    // 地址编辑新增
    addAddress(item) {
      console.log(this.$route,98080);
      if (item != 'ent') {
        this.pathF = true;
      }
      this.$router.push({
        name: "addressopt",
        params: {
          obj: JSON.stringify({
            type: "profession",
            data: {
              item,
              pathF: this.pathF
            }
          })
        },
        query:this.$route.query
      });
      //   this.$router.push("/addressopt");
    },
    // 获取地址
    getAddress() {
      this.$fetch
        .post("fruits/app/cart/getAddressList", { openId: localStorage.getItem("openId") })
        .then(res => {
          console.log(res,'kkk')
          this.addressList = [...res.obj];
        });
    }
  },
  created() {
    settitle("地址管理");
  },
  mounted() {
      console.log(this.$route,9880);

    this.getAddress();
  }
};
</script>
<style lang="less">
#address {
  width: 100%;
  height: calc(100% - .9rem);
  background: #f3f5f8;
  overflow-x: hidden;
  .vux-swipeout-button-primary {
    background: #4a7b67;
  }
  .vux-swipeout-content {
    border-radius: 0.12rem;
  }
  .vux-x-icon {
    fill: #fff;
  }
  .address_container {
    padding: 0.2rem;
    padding-bottom: 1.2rem;
    .del_btn {
      // border-radius:0rem 1rem 1rem 0rem;
    }
    .address_list {
      display: flex;
      justify-content: space-between;
      padding: 0.36rem 0.31rem 0.36rem 0.34rem;
      margin-bottom: 0.1rem;
      border-radius: 0.01rem;
      .name_size {
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        margin-right: 0.3rem;
        font-size: 0.32rem;
        // line-height:2.25rem;
        white-space: nowrap;
        .defalut_address {
          display: inline-block;
          // width: 2rem;
          padding: 0.01rem 0.08rem;
          margin: 0 auto;
          font-size: 0.2rem;
          color: #fff;
          // line-height:1.2rem;
          border-radius: 1rem;
          background: #fa8665;
        }
      }
      .msg_mr {
        width: 4.5rem;
        // background: red;
        position: absolute;
        left: 1.5rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
          
        p:nth-of-type(2){
          margin-top: .15rem;
          word-break: break-all;
        }
      }
      .option {
        display: flex;
        align-items: center;
        img {
          width: 0.42rem;
          height: 0.42rem;
        }
      }
      .option:before {
        content: "";
        display: inline-block;
        width: 0.01rem;
        height: 1rem;
        margin-right: 0.2rem;
        border-right: 1px solid #e9e9e9;
      }
    }
  }
  .add_button {
    position: fixed;
    bottom:.9rem;
    left: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 6.9rem;
    height: 0.9rem;
    background: rgba(74, 123, 103, 1);
    border-radius: 0.12rem;
    font-size: 0.32rem;
    color: rgba(255, 255, 255, 1);
    transform: translateX(-50%);
    .ml-space {
      margin-left: 0.06rem;
    }
  }
}
</style>
