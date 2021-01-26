(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14,8],{

/***/ 100:
/***/ (function(module, exports) {

// Module
var code = " <div class=\"content\"><div class=\"markdown\"><h1 id=\"icon-%E5%9B%BE%E6%A0%87\"><a class=\"header-anchor\" href=\"#icon-%E5%9B%BE%E6%A0%87\">#</a> Icon 图标</h1> <p>语义化的矢量图形。</p> <h2 id=\"%E8%AE%BE%E8%AE%A1%E5%B8%88%E4%B8%93%E5%B1%9E\"><a class=\"header-anchor\" href=\"#%E8%AE%BE%E8%AE%A1%E5%B8%88%E4%B8%93%E5%B1%9E\">#</a> 设计师专属</h2> <p>安装 <a href=\"https://kitchen.alipay.com/\">Kitchen Sketch 插件 💎，</a> 就可以一键拖拽使用 San Toolkit Design 和 Iconfont 的海量图标，还可以关联自有项目。</p> <h2 id=\"%E5%9B%BE%E6%A0%87%E5%88%97%E8%A1%A8\"><a class=\"header-anchor\" href=\"#%E5%9B%BE%E6%A0%87%E5%88%97%E8%A1%A8\">#</a> 图标列表</h2> </div></div> ";
// Exports
module.exports = code;

/***/ }),

/***/ 101:
/***/ (function(module, exports) {

// Module
var code = " <div class=\"content\"><div class=\"markdown\"><codebox> <code-preview-0 slot=\"code-preview\"></code-preview-0> <section slot=\"text-place-holder\"><h4 id=\"%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95\"><a class=\"header-anchor\" href=\"#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95\">#</a> 基本用法</h4> <p>使用 <code>&lt;Icon /&gt;</code> 标签声明组件，指定图标对应的 <code>type</code> 属性。可以通过 <code>theme</code> 属性来设置不同的主题风格的图标，也可以通过设置 <code>spin</code> 属性来实现动画旋转效果。</p> </section> <div slot=\"code-place-holder\"> <div class=\"markdown\"><pre class=\"language-html\"><code class=\"language-html\"><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>template</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>icons-list<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>home<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-icon</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>setting<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">theme</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>filled<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-icon</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>smile<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">theme</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>outlined<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-icon</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>sync<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">spin</span><span class=\"token punctuation\">></span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-icon</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>smile<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">rotate</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>&#123;&#123;180}}<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-icon</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>loading<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-icon</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>template</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>script</span><span class=\"token punctuation\">></span></span><span class=\"token script\"><span class=\"token language-javascript\">\n<span class=\"token keyword\">import</span> Icon <span class=\"token keyword\">from</span> <span class=\"token string\">'santd/icon'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">export</span> <span class=\"token keyword\">default</span> <span class=\"token punctuation\">{</span>\n    components<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token string\">'s-icon'</span><span class=\"token operator\">:</span> Icon\n    <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n</span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>script</span><span class=\"token punctuation\">></span></span></code></pre> </div> </div> </codebox> </div></div> ";
// Exports
module.exports = code;

/***/ }),

/***/ 102:
/***/ (function(module, exports) {

// Module
var code = " <div class=\"icons-list\"> <s-icon type=\"home\"></s-icon> <s-icon type=\"setting\" theme=\"filled\"></s-icon> <s-icon type=\"smile\" theme=\"outlined\"></s-icon> <s-icon type=\"sync\" spin></s-icon> <s-icon type=\"smile\" rotate=\"{{180}}\"></s-icon> <s-icon type=\"loading\"></s-icon> </div> ";
// Exports
module.exports = code;

/***/ }),

/***/ 103:
/***/ (function(module, exports) {

// Module
var code = " <div class=\"content\"><div class=\"markdown\"><codebox> <code-preview-0 slot=\"code-preview\"></code-preview-0> <section slot=\"text-place-holder\"><h4 id=\"%E5%A4%9A%E8%89%B2%E5%9B%BE%E6%A0%87\"><a class=\"header-anchor\" href=\"#%E5%A4%9A%E8%89%B2%E5%9B%BE%E6%A0%87\">#</a> 多色图标</h4> <p>通过设置<code>theme</code>的属性为 <code>twoTone</code> 来渲染双色图标，并且可以设置主题色。</p> </section> <div slot=\"code-place-holder\"> <div class=\"markdown\"><pre class=\"language-html\"><code class=\"language-html\"><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>template</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>icons-list<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>smile<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">theme</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>twoTone<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-icon</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>heart<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">theme</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>twoTone<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">twoToneColor</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>#eb2f96<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-icon</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>check-circle<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">theme</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>twoTone<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">twoToneColor</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>#52c41a<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-icon</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>template</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>script</span><span class=\"token punctuation\">></span></span><span class=\"token script\"><span class=\"token language-javascript\">\n<span class=\"token keyword\">import</span> Icon <span class=\"token keyword\">from</span> <span class=\"token string\">'santd/icon'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">export</span> <span class=\"token keyword\">default</span> <span class=\"token punctuation\">{</span>\n    components<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token string\">'s-icon'</span><span class=\"token operator\">:</span> Icon\n    <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n</span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>script</span><span class=\"token punctuation\">></span></span></code></pre> </div> </div> </codebox></div></div> ";
// Exports
module.exports = code;

/***/ }),

/***/ 104:
/***/ (function(module, exports) {

// Module
var code = " <div class=\"icons-list\"> <s-icon type=\"smile\" theme=\"twoTone\"></s-icon> <s-icon type=\"heart\" theme=\"twoTone\" twoToneColor=\"#eb2f96\"></s-icon> <s-icon type=\"check-circle\" theme=\"twoTone\" twoToneColor=\"#52c41a\"></s-icon> </div> ";
// Exports
module.exports = code;

/***/ }),

/***/ 105:
/***/ (function(module, exports) {

// Module
var code = " <div class=\"content\"><div class=\"markdown\"><codebox> <code-preview-0 slot=\"code-preview\"></code-preview-0> <section slot=\"text-place-holder\"><h4 id=\"%E4%BD%BF%E7%94%A8iconfont.cn\"><a class=\"header-anchor\" href=\"#%E4%BD%BF%E7%94%A8iconfont.cn\">#</a> 使用iconfont.cn</h4> <p>对于使用 <a href=\"http://www.iconfont.cn\">iconfont.cn</a> 的用户，通过设置 <code>createFromIconfontCN</code> 方法参数对象中的 <code>scriptUrl</code> 字段， 即可轻松地使用已有项目中的图标。</p> </section> <div slot=\"code-place-holder\"> <div class=\"markdown\"><pre class=\"language-html\"><code class=\"language-html\"><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>template</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>icons-list<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>icon-tuichu<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-icon</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>icon-facebook<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-icon</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>icon-twitter<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>s-icon</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>template</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>script</span><span class=\"token punctuation\">></span></span><span class=\"token script\"><span class=\"token language-javascript\">\n<span class=\"token keyword\">import</span> Icon <span class=\"token keyword\">from</span> <span class=\"token string\">'santd/icon'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> IconFont <span class=\"token operator\">=</span> Icon<span class=\"token punctuation\">.</span><span class=\"token function\">createFromIconfontCN</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n    scriptUrl<span class=\"token operator\">:</span> <span class=\"token string\">'//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js'</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">export</span> <span class=\"token keyword\">default</span> <span class=\"token punctuation\">{</span>\n    components<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token string\">'s-icon'</span><span class=\"token operator\">:</span> IconFont\n    <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n</span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>script</span><span class=\"token punctuation\">></span></span></code></pre> </div> </div> </codebox></div></div> ";
// Exports
module.exports = code;

/***/ }),

/***/ 106:
/***/ (function(module, exports) {

// Module
var code = " <div class=\"icons-list\"> <s-icon type=\"icon-tuichu\"></s-icon> <s-icon type=\"icon-facebook\"></s-icon> <s-icon type=\"icon-twitter\"></s-icon> </div> ";
// Exports
module.exports = code;

/***/ }),

/***/ 107:
/***/ (function(module, exports) {

// Module
var code = " <div class=\"content\"><div class=\"markdown\"><h2 id=\"api\"><a class=\"header-anchor\" href=\"#api\">#</a> API</h2> <table> <thead> <tr> <th>参数</th> <th>说明</th> <th>类型</th> <th>默认值</th> </tr> </thead> <tbody> <tr> <td>type</td> <td>图标类型。遵循图标的命名规范</td> <td>string</td> <td>-</td> </tr> <tr> <td>style</td> <td>设置图标的样式，例如 <code>fontSize</code> 和 <code>color</code></td> <td>CSSProperties</td> <td>-</td> </tr> <tr> <td>theme</td> <td>图标主题风格。可选实心、描线、双色等主题风格，适用于官方图标</td> <td>'filled' | 'outlined' | 'twoTone'</td> <td><code>outlined</code></td> </tr> <tr> <td>spin</td> <td>是否有旋转动画</td> <td>boolean</td> <td>false</td> </tr> <tr> <td>rotate</td> <td>图标旋转角度</td> <td>number</td> <td>-</td> </tr> <tr> <td>component</td> <td>控制如何渲染图标，通常是一个渲染根标签为 svg 的 San 组件，会使 type 属性失效</td> <td>SanNode</td> <td>-</td> </tr> <tr> <td>loading</td> <td>显示loading图标</td> <td>boolean</td> <td>false</td> </tr> <tr> <td>twoToneColor</td> <td>双色icon。设置双色图标的主要颜色</td> <td>string(十六进制颜色)</td> <td>-</td> </tr> </tbody> </table> <h2 id=\"svg%E5%9B%BE%E6%A0%87\"><a class=\"header-anchor\" href=\"#svg%E5%9B%BE%E6%A0%87\">#</a> SVG图标</h2> <p>我们使用了 <code>SVG</code> 图标，从而带来了以下优势：</p> <ul> <li>完全离线化使用，不需要从 CDN 下载字体文件，图标不会因为网络问题呈现方块，也无需字体文件本地部署。</li> <li>在低端设备上 SVG 有更好的清晰度。</li> <li>支持多色图标。</li> <li>对于内建图标的更换可以提供更多 API，而不需要进行样式覆盖。</li> </ul> <p>其中 <code>theme</code>, <code>twoToneColor</code> 是新增加的属性。最佳实践是给使用的 <code>&lt;s-icon /&gt;</code> 组件传入属性 theme 以明确图标的主题风格。例如：</p> <pre class=\"language-html\"><code class=\"language-html\"><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>star<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">theme</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>filled<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span></code></pre> <p>所有的图标都会以 <code>&lt;svg&gt;</code> 标签渲染，可以使用 <code>style</code> 和 <code>class</code> 设置图标的大小和单色图标的颜色。例如：</p> <pre class=\"language-html\"><code class=\"language-html\"><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>s-icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>message<span class=\"token punctuation\">\"</span></span> <span class=\"token style-attr\"><span class=\"token attr-name\">style</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span><span class=\"token style language-css\"><span class=\"token property\">font-size</span><span class=\"token punctuation\">:</span> 16px<span class=\"token punctuation\">;</span> <span class=\"token property\">color</span><span class=\"token punctuation\">:</span> #08c<span class=\"token punctuation\">;</span></span><span class=\"token punctuation\">\"</span></span></span><span class=\"token punctuation\">/></span></span></code></pre> <h2 id=\"%E5%8F%8C%E8%89%B2%E5%9B%BE%E6%A0%87%E4%B8%BB%E8%89%B2\"><a class=\"header-anchor\" href=\"#%E5%8F%8C%E8%89%B2%E5%9B%BE%E6%A0%87%E4%B8%BB%E8%89%B2\">#</a> 双色图标主色</h2> <p>对于双色图标，可以通过使用 Icon.getTwoToneColor() 和 Icon.setTwoToneColor(colorString) 来全局设置图标主色。</p> <pre class=\"language-html\"><code class=\"language-html\">Icon.setTwoToneColor('#eb2f96');\nIcon.getTwoToneColor(); // #ebef96</code></pre> <h2 id=\"%E8%87%AA%E5%AE%9A%E4%B9%89-font-%E5%9B%BE%E6%A0%87\"><a class=\"header-anchor\" href=\"#%E8%87%AA%E5%AE%9A%E4%B9%89-font-%E5%9B%BE%E6%A0%87\">#</a> 自定义 font 图标</h2> <p>我们提供了一个 <code>createFromIconfontCN</code> 方法，方便开发者调用在 <a href=\"http://www.iconfont.cn\">iconfont.cn</a> 上自行管理的图标。</p> <pre class=\"language-html\"><code class=\"language-html\">const MyIcon = Icon.createFromIconfontCN({\n  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js' // 在 iconfont.cn 上生成\n});\n\nconst CustomIcon = san.defineComponent({\n    components: {\n        'myicon': MyIcon\n    },\n    template: '<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>myicon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>icon-example<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>myicon</span><span class=\"token punctuation\">></span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>'\n});\n\n(new CustomIcon()).attach(mountedNode);</code></pre> <p>其本质上是创建了一个使用 <code>&lt;use&gt;</code> 标签来渲染图标的组件。</p> <p><code>options</code> 的配置项如下：</p> <table> <thead> <tr> <th>参数</th> <th>说明</th> <th>类型</th> <th>默认值</th> </tr> </thead> <tbody> <tr> <td>scriptUrl</td> <td><a href=\"http://www.iconfont.cn\">iconfont.cn</a> 项目在线生成的 <code>js</code> 地址</td> <td>string</td> <td>-</td> </tr> <tr> <td>extraCommonProps</td> <td>给所有的 <code>svg</code> 图标 <code>&lt;s-icon /&gt;</code> 组件设置额外的属性</td> <td [key:=\"\" string]:=\"\" any=\"\"></td> <td>{}</td> </tr> </tbody> </table> <p>在 <code>scriptUrl</code> 都设置有效的情况下，组件在渲染前会自动引入 <a href=\"http://www.iconfont.cn\">iconfont.cn</a> 项目中的图标符号集，无需手动引入。</p> <p>见 <a href=\"http://iconfont.cn/help/detail?spm=a313x.7781069.1998910419.15&amp;helptype=code\">iconfont.cn 使用帮助</a> 查看如何生成 js 地址。</p> </div></div> ";
// Exports
module.exports = code;

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var san__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var san__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(san__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _desc_md__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57);
/* harmony import */ var _desc_md__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_desc_md__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _basic_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58);
/* harmony import */ var _basic_md__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_basic_md__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _colorIcon_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60);
/* harmony import */ var _colorIcon_md__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_colorIcon_md__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _script_md__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(62);
/* harmony import */ var _script_md__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_script_md__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _README_md__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(64);
/* harmony import */ var _README_md__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_README_md__WEBPACK_IMPORTED_MODULE_5__);
/**
* @file docs入口文件
*/






