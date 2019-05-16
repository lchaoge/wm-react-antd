## 项目技术栈

```
  "antd": "^3.18.1"                             Ant-Design UI框架  
  "axois": "^1.0.0"                             HTTP库
  "react-immutable": "^0.1.3"                   
  "redux-immutable": "^4.0.0"                   React数据统一库
  "react-redux": "^7.0.3"                       React绑定库
  "react-router-dom": "^5.0.0"                  路由
  "react-transition-group": "^4.0.1"            动画库
  "redux": "^4.0.1"                             数据管理库
  "redux-thunk": "^2.3.0"                       Redux中间件
  "styled-components": "^4.2.0"                 样式库
```


## 文件夹结构

项目应如下所示：

```
my-app/
  README.md
  node_modules/
  package.json
  config
  scrpits
  public/
    index.html
    wm-title.ico
  src/                          源文件
    index.js                    程序入口
    common/                     公共组件
      layout/
        components/             内部组件
        store/                  组件redux
          actionCreators.js     action
          constants.js          action常量
          index.js              redux入口
          reducer.js            
          urlMapping.js         接口url常量
        index.js                组件入口
        style.js                样式
    config                      接口代理等
    pages                       页面
    router                      路由
    static                      静态文件
    store                       redux
    themes                      主题
```

