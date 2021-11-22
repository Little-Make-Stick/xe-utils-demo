<template>
    <div class='contain'>
        <div id="accordion">
            <h3>escape </h3>
            <div>
            <!-- &, <, >, ", ', ` -->
                <li>转义HTML字符串--&amp;, &lt;, &gt;, ",  ',  `替换字符</li>
                <div class="code">
                    XEUtils.escape('&lt;a&gt;link&lt;/a&gt;') // '&lt;a&gt;link&lt;/a&gt;'
                </div>
                <div class="code">  
                    {{xeEscape}}
                </div>
            </div>
            <h3>unescape </h3>
            <div>
                <li>反转 escape</li>
                <div class="code">
                    XEUtils.unescape('&lt;a&gt;link&lt;/a&gt;) 
                </div>
                <div class="code">
                    {{xeUnescape}}
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
                xeEscape: null,
                xeUnescape: null
            }
        },
        watch: {},
        computed: {},
        created() { 
            this.$nextTick(()=>{
                $( "#accordion" ).accordion();
            });
            this.xeEscape = XEUtils.escape('<a>link</a>');
            this.xeUnescape = XEUtils.unescape('&lt;a&gt;link&lt;/a&gt;');
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