/* harmony default export */ __webpack_exports__["default"] = (san__WEBPACK_IMPORTED_MODULE_0___default.a.defineComponent({
  components: {
    readme: _README_md__WEBPACK_IMPORTED_MODULE_5___default.a,
    basic: _basic_md__WEBPACK_IMPORTED_MODULE_2___default.a,
    colors: _colorIcon_md__WEBPACK_IMPORTED_MODULE_3___default.a,
    script: _script_md__WEBPACK_IMPORTED_MODULE_4___default.a,
    desc: _desc_md__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  template: `
        <div>
            <desc/>
            <basic/>
        </div>
    `
}));

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ContentView; });
/* harmony import */ var _Volumes_Source_san_santd_node_modules_san_docit_node_modules_san_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

class ContentView extends _Volumes_Source_san_santd_node_modules_san_docit_node_modules_san_component__WEBPACK_IMPORTED_MODULE_0__[/* SanComponent */ "a"] {
  inited() {
    if (global.hub && global.hub.fire) {
      global.hub.fire('changed', {
        "level": 0,
        "children": [{
          "level": 2,
          "title": "设计师专属",
          "hash": "%E8%AE%BE%E8%AE%A1%E5%B8%88%E4%B8%93%E5%B1%9E"
        }, {
          "level": 2,
          "title": "图标列表",
          "hash": "%E5%9B%BE%E6%A0%87%E5%88%97%E8%A1%A8"
        }]
      });
    }
  }

}
/* san-hmr disable */
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)))

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ContentView; });
/* harmony import */ var _Volumes_Source_san_santd_node_modules_san_docit_node_modules_san_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _Volumes_Source_san_santd_src_icon_docs_basic_md_codebox_0__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59);
/* harmony import */ var _Volumes_Source_san_santd_src_icon_docs_basic_md_codebox_0__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Volumes_Source_san_santd_src_icon_docs_basic_md_codebox_0__WEBPACK_IMPORTED_MODULE_1__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class ContentView extends _Volumes_Source_san_santd_node_modules_san_docit_node_modules_san_component__WEBPACK_IMPORTED_MODULE_0__[/* SanComponent */ "a"] {
  inited() {
    if (global.hub && global.hub.fire) {
      global.hub.fire('changed', {
        "level": 0
      });
    }
  }

}
/* san-hmr disable */

