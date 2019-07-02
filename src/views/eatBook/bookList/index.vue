<template>
  <nut-scroller
    :is-un-more="isUnMore1"
    :is-loading="isLoading1"
    :type="'vertical'"
    @loadMore=" selPullUp"
    @pulldown="pulldown"
  >
    <!-- <div  class="nut-vert-list-panel"> -->
    <!-- <div class="nut-vert-list-item" v-for="(item, index) of listData1" :key="index">
            <dl class="nut-scroller-item-info">
                <dt>防水升级版 蓝牙音箱 低音炮 IPX7设计 户外便携音响 迷你小音</dt>
                <dd>2018-02-25</dd>
            </dl>
    </div>-->
    <div id="book" slot="list" class="nut-vert-list-panel">
      <div class="search_box">
        <i class="weui-icon-search search_icon"></i>
        <input type="text" placeholder="搜索您想找的产品" v-model="iptVal" @input="input">
        <i></i>
      </div>
      <template v-if="bookList.length">

      
      <div v-for="(item,index) in bookList" :key="index" >
        <book-list :item="item">
          <div slot="content">
            <div v-for="(iten,ind) in item.memberRecipes" :key="ind" v-show="item.type == 0">
              <div
                :class="['kind-list',iten.cupName == '大杯'?'before-tag':'before-tag before-tag-sm']"
              >
                <span
                  class="kind-item"
                  v-for="(info,inx) in iten.cupInfos"
                  :key="inx"
                >{{info.foodName+info.gram+'克'}}</span>
              </div>
            </div>
            <div class="kind-list" v-show="item.type == 1">
              <span
                class="kind-item"
                v-for="(info,inx) in item.biguFoods"
                :key="inx"
              >{{info.foodName+info.gram+'克'}}</span>
            </div>
          </div>
        </book-list>
      </div>
      </template>
      <div v-else class="nodata">
        暂无数据
      </div>
    </div>
    <!-- </div> -->
  </nut-scroller>
</template>
<script>
export default {
  props: {
    // bookList: {
    //     type: Array,
    //     // 对象或数组默认值必须从一个工厂函数获取
    //     default: function () {
    //         return []
    //     }
    // },
  },
  components: {
    bookList: resolve => require(["../book/index.vue"], resolve)
  },
  data() {
    return {
      isUnMore1: false,
      isLoading1: false,
      show: "da",
      bookList: [],
      form: {
        openId: localStorage.getItem("openId"),
        name: "",
        size: "3",
        current: "1"
      },
      iptVal: "",
      timer: ""
    };
  },
  methods: {
    handleScroll() {},
    getRecipeList() {
      this.$vux.loading.show({
        text: "Loading"
      });

      this.$fetch
        .post("fruits/app/recipe/getRecipeList", this.form)
        .then(res => {
          console.log(res, 999);
          this.$vux.loading.hide();

          if (res.code.length == 0) {
            this.isUnMore1 = true;
            return;
          }
        //    else {
        //     alert(res.msg);
        //   }
          this.$nextTick(() => {
            res.obj.forEach(e => {
              this.bookList.push(e);
            });
          });
        });
    },
    selPullUp() {
      this.form.current++;
      this.$nextTick(() => {
        this.getRecipeList();
      });

      console.log("上拉刷新数据");
    },
    pulldown() {
      this.bookList = [];
      this.isUnMore1 = false;
      this.form.current = 1;
      this.getRecipeList();
    },
    input() {
      if (this.timer) {
        clearTimeout(this.timer);
        this.timer = "";
      }
      this.timer = setTimeout(() => {
        this.form.name = this.iptVal;
        this.form.current = 1;
        this.bookList = [];
        this.getRecipeList();
      }, 1000);
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    this.getRecipeList();
  }
};
</script>
<style lang="less">
.nut-scroller {
  background: #f3f5f8;
}
.nodata{
    width: 100%;
    height: 9rem;
    display: flex;
    font-size: 12px;
     background: #f3f5f8;
    justify-content: center;
    align-items: center;
    align-self: center;
}
.weui-toast {
  width: 200px;
  min-height: 50px;
}
#book {
  // margin: 0.4rem;
  height: 100%;
  width: 100%;
  background: #f3f5f8;
  overflow-x: hidden;
  .search_box {
    // position: relative;
    // top: 0;
    // left: 0;
    height: 0.7rem;
    width: 6.9rem;
    margin: 0.14rem auto;
    padding: 0 0.31rem;
    // margin: 0.65rem 1.5rem 0;
    border-radius: 0.35rem;

    box-sizing: border-box;
    // z-index: 1;
    display: flex;
    align-items: center;
    background: #efefef;
    line-height: 3.5rem;
    input {
      width: 100%;
      height: 100%;
      outline: none;
      border: none;
      background: #efefef;
    }
    .search_icon {
      font-size: 0.28rem;
      padding-right: 0.2rem;
    }
  }
}
</style>
