<template>
    <div class='contain'>
        <div id="accordion">
            <h3>XEUtils.browse()</h3>
            <div>
                <li>获取浏览器信息</li>
                <div class="code">
                    {{xeBrowse}}
                </div>
            </div>
            <h3>window.navigator.userAgentData.toJSON()</h3>
            <div>
                <li>返回由客户机发送服务器的user-agent的值</li>
                <div class="code">
                    {{webBrowse}}
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
                xeBrowse: null,
                webBrowse: null,
            }
        },
        watch: {},
        computed: {},
        created() { 
            this.$nextTick(()=>{
                $( "#accordion" ).accordion();
                this.webBrowse = window.navigator.userAgentData.toJSON();
                this.xeBrowse = XEUtils.browse()
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