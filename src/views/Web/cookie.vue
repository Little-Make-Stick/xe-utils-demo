<template>
    <div class='contain'>
        <header>
            <h2>cookie</h2>
            <li>Cookie 是一些数据, 存储于你电脑上的文本文件中。</li>

            <li>当 web 服务器向浏览器发送 web 页面时，在连接关闭后，服务端不会记录用户的信息。</li>

            <li>Cookie 的作用就是用于解决 "如何记录客户端的用户信息":</li>

        </header>

        <table cellspacing="0" cellPadding="8px">
            <tr>
                <th>funct</th>
                <th>web</th>
                <th>xe</th>
            </tr>
            <tr v-for="(item,i) in cookie_code" :key="i">
                <td>{{item.funct}}</td>
                <td :rowspan="item.webCookie_rowspan">{{item.webCookie}}
                    <div class="code" v-if="item.webCookieOutput">{{item.webCookieOutput}}</div>
                </td>
                <td>{{item.xeCookie}}
                    <div class="code" v-if="item.xeCookieOutput">{{item.xeCookieOutput}}</div>
                </td>
            </tr>
        </table>

        <div class="code-dialog" title="code-dialog">
            <div class="code bg-green"></div>
        </div>
    </div>
</template>
<script>
    import XEUtils from 'xe-utils';
    import $ from 'jquery'
    // const XEUtils = require('xe-utils')
    export default {
        data() {
            return {
                js_cookie: document.cookie,
                js_cookie_map: new Map(),
                cookie_code: [
                    // 增
                    {
                        funct: '添加',
                        webCookie: 'document.cookie = "username=John Doe"',
                        xeCookie: "XEUtils.cookie.set('username', 'Sarah White', {})",
                        webCookieOutput: document.cookie = "username=John Doe",
                        xeCookieOutput: XEUtils.cookie.set('username', 'Sarah White', {})
                    },
                    {
                        funct: '完整设置domain/path/secure/expires',
                        webCookie: 'document.cookie = "WebCookie完整设置=WebCookie; expires=Thu, 18 Dec 2043 12:00:00 GMT; path=/"',
                        xeCookie: "XEUtils.cookie.set('XECookie完整设置', 'XECookie', { domain: 'localhost:8080/', path: '/', expires: 7, secure: true })",
                        webCookieOutput: document.cookie = "WebCookie完整设置=WebCookie; expires=Thu, 18 Dec 2043 12:00:00 GMT; path=/",
                        xeCookieOutput: XEUtils.cookie.set('XECookie完整设置', 'XECookie', { domain: 'localhost:8080/', path: '/', expires: 7, secure: true })
                    },
                    {
                        funct: '添加-指定 10 秒后过期',
                        webCookie: 'let exp = new Date();exp.setTime(exp.getTime()+10 * 1000);document.cookie = "WebCookie10s=WebCookie; expires="+exp.toGMTString();',
                        xeCookie: "XEUtils.cookie('XECookie10s', 'XECookie', {expires: '10s'})",
                        // webCookieOutput: document.cookie = "username=John Doe; expires=" + (new Date().toGMTString()),
                        xeCookieOutput: XEUtils.cookie('XECookie10s', 'XECookie', {expires: '10s'})
                    },
                    {
                        funct: '添加-指定 1 分钟后过期',
                        webCookie: 'let exp = new Date();exp.setTime(exp.getTime()+1 * 60 * 1000);document.cookie = "WebCookie1m=WebCookie; expires="+exp.toGMTString();',
                        xeCookie: "XEUtils.cookie('XECookie1m', 'XECookie', {expires: '1m'})",
                        // webCookieOutput: document.cookie = "username=John Doe; expires=" + (new Date().toGMTString()),
                        xeCookieOutput: XEUtils.cookie('XECookie1m', 'XECookie', {expires: '1m'})
                    },
                    {
                        funct: '添加-指定 1 小时后过期',
                        webCookie: 'let exp = new Date();exp.setTime(exp.getTime()+1 * 60 * 60 * 1000);document.cookie = "WebCookie1h=WebCookie; expires="+exp.toGMTString();',
                        xeCookie: "XEUtils.cookie('XECookie1h', 'XECookie', {expires: '1H'})",
                        // webCookieOutput: document.cookie = "username=John Doe; expires=" + (new Date().toGMTString()),
                        xeCookieOutput: XEUtils.cookie('XECookie1h', 'XECookie', {expires: '1H'})
                    },
                    {
                        funct: '添加-指定 1天后过期',
                        webCookie: 'document.cookie = "WebCookie1d=WebCookie; expires="+new Date(new Date().getFullYear(),new Date().getMonth(),new Date().getDate()+1).toGMTString();',
                        xeCookie: "XEUtils.cookie('XECookie1d', 'XECookie', {expires: '1d'})",
                        webCookieOutput: document.cookie = "WebCookie1d=WebCookie; expires="+new Date(new Date().getFullYear(),new Date().getMonth(),new Date().getDate()+1).toGMTString(),
                        xeCookieOutput: XEUtils.cookie('XECookie1h', 'XECookie', {expires: '1d'})
                    },
                    {
                        funct: '添加-指定 1 月后过期',
                        webCookie: 'document.cookie = "WebCookie1M=WebCookie; expires="+new Date(new Date().getFullYear(),new Date().getMonth()+1,new Date().getDate()).toGMTString();',
                        xeCookie: "XEUtils.cookie('XECookie1M', 'XECookie', {expires: '1M'})",
                        webCookieOutput: document.cookie = "WebCookie1M=WebCookie; expires="+new Date(new Date().getFullYear(),new Date().getMonth()+1,new Date().getDate()).toGMTString(),
                        xeCookieOutput: XEUtils.cookie('XECookie1M', 'XECookie', {expires: '1M'})
                    },
                    {
                        funct: '添加-指定 1 年后过期',
                        webCookie: 'document.cookie = "WebCookie1y=WebCookie; expires="+new Date(new Date().getFullYear()+1,new Date().getMonth(),new Date().getDate()).toGMTString();',
                        xeCookie: "XEUtils.cookie('XECookie1y', 'XECookie', {expires: '1y'})",
                        webCookieOutput: document.cookie = "WebCookie1y=WebCookie; expires="+new Date(new Date().getFullYear()+1,new Date().getMonth(),new Date().getDate()).toGMTString(),
                        xeCookieOutput: XEUtils.cookie.set('XECookie1y', 'XECookie', {expires: '1y'})
                    },
                    {
                        funct: '添加-指定数值-1天后',
                        webCookie: 'document.cookie = "WebCookie-t1=WebCookie; expires="+new Date(new Date().getFullYear(),new Date().getMonth(),new Date().getDate()+1).toGMTString();',
                        xeCookie: "XEUtils.cookie('XECookie-t1', 'XECookie', {expires: 1})",
                        webCookieOutput: document.cookie = "WebCookie-t1=WebCookie; expires="+new Date(new Date().getFullYear(),new Date().getMonth(),new Date().getDate()+1).toGMTString(),
                        xeCookieOutput: XEUtils.cookie('XECookie-t1', 'XECookie', {expires: 1})
                    },
                    {
                        funct: '添加-指定时间戳',
                        webCookie: '————',
                        xeCookie: "XEUtils.cookie('XECookieTimeStamp', 'XECookie', {expires: 1525541938031})",
                        // webCookieOutput: document.cookie = "username=John Doe; expires=" + (new Date().toGMTString()),
                        xeCookieOutput: XEUtils.cookie.set('XECookieTimeStamp', 'XECookie', {expires: 1525541938031})
                    },
                    {
                        funct: '添加-指定时间',
                        webCookie: 'document.cookie = "WebCookieTime=WebCookie; expires=" + (new Date().toGMTString())',
                        xeCookie: "XEUtils.cookie('XECookieTime', 'XECookie', {expires: new Date()})",
                        webCookieOutput: document.cookie = "WebCookieTime=WebCookie; expires=" + (new Date().toGMTString()),
                        xeCookieOutput: XEUtils.cookie('XECookieTime', 'XECookie', {expires: new Date()})
                    },
                    // 改
                    {
                        funct: '添加/修改',
                        webCookie: 'document.cookie = "WebCookie=webcookie;"',
                        xeCookie: "XEUtils.cookie('XECookie', 'xecookie')",
                        webCookieOutput: document.cookie = "WebCookie=webcookie;",
                        xeCookieOutput: XEUtils.cookie('XECookie', 'xecookie')
                    },
                    // 删
                    {
                        funct: '删除',
                        webCookie: 'document.cookie = "WebCookie=;"',
                        xeCookie: "XEUtils.cookie('XECookie', null, {expires: -1})",
                        webCookieOutput: document.cookie = "WebCookie=;",
                        xeCookieOutput: XEUtils.cookie('XECookie', null, {expires: -1})
                    },
                    {
                        funct: '删除',
                        webCookie: 'document.cookie = "WebCookie=;"',
                        xeCookie: "XEUtils.cookie('XECookie1s', null, {expires: -1, path: '/'})",
                        // webCookieOutput: document.cookie = "username=;",
                        // xeCookieOutput: XEUtils.cookie('XECookie1s', null, {expires: -1, path: '/'})
                    },
                    {
                        funct: '删除',
                        webCookie: 'document.cookie = "WebCookie=;"',
                        xeCookie: "XEUtils.cookie.remove('XECookie1m')",
                        // webCookieOutput: document.cookie = "username=John Doe; expires=" + (new Date().toGMTString()),
                        xeCookieOutput: XEUtils.cookie.remove('XECookie1m')
                    },
                    {
                        funct: '删除',
                        webCookie: 'document.cookie = "WebCookie=;"',
                        xeCookie: "XEUtils.cookie.remove('XECookie1h', {path: '/'})",
                        // webCookieOutput: document.cookie = "username=John Doe; expires=" + (new Date().toGMTString()),
                        // xeCookieOutput: XEUtils.cookie.remove('XECookie1h', {path: '/'})
                    },
                    // 查
                    {
                        funct: '获取所有',
                        webCookie: 'document.cookie;',
                        xeCookie: 'XEUtils.cookie()',
                        webCookieOutput: document.cookie,
                        xeCookieOutput: XEUtils.cookie()
                    },
                    {
                        funct: '判断name是否存在',
                        webCookie: 'document.cookie.split(";").forEach(e=>{处理数据成键值对});查找对应键',
                        xeCookie: 'XEUtils.cookie.has("username")',
                        // webCookieOutput: getJsCookieMapItem('name'),
                        xeCookieOutput: XEUtils.cookie.has('username')
                    },
                    {
                        funct: '根据name获取',
                        webCookie: '————',
                        xeCookie: "XEUtils.cookie('username')",
                        // webCookieOutput: getJsCookieMapItem('name'),
                        xeCookieOutput: XEUtils.cookie('username')
                    },
                    {
                        funct: '根据name获取',
                        webCookie: '————',
                        xeCookie: 'XEUtils.cookie.get("username")',
                        // webCookieOutput: getJsCookieMapItem('name'),
                        xeCookieOutput: XEUtils.cookie.get('username')
                    },
                    // 批量 ['增','删','改']
                    {
                        funct: '批量添加并设置domain/path/secure/expires 7天后过期',
                        webCookie: 'document.cookie = "webcookie1=webcookie1;webcookie2=webcookie2;expires="+new Date(new Date().getFullYear(),new Date().getMonth(),new Date().getDate()+7).toGMTString();',
                        xeCookie: "XEUtils.cookie([{xecookie1: 'xecookie1', xecookie2: 'xecookie2', domain: 'localhost:8080/', path: '/', expires: 7, secure: true}])",
                        webCookieOutput: document.cookie = "webcookie1=webcookie1;webcookie2=webcookie2;expires="+new Date(new Date().getFullYear(),new Date().getMonth(),new Date().getDate()+7).toGMTString(),
                        xeCookieOutput: XEUtils.cookie([{xecookie1: 'xecookie1', xecookie2: 'xecookie2', domain: 'localhost:8080/', path: '/', expires: 7, secure: true}])
                    },
                    {
                        funct: '批量添加/修改',
                        webCookie: 'document.cookie = "webcookie1=webcookie11;webcookie2=webcookie22;expires="+new Date(new Date().getFullYear(),new Date().getMonth(),new Date().getDate()+7).toGMTString();',
                        xeCookie: "XEUtils.cookie([{xecookie1: 'xecookie11', xecookie2: 'xecookie22'}])",
                        webCookieOutput: document.cookie = "webcookie1=webcookie11;webcookie2=webcookie22;expires="+new Date(new Date().getFullYear(),new Date().getMonth(),new Date().getDate()+7).toGMTString(),
                        xeCookieOutput: XEUtils.cookie([{xecookie1: 'xecookie11', xecookie2: 'xecookie22'}])
                    },
                    {
                        funct: '批量删除',
                        webCookie: 'document.cookie = "webcookie1=;webcookie2=;"',
                        xeCookie: "XEUtils.cookie([{xecookie1: 'xecookie11',xecookie2: 'xecookie22' , expires: -1}])",
                        webCookieOutput: document.cookie = "webcookie1=;webcookie2=;",
                        xeCookieOutput: XEUtils.cookie([{xecookie1: 'xecookie11',xecookie2: 'xecookie22' , expires: -1}])
                    },
                ]
            }
        },
        watch: {},
        computed: {},
        created() {
            document.cookie.split(";").forEach(e => {
                let items = e.split('=');
                this.js_cookie_map.set(items[0], items[1]);
            });
        },
        mounted() {
            this.$nextTick(() => {
                    $(".code-dialog").dialog({
                        autoOpen: false,
                        show: {
                            effect: "blind",
                            duration: 500
                        },
                        hide: {
                            effect: "explode",
                            duration: 500
                        }
                    });
                    $('.code').on('click', e => {
                        $('.code-dialog').dialog('open');
                        console.log(e.target.innerText)
                        $('.code-dialog .code').text(e.target.innerText);
                    })
            })
        },
        methods: {
            getJsCookieMapItem(item) {
                return this.js_cookie_map.get(item)
            },
            getExpiresTime(seconds){
                let exp = new Date();
                exp.setTime(exp.getTime() + seconds * 1000);
                return exp.toGMTString();
            },
            forEachJsCookieMap(){
                this.js_cookie_map.forEach((v,k)=>{
                    console.log(k,v)
                })
            }
        },
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

    .bg-green{
        background-color:lightslategray;
        line-height: 20px;
        color: #fff;
    }

    .ui-dialog.ui-corner-all.ui-widget.ui-widget-content.ui-front.ui-draggable.ui-resizable {
        padding: 0;
        width: 60vw !important;
        margin: 0 auto;
        top: 50px !important;
        border-radius: 0;
    }

    table .code {
        max-height: 40px;
        overflow-y: auto;
        overflow-x: auto;
    }

    .code::-webkit-scrollbar {
        /*滚动条整体样式*/
        width: 10px;
        /*高宽分别对应横竖滚动条的尺寸*/
        height: 1px;
    }

    .code::-webkit-scrollbar {
        width: 5px !important;
        height: 5px;
        background: #ffffff88;
        border-radius: 5px;
        border: none;
        outline: none;
    }


    .code::-webkit-scrollbar-thumb {
        /*滚动条里面小方块*/
        /* border-radius: 10px; */
        box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
        background: #a9a9a9;
    }

    .code::-webkit-scrollbar-track {
        /*滚动条里面轨道*/
        box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
        /* border-radius: 10px; */
        background: #ededed;
    }


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

    table tr th {
        background-color: darkgrey;
        color: #fff;
    }

    table,
    table th,
    table td {
        border: 1px solid #ddd;
        text-align: center;
    }
</style>