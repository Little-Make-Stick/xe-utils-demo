<template>
  <div class="home">
    <el-container style="height: 100vh; border: 1px solid #eee">
      <el-menu router :default-active="$route.path" :collapse="isCollapse">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-sugar"></i>
            <span slot="title">Base</span>
          </template>
          <el-menu-item index="/base/isNaN">isNaN</el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-apple"></i>
            <span slot="title">Object</span>
          </template>
          <el-menu-item index="/base/isNaN">isNaN</el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-magic-stick"></i>
            <span slot="title">Function</span>
          </template>
          <el-menu-item index="/base/isNaN">isNaN</el-menu-item>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">
            <i class="el-icon-grape"></i>
            <span slot="title">Array</span>
          </template>
          <el-menu-item index="/base/isNaN">isNaN</el-menu-item>
        </el-submenu>
        <el-submenu index="5">
          <template slot="title">
            <i class="el-icon-date"></i>
            <span slot="title">Date</span>
          </template>
          <el-menu-item index="/base/isNaN">isNaN</el-menu-item>
        </el-submenu>
        <el-submenu index="6">
          <template slot="title">
            <i class="el-icon-ice-cream-round"></i>
            <span slot="title">Number</span>
          </template>
          <el-menu-item index="/number/operation">operation</el-menu-item>
          <el-menu-item index="/number/formatter">formatter</el-menu-item>
          <el-menu-item index="/number/math_opt">mathOpt</el-menu-item>
        </el-submenu>
        <el-submenu index="7">
          <template slot="title">
            <i class="el-icon-watermelon"></i>
            <span slot="title">String</span>
          </template>
          <el-menu-item index="/string/toValueString">toValueString</el-menu-item>
          <el-menu-item index="/string/escape_unescape">(un)escape</el-menu-item>
          <el-menu-item index="/string/camelCase_kebabCase">camel(kebab)Case</el-menu-item>
          <el-menu-item index="/string/startsWith_endsWith">starts(ends)With</el-menu-item>
          <el-menu-item index="/string/template">template</el-menu-item>
          <el-menu-item index="/string/string">string</el-menu-item>
        </el-submenu>
        <el-submenu index="8">
          <template slot="title">
            <i class="el-icon-paperclip"></i>
            <span slot="title">URL</span>
          </template>
          <el-menu-item index="/url/url">url</el-menu-item>
        </el-submenu>
        <el-submenu index="9">
          <template slot="title">
            <i class="el-icon-set-up"></i>
            <span slot="title">Web</span>
          </template>
          <el-menu-item index="/web/browse">browse</el-menu-item>
          <el-menu-item index="/web/locat">locat</el-menu-item>
          <el-menu-item index="/web/getBaseURL">getBaseURL</el-menu-item>
          <el-menu-item index="/web/cookie">cookie</el-menu-item>
        </el-submenu>
        <el-submenu index="10">
          <template slot="title">
            <i class="el-icon-s-tools"></i>
            <span slot="title">Setting</span>
          </template>
          <el-menu-item index="/setting/setting">setting</el-menu-item>
        </el-submenu>
      </el-menu>

      <el-container>  
        <el-header style="
            text-align: right;
            font-size: 12px;
            background: rgb(238, 241, 246);
            display: flex;
            align-items: center;
            justify-content: end;
          ">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>xxx</span>
        </el-header>

        <el-main>
          <router-view :key="$route.path"></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  export default {
    name: "Home",
    components: {},
    data() {
      return {
        isCollapse: false,
      };
    },
    created() {
      this.$nextTick(() => {
        window.onload = ()=>{this.setCollapse()};
        window.onresize = ()=>{this.setCollapse()};
      })
    },
    methods: {
      setCollapse() {
        if (document.querySelector('#app').clientWidth <= 1400) {
          this.isCollapse = true;
        } else {
          this.isCollapse = false;
        }
      }
    }
  };
</script>
<style>
  .el-menu:not(.el-menu--collapse) {
    text-align: left;
  }
  .el-menu--collapse.el-menu {
  }
</style>