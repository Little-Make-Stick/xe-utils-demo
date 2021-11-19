<template>
    <div class='contain'>
        <header>
            <h2>isNaN</h2>
            <li>js-isNaN() 函数将测试值转换为数字，然后对其进行测试。</li>
            <li>Num-isNaN() 不会将值转换为数字，并且不会为任何非数字类型的值返回 true。</li>
            <li>xe-isNaN (val) 判断是否非数值，如果 value 是一个 NaN，那么返回 true，否则返回 false</li>

        </header>

        <el-table :data="isNaNTest" border :cell-class-name="cellClass">
            <el-table-column prop="param" label="param"></el-table-column>
            <el-table-column prop="jsRes" label="js(isNaN)"></el-table-column>
            <el-table-column prop="NumRes" label="Number(isNaN)"></el-table-column>
            <el-table-column prop="xeRes" label="XEUtils(isNaN)"></el-table-column>
        </el-table>
    </div>
</template>
<script>
    import XEUtils from 'xe-utils';
    // const XEUtils = require('xe-utils')
    export default {
        data() {
            return {
                isNaNTest: [
                    28, '28', 0, new Date(2021, 3, 4), false, true, null, undefined, '', new Array(),NaN
                ]
            }
        },
        watch: {},
        computed: {},
        created() {
            this.isNaNTest = this.isNaNTest.map(e => {
                return {
                    param: (typeof e) + '--' + e,
                    jsRes: isNaN(e).toString(),
                    NumRes: Number.isNaN(e).toString(),
                    xeRes: XEUtils.isNaN(e).toString()
                }
            })
        },
        mounted() { 
            this.$nextTick(()=>{

            })
        },
        methods: {
            cellClass({row,column,rowIndex,columnIndex}){
                console.log(row,column,rowIndex,columnIndex);
                console.log(row[column.property])
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
</style>