_defineProperty(ContentView, "components", {
  "code-preview-0": _Volumes_Source_san_santd_src_icon_docs_basic_md_codebox_0__WEBPACK_IMPORTED_MODULE_1___default.a
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)))

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var santd_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    's-icon': santd_icon__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]
  }
});
/* san-hmr disable */

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ContentView; });
/* harmony import */ var _Volumes_Source_san_santd_node_modules_san_docit_node_modules_san_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _Volumes_Source_san_santd_src_icon_docs_colorIcon_md_codebox_0__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61);
/* harmony import */ var _Volumes_Source_san_santd_src_icon_docs_colorIcon_md_codebox_0__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Volumes_Source_san_santd_src_icon_docs_colorIcon_md_codebox_0__WEBPACK_IMPORTED_MODULE_1__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class ContentView extends _Volumes_Source_san_santd_node_modules_san_docit_node_modules_san_component__WEBPACK_IMPORTED_MODULE_0__[/* SanComponent */ "a"] {
  inited() {
    if (global.hub && global.hub.fire) {
      global.hub.fire('changed', {
        "level": 0
      });
    }
  }

}
/* san-hmr disable */

_defineProperty(ContentView, "components", {
  "code-preview-0": _Volumes_Source_san_santd_src_icon_docs_colorIcon_md_codebox_0__WEBPACK_IMPORTED_MODULE_1___default.a
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)))

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var santd_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    's-icon': santd_icon__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]
  }
});
/* san-hmr disable */

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ContentView; });
/* harmony import */ var _Volumes_Source_san_santd_node_modules_san_docit_node_modules_san_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _Volumes_Source_san_santd_src_icon_docs_script_md_codebox_0__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63);
/* harmony import */ var _Volumes_Source_san_santd_src_icon_docs_script_md_codebox_0__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Volumes_Source_san_santd_src_icon_docs_script_md_codebox_0__WEBPACK_IMPORTED_MODULE_1__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class ContentView extends _Volumes_Source_san_santd_node_modules_san_docit_node_modules_san_component__WEBPACK_IMPORTED_MODULE_0__[/* SanComponent */ "a"] {
  inited() {
    if (global.hub && global.hub.fire) {
      global.hub.fire('changed', {
        "level": 0
      });
    }
  }

}
/* san-hmr disable */

