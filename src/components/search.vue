<template>
    <div>
        <input type="text" @input="input">
        <slot name="content"></slot>
    </div>
</template>
<script>
export default {
    props:{
        list:{
            type:Array,
            default: []
        },
    },
    data() {
        return {
            key: 'value'
        }
    },
    methods: {
        input(val) {
            console.log(val);
        }
    },
    mounted() {
        
    },
}
</script>
