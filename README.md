# xe-utils-demo

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### XE-Utils
See [XE-Utils](https://x-extends.github.io/xe-utils/#/)

### Basic

### Object

### Function 

### Array

### Date

### Number

### String

* trim, padStart, repeat, **toValueString**,*template*, *camelCase*, kebabCase, **startsWith**, *endsWith*

* xe-utils 的 toValueString 可以将 '',null,undefined 转为 '' 而不报错，js 的 toString() 转换这三者时报错

* xe-utils 的 template 可以从对象提取属性以 指定的格式 输出，但是不能提取属性生成变量

* xe-utils 的 camelCase 可以将 带连字符字符串 转换成 驼峰字符串，只限转换 带连字符字符串 

* xe-utils 的 startsWith 可以 查询字符串(数字，数组)在指定开始位置(0)是否为某字符串 

* xe-utils 的 endesWith 可以 查询字符串(数字，数组)在指定开始位置(0)是否为某字符结尾 , 这里指定结尾如果是字符串或者设置开始位置都与预期结果不符

### URL

* **parseURL**, serialize, unserialize

* xe-utils 的 parseURL 可以提取链接的各部分信息

### Web
* browse, locat, getBaseURL, **cookie**

* js 的 cookie 操作时以字符串形式，xe-utils 的 cookie 可以以 json 形式读取和存入

### Setting
* setup, mixin

### JQuery-ui
see [JQuery-ui](https://jqueryui.com/)

* accordion手风琴

  ```html
  $( '#accordion' ).accordion();
  <div id="accordion">
      <h3>title1</h3>
      <div class="content">content1</div>
      <h3>title2</h3>
      <div class="content">content2</div>
  </div>
  ```

* dialog 对话框
  ```html 
  $( "#dialog" ).dialog();
  <div id="dialog" title="dialog-title">
      <p>dialog content</p>
  </div>
  ```

