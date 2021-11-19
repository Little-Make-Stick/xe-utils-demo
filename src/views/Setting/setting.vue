<template>
    <div class='contain'>
        <div id="accordion">
            <h3>setup</h3>
            <div>
                <li>全局参数设置</li>
                <div class="code">
                    XEUtils.setup({
                    &nbsp;&nbsp;&nbsp;&nbsp;monthes: [1,2,3,4,5,6,7,8,9,10,11,12]
                    })
                </div>
            </div>
            <h3>mixin</h3>
            <div>
                <li>扩展函数，将您自己的实用函数扩展到 XEUtils</li>
                <div class="code">
                    XEUtils.mixin({
                    &nbsp;&nbsp;&nbsp;&nbsp;toMoney(val){
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return '$'+ val.toFixed(2)
                    &nbsp;&nbsp;&nbsp;&nbsp;}
                    })
                </div>
            </div>
        </div>

    </div>
</template>
<script>
    import $ from 'jquery'
    export default {
        data() {
            return {}
        },
        watch: {},
        computed: {},
        created() { 
            this.$nextTick(()=>{
                $( "#accordion" ).accordion();
            })
        },
        mounted() { },
        methods: {},
    }
</script>
<style>
    .code{
        background-color: #333;
        line-height: 20px;
        padding: 10px 20px;
        color: #fff;
        letter-spacing: 2.5px;
        font-size: 12px;
        max-width: 100%;
        overflow-x: auto;
        margin: 20px 0;
    }
</style>