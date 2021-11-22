<template>
    <div class="contain">
        <header>
            <li>startsWith() 判断字符串是否在源字符串的头部。
                <div class="code">XEUtils.startsWith (target , str [,startIndex])</div>
            </li>
            <li>endsWith(val) 判断字符串是否在源字符串的尾部。
                <div class="code">XEUtils.endsWith (target , str [,startIndex])</div>
            </li>
        </header>

        <el-table :data="starts_ends" border :cell-class-name="cellClass">
            <el-table-column prop="param" label="param"></el-table-column>
            <el-table-column prop="descripe" label="descripe"></el-table-column>
            <el-table-column prop="starts" label="XEUtils(EndsWith)"></el-table-column>
            <el-table-column prop="ends" label="XEUtils(StartsWidth)"></el-table-column>
        </el-table>
    </div>
</template>
<script>
    import $ from "jquery";
    import XEUtils from "xe-utils";
    export default {
        data() {
            return {
                starts_ends: [
                    // string
                    {
                        param: "{str: 'a',start:'a',end:'a'}",
                        descripe: 'a 是否以 a 开头 以 a 结尾',
                        starts: XEUtils.startsWith('a','a').toString(),
                        ends: XEUtils.endsWith('a','a').toString()
                    },
                    {
                        param: "{str: 'a',start:'a',end:'a',index: 2}",
                        descripe: 'a 是否以 a 开头 以 a 结尾，[注意] startIndex 超出字符串范围',
                        starts: XEUtils.startsWith('a','a',2).toString(),
                        ends: XEUtils.endsWith('a','a',2).toString()
                    },
                    {
                        param: "{str: 'abc',start:'a',end:'c'}",
                        descripe: 'abc 是否以 a 开头 以 c 结尾',
                        starts: XEUtils.startsWith('abc','a').toString(),
                        ends: XEUtils.endsWith('abc','c').toString()
                    },
                    {
                        param: "{str: 'abc',start:'b',end:'b'}",
                        descripe: 'abc 是否以 b 开头 以 b 结尾',
                        starts: XEUtils.startsWith('abc','b').toString(),
                        ends: XEUtils.endsWith('abc','b').toString()
                    },
                    {
                        param: "{str: 'abc',start:'a',end:'c',index:1}",
                        descripe: 'abc 是否以 a 开头 以 c 结尾,起始位置为1',
                        starts: XEUtils.startsWith('abc','a',1).toString(),
                        ends: XEUtils.endsWith('abc','c',1).toString()
                    },
                    {
                        param: "{str: 'abcd',start:'b',end:'c',index:1}",
                        descripe: 'abcd 是否以 b 开头 以 c 结尾,起始位置为1,[注意] XEUtils.endsWith("abcd","c", 1).toString() 为 true',
                        starts: XEUtils.startsWith('abcd','b',1).toString(),
                        ends: XEUtils.endsWith('abcd','c', 1).toString()
                    },
                    {
                        param: "{str: 'abcd',start:'ab',end:'cd'}",
                        descripe: 'abc 是否以 ab 开头 以 cd 结尾,[注意] XEUtils.endsWith("abcd","cd").toString() 为 false',
                        starts: XEUtils.startsWith('abcd','ab').toString(),
                        ends: XEUtils.endsWith('abcd','cd').toString()
                    },
                    {
                        param: "",
                        descripe: '',
                        starts: '',
                        ends: ''
                    },
                    // number
                    {
                        param: "{number: 1,start:1,end:1}",
                        descripe: '1 是否以 1 开头 以 1 结尾',
                        starts: XEUtils.startsWith(1,1).toString(),
                        ends: XEUtils.endsWith(1,1).toString()
                    },
                    {
                        param: "{number: 1234,start:2,end:4}",
                        descripe: '1234 是否以 2 开头 以 4 结尾,[注意] XEUtils.endsWith(1234,2).toString() 可匹配数字，数字的匹配值可以是数字或字符串',
                        starts: XEUtils.startsWith(1234,2).toString(),
                        ends: XEUtils.endsWith(1234,4).toString()
                    },
                    {
                        param: "{number: 1234,start:12,end:34}",
                        descripe: '1234 是否以 12 开头 以 34 结尾',
                        starts: XEUtils.startsWith(1234,12).toString(),
                        ends: XEUtils.endsWith(1234,34).toString()
                    },
                    {
                        param: "",
                        descripe: '',
                        starts: '',
                        ends: ''
                    },
                    // array
                    {
                        param: "{array: [1],start:1,end:1}",
                        descripe: '[1] 是否以 1 开头 以 1 结尾',
                        starts: XEUtils.startsWith([1],1).toString(),
                        ends: XEUtils.endsWith([1],1).toString()
                    },
                    {
                        param: "{array: [1,2,3,4],start:2,end:4}",
                        descripe: '[1,2,3,4] 是否以 2 开头 以 4 结尾,[注意] XEUtils.endsWith(1234,2).toString() 可匹配数组，数字的匹配值可以是数组或字符串',
                        starts: XEUtils.startsWith([1,2,3,4],[2]).toString(),
                        ends: XEUtils.endsWith([1,2,3,4],[4]).toString()
                    },
                    {
                        param: "{array: [1,2,3,4],start:12,end:34}",
                        descripe: '[1,2,3,4] 是否以 12 开头 以 34 结尾',
                        starts: XEUtils.startsWith([1,2,3,4],[1,2]).toString(),
                        ends: XEUtils.endsWith([1,2,3,4],[3,4]).toString()
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
        methods: {},
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