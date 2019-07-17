<template>
  <div>
    <!-- 题目 -->
    <div v-for="(item,index) in TiM" :key="index">
      <div class="answer_T">
        <div class="hot_tit"></div>
        <div>{{item.names}}</div>
      </div>
      <div
        class="answer_an"
        v-for="(itm ,index) in item.daAn"
        :key="index"
        @click="getDN(itm.id,item.id,index)"
        :style="{ backgroundColor:(itm.checked ? 'red' : '')}"
      >{{itm.name}}</div>
    </div>
    <button @click="getSubmit" style="float:left;background-color:red;width:50%">分值</button>
  </div>
</template>
<script>
import url from "../../bin/url";
export default {
  name: "answer",
  data() {
    return {
      TiM: [
        {
          names:
            "健康快乐看了看；可；看来；看来；看来；看来；可看来接口连接空间看来接口了看来",
          id: "0",
          daAn: [
            { name: "A.2342342", id: "A", checked: false },
            { name: "B.2342342", id: "B", checked: false },
            { name: "C.2342342", id: "C", checked: false },
            { name: "D.2342342", id: "D", checked: false }
          ]
        },
        {
          names: "dsa来；看来；看来；看来；可看来接口连接空间看来接口了看来",
          id: "1",
          daAn: [
            { name: "A.2342342", id: "A", checked: false },
            { name: "B.2342342", id: "B", checked: false },
            { name: "C.2342342", id: "C", checked: false },
            { name: "D.2342342", id: "D", checked: false }
          ]
        },
        {
          names:
            "dsfsdfdfsww看来；看来；看来；可看来接口连接空间看来接口了看来",
          id: "2",
          daAn: [
            { name: "A.2342342", id: "A", checked: false },
            { name: "B.2342342", id: "B", checked: false },
            { name: "C.2342342", id: "C", checked: false },
            { name: "D.2342342", id: "D", checked: false }
          ]
        }
      ],
      dnList: [], //答案列表
      bdnList: ["A", "C", "B", "A"], //对答案列表
      classA: "",
      classB: "",
      AAA: ""
    };
  },
  methods: {
    getDN(Nid, Tid, index) {
      this.classA = Tid;
      this.classB = Nid;
      this.TiM[Tid].daAn.forEach(element => {
        element.checked = false;
      });
      this.TiM[Tid].daAn[index].checked = true;
      // 多选  this.TiM[Tid].daAn[index].checked = !this.TiM[Tid].daAn[index].checked;
      this.dnList[Tid] = Nid;
    },
    getSubmit() {
      let A = 0;
      for (var j = 0; j < this.bdnList.length; j++) {
        if (this.bdnList[j] == this.dnList[j]) {
          A += 2;
        }
      }
      console.log(A);
    }
  },
  created() {
    settitle("答题");
  },

  mounted() {}
};
</script>
<style scoped>
.answer_an {
  width: 25%;
  border: 1px solid red;
  text-align: center;
  float: left;
  margin-left: 5%;
  margin-top: 3%;
}
.answer_T {
  float: left;
  width: 90%;
  margin-left: 5%;
  margin-top: 3%;
  display: flex;
}
.hot_tit {
  background-color: red;
  width: 0.15rem;
  height: 0.3rem;
  border-radius: 1rem;
  margin-right: 2%;
}
</style>