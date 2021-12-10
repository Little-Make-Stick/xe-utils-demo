<template>
    <div class="contain">
        <header>
            <li>XEUtils.add () 加法运算
                <div class="code">XEUtils.add (num1 , num2)</div>
            </li>
            <li>XEUtils.subtract () 减法运算
                <div class="code">XEUtils.subtract (num1 , num2)</div>
            </li>
            <li>XEUtils.multiply () 乘法运算
                <div class="code">XEUtils.multiply (num1 , num2)</div>
            </li>
            <li>XEUtils.divide () 除法运算
                <div class="code">XEUtils.divide (num1 , num2)</div>
            </li>
        </header>

        <el-table :data="operations" border :cell-class-name="cellClass">
            <el-table-column prop="param" label="param"></el-table-column>
            <el-table-column prop="descripe" label="descripe"></el-table-column>

            <el-table-column prop="add" label="add" width="110"></el-table-column>
            <el-table-column prop="xeAdd" label="XE-utils(add)" width="110"></el-table-column>
            
            <el-table-column prop="subtract" label="subtract" width="170"></el-table-column>
            <el-table-column prop="xeSubtract" label="XE-utils(subtract)" width="170"></el-table-column>

            <el-table-column prop="multiply" label="multiply" width="110"></el-table-column>
            <el-table-column prop="xeMultiply" label="XE-utils(multiply)" width="110"></el-table-column>

            <el-table-column prop="divide" label="divide" width="150"></el-table-column>
            <el-table-column prop="xeDivide" label="XE-utils(divide)" width="150"></el-table-column>
        </el-table>
    </div>
</template>
<script>
    import $ from "jquery";
    import XEUtils from "xe-utils";
    export default {
        data() {
            return {
                operations: [
                    {
                        param: "{num1: 10, num2: 20}",
                        descripe: '两个正数',
                        add: (10 + 20).toString(),
                        subtract: (10 - 20).toString(),
                        multiply: (10 * 20).toString(),
                        divide: (10 / 20).toString(),

                        xeAdd: XEUtils.add(10,20).toString(),
                        xeSubtract: XEUtils.subtract(10,20).toString(),
                        xeMultiply: XEUtils.multiply(10,20).toString(),
                        xeDivide: XEUtils.multiply(10,20).toString(),
                    },
                    {
                        param: "{num1: -10, num2: -20}",
                        descripe: '两个负数',
                        add: (-10 + (-20)).toString(),
                        subtract: (-10 - (-20)).toString(),
                        multiply: (-10 * (-20)).toString(),
                        divide: (-10 / (-20)).toString(),

                        xeAdd: XEUtils.add(-10,-20).toString(),
                        xeSubtract: XEUtils.subtract(-10,-20).toString(),
                        xeMultiply: XEUtils.multiply(-10,-20).toString(),
                        xeDivide: XEUtils.multiply(-10,-20).toString(),
                    },
                    {
                        param: "{num1: 10, num2: -20}",
                        descripe: '两个数，一正一负',
                        add: (10 + (-20)).toString(),
                        subtract: (10 - (-20)).toString(),
                        multiply: (10 * (-20)).toString(),
                        divide: (10 / (-20)).toString(),

                        xeAdd: XEUtils.add(10,-20).toString(),
                        xeSubtract: XEUtils.subtract(10,-20).toString(),
                        xeMultiply: XEUtils.multiply(10,-20).toString(),
                        xeDivide: XEUtils.multiply(10,-20).toString(),
                    },
                    {
                        param: "{num1: 10, num2: -20, num3: 300}",
                        descripe: '三个数',
                        add: (10 + (-20) + 300).toString(),
                        subtract: (10 - (-20) - 300).toString(),
                        multiply: (10 * (-20) * 300).toString(),
                        divide: (10 / (-20) / 300).toString(),

                        xeAdd: XEUtils.add(10,-20,300).toString(),
                        xeSubtract: XEUtils.subtract(10,-20,300).toString(),
                        xeMultiply: XEUtils.multiply(10,-20,300).toString(),
                        xeDivide: XEUtils.multiply(10,-20,300).toString(),
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