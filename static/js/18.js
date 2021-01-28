(window.webpackJsonp=window.webpackJsonp||[]).push([[18,9],{123:function(t,d,n){var a=n(2),r=n(89),s=n(20).default;t.exports=n(20),t.exports.default=a(s,r,[])},20:function(t,d,n){"use strict";n.r(d),function(t){n.d(d,"default",(function(){return o}));var a,r,s,e=n(1);class o extends e.a{inited(){t.hub&&t.hub.fire&&t.hub.fire("changed",{level:0,children:[{level:2,title:"LocaleProvider",hash:"localeprovider"}]})}}s={},(r="components")in(a=o)?Object.defineProperty(a,r,{value:s,enumerable:!0,configurable:!0,writable:!0}):a[r]=s}.call(this,n(3))},89:function(t,d){t.exports=' <div class="content"><div class="markdown"><h1 id="%E5%9B%BD%E9%99%85%E5%8C%96"><a class="header-anchor" href="#%E5%9B%BD%E9%99%85%E5%8C%96">#</a> 国际化</h1> <p><code>Santd</code> 目前的默认文案是中文，如果需要使用其他语言，可以参考下面的方案。</p> <h2 id="localeprovider"><a class="header-anchor" href="#localeprovider">#</a> LocaleProvider</h2> <p>Santd 提供了一个San组件 <a href="https://ecomfe.github.io/santd/#/components/localeprovider">LocaleProvider</a> 用于全局配置国际化文案。</p> <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">import</span> zhCN <span class="token keyword">from</span> <span class="token string">\'santd/lib/localeprovider/zh_CN\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> LocaleProvider <span class="token keyword">from</span> <span class="token string">\'santd/localeprovider\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n    <span class="token function">initData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token punctuation">{</span>\n            locale<span class="token operator">:</span> zhCN\n        <span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    components<span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token string">\'s-localeprovider\'</span><span class="token operator">:</span> LocaleProvider\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    template<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">&lt;div>\n        &lt;s-localeprovider locale="&#123;&#123;locale}}">\n            &lt;App />\n        &lt;/s-localeprovider>\n    &lt;/div></span><span class="token template-punctuation string">`</span></span>\n<span class="token punctuation">}</span></code></pre> <p>注意：<code>zh_CN</code> 是文件名，以下表格也遵循同样的规则。</p> <p>目前支持以下语言：</p> <table> <thead> <tr> <th>语言</th> <th>文件名</th> </tr> </thead> <tbody> <tr> <td>阿拉伯语</td> <td>ar_EG</td> </tr> <tr> <td>亚美尼亚</td> <td>hy_AM</td> </tr> <tr> <td>保加利亚语</td> <td>bg_BG</td> </tr> <tr> <td>加泰罗尼亚语</td> <td>ca_ES</td> </tr> <tr> <td>捷克语</td> <td>cs_CZ</td> </tr> <tr> <td>德语</td> <td>de_DE</td> </tr> <tr> <td>希腊语</td> <td>el_GR</td> </tr> <tr> <td>英语</td> <td>en_GB</td> </tr> <tr> <td>英语（美式）</td> <td>en_US</td> </tr> <tr> <td>西班牙语</td> <td>es_ES</td> </tr> <tr> <td>爱沙尼亚语</td> <td>et_EE</td> </tr> <tr> <td>波斯语</td> <td>fa_IR</td> </tr> <tr> <td>芬兰语</td> <td>fi_FI</td> </tr> <tr> <td>法语（比利时）</td> <td>fr_BE</td> </tr> <tr> <td>法语</td> <td>fr_FR</td> </tr> <tr> <td>希伯来语</td> <td>he_IL</td> </tr> <tr> <td>印地语</td> <td>hi_IN</td> </tr> <tr> <td>克罗地亚语</td> <td>hr_HR</td> </tr> <tr> <td>匈牙利语</td> <td>hu_HU</td> </tr> <tr> <td>冰岛语</td> <td>is_IS</td> </tr> <tr> <td>印度尼西亚语</td> <td>id_ID</td> </tr> <tr> <td>意大利语</td> <td>it_IT</td> </tr> <tr> <td>日语</td> <td>ja_JP</td> </tr> <tr> <td>卡纳达语</td> <td>kn_IN</td> </tr> <tr> <td>韩语/朝鲜语</td> <td>ko_KR</td> </tr> <tr> <td>挪威语</td> <td>nb_NO</td> </tr> <tr> <td>尼泊尔语</td> <td>ne_NP</td> </tr> <tr> <td>荷兰语（比利时）</td> <td>nl_BE</td> </tr> <tr> <td>荷兰语</td> <td>nl_NL</td> </tr> <tr> <td>波兰语</td> <td>pl_PL</td> </tr> <tr> <td>葡萄牙语(巴西)</td> <td>pt_BR</td> </tr> <tr> <td>葡萄牙语</td> <td>pt_PT</td> </tr> <tr> <td>斯洛伐克语</td> <td>sk_SK</td> </tr> <tr> <td>塞尔维亚语</td> <td>sr_RS</td> </tr> <tr> <td>斯洛文尼亚语</td> <td>sl_SI</td> </tr> <tr> <td>瑞典语</td> <td>sv_SE</td> </tr> <tr> <td>泰米尔语</td> <td>ta_IN</td> </tr> <tr> <td>泰语</td> <td>th_TH</td> </tr> <tr> <td>土耳其语</td> <td>tr_TR</td> </tr> <tr> <td>罗马尼亚语</td> <td>ro_RO</td> </tr> <tr> <td>俄罗斯语</td> <td>ru_RU</td> </tr> <tr> <td>乌克兰语</td> <td>uk_UA</td> </tr> <tr> <td>越南语</td> <td>vi_VN</td> </tr> <tr> <td>简体中文</td> <td>zh_CN</td> </tr> <tr> <td>繁体中文</td> <td>zh_TW</td> </tr> </tbody> </table> <p>具体的使用方法和新语言包贡献方式请参考 <a href="https://ecomfe.github.io/santd/#/components/localeprovider">LocaleProvider</a> 文档。</p> </div></div> '}}]);