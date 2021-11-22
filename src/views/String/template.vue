<template>
    <div class='contain'>
        <div id="accordion">
            <h3>template </h3>
            <div>
                <li>解析动态字符串模板</li>
                <div class="code">
                    XEUtils.template('{{xeTemplateStr}}', {name: 'John', age: 18 })
                </div>
                <div class="code">
                    {{xeTemplate}}
                </div>
            </div>
            <h3>解构赋值 </h3>
            <div>
                <li>es6 解构赋值</li>
                <div class="code">
                    {name, age} = {name: 'John', age: 18 }
                </div>
                <div class="code">
                    {{destructur}}
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
                xeTemplate: null,
                destructur: null,
                xeTemplateStr: '{{ name }} {{{age}}}',
            }
        },
        watch: {},
        computed: {},
        created() { 
            this.$nextTick(()=>{
                $( "#accordion" ).accordion();
            });
            this.xeTemplate = XEUtils.template('{{ name }} {{{age}}}', {name: 'John', age: 18 });
            this.destructur = (function(){
                // let {name, age} = {name: 'John', age: 18 };
                let { name, age} = {name: 'John', age: 18 };
                return name+' '+age;
            })();
        },
        mounted() { },
        methods: {},
    }
</script>
<style>
    .code{
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