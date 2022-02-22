

<template>
    <div class='contain'>
        <div id="accordion">
            <div class="fixed-accordion accordion-list">
                <h3>num.toFixed() </h3>
                <div>
                    <li>将数值格式化为带指定小数位的字符串</li>
                    <div class="code">Number(123.4567).toFixed( 1)</div>
                    <div class="code">
                        -{{jsFixed}}-
                    </div>
                    <div class="code">Number(123.4567).toFixed( 2)</div>
                    <div class="code">
                        -{{jsFixed1}}-
                    </div>
                    <div class="code">Number(123.4567).toFixed( 3)</div>
                    <div class="code">
                        -{{jsFixed2}}-
                    </div>
                </div>
                <h3>XEUtils.toFixed () </h3>
                <div>
                    <li>将数值格式化为带指定小数位的字符串</li>
                    <div class="code">XEUtils.toFixed (123.4567 , 1)</div>
                    <div class="code">
                        -{{xeFixed}}-
                    </div>
                    <div class="code">XEUtils.toFixed (123.4567 , 2)</div>
                    <div class="code">
                        -{{xeFixed1}}-
                    </div>
                    <div class="code">XEUtils.toFixed (123.4567 , 3)</div>
                    <div class="code">
                        -{{xeFixed2}}-
                    </div>
                </div>
            </div>

            <div class="number-accordion accordion-list">
                <h3>Number () </h3>
                <div>
                    <li>转数值</li>
                    <div class="code">Number ('3423.34')</div>
                    <div class="code">
                        {{js2Number}}
                    </div>
                </div>
                <h3>XEUtils.toNumber () </h3>
                <div>
                    <li>转数值</li>
                    <div class="code">XEUtils.toNumber ('3423.34')</div>
                    <div class="code">
                        {{xe2Number}}
                    </div>
                </div>
            </div>

            <div class="number_str-accordion accordion-list">
                <h3>Number().toFixed() </h3>
                <div>
                    <li>数值转字符串，科学计数转字符串</li>
                    <div class="code">Number(1e-14).toFixed (32)</div>
                    <div class="code">
                        {{js2NumStr}}
                    </div>
                </div>
                <h3>parseInt() </h3>
                <div>
                    <li>数值转字符串，科学计数转字符串</li>
                    <div class="code">parseInt(1e+22)</div>
                    <div class="code">
                        {{js2NumStr1}}
                    </div>
                </div>
                <h3>XEUtils.toNumberString () </h3>
                <div>
                    <li>数值转字符串，科学计数转字符串</li>
                    <div class="code">XEUtils.toNumberString (1e-14)</div>
                    <div class="code">
                        {{xe2NumSrt}}
                    </div>
                    <div class="code">XEUtils.toNumberString (1e+22)</div>
                    <div class="code">
                        {{xe2NumSrt1}}
                    </div>
                </div>
            </div>

            <div class="int-accordion accordion-list">
                <h3>parseInt () </h3>
                <div>
                    <li>转整数</li>
                    <div class="code">parseInt ('3423.34')</div>
                    <div class="code">
                        -{{js2Int}}-
                    </div>
                    <div class="code">parseInt ('342strrt')</div>
                    <div class="code">
                        -{{js2Int1}}-
                    </div>
                </div>
                <h3>XEUtils.toInteger () </h3>
                <div>
                    <li>转整数</li>
                    <div class="code">XEUtils.toInteger ('3423.34')</div>
                    <div class="code">
                        -{{xe2Int}}-
                    </div>
                    <div class="code">XEUtils.toInteger ('342strrt')</div>
                    <div class="code">
                        -{{xe2Int1}}-
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
                jsFixed: null,
                jsFixed1: null,
                jsFixed2: null,
                xeFixed: null,
                xeFixed1: null,
                xeFixed2: null,

                js2Number: null,
                xe2Number: null,

                js2NumStr: null,
                js2NumStr1: null,
                xe2NumSrt: null,
                xe2NumSrt1: null,

                js2Int: null,
                js2Int1: null,
                xe2Int: null,
                xe2Int1: null
            }
        },
        watch: {},
        computed: {},
        created() {
            this.$nextTick(() => {
                $(".fixed-accordion").accordion();
                $(".number-accordion").accordion();
                $(".number_str-accordion").accordion();
                $(".int-accordion").accordion();
            });
            this.jsFixed = Number(123.4567).toFixed( 1);
            this.jsFixed1 = Number(123.4567).toFixed( 2);
            this.jsFixed2 = Number(123.4567).toFixed( 3);
            this.xeFixed = XEUtils.toFixed (123.4567 , 1);
            this.xeFixed1 = XEUtils.toFixed (123.4567 , 2);
            this.xeFixed2 = XEUtils.toFixed (123.4567 , 3);

            this.js2Number = Number ('3423.34');
            this.xe2Number = XEUtils.toNumber ('3423.34');

            this.js2NumStr = Number(1e-14).toFixed (32);
            this.js2NumStr1 = parseInt(1e+22);
            this.xe2NumSrt = XEUtils.toNumberString (1e-14);
            this.xe2NumSrt1 = XEUtils.toNumberString (1e+22);

            this.js2Int = parseInt ('3423.34');
            this.js2Int1 = parseInt ('342strrt');
            this.xe2Int = XEUtils.toInteger ('3423.34');
            this.xe2Int1 = XEUtils.toInteger ('342strrt');
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