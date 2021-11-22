<template>
    <div class='contain'>
        <div id="accordion">
            <div class="trim-accordion accordion-list">
                <h3>str </h3>
                <div>
                    <div class="code">-{{str}}-</div>
                </div>
                <h3>XEUtils.trim(str) </h3>
                <div>
                    <li>去除字符串左右两边的空格</li>
                    <div class="code">XEUtils.trim(' hello world ')</div>
                    <div class="code">
                        -{{xeTrim}}-
                    </div>
                </div>
                <h3>(str).trim() </h3>
                <div>
                    <li>去除字符串左右两边的空格</li>
                    <div class="code">(' hello world ').trim()</div>
                    <div class="code">
                        -{{strTrim}}-
                    </div>
                </div>
                <h3>XEUtils.trimLeft(str) </h3>
                <div>
                    <li>去除字符串左边的空格</li>
                    <div class="code">XEUtils.trimLeft(' hello world ')</div>
                    <div class="code">
                        -{{xeTrimLeft}}-
                    </div>
                </div>
                <h3>(str).trimLeft() </h3>
                <div>
                    <li>去除字符串左边的空格</li>
                    <div class="code">(' hello world ').trimLeft()</div>
                    <div class="code">
                        -{{strTrimLeft}}-
                    </div>
                </div>
                <h3>XEUtils.trimRight(str) </h3>
                <div>
                    <li>去除字符串右边的空格</li>
                    <div class="code">XEUtils.trimRight(' hello world ')</div>
                    <div class="code">
                        -{{xeTrimRight}}-
                    </div>
                </div>
                <h3>(str).trimRight() </h3>
                <div>
                    <li>去除字符串右边的空格</li>
                    <div class="code">(' hello world ').trimRight()</div>
                    <div class="code">
                        -{{strTrimRight}}-
                    </div>
                </div>
            </div>

            <div class="pad-accordion accordion-list">
                <h3>XEUtils.padStart(target,length,str) </h3>
                <div>
                    <li>用指定字符从前面开始补全字符串</li>
                    <div class="code">XEUtils.padStart('5213',11,'*');</div>
                    <div class="code">
                        {{xePadStart}}
                    </div>
                </div>
                <h3>target.padStart(length,str) </h3>
                <div>
                    <li>用指定字符从前面开始补全字符串</li>
                    <div class="code">('5213').padStart(11,'*')</div>
                    <div class="code">
                        {{xePadStart}}
                    </div>
                </div>
                <h3>XEUtils.padEnd(target,length,str) </h3>
                <div>
                    <li>用指定字符从后面开始补全字符串</li>
                    <div class="code">XEUtils.padEnd('157',11,'*')</div>
                    <div class="code">
                        {{xePadEnd}}
                    </div>
                </div>
                <h3>target.padEnd(length,str) </h3>
                <div>
                    <li>用指定字符从后面开始补全字符串</li>
                    <div class="code">('157').padEnd(11,'*')</div>
                    <div class="code">
                        {{strPadEnd}}
                    </div>
                </div>
            </div>

            <div class="repeat-accordion accordion-list">
                <h3>XEUtils.repeat(target, count) </h3>
                <div>
                    <li>将字符串重复 n 次</li>
                    <div class="code">XEUtils.repeat('hello~',3)</div>
                    <div class="code">
                        {{xeRepeat}}
                    </div>
                </div>
                <h3>target.repeat(count) </h3>
                <div>
                    <li>将字符串重复 n 次</li>
                    <div class="code">('bye~').repeat(3)</div>
                    <div class="code">
                        {{strRepeat}}
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
                str: '   hello world   ',
                xeTrim: null,
                strTrim: null,
                xeTrimLeft: null,
                strTrimLeft: null,
                xeTrimRight: null,
                strTrimRight: null,

                xePadStart: null,
                strPadStart: null,
                xePadEnd: null,
                strPadEnd: null,

                xeRepeat: null,
                strRepeat: null
            }
        },
        watch: {},
        computed: {},
        created() {
            this.$nextTick(() => {
                $(".trim-accordion").accordion();
                $(".pad-accordion").accordion();
                $(".repeat-accordion").accordion();
            });
            this.xeTrim = XEUtils.trim('   hello world   ');
            this.xeTrimLeft = XEUtils.trimLeft('   hello world   ');
            this.xeTrimRight = XEUtils.trimRight('   hello world   ');
            this.strTrim = ('   hello world   ').trim();
            this.strTrimLeft = ('   hello world   ').trimLeft();
            this.strTrimRight = ('   hello world   ').trimRight();

            this.xePadStart = XEUtils.padStart('5213', 11, '*');
            this.xePadEnd = XEUtils.padEnd('157', 11, '*');
            this.strPadStart = ('5213').padStart(11, '*');
            this.strPadEnd = ('157').padEnd(11, '*');

            this.xeRepeat = XEUtils.repeat('hello~', 3);
            this.strRepeat = ('bye~').repeat(3);
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