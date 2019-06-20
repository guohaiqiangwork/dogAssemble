<template>
    <div id="allbook">
        <div v-for="(item,index) in list" :key="index">
            <div class="book-list">
                <p class="flex-between align-center">
                    <span class="list-name flex-start align-center mb-36">{{item.name}}</span>
                    <!-- <span name='size' class="green size">大杯</span> -->
                </p>
                <div v-for="(iten,ind) in item.memberRecipes" :key="ind" v-show="item.type == 0">
                    <div :class="['kind-list',iten.cupName == '大杯'?'before-tag':'before-tag before-tag-sm']">
                        <span class="kind-item" v-for="(info,inx) in iten.cupInfos" :key="inx">{{info.foodName+info.gram+'克'}}</span>
                    </div>
                </div>
                <div class="kind-list" v-show="item.type == 1">
                    <span class="kind-item" v-for="(info,inx) in item.biguFoods" :key="inx">{{info.foodName+info.gram+'克'}}</span>
                </div>
                <p class="tip-footer"><span>注意事项：</span><span>{{item.notice}}</span></p>
                <p class="tip-footer"><span>适宜人群：</span><span>{{item.crowd}}</span></p>
                <p class="tip-footer"><span>适应病症：</span><span>{{item.disease}}</span></p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        list:{
            type:Array,
            default(){
                return{}
            }
        }
    },
    data() {
        return {
            array: ['memberRecipes','biguFoods',]
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
#allbook{
    padding: 0  0.4rem;
    overflow-x: hidden;
    box-sizing: border-box;
    background: #F3F5F8;
    
        .green{
            color: #4A7B67;
        }
        .size{
            font-size: 0.28rem;
        }
      .book-list{
        padding: 0.3rem 0.4rem;
        background: #fff;
        border-radius: 0.12rem;
        margin-bottom: 0.2rem;
        .mb-36{
            margin-bottom: 0.36rem;
        }
        .list-name{
            font-size:0.34rem;
            line-height:0.56rem;
        }
        .list-name::before{
            content: '';
            display: inline-block;
            width:0.08rem;
            height:0.4rem;
            margin-right: 0.18rem;
            background:rgba(74,123,103,1);
            border-radius:0.04rem;

        }
       .kind-list{
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            padding: 0.2rem 0.45rem;
            margin: 0 0 0.24rem;
            background: #E9EFEC;
            color:#4A7B67;
            border-radius: 0.04rem;
            .kind-item{
                display: inline-block;
                min-width: 30%;
                // width: 30%;
                text-align: left;
               
                line-height:0.42rem;
            }
    }
      .before-tag{
            position: relative;
        }
        .before-tag::before{
            content:'大杯';
            display: inline-block;
            position: absolute;
            top: -0.2rem;
            left: 0;
            width:0.72rem;
            border:1px solid;
            height: 0.4rem;
            color: #fff;
            text-align: center;
            background:rgb(74,123,103);
            border-radius: 0 0.12rem;
        }
        .before-tag-sm::before{
            content:'小杯';
            display: inline-block;
            position: absolute;
            top: -0.2rem;
            left: 0;
            width:0.72rem;
            border:1px solid;
            height: 0.4rem;
            text-align: center;
            color: #fff;
            background:rgb(74,123,103);
        }
      }
        .tip-footer{
            text-indent: 1em;
            line-height:0.56rem;
        }
}
</style>
