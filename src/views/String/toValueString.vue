<template>
    <div class='contain'>
        <header>
            <h2>toValueString</h2>
            <li>js-toString() 把数字转换为字符串</li>
            <li>js-valueOf() 返回 Array 对象的原始值</li>
            <li>xe-toValueString(str) 转字符串,<div class="strong">null,undefined,'',[]均返回 ''</div></li>

        </header>

        <el-table :data="toStringText" border :cell-class-name="cellClass">
            <el-table-column prop="param" label="param"></el-table-column>
            <el-table-column prop="toStr" label="js(toString)"></el-table-column>
            <el-table-column prop="valOf" label="js(valueOf)"></el-table-column>
            <el-table-column prop="xetoValStr" label="XEUtils(toValurString)"></el-table-column>
        </el-table>
    </div>
</template>
<script>
    import XEUtils from 'xe-utils';
    import $ from 'jquery'
    // const XEUtils = require('xe-utils')
    export default {
        data() {
            return {
                toStringText: [
                    28, '28', 0, 1e-5,new Date(2021, 3, 4), false, true, null, undefined, '', NaN,'[1,2,3]','[]'
                ]
            }
        },
        watch: {},
        computed: {},
        created() {
            this.toStringText = this.toStringText.map(e => {
                let item = (function(){
                    try{ return new Function('return ' + e)()}
                    catch(err){return e}
                })();

                console.log(item)
                // let item = typeof (new Function('return ' + e)()) == 'object' ? (new Function('return ' + e)()) : e;
                return {
                    param: (typeof item) + '--' + e,
                    toStr: (function(){
                        try{return item.toString()}
                        catch(err){return '[error]'+err};
                    })(),
                    valOf: (function(){
                        try{return item.valueOf()}
                        catch(err){return '[error]'+err}
                    })(),
                    xetoValStr: XEUtils.toValueString(item)
                }
            })
        },
        mounted() { 
            this.$nextTick(()=>{
                $('table td:contains("[error]")').css('color','red');
            })
        },
        methods: {
            cellClass({row,column,rowIndex,columnIndex}){
                // console.log(row,column,rowIndex,columnIndex);
                // console.log(row[column.property])
            }
        },
    }
</script>
<style>
    .el-table thead tr th{
        background-color: gray !important;
        color: #fff;
    }
    .el-table tr *{
        text-align: center;
    }
    .color-red{
        background-color: red !important;
        color: #fff;
        font-size: 20px;
    }
    .color-black{
        color: black;
        font-family: Arial, Helvetica, sans-serif;
    }
    .strong{
        color: lightpink;
        border: 1px solid #ddd;
        border-radius: 4px;
        padding: 2px 4px;
        margin: 0 4px;
        display: inline-block;
    }
    header li{
        margin: 10px 0;
    }

</style>