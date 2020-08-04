# umi

## 通过脚手架创建umi

[umi](https://umijs.org/zh/) 通过 [create-umi](https://github.com/umijs/create-umi) 提供脚手架能力，包含：

- **project**，通用项目脚手架，支持选择是否启用 TypeScript，以及 [umi-plugin-react](https://umijs.org/zh/plugin/umi-plugin-react.html) 包含的功能
- **app**， 创建一个简单的样板工程，支持typescript。
- **ant-design-pro**，仅包含 [ant-design-pro](https://github.com/ant-design/ant-design-pro) 布局的脚手架，具体页面可通过 [umi block](https://umijs.org/zh/guide/block.html) 添加
- **block**，区块脚手架
- **plugin**，插件脚手架
- **library**，依赖（组件）库脚手架，基于 [umi-plugin-library](https://github.com/umijs/umi-plugin-library)

> 你可以通过 `yarn create umi` 或 `npm create umi` 使用 create-umi。推荐使用 `yarn create` 命令，能确保每次使用最新的脚手架。

## 目录及约定

一个复杂应用的目录结构如下：

```js
.
├── dist/                          // 默认的 build 输出目录
├── mock/                          // mock 文件所在目录，基于 express
├── config/
    ├── config.js                  // umi 配置，同 .umirc.js，二选一
└── src/                           // 源码目录，可选
    ├── layouts/index.js           // 全局布局
    ├── pages/                     // 页面目录，里面的文件即路由
        ├── .umi/                  // dev 临时目录，需添加到 .gitignore
        ├── .umi-production/       // build 临时目录，会自动删除
        ├── document.ejs           // HTML 模板
        ├── 404.js                 // 404 页面
        ├── page1.js               // 页面 1，任意命名，导出 react 组件
        ├── page1.test.js          // 用例文件，umi test 会匹配所有 .test.js 和 .e2e.js 结尾的文件
        └── page2.js               // 页面 2，任意命名
    ├── global.css                 // 约定的全局样式文件，自动引入，也可以用 global.less
    ├── global.js                  // 可以在这里加入 polyfill
    ├── app.js                     // 运行时配置文件
├── .umirc.js                      // umi 配置，同 config/config.js，二选一
├── .env                           // 环境变量
└── package.json
```

## 路由

umi 会根据 `pages` 目录自动生成路由配置。

### 动态路由

```js
[
  { path: '/users', component: './pages/users/_layout.js',
    routes: [
     { path: '/users/', component: './pages/users/index.js' },
     { path: '/users/:id', component: './pages/users/$id.js' },
   ],
  },
]
```



### 创建项目

