<template>
    <div class='contain'>
        <div id="accordion">
            <h3>parseUrl </h3>
            <div>
                <li>解析 URL 参数</li>
                <div class="code">
                    XEUtils.parseUrl('http://localhost:8080/demo/#/home?id=123')
                </div>
                <div class="code">
                    {{xeParseURL}}
                </div>
            </div>
            <h3>serialize </h3>
            <div>
                <li>序列化查询参数</li>
                <div class="code">
                    XEUtils.serialize({id: 123, name: 'test1'}) // id=123&name=test1
                </div>
                <div class="code">
                    {{xeSerialize}}
                </div>
            </div>
            <h3>unserialize </h3>
            <div>
                <li>反转序列化查询参数</li>
                <div class="code">
                    XEUtils.unserialize('id=123&name=test1') // {id: '123', name: 'test1'}
                </div>
                <div class="code">
                    {{xeUnserialize}}
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
                xeParseURL: null,
                xeSerialize: null,
                xeUnserialize: null
            }
        },
        watch: {},
        computed: {},
        created() { 
            this.$nextTick(()=>{
                $( "#accordion" ).accordion();
            });
            this.xeParseURL = XEUtils.parseUrl('http://localhost:8080/demo/#/home?id=123');
            this.xeSerialize = XEUtils.serialize({id: 123, name: 'test1'});
            this.xeUnserialize = XEUtils.unserialize('id=123&name=test1');
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