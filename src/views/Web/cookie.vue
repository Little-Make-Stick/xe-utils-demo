<template>
    <div class='contain'>
        <header>
            <h2>cookie</h2>
            <li>Cookie 是一些数据, 存储于你电脑上的文本文件中。</li>

            <li>当 web 服务器向浏览器发送 web 页面时，在连接关闭后，服务端不会记录用户的信息。</li>

            <li>Cookie 的作用就是用于解决 "如何记录客户端的用户信息":</li>

        </header>

        <el-table border>

        </el-table>
    </div>
</template>
<script>
    // import XEUtils from 'xe-utils';
    // const XEUtils = require('xe-utils')
    export default {
        data() {
            return {
                cookie_code: [
                    // 查
                    {
                        funct: '获取所有',
                        webCookie: 'document.cookie;',
                        xeCookie:  'XEUtils.cookie()'
                    },
                    {
                        funct: '判断name是否存在',
                        webCookie: '',
                        xeCookie:  'XEUtils.cookie.has(name)'
                    },
                    {
                        funct: '根据name获取',
                        webCookie: '',
                        xeCookie:  "XEUtils.cookie('name')"
                    },
                    {
                        funct: '根据name获取',
                        webCookie: '',
                        xeCookie:  'XEUtils.cookie.get(name)'
                    },
                    // 增
                    {
                        funct: '添加',
                        webCookie: 'document.cookie;',
                        xeCookie:  "XEUtils.cookie.set(name, value, option)"
                    },
                    {
                        funct: '完整设置domain/path/secure/expires',
                        webCookie: 'document.cookie;',
                        xeCookie:  "XEUtils.cookie('name', 'value', {domain: 'xxx.com', path: '/', expires: 7, secure: true})"
                    },
                    {
                        funct: '添加-指定 10 秒后过期',
                        webCookie: 'document.cookie;',
                        xeCookie:  "XEUtils.cookie('name', 'value', {expires: '10s'})"
                    },
                    {
                        funct: '添加-指定 1 分钟后过期',
                        webCookie: 'document.cookie;',
                        xeCookie:  "XEUtils.cookie('name', 'value', {expires: '1m'})"
                    },
                    {
                        funct: '添加-指定 1 小时后过期',
                        webCookie: 'document.cookie;',
                        xeCookie:  "XEUtils.cookie('name', 'value', {expires: '1H'})"
                    },
                    {
                        funct: '添加-指定 1天后过期',
                        webCookie: 'document.cookie;',
                        xeCookie:  "XEUtils.cookie('name', 'value', {expires: '1d'})"
                    },
                    {
                        funct: '添加-指定 1 月后过期',
                        webCookie: 'document.cookie;',
                        xeCookie:  "XEUtils.cookie('name', 'value', {expires: '1M'})"
                    },
                    {
                        funct: '添加-指定 1 年后过期',
                        webCookie: 'document.cookie;',
                        xeCookie:  "XEUtils.cookie('name', 'value', {expires: '1y'})"
                    },
                    {
                        funct: '添加-指定数值-1天后',
                        webCookie: 'document.cookie;',
                        xeCookie:  "XEUtils.cookie('name', 'value', {expires: 1})"
                    },
                    {
                        funct: '添加-指定时间戳',
                        webCookie: 'document.cookie;',
                        xeCookie:  "XEUtils.cookie('name', 'value', {expires: 1525541938031})"
                    },
                    {
                        funct: '添加-指定时间',
                        webCookie: 'document.cookie;',
                        xeCookie:  "XEUtils.cookie('name', 'value', {expires: new Date()})"
                    },
                    // 改
                    {
                        funct: '添加/修改',
                        webCookie: 'document.cookie;',
                        xeCookie:  "XEUtils.cookie('name', 'value')"
                    },
                    // 删
                    {
                        funct: '删除',
                        webCookie: 'document.cookie;',
                        xeCookie:  "XEUtils.cookie('name', null, {expires: -1})"
                    },
                    {
                        funct: '删除',
                        webCookie: 'document.cookie;',
                        xeCookie:  "XEUtils.cookie('name', null, {expires: -1, path: '/'})"
                    },
                    {
                        funct: '删除',
                        webCookie: 'document.cookie;',
                        xeCookie:  "XEUtils.cookie.remove(name)"
                    },
                    {
                        funct: '删除',
                        webCookie: 'document.cookie;',
                        xeCookie:  "XEUtils.cookie.remove(name, {path: '/'})"
                    },
                    // 批量 ['增','删','改']
                    {
                        funct: '批量添加并设置domain/path/secure/expires 7天后过期',
                        webCookie: 'document.cookie;',
                        xeCookie:  "XEUtils.cookie([{name: 'name', value: 'value', domain: 'xxx.com', path: '/', expires: 7, secure: true}])"
                    },
                    {
                        funct: '批量添加/修改',
                        webCookie: 'document.cookie;',
                        xeCookie:  "XEUtils.cookie([{name: 'name', value: 'value'}])"
                    },
                    {
                        funct: '批量删除',
                        webCookie: 'document.cookie;',
                        xeCookie:  "XEUtils.cookie([{name: 'name', expires: -1}])"
                    },
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