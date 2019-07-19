<template>
  <div>
    <div id="target"></div>
    <!-- 题目 A-->
    <div v-if="AFaly">
      <div class="answer_B_T">
        <div>
          <img
            src="../../assets/images/answerTITB@2x.png"
            style="margin-top: 36%; width: 90%; margin-left: 5%;"
            alt
          />
        </div>
        <div class="answer_T_n">
          <div v-for="(item,index) in TiMONe" :key="index">
            <div class="answer_T">
              <div class="hot_tit"></div>
              <div class="font_size_16 font_color_10" style="font-weight: 900;">{{item.names}}</div>
            </div>
            <div
              class="answer_an"
              v-for="(itm ,index) in item.daAn"
              :key="index"
              @click="getDN(itm.id,item.id,index)"
            >
              <div
                :style="{ backgroundColor:(itm.checked ? '#E9EFEC' : ''),fontWeight:(itm.checked ? '500' : '')}"
                class="answer_D_N font_size_14"
              >{{itm.name}}</div>
            </div>
          </div>
          <!-- <button @click="getSubmit" style="float:left;background-color:red;width:50%">分值</button> -->
          <div class="answer_bt" @click="goToB">下一步</div>
        </div>
      </div>
    </div>
    <!-- 题目B -->
    <div v-if="!AFaly">
      <div class="answer_B_T">
        <div>
          <img
            src="../../assets/images/answerTIT@2x(1).png"
            style="margin-top: 36%; width: 90%; margin-left: 5%;"
            alt
          />
        </div>
        <div class="answer_T_n">
          <div v-for="(item,index) in TiMTwo" :key="index">
            <div class="answer_T">
              <div class="hot_tit"></div>
              <div class="font_size_16 font_color_10" style="font-weight: 900;">{{item.names}}</div>
            </div>
            <div
              class="answer_an"
              v-for="(itm ,index) in item.daAn"
              :key="index"
              @click="getDNB(itm.id,item.id,index)"
            >
              <div
                :style="{ backgroundColor:(itm.checked ? '#E9EFEC' : ''),fontWeight:(itm.checked ? '500' : '')}"
                class="answer_D_N font_size_14"
              >{{itm.name}}</div>
            </div>
          </div>
          <!-- <button @click="getSubmit" style="float:left;background-color:red;width:50%">分值</button> -->
          <div class="answer_bt" @click="getSubmitB">提交</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import url from "../../bin/url";
