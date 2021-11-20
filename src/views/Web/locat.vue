<template>
    <div class='contain'>
        <div id="accordion">
            <h3>XEUtils.locat()</h3>
            <div>
                <li>获取地址栏信息</li>
                <div class="code">
                    {{xeLocat}}
                </div>
            </div>
            <h3>window.location</h3>
            <div>
                <li>返回一个URL的主机名和端口</li>
                <div class="code">
                    {{webLocat}}
                </div>
            </div>
        </div>

    </div>
</template>
<script>
    import $ from 'jquery'
    import XEUtils from 'xe-utils'
    export default {
        data() {
            return {
                xeLocat: null,
                webLocat: null,
            }
        },
        watch: {},
        computed: {},
        created() { 
            this.$nextTick(()=>{
                $( "#accordion" ).accordion();
                this.webLocat = window.location;
                this.xeLocat = XEUtils.locat()
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

    .ui-accordion .ui-accordion-content{
        /* height: 100% !important; */
    }
</style>