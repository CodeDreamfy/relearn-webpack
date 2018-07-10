## 使用webpack替代之前gulp来构建h5的脚手架
主要实现了：

* ~~开发和线上环境不同导致资源引用问题，实现了本地开发默认'./'，线上会加一个用户配置的自定义路径前缀，替换html内的img:src，video:src与css内部的引用资源路径和js路径引用~~
* ~~babel转码~~
* ~~postcss特性，包括：px2rem、less语法支持、cssnano等~~
* ~~使用rem+vw的方式进行适配页面~~
* ~~图片压缩 (做了压缩，但是不理想，webpack不考虑图片压缩，使用tinypng)~~
* ~~抽离公共js，css~~
* ~~使用了webpack4+新特性~~
* ~~使用热加载实时更新页面~~
* ~~将部分公共库自动复制到dist页面~~
* ~~增加webpack-dashboard-plugins插件，方便直观显示devServer状态（在build 的时候容易出问题，已经删除 ）~~

### shell:
> npm run dev

本地开发模式

> npm run build

本地build后生成dist目录，资源相对dist

> npm run build:prod

用于线上部署，生成dist目录，但是资源相对于用户自定义的前缀拼接后

#### 用户自定义配置方法：
修改`./config/webpack.prod.js`文件中的：
> const assetsPath = env == "productionRelease" ? "/src/h5/xxx/dist" : "./";