_defineProperty(ContentView, "components", {
  "code-preview-0": _Volumes_Source_san_santd_src_icon_docs_script_md_codebox_0__WEBPACK_IMPORTED_MODULE_1___default.a
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)))

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var santd_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

const IconFont = santd_icon__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js'
});
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    's-icon': IconFont
  }
});
/* san-hmr disable */

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ContentView; });
/* harmony import */ var _Volumes_Source_san_santd_node_modules_san_docit_node_modules_san_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

class ContentView extends _Volumes_Source_san_santd_node_modules_san_docit_node_modules_san_component__WEBPACK_IMPORTED_MODULE_0__[/* SanComponent */ "a"] {
  inited() {
    if (global.hub && global.hub.fire) {
      global.hub.fire('changed', {
        "level": 0,
        "children": [{
          "level": 2,
          "title": "API",
          "hash": "api"
        }, {
          "level": 2,
          "title": "SVG图标",
          "hash": "svg%E5%9B%BE%E6%A0%87"
        }, {
          "level": 2,
          "title": "双色图标主色",
          "hash": "%E5%8F%8C%E8%89%B2%E5%9B%BE%E6%A0%87%E4%B8%BB%E8%89%B2"
        }, {
          "level": 2,
          "title": "自定义 font 图标",
          "hash": "%E8%87%AA%E5%AE%9A%E4%B9%89-font-%E5%9B%BE%E6%A0%87"
        }]
      });
    }
  }

}
/* san-hmr disable */
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)))

