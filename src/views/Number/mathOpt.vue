
<template>
    <div class='contain'>
        <div id="accordion">
            <div class="random-accordion accordion-list">
                <h3>Math.random() </h3>
                <div>
                    <li>获取随机值</li>
                    <div class="code">Math.random() * (13 - 3) + 3</div>
                    <div class="code">
                        -{{jsRandom}}-
                    </div>
                </div>
                <h3>XEUtils.random() </h3>
                <div>
                    <li>获取随机值</li>
                    <div class="code">XEUtils.random(3, 13)</div>
                    <div class="code">
                        -{{xeRandom}}-
                    </div>
                </div>
            </div>

            <div class="max_min-accordion accordion-list">
                <h3>Math.max() </h3>
                <div>
                    <li>获取范围最大值</li>
                    <div class="code">Math.max(...[1,2,3,4,5,6])</div>
                    <div class="code">
                        {{jsMax}}
                    </div>
                </div>
                <h3>XEUtils.max() </h3>
                <div>
                    <li>获取范围最大值</li>
                    <div class="code">XEUtils.max([1,2,3,4,5,6])</div>
                    <div class="code">
                        {{xeMax}}
                    </div>
                </div>
                <h3>Math.min() </h3>
                <div>
                    <li>获取范围最小值</li>
                    <div class="code">Math.min(...[1,2,3,4,5,6])</div>
                    <div class="code">
                        {{jsMin}}
                    </div>
                </div>
                <h3>XEUtils.min() </h3>
                <div>
                    <li>获取范围最小值</li>
                    <div class="code">XEUtils.min([1,2,3,4,5,6])</div>
                    <div class="code">
                        {{xeMin}}
                    </div>
                </div>
            </div>

            <div class="round_rule-accordion accordion-list">
                <h3>Math.round() </h3>
                <div>
                    <li>对小数四舍五入</li>
                    <div class="code">Math.round(123.5456)</div>
                    <div class="code">
                        {{jsRound}}
                    </div>
                </div>
                <h3>XEUtils.round () </h3>
                <div>
                    <li>对小数四舍五入</li>
                    <div class="code">XEUtils.round(123.5456, 2)</div>
                    <div class="code">
                        {{xeRound}}
                    </div>
                </div>
                <h3>Math.ceil() </h3>
                <div>
                    <li>对小数向上取整</li>
                    <div class="code">Math.ceil(123.5456)</div>
                    <div class="code">
                        {{jsCeil}}
                    </div>
                </div>
                <h3>XEUtils.ceil () </h3>
                <div>
                    <li>对小数向上取整</li>
                    <div class="code">XEUtils.ceil(123.5456, 2)</div>
                    <div class="code">
                        {{xeCeil}}
                    </div>
                </div>
                <h3>Math.floor() </h3>
                <div>
                    <li>对小数向下取整</li>
                    <div class="code">Math.floor(123.5456)</div>
                    <div class="code">
                        {{jsFloor}}
                    </div>
                </div>
                <h3>XEUtils.floor () </h3>
                <div>
                    <li>对小数向下取整</li>
                    <div class="code">XEUtils.floor(123.5456, 2)</div>
                    <div class="code">
                        {{xeFloor}}
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
                jsRandom: null,
                xeRandom: null,

                jsMax: null,
                xeMax: null,
                jsMin: null,
                xeMin: null,

                jsRound: null,
                xeRound: null,
                jsCeil: null,
                xeCeil: null,
                jsFloor: null,
                xeFloor: null
            }
        },
        watch: {},
        computed: {},
        created() {
            this.$nextTick(() => {
                $(".random-accordion").accordion();
                $(".max_min-accordion").accordion();
                $(".round_rule-accordion").accordion();
            });
            this.jsRandom = Math.random()*(13-3) + 3;
            this.xeRandom = XEUtils.random(3, 13);

            this.jsMax = Math.max(...[1,2,3,4,5,6]);
            this.xeMax = XEUtils.max([1,2,3,4,5,6]);
            this.jsMin = Math.min(...[1,2,3,4,5,6]);
            this.xeMin = XEUtils.min([1,2,3,4,5,6]);

            this.jsRound = Math.round(123.5456);
            this.xeRound = XEUtils.round(123.5456, 2);
            this.jsCeil = Math.ceil(123.5456);
            this.xeCeil = XEUtils.ceil(123.5456, 2);
            this.jsFloor = Math.floor(123.5456);
            this.xeFloor = XEUtils.floor(123.5456, 2);
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