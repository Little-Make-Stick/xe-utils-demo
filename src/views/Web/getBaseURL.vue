<template>
    <div class='contain'>
        <header>
            <h2>isNaN</h2>
            <li>Cookie 是一些数据, 存储于你电脑上的文本文件中。</li>

            <li>当 web 服务器向浏览器发送 web 页面时，在连接关闭后，服务端不会记录用户的信息。</li>

            <li>Cookie 的作用就是用于解决 "如何记录客户端的用户信息":</li>

        </header>

        <table border :cell-class-name="cellClass">

        </table>
    </div>
</template>
<script>
    // import XEUtils from 'xe-utils';
    // const XEUtils = require('xe-utils')
    export default {
        data() {
            return {
                cookie_code: [

                ]
            }
        },
        watch: {},
        computed: {},
        created() {
        },
        mounted() {
            this.$nextTick(() => {

            })
        },
        methods: {
        },
    }
</script>
<style>
    .el-table thead tr th {
        background-color: gray !important;
        color: #fff;
    }

    .el-table tr * {
        text-align: center;
    }

    .color-red {
        background-color: red !important;
        color: #fff;
        font-size: 20px;
    }

    .color-black {
        color: black;
        font-family: Arial, Helvetica, sans-serif;
    }
</style>