/***/ }),

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(2);
        var injectStyles = [];

        var template = __webpack_require__(100);
        
        var script = __webpack_require__(30).default;
        module.exports = __webpack_require__(30);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ }),

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(2);
        var injectStyles = [];

        var template = __webpack_require__(101);
        
        var script = __webpack_require__(31).default;
        module.exports = __webpack_require__(31);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ }),

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(2);
        var injectStyles = [];

        var template = __webpack_require__(102);
        
        var script = __webpack_require__(32).default;
        module.exports = __webpack_require__(32);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ }),

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(2);
        var injectStyles = [];

        var template = __webpack_require__(103);
        
        var script = __webpack_require__(33).default;
        module.exports = __webpack_require__(33);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ }),

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(2);
        var injectStyles = [];

        var template = __webpack_require__(104);
        
        var script = __webpack_require__(34).default;
        module.exports = __webpack_require__(34);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(2);
        var injectStyles = [];

        var template = __webpack_require__(105);
        
        var script = __webpack_require__(35).default;
        module.exports = __webpack_require__(35);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ }),

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(2);
        var injectStyles = [];

        var template = __webpack_require__(106);
        
        var script = __webpack_require__(36).default;
        module.exports = __webpack_require__(36);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(2);
        var injectStyles = [];

        var template = __webpack_require__(107);
        
        var script = __webpack_require__(37).default;
        module.exports = __webpack_require__(37);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ })

}]);