import { Alert } from "vux";
export default {
  name: "answer",
  data() {
    return {
      TiMONe: [
        {
          names: "1.手脚冰冷",
          id: 0,
          daAn: [
            { name: "A 严重", id: -3, checked: false },
            { name: "B 普通", id: -2, checked: false },
            { name: "C 轻微", id: -1, checked: false },
            { name: "D 无", id: 0, checked: false }
          ]
        },
        {
          names: "2.低血压",
          id: 1,
          daAn: [
            { name: "A 严重", id: -3, checked: false },
            { name: "B 普通", id: -2, checked: false },
            { name: "C 轻微", id: -1, checked: false },
            { name: "D 无", id: 0, checked: false }
          ]
        },
        {
          names: "3.贫血、脸色苍白",
          id: 2,
          daAn: [
            { name: "A 严重", id: -3, checked: false },
            { name: "B 普通", id: -2, checked: false },
            { name: "C 轻微", id: -1, checked: false },
            { name: "D 无", id: 0, checked: false }
          ]
        },
        {
          names: "4.常头晕",
          id: 3,
          daAn: [
            { name: "A 严重", id: -3, checked: false },
            { name: "B 普通", id: -2, checked: false },
            { name: "C 轻微", id: -1, checked: false },
            { name: "D 无", id: 0, checked: false }
          ]
        },
        {
          names: "5.常想困、爱睡",
          id: 4,
          daAn: [
            { name: "A 严重", id: -3, checked: false },
            { name: "B 普通", id: -2, checked: false },
            { name: "C 轻微", id: -1, checked: false },
            { name: "D 无", id: 0, checked: false }
          ]
        },
        {
          names: "6.常感冒、抵抗力差",
          id: 5,
          daAn: [
            { name: "A 严重", id: -3, checked: false },
            { name: "B 普通", id: -2, checked: false },
            { name: "C 轻微", id: -1, checked: false },
            { name: "D 无", id: 0, checked: false }
          ]
        },
        {
          names: "7.舌淡白",
          id: 6,
          daAn: [
            { name: "A 严重", id: -3, checked: false },
            { name: "B 普通", id: -2, checked: false },
            { name: "C 轻微", id: -1, checked: false },
            { name: "D 无", id: 0, checked: false }
          ]
        },
        {
          names: "8.脉搏细弱",
          id: 7,
          daAn: [
            { name: "A 严重", id: -3, checked: false },
            { name: "B 普通", id: -2, checked: false },
            { name: "C 轻微", id: -1, checked: false },
            { name: "D 无", id: 0, checked: false }
          ]
        },
        {
          names: "9.不喜冷饮、喜喝热饮",
          id: 8,
          daAn: [
            { name: "A 严重", id: -3, checked: false },
            { name: "B 普通", id: -2, checked: false },
            { name: "C 轻微", id: -1, checked: false },
            { name: "D 无", id: 0, checked: false }
          ]
        },
        {
          names: "10.不常口渴、不爱喝水",
          id: 9,
          daAn: [
            { name: "A 严重", id: -3, checked: false },
            { name: "B 普通", id: -2, checked: false },
            { name: "C 轻微", id: -1, checked: false },
            { name: "D 无", id: 0, checked: false }
          ]
        },
        {
          names: "11.常腹泻",
          id: 10,
          daAn: [
            { name: "A 严重", id: -3, checked: false },
            { name: "B 普通", id: -2, checked: false },
            { name: "C 轻微", id: -1, checked: false },
            { name: "D 无", id: 0, checked: false }
          ]
        },
        {
          names: "12.消化不良、脾胃虚寒",
          id: 11,
          daAn: [
            { name: "A 严重", id: -3, checked: false },
            { name: "B 普通", id: -2, checked: false },
            { name: "C 轻微", id: -1, checked: false },
            { name: "D 无", id: 0, checked: false }
          ]
        },
        {
          names: "13.大便稀薄",
          id: 12,
          daAn: [
            { name: "A 严重", id: -3, checked: false },
            { name: "B 普通", id: -2, checked: false },
            { name: "C 轻微", id: -1, checked: false },
            { name: "D 无", id: 0, checked: false }
          ]
        },
        {
          names: "14.妇女月经不正常，常延迟",
          id: 13,
          daAn: [
            { name: "A 严重", id: -3, checked: false },
            { name: "B 普通", id: -2, checked: false },
            { name: "C 轻微", id: -1, checked: false },
            { name: "D 无", id: 0, checked: false }
          ]
        },
        {
          names: "15.尿多而色淡",
          id: 14,
          daAn: [
            { name: "A 严重", id: -3, checked: false },
            { name: "B 普通", id: -2, checked: false },
            { name: "C 轻微", id: -1, checked: false },
            { name: "D 无", id: 0, checked: false }
          ]
        },
        {
          names: "16.腰膝酸软，乏力",
          id: 15,
          daAn: [
            { name: "A 严重", id: -3, checked: false },
            { name: "B 普通", id: -2, checked: false },
            { name: "C 轻微", id: -1, checked: false },
            { name: "D 无", id: 0, checked: false }
          ]
        }
      ],
      TiMTwo: [
        {
          names: "1.常口干舌燥",
          id: 0,
          daAn: [
            { name: "A 严重", id: 3, checked: false },
            { name: "B 普通", id: 2, checked: false },
            { name: "C 轻微", id: 1, checked: false },
            { name: "D 无", id: 0, checked: false }
          ]
        },
        {
          names: "2.常便秘",
          id: 1,
          daAn: [
            { name: "A 严重", id: 3, checked: false },
            { name: "B 普通", id: 2, checked: false },
            { name: "C 轻微", id: 1, checked: false },
            { name: "D 无", id: 0, checked: false }
          ]
        },
        {
          names: "3.常头部发热、面部潮红",
          id: 2,
          daAn: [
            { name: "A 严重", id: 3, checked: false },
            { name: "B 普通", id: 2, checked: false },
            { name: "C 轻微", id: 1, checked: false },
            { name: "D 无", id: 0, checked: false }
          ]
        },
        {
          names: "4.常体温比别人高、易流汗",
          id: 3,
          daAn: [
            { name: "A 严重", id: 3, checked: false },
            { name: "B 普通", id: 2, checked: false },
            { name: "C 轻微", id: 1, checked: false },
            { name: "D 无", id: 0, checked: false }
          ]
        },
        {
          names: "5.十分怕热",
          id: 4,
          daAn: [
            { name: "A 严重", id: 3, checked: false },
            { name: "B 普通", id: 2, checked: false },
            { name: "C 轻微", id: 1, checked: false },
            { name: "D 无", id: 0, checked: false }
          ]
        },
        {
          names: "6.身体容易上火发炎",
          id: 5,
          daAn: [
            { name: "A 严重", id: 3, checked: false },
            { name: "B 普通", id: 2, checked: false },
            { name: "C 轻微", id: 1, checked: false },
            { name: "D 无", id: 0, checked: false }
          ]
        },
        {
          names: "7.不喜欢喝热饮，喜喝冷饮",
          id: 6,
          daAn: [
            { name: "A 严重", id: 3, checked: false },
            { name: "B 普通", id: 2, checked: false },
            { name: "C 轻微", id: 1, checked: false },
            { name: "D 无", id: 0, checked: false }
          ]
        },
        {
          names: "8.舌苔较厚，颜色偏黄",
          id: 7,
          daAn: [
            { name: "A 严重", id: 3, checked: false },
            { name: "B 普通", id: 2, checked: false },
            { name: "C 轻微", id: 1, checked: false },
            { name: "D 无", id: 0, checked: false }
          ]
        },
        {
          names: "9.腺体亢进、代谢旺盛、容易饿",
          id: 8,
          daAn: [
            { name: "A 严重", id: 3, checked: false },
            { name: "B 普通", id: 2, checked: false },
            { name: "C 轻微", id: 1, checked: false },
            { name: "D 无", id: 0, checked: false }
          ]
        },
        {
          names: "10.性急易怒，易烦躁不安",
          id: 9,
          daAn: [
            { name: "A 严重", id: 3, checked: false },
            { name: "B 普通", id: 2, checked: false },
            { name: "C 轻微", id: 1, checked: false },
            { name: "D 无", id: 0, checked: false }
          ]
        },
        {
          names: "11.尿少而色黄",
          id: 10,
          daAn: [
            { name: "A 严重", id: 3, checked: false },
            { name: "B 普通", id: 2, checked: false },
            { name: "C 轻微", id: 1, checked: false },
            { name: "D 无", id: 0, checked: false }
          ]
        },
        {
          names: "12.眼睛布满血丝",
          id: 11,
          daAn: [
            { name: "A 严重", id: 3, checked: false },
            { name: "B 普通", id: 2, checked: false },
            { name: "C 轻微", id: 1, checked: false },
            { name: "D 无", id: 0, checked: false }
          ]
        },
        {
          names: "13.易兴奋紧张，心跳速度加快",
          id: 12,
          daAn: [
            { name: "A 严重", id: 3, checked: false },
            { name: "B 普通", id: 2, checked: false },
            { name: "C 轻微", id: 1, checked: false },
            { name: "D 无", id: 0, checked: false }
          ]
        },
        {
          names: "14.汗味浓、有体臭",
          id: 13,
          daAn: [
            { name: "A 严重", id: 3, checked: false },
            { name: "B 普通", id: 2, checked: false },
            { name: "C 轻微", id: 1, checked: false },
            { name: "D 无", id: 0, checked: false }
          ]
        },
        {
          names: "15.妇女生理周期提早",
          id: 14,
          daAn: [
            { name: "A 严重", id: 3, checked: false },
            { name: "B 普通", id: 2, checked: false },
            { name: "C 轻微", id: 1, checked: false },
            { name: "D 无", id: 0, checked: false }
          ]
        },
        {
          names: "16.女性分泌物浓而有异味",
          id: 15,
          daAn: [
            { name: "A 严重", id: 3, checked: false },
            { name: "B 普通", id: 2, checked: false },
            { name: "C 轻微", id: 1, checked: false },
            { name: "D 无", id: 0, checked: false }
          ]
        }
      ],
      dnListA: [], //A答案列表
      bdnListA: ["A", "C", "B", "A"], //对A答案列表
      dnListB: [], //A答案列表
      bdnListB: ["A", "C", "B", "A"], //对A答案列表
      classA: "",
      classB: "",
      classAA: "",
      classBB: "",
      resultFalg: "",
      resultFalgA: "",
      resultFalgB: "",
      AFaly: true,
      titleFalgA: "",
      titleFalgB: "",
      titleFalgC: false
    };
  },
  // A 寒 B热
  methods: {
    // A选中状态
    getDN(Nid, Tid, index) {
      if ((Tid == 10 && Nid > 2) || (Tid == 11 && Nid > 2)) {
        this.titleFalgA = true;
      }
      if ((Tid == 10 && Nid <= 2) || (Tid == 11 && Nid <= 2)) {
        this.titleFalgA = false;
      }
      this.classA = Tid;
      this.classB = Nid;
      this.TiMONe[Tid].daAn.forEach(element => {
        element.checked = false;
      });
      this.TiMONe[Tid].daAn[index].checked = true;
      // 多选  this.TiM[Tid].daAn[index].checked = !this.TiM[Tid].daAn[index].checked;
      // this.dnListA[Tid] = Nid;
      this.dnListA[Tid] = this.classB;
    },
    // A求分数
    getSubmit() {
      console.log(this.dnListA);
      console.log(eval(this.dnListA.join("+")));
      this.resultFalgA = eval(this.dnListA.join("+"));
      // let A = 0;
      // for (var j = 0; j < this.bdnListA.length; j++) {
      //   if (this.bdnListA[j] == this.dnListA[j]) {
      //     A += 2;
      //   }
      // }
      // console.log(A);
    },
    // B选中状态
    getDNB(Nid, Tid, index) {
      if (Tid == 1 && Nid > 2) {
        this.titleFalgB = true;
      }
      if (Tid == 1 && Nid <= 2) {
        this.titleFalgB = false;
      }
      this.classAB = Tid;
      this.classBB = Nid;
      this.TiMTwo[Tid].daAn.forEach(element => {
        element.checked = false;
      });
      this.TiMTwo[Tid].daAn[index].checked = true;
      // this.dnListB.push(this.classBB);
      this.dnListB[Tid] = this.classBB;
      // 多选  this.TiM[Tid].daAn[index].checked = !this.TiM[Tid].daAn[index].checked;
      // this.dnListB[Tid] = Nid;
    },
    // B求分数
    getSubmitB() {
      if (this.dnListB.length == 16) {
        this.resultFalgB = eval(this.dnListB.join("+"));
        this.getSaveDetection();
      } else {
        alert("请检查试题");
        return;
      }
      console.log(this.dnListB);
      console.log(eval(this.dnListB.join("+")));

      // let A = 0;
      // for (var j = 0; j < this.bdnListB.length; j++) {
      //   if (this.bdnListB[j] == this.dnListB[j]) {
      //     A += 2;
      //   }
      // }
      // console.log(A);
    },
    // 提交数据
    getSaveDetection() {
      this.resultFalg =
        eval(this.dnListB.join("+")) + eval(this.dnListA.join("+"));
      let _obj = {
        openId: localStorage.getItem("openId"),
        phone: localStorage.getItem("phone"),
        coldScore: eval(this.dnListA.join("+")),
        thermalScore: eval(this.dnListB.join("+"))
      };
      console.log(_obj);
      this.goToResult();
      // this.$fetch.post("fruits/app/blank/saveDetection", _obj).then(
      //   data => {
      //     if (data.code == 0) {
      //     } else {
      //       alert(data.msg);
      //     }
      //   },
      //   err => {
      //     alert("网络缓慢。。");
      //   }
      // );
    },
    // 去答题结果页面
    // 推荐信息
    goToResult() {
      if (this.titleFalgA || this.titleFalgB) {
        this.titleFalgC = true;
      }
      this.$router.push({
        name: "result",
        params: {
          obj: JSON.stringify({
            type: "profession",
            data: {
              id: this.resultFalg,
              flage: this.titleFalgC,
              resultFalgA: this.resultFalgB,
              resultFalgB: this.resultFalgA
            }
          })
        }
      });
    },
    // 展示第二套题
    goToB() {
      if (this.dnListA.length == 16) {
        target.scrollIntoView();
        this.AFaly = false;
        this.getSubmit(); //A试卷求和
      } else {
        alert("请检查试题");
        return;
      }
    },
  },
  created() {
    settitle("答题");
  },

  mounted() {}
};
</script>
<style scoped>
.answer_an {
  width: 40%;
  text-align: center;
  float: left;
  margin-left: 5%;
  margin-top: 4%;
}
.answer_T {
  float: left;
  width: 90%;
  margin-left: 5%;
  margin-top: 5%;
  display: flex;
}
.hot_tit {
  background-color: #4a7b67;
  width: 0.1rem;
  height: 0.4rem;
  border-radius: 0.1rem;
  margin-right: 4%;
}
.answer_B_T {
  background-image: url("../../assets/images/answer@2x(1).png");
  background-size: 100%;
  background-repeat: no-repeat;
  overflow: hidden;
  /* min-height: 700px; */
}
.answer_T_n {
  background-color: #ffffff;
  margin-top: 3%;
  width: 90%;
  float: left;
  margin-left: 5%;
  border-radius: 8px;
  margin-bottom: 5%;
}
.answer_D_N {
  border: 1px solid #4a7b67;
  width: 60%;
  margin-left: 32%;
  border-radius: 40px;
  font-weight: 400;
}
.answer_bt {
  width: 90%;
  margin-left: 5%;
  text-align: center;
  background-color: #4a7b67;
  font-size: 16px;
  color: #ffffff;
  float: left;
  margin-top: 5%;
  margin-bottom: 5%;
  line-height: 2.5;
  border-radius: 8px;
}
</style>