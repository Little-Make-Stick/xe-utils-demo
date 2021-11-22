<template>
    <div class='contain'>
        <div id="accordion">
            <h3>camelCase </h3>
            <div>
                <li>将带驼峰字符串转成字符串</li>
                <div class="code">
                    XEUtils.camelCase('project-name') 
                </div>
                <div class="code">  
                    {{xeCamelCase}}
                </div>
            </div>
            <h3>kebabCase </h3>
            <div>
                <li>将字符串转成驼峰字符串</li>
                <div class="code">
                    XEUtils.kebabCase('projectName') 
                </div>
                <div class="code">
                    {{xeKebabCase}}
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
                xeCamelCase: null,
                xeKebabCase: null
            }
        },
        watch: {},
        computed: {},
        created() { 
            this.$nextTick(()=>{
                $( "#accordion" ).accordion();
            });
            this.xeCamelCase = XEUtils.camelCase('project-name');
            this.xeKebabCase = XEUtils.kebabCase('projectName');
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