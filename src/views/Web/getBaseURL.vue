<template>
    <div class='contain'>
        <div id="accordion">
            <h3>XEUtils.getBaseURL()</h3>
            <div>
                <li>获取上下文路径</li>
                <div class="code">
                    {{xeBaseURL}}
                </div>
            </div>
            <h3>window.location.host</h3>
            <div>
                <li>返回一个URL的主机名和端口</li>
                <div class="code">
                    {{webBaseURL}}
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
                xeBaseURL: null,
                webBaseURL: null,
            }
        },
        watch: {},
        computed: {},
        created() { 
            this.$nextTick(()=>{
                $( "#accordion" ).accordion();
                this.webBaseURL = window.location.host;
                this.xeBaseURL = XEUtils.getBaseURL()
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