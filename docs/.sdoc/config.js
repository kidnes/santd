/**
 * 文档配置
 * @author kidnes
 */
'use strict';

const path = require('path');
const resolve = dir => path.join(__dirname, '../../src', dir);

module.exports = {
    base: '/santd/',
    title: 'santd',
    head: [
        ['link', {rel: 'icon', href: '/santd/logo.svg'}]
    ],
    logo: 'logo.svg',

    themeConfig: {
        nav: [
            {text: 'San', link: 'https://baidu.github.io/san/'},
            {text: 'Santd', link: 'https://ecomfe.github.io/santd/'}
        ],

        sidebar: {
            '/': [
                '/introduce/',
                {
                    path: '/',
                    filename: path.join(__dirname, '../quickstart.md')
                },
                '/theme/',
                '/changelog/',
                '/i18n/',
                {
                    title: '组件',
                    children: [{
                        title: '通用',
                        children: [{
                            title: 'Button 按钮',
                            path: '/components/button/',
                            filename: resolve('button/docs/index.js')
                        }, {
                            title: 'Icon 图标',
                            path: '/components/icon/',
                            filename: resolve('icon/docs/index.js')
                        }]
                    }, {
                        title: '布局',
                        children: [{
                            title: 'Grid 栅格',
                            path: '/components/grid/',
                            filename: resolve('grid/docs/index.js')
                        }]
                    }, {
                        title: '导航',
                        children: [{
                            title: 'Affix 固钉',
                            path: '/components/affix/',
                            filename: resolve('affix/docs/index.js')
                        }]
                    }]
                }
            ]
        }
    },
    chainWebpack(config) {
        // 这里可以用来扩展 webpack 的配置，使用的是 webpack-chain 语法
        config.resolve.alias
            .set('santd', resolve('.'))
    }
};
