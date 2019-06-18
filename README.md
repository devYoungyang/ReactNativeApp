##### 集成mobx步骤：

###### 1.安装mobx命令

` yarn add mobx mobx-react `

###### 2.安装插件命令

` yarn add @babel/cli @babel/plugin-proposal-class-properties @babel/plugin-proposal-decorators @babel/plugin-proposal-object-rest-spread @babel/plugin-transform-classes @babel/plugin-transform-flow-strip-types @babel/plugin-transform-runtime @babel/polyfill @babel/preset-env @babel/preset-flow @babel/preset-react babel-loader babel-plugin-import babel-plugin-module-resolver babel-plugin-transform-runtime babel-polyfill babel-preset-es2015 babel-preset-react babel-preset-react-native babel-preset-react-native-stage-0 babel-preset-react-native-syntax -D`

###### 3.修改babel.config.js配置

`{
  presets: ['module:metro-react-native-babel-preset', '@babel/preset-flow'],
  plugins: [
    '@babel/transform-flow-strip-types',
    [
      '@babel/plugin-proposal-decorators', { 'legacy' : true }
    ],
    [
      '@babel/plugin-proposal-class-properties', {'loose': true}
    ],
    [
      '@babel/plugin-transform-runtime', {}
    ],
    ['import', { 'libraryName': '@ant-design/react-native' }]
  ]
}`







