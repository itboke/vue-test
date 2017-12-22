// Karma configuration
// Generated on Thu Dec 21 2017 16:10:52 GMT+0800 (CST)
// 单元测试框架Jasmine学习笔记: http://blog.csdn.net/GuoJiangweigege/article/details/52043034
const path = require('path');
const webpack = require('webpack');
module.exports = function(config) {
  config.set({

    // 基础路径，用在files，exclude属性上
    basePath: '',

    // 可用的测试框架: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

    // 需要加载到浏览器的文件列表
    files: [
      './test/unit/specs/*.spec.js'
    ],

    // 排除的文件列表
    exclude: [
      'karma.conf.js'
    ],

    // 在浏览器使用之前处理匹配的文件
    // 可用的预处理: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      './test/unit/specs/*.spec.js': ['webpack', 'sourcemap']
    },

    webpack: {
      module: {
        loaders: [
          {
            test: /\.js$/,
            loader: 'babel-loader'
          },
          {
            test: /\.vue$/,
            loader: 'vue-loader'
          }
        ]
      },
      resolve: {
        extensions: ['.js', '.vue'],
        alias: {
          'vue$': 'vue/dist/vue.js'
        }
      },
      plugins: [
        new webpack.DefinePlugin({
          'process.env': 'production'
        })
      ]
    },
    // 使用测试结果报告者
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['spec', 'coverage'],

    // karma-coverage配置，配置测试覆盖率的输出目录及格式
    coverageReporter: {
      dir: './test/coverage',
      reporters: [
        { type: 'html', subdir: '.'},
        { type: 'text-summary'},
      ]
    },

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    /**
     * 日志等级
     * 可能的值：
     * config.LOG_DISABLE //不输出信息
     * config.LOG_ERROR    //只输出错误信息
     * config.LOG_WARN //只输出警告信息
     * config.LOG_INFO //输出全部信息
     * config.LOG_DEBUG //输出调试信息
     */
    logLevel: config.LOG_INFO,

    // 启用或禁用自动检测文件变化进行测试
    autoWatch: true,

    // 测试启动的浏览器
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],

    // 开启或禁用持续集成模式
    // 设置为true, Karma将打开浏览器，执行测试并最后退出
    singleRun: false,

    // 并发级别（启动的浏览器数）
    concurrency: Infinity,

    // 依赖插件
    plugins: [
        'karma-chrome-launcher',
        'karma-sourcemap-loader',
        'karma-jasmine',
        'karma-webpack',
        'karma-spec-reporter',
        'karma-coverage'
    ]
  })
}
