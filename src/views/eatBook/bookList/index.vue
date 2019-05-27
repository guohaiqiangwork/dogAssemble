<template>
    <div id="book">
        <div class="book-list">
            <p class="flex-between align-center">
                <span class="list-name flex-start align-center mb-36">配方名称</span>
                <span name='size' class="green size">大杯</span>
            </p>
            <div class="kind-list before-tag">
                <span class="kind-item">淡竹叶8g</span>
                <span class="kind-item">淡竹叶8gfcdsfsdffsfssffsdfsdfdsfsdfsd发的说法是客家话黑客技术</span>
                <span class="kind-item">淡竹叶8g</span>
                 <span class="kind-item">淡竹叶8g</span>
                <span class="kind-item">淡竹叶8g</span>
                <span class="kind-item">淡竹叶8g</span>
            </div>
            <p class="tip-footer"><span>注意事项：</span><span>忌酒、忌烟、忌辛辣</span></p>
            <p class="tip-footer"><span>适宜人群：</span><span>脾胃不好人群</span></p>
            <p class="tip-footer"><span>适应病症：</span><span>糖尿病、高血压</span></p>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        // bookList: {
        //     type: Array,
        //     // 对象或数组默认值必须从一个工厂函数获取
        //     default: function () {
        //         return []
        //     }
        // },
    },
    
    data() {
        return {
            show:'da',
            bookList: [],
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
#book{
    // margin: 0.4rem;
    overflow-x: hidden;
    .book-list{
        padding: 0.3rem 0.4rem;
        background: #fff;
        border-radius: 0.12rem;
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
        .green{
            color: #4A7B67;
        }
        .size{
            font-size: 0.28rem;
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
        .tip-footer{
            text-indent: 1em;
            line-height:0.56rem;
        }
    }
   
}
</style>
