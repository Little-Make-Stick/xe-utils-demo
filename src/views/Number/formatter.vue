<template>
    <div class="contain">
        <header>
            <li>num.toFixed() 将数值格式化为带指定小数位的字符串
                <div class="code">num.toFixed( digits)</div>
            </li>
            <li>XEUtils.toFixed () 将数值格式化为带指定小数位的字符串
                <div class="code">XEUtils.toFixed (num , digits)</div>
            </li>

            <li>Number () 转数值
                <div class="code">Number (num)</div>
            </li>
            <li>XEUtils.toNumber () 转数值
                <div class="code">XEUtils.toNumber (num)</div>
            </li>

            <li>Number().toFixed() 小数数值转字符串，科学计数转字符串
                <div class="code">Number(num).toFixed (digits)</div>
            </li>
            <li>parseInt() 整数数值转字符串，科学计数转字符串
                <div class="code">parseInt(num)</div>
            </li>
            <li>XEUtils.toNumberString () 数值转字符串，科学计数转字符串
                <div class="code">XEUtils.toNumberString (num)</div>
            </li>

            <li>parseInt () 转整数
                <div class="code">parseInt (num)</div>
            </li>
            <li>XEUtils.toInteger () 转整数
                <div class="code">XEUtils.toInteger (num)</div>
            </li>
        </header>

        <el-table :data="formatters" border :cell-class-name="cellClass">
            <el-table-column prop="param" label="param"></el-table-column>
            <el-table-column prop="descripe" label="descripe"></el-table-column>

            <el-table-column prop="jsFixed" label="jsFixed" width="110"></el-table-column>
            <el-table-column prop="xeFixed" label="xeFixed" width="110"></el-table-column>
            
            <el-table-column prop="js2Num" label="js2Num" width="170"></el-table-column>
            <el-table-column prop="xe2Num" label="xe2Num" width="170"></el-table-column>

            <el-table-column prop="js2NumStr" label="js2NumStr" width="110"></el-table-column>
            <el-table-column prop="xe2NumStr" label="xe2NumStr" width="110"></el-table-column>

            <el-table-column prop="js2Int" label="js2Int" width="150"></el-table-column>
            <el-table-column prop="xe2Int" label="xe2Int" width="150"></el-table-column>
        </el-table>


    </div>
</template>
<script>
    import $ from "jquery";
    import XEUtils from "xe-utils";
    export default {
        data() {
            return {
                formatters: [
                    
                    {
                        param: "{num: 123.4567 , digits: 1}",
                        descripe: '保留一定小数位',

                        jsFixed: (Number(123.4567).toFixed(1)).toString(),
                        xeFixed: XEUtils.toFixed (123.4567 , 1).toString(),

                    },
                    {
                        param: "{num: 123.4567 , digits: 2}",
                        descripe: '保留一定小数位',

                        jsFixed: (Number(123.4567).toFixed(2)).toString(),
                        xeFixed: XEUtils.toFixed (123.4567 , 2).toString(),

                    },
                    {
                        param: "{num: 123.4567 , digits: 3}",
                        descripe: '保留一定小数位',

                        jsFixed: (Number(123.4567).toFixed(3)).toString(),
                        xeFixed: XEUtils.toFixed (123.4567 , 3).toString(),

                    },
                    {
                        param: "",
                        descripe: '',
                    },
                    {
                        param: "{numStr: '3423.34'}",
                        descripe: '转数字',

                        js2Num: Number('3423.34').toString(),
                        xe2Num: XEUtils.toNumber ('3423.34').toString(),
                    },
                    {
                        param: "",
                        descripe: '',
                    },
                    {
                        param: "{num: 1e-14}",
                        descripe: '科学计数转字符串',

                        js2NumStr: Number(1e-14).toFixed (32).toString(),
                        xe2NumStr: XEUtils.toNumberString (1e-14).toString(),
                    },
                    {
                        param: "{num: 1e+22}",
                        descripe: '科学计数转字符串',

                        js2NumStr: parseInt(1e+22).toString(),
                        xe2NumStr: XEUtils.toNumberString (1e+22).toString(),
                    },
                    {
                        param: "",
                        descripe: '',
                    },
                    {
                        param: "{numStr: '3423.34'}",
                        descripe: '转整数',

                        js2Int: parseInt('3423.34').toString(),
                        xe2Int: XEUtils.toInteger ('3423.34').toString(),
                    },
                    {
                        param: "{numStr: '342strrt'}",
                        descripe: '转整数',

                        js2Int: parseInt('342strrt').toString(),
                        xe2Int: XEUtils.toInteger ('342strrt').toString(),
                    },
                ],
            };
        },
        watch: {},
        computed: {},
        created() {
        },
        mounted() { 
            this.$nextTick(()=>{
                $('table td:contains("[注意]")').css('color','lightgreen');
            })
        },
        methods: {
            cellClass({row,column,rowIndex,columnIndex}){
                console.log(row,column,rowIndex,columnIndex);
                console.log(row[column.property])
            }
        },
    };
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
</style>


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
            this.jsFixed = Math.random()*(13-3) + 3;
            this.jsFixed1 = XEUtils.random(3, 13);
            this.jsFixed2 = XEUtils.random(3, 13);
            this.xeFixed = Math.random()*(13-3) + 3;
            this.xeFixed1 = XEUtils.random(3, 13);
            this.xeFixed2 = XEUtils.random(3, 13);

            this.js2Number = Math.max(...[1,2,3,4,5,6]);
            this.xe2Number = XEUtils.max([1,2,3,4,5,6]);

            this.js2NumStr = Math.min(...[1,2,3,4,5,6]);
            this.js2NumStr1 = XEUtils.min([1,2,3,4,5,6]);
            this.xe2NumSrt = Math.round(123.5456);
            this.xe2NumSrt1 = XEUtils.round(123.5456, 2);

            this.js2Int = Math.ceil(123.5456);
            this.js2Int1 = XEUtils.ceil(123.5456, 2);
            this.xe2Int = Math.floor(123.5456);
            this.xe2Int1 = XEUtils.floor(123.5456, 2);
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