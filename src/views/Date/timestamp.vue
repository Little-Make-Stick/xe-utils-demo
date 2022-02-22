

<template>
    <div class='contain'>
        <div id="accordion">
            <div class="now-accordion accordion-list">
                <h3>new Date() </h3>
                <div>
                    <li>获取当前日期</li>
                    <div class="code">new Date()</div>
                    <div class="code">
                        -{{jsDateNow}}-
                    </div>
                </div>
                <h3>XEUtils.now() </h3>
                <div>
                    <li>获取当前日期的时间戳</li>
                    <div class="code">XEUtils.now()</div>
                    <div class="code">
                        -{{xeDateNow}}-
                    </div>
                </div>
            </div>

            <div class="timestamp-accordion accordion-list">
                <h3>Date.getTime() </h3>
                <div>
                    <li>将日期转化成时间戳</li>
                    <div class="code">+new Date()</div>
                    <div class="code">
                        -{{js2timestamp}}-
                    </div>
                    <div class="code">new Date('2018-12-01').getTime()</div>
                    <div class="code">
                        -{{js2timestamp1}}-
                    </div>
                    <div class="code">new Date('2017/12/20 10:10:30.459').getTime()</div>
                    <div class="code">
                        -{{js2timestamp2}}-
                    </div>
                </div>
                <h3>XEUtils.timestamp () </h3>
                <div>
                    <li>将日期转化成时间戳</li>
                    <div class="code">XEUtils.timestamp()</div>
                    <div class="code">
                        -{{xe2timestamp}}-
                    </div>
                    <div class="code">XEUtils.timestamp('2018-12-01')</div>
                    <div class="code">
                        -{{xe2timestamp1}}-
                    </div>
                    <div class="code">XEUtils.timestamp('2017/12/20 10:10:30.459', 'yyyy/MM/dd HH:mm:ss.SSS')</div>
                    <div class="code">
                        -{{xe2timestamp2}}-
                    </div>
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
                jsDateNow: null,
                xeDateNow: null,

                js2timestamp: null,
                js2timestamp1: null,
                js2timestamp2: null,
                xe2timestamp: null,
                xe2timestamp1: null,
                xe2timestamp2: null,
            }
        },
        watch: {},
        computed: {},
        created() {
            this.$nextTick(() => {
                $(".now-accordion").accordion();
                $(".timestamp-accordion").accordion();
            });
            this.jsDateNow = new Date().toString();
            this.xeDateNow = XEUtils.now().toString();

            this.js2timestamp = +(new Date());
            this.js2timestamp1 = new Date('2018-12-01').getTime().toString();
            this.js2timestamp2 = new Date('2017/12/20 10:10:30.459').getTime().toString();
            this.xe2timestamp = XEUtils.timestamp().toString();
            this.xe2timestamp1 = XEUtils.timestamp('2018-12-01').toString();
            this.xe2timestamp2 = XEUtils.timestamp('2017/12/20 10:10:30.459', 'yyyy/MM/dd HH:mm:ss.SSS').toString();
        },
        mounted() { },
        methods: {},
    }
</script>
<style>
    .code {
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

    .accordion-list.ui-accordion.ui-widget.ui-helper-reset {
        margin: 20px 0;
    }
</style>