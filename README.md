#### react11_app_react_redux项目

1）通过redux + react-redux，实现集中状态数据管理

2）react-redux和原始redux使用的区别：

* 在 `index.js`入口文件中，引入 Provider和store，使用 Provider包裹`<App />`，并添加 store属性，值为`{store}`
* 在其他页面（`.js`文件），引入 connect()函数，将原始组件 和 包裹组件，关联起来，该函数有两个参数：
  * 参数一：`(state)=>({xx: state})`（传入state）
  * 参数二：`{ increment,decrement }`（传入 action-creators）

