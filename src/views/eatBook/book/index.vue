<template>
    <div id="allbook">
        <!-- <div v-for="(item,index) in list" :key="index"> -->
            <div class="book-list">
                <p class="flex-between align-center mb-36">
                    <span class="list-name flex-start align-center">{{item.name}}</span>
                    <slot name='size'></slot>
                </p>
                <slot name="content"></slot>
                <p class="tip-footer"><span>注意事项：</span><span>{{item.notice}}</span></p>
                <p class="tip-footer"><span>适宜人群：</span><span>{{item.crowd}}</span></p>
                <p class="tip-footer"><span>适应病症：</span><span>{{item.disease}}</span></p>
            </div>
        <!-- </div> -->
    </div>
</template>
<script>
export default {
    props:{
        item:{
            type:Object,
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
.green{
            color: #4A7B67;
        }
        .size{
            font-size: 0.28rem;
        }

#allbook{
      
    padding: 0  0.4rem;
    overflow-x: hidden;
    box-sizing: border-box;
    background: #F3F5F8;
      
        
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
