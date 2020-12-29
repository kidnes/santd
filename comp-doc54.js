(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{583:function(t,e,a){"use strict";a.r(e);var n=a(0),s=a.n(n),o={template:'<section class="markdown"><h2 id="api"><span>API</span><a href="#api" class="anchor">#</a></h2><h3 id="tag"><span>Tag</span><a href="#tag" class="anchor">#</a></h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>closable</td><td>标签是否可以关闭</td><td>boolean</td><td>false</td></tr><tr><td>color</td><td>标签色</td><td>string</td><td>-</td></tr><tr><td>closeIcon</td><td>自定义关闭按钮</td><td>slot</td><td>-</td></tr><tr><td>on-close</td><td>关闭时回调, closable为true时有效</td><td>function</td><td>-</td></tr><tr><td>visible</td><td>是否显示标签</td><td>boolean</td><td><code>true</code></td></tr><tr><td>icon</td><td>设置图标</td><td>string</td><td>-</td></tr></tbody></table><h3 id="tagcheckabletag"><span>Tag.CheckableTag</span><a href="#tagcheckabletag" class="anchor">#</a></h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>checked</td><td>设置标签的选中状态</td><td>boolean</td><td>false</td></tr><tr><td>on-change</td><td>点击标签时触发的回调,回调中的参数是选中状态</td><td>(checked) =&gt; {}</td><td></td></tr></tbody></table></section>'},c={template:'<section class="markdown"><h1 id="tag-标签"><span>Tag 标签</span><a href="#tag-标签" class="anchor">#</a></h1><p>进行标记和分类的小标签。</p><h2 id="何时使用"><span>何时使用</span><a href="#何时使用" class="anchor">#</a></h2><ul><li>用于标记事物的属性和维度。</li><li>进行分类。</li></ul><h2 id="代码演示"><span>代码演示</span><a href="#代码演示" class="anchor">#</a></h2></section>'},l=a(54),i={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-tag>Tag 1&lt;/s-tag>\n        &lt;s-tag>&lt;a href="http://www.baidu.com/">Link&lt;/a>&lt;/s-tag>\n        &lt;s-tag closable="{{true}}" on-close="handleLog">Tag 2&lt;/s-tag>\n        &lt;s-tag closable="{{true}}" on-close="handlePreventDefault">Prevent Default&lt;/s-tag>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport Tag from \'santd/tag\';\nexport default {\n    components: {\n        \'s-tag\': Tag\n    },\n    handleLog(e) {\n        console.log(e);\n    },\n    handlePreventDefault(e) {\n        e.preventDefault();\n        console.log(\'Clicked! But prevent default.\');\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="基本用法"><span>基本用法</span><a href="#基本用法" class="anchor">#</a></h4><p>基本标签的用法，可以通过添加 <code>closable</code> 变为可关闭标签。可关闭标签具有 <code>onClose</code> 事件。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-tag":l.a},handleLog(t){console.log(t)},handlePreventDefault(t){t.preventDefault(),console.log("Clicked! But prevent default.")},template:'<div><s-tag>Tag 1</s-tag><s-tag><a href="http://www.baidu.com/">Link</a></s-tag><s-tag closable="{{true}}" on-close="handleLog">Tag 2</s-tag><s-tag closable="{{true}}" on-close="handlePreventDefault">Prevent Default</s-tag></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1609227434191"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},d=a(27),p=a(3),g={initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n    &lt;div>\n        &lt;s-tag\n            s-for=\"tag, index in tags\"\n            closable=\"{{index !== 0}}\"\n            on-close=\"handleClose(index)\"\n        >\n            {{tag}}\n        &lt;/s-tag>\n        &lt;s-input\n            s-if=\"inputVisible\"\n            s-ref=\"inputArea\"\n            type=\"text\"\n            size=\"small\"\n            style=\"width:78px; display: inline-block;\"\n            on-change=\"handleInputChange\"\n            on-pressEnter=\"handleInputConfirm\"\n            on-blur=\"handleInputConfirm\"\n        >&lt;/s-input>\n        &lt;s-tag s-else on-click=\"handleShowInput\" style=\"{{{background: '#fff', 'border-style': 'dashed'}}}\">\n            &lt;s-icon type=\"plus\">&lt;/s-icon>\n            New Tag\n        &lt;/s-tag>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport Tag from 'santd/tag';\nimport Input from 'santd/input';\nimport Icon from 'santd/icon';\nexport default {\n    components: {\n        's-tag': Tag,\n        's-input': Input,\n        's-icon': Icon\n    },\n    initData() {\n        return {\n            tags: ['Unremovable', 'Tag 2','Tag 3'],\n            inputVisible: false,\n            inputValue: ''\n        }\n    },\n    handleClose(index) {\n        this.data.removeAt('tags', index);\n    },\n    handleInputChange(e) {\n        this.data.set('inputValue', e);\n    },\n    handleInputConfirm() {\n        const inputValue = this.data.get('inputValue');\n        let tags = this.data.get('tags');\n\n        if (inputValue && tags.indexOf(inputValue) === -1) {\n            tags = [...tags, inputValue];\n        }\n\n        this.data.set('tags', tags);\n        this.data.set('inputVisible', false);\n        this.data.set('inputValue', '');\n    },\n    handleShowInput() {\n        this.data.set('inputVisible', true);\n        this.nextTick(() => {\n            this.ref('inputArea').el.querySelector('input').focus();\n        });\n    }\n}\n&lt;/script></code></pre>",text:'\n<h4 id="动态添加和删除"><span>动态添加和删除</span><a href="#动态添加和删除" class="anchor">#</a></h4><p>用数组生成一组标签，可以动态添加和删除.</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-tag":l.a,"s-input":d.a,"s-icon":p.a},initData:()=>({tags:["Unremovable","Tag 2","Tag 3"],inputVisible:!1,inputValue:""}),handleClose(t){this.data.removeAt("tags",t)},handleInputChange(t){this.data.set("inputValue",t)},handleInputConfirm(){const t=this.data.get("inputValue");let e=this.data.get("tags");t&&-1===e.indexOf(t)&&(e=[...e,t]),this.data.set("tags",e),this.data.set("inputVisible",!1),this.data.set("inputValue","")},handleShowInput(){this.data.set("inputVisible",!0),this.nextTick(()=>{this.ref("inputArea").el.querySelector("input").focus()})},template:'<div><s-tag s-for="tag, index in tags" closable="{{index !== 0}}" on-close="handleClose(index)">{{tag}}</s-tag><s-input s-if="inputVisible" s-ref="inputArea" type="text" size="small" style="width:78px; display: inline-block;" on-change="handleInputChange" on-pressEnter="handleInputConfirm" on-blur="handleInputConfirm"></s-input><s-tag s-else="" on-click="handleShowInput" style="{{{background: \'#fff\', \'border-style\': \'dashed\'}}}"><s-icon type="plus"></s-icon>New Tag</s-tag></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1609227434183"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'};var r={initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n    &lt;div>\n        &lt;s-mytag>Tag1&lt;/s-mytag>\n        &lt;s-mytag>Tag2&lt;/s-mytag>\n        &lt;s-mytag>Tag3&lt;/s-mytag>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport san from 'san';\nimport Tag from 'santd/tag';\n\nconst myTag = san.defineComponent({\n    components: {\n        's-checkabletag': Tag.CheckableTag\n    },\n    initData() {\n        return {\n            checked: true\n        }\n    },\n    handleChange(checked) {\n        this.data.set('checked', checked);\n    },\n    template: &#96;&lt;span>\n        &lt;s-checkabletag checked=\"{{checked}}\" on-change=\"handleChange\">&lt;slot>&lt;/slot>&lt;/s-checkabletag>\n    &lt;/span>&#96;\n});\n\nexport default {\n    components: {\n        's-mytag': myTag\n    }\n}\n&lt;/script></code></pre>",text:'\n<h4 id="可选择"><span>可选择</span><a href="#可选择" class="anchor">#</a></h4><p>可通过 <code>CheckableTag</code> 实现类似 Checkbox 的效果，点击切换选中效果。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-mytag":s.a.defineComponent({components:{"s-checkabletag":l.a.CheckableTag},initData:()=>({checked:!0}),handleChange(t){this.data.set("checked",t)},template:'<span>\n        <s-checkabletag checked="{{checked}}" on-change="handleChange"><slot></slot></s-checkabletag>\n    </span>'})},template:"<div><s-mytag>Tag1</s-mytag><s-mytag>Tag2</s-mytag><s-mytag>Tag3</s-mytag></div>"}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1609227434179"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},h={initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n    &lt;div>\n        &lt;strong style=\"margin-right: 8px;\">Categories:&lt;/strong>\n        &lt;template s-for=\"tag in tags\">\n            &lt;s-checkabletag on-change=\"handleChange(tag)\">{{tag}}&lt;/s-checkabletag>\n        &lt;/template>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport Tag from 'santd/tag';\n\nexport default {\n    components: {\n        's-checkabletag': Tag.CheckableTag\n    },\n    initData() {\n        return {\n            tags: ['Movies', 'Books', 'Music', 'Sports'],\n            selectedTags: []\n        };\n    },\n    handleChange(tag) {\n        const selectedTags = this.data.get('selectedTags');\n        const index = selectedTags.indexOf(tag);\n        if (index > -1) {\n            this.data.removeAt('selectedTags', index);\n        }\n        else {\n            this.data.push('selectedTags', tag);\n        }\n        console.log('You are interested in: ', this.data.get('selectedTags'));\n    }\n}\n&lt;/script></code></pre>",text:'\n<h4 id="热门标签"><span>热门标签</span><a href="#热门标签" class="anchor">#</a></h4><p>选择你感兴趣的话题。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-checkabletag":l.a.CheckableTag},initData:()=>({tags:["Movies","Books","Music","Sports"],selectedTags:[]}),handleChange(t){const e=this.data.get("selectedTags").indexOf(t);e>-1?this.data.removeAt("selectedTags",e):this.data.push("selectedTags",t),console.log("You are interested in: ",this.data.get("selectedTags"))},template:'<div><strong style="margin-right: 8px;">Categories:</strong><template s-for="tag in tags"><s-checkabletag on-change="handleChange(tag)">{{tag}}</s-checkabletag></template></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1609227434151"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},m={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;h4 style="margin-bottom: 16px">Presets:&lt;/h4>\n        &lt;div>\n          &lt;s-tag color="pink">pink&lt;/s-tag>\n          &lt;s-tag color="red">red&lt;/s-tag>\n          &lt;s-tag color="orange">orange&lt;/s-tag>\n          &lt;s-tag color="green">green&lt;/s-tag>\n          &lt;s-tag color="cyan">cyan&lt;/s-tag>\n          &lt;s-tag color="blue">blue&lt;/s-tag>\n          &lt;s-tag color="purple">purple&lt;/s-tag>\n        &lt;/div>\n        &lt;br>\n        &lt;h4 style="margin: \'16px 0\'">Custom:&lt;/h4>\n        &lt;div>\n          &lt;s-tag color="#f50">#f50&lt;/s-tag>\n          &lt;s-tag color="#2db7f5">#2db7f5&lt;/s-tag>\n          &lt;s-tag color="#87d068">#87d068&lt;/s-tag>\n          &lt;s-tag color="#108ee9">#108ee9&lt;/s-tag>\n        &lt;/div>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport Tag from \'santd/tag\';\nexport default {\n    components: {\n        \'s-tag\': Tag\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="多彩标签"><span>多彩标签</span><a href="#多彩标签" class="anchor">#</a></h4><p>我们添加了多种预设色彩的标签样式，用作不同场景使用。如果预设值不能满足你的需求，可以设置为具体的色值。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-tag":l.a},template:'<div><h4 style="margin-bottom: 16px">Presets:</h4><div><s-tag color="pink">pink</s-tag><s-tag color="red">red</s-tag><s-tag color="orange">orange</s-tag><s-tag color="green">green</s-tag><s-tag color="cyan">cyan</s-tag><s-tag color="blue">blue</s-tag><s-tag color="purple">purple</s-tag></div><br><h4 style="margin: \'16px 0\'">Custom:</h4><div><s-tag color="#f50">#f50</s-tag><s-tag color="#2db7f5">#2db7f5</s-tag><s-tag color="#87d068">#87d068</s-tag><s-tag color="#108ee9">#108ee9</s-tag></div></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1609227434106"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},x=a(11),b={initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n    &lt;div>\n        &lt;s-tag closable=\"{{true}}\" visible=\"{{isVisible}}\" on-close=\"onClose\">Movies&lt;/s-tag>\n        &lt;br />&lt;br />\n        &lt;s-button size=\"small\" on-click=\"handleClick\">Toggle&lt;/s-button>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport Tag from 'santd/tag';\nimport Button from 'santd/button';\nexport default {\n    components: {\n        's-tag': Tag,\n        's-button': Button\n    },\n    initData() {\n        return {\n            isVisible: true\n        }\n    },\n    onClose(e) {\n        this.data.set('isVisible', false);\n    },\n    handleClick() {\n        this.data.set('isVisible', !this.data.get('isVisible'));\n    }\n}\n&lt;/script></code></pre>",text:'\n<h4 id="控制关闭状态"><span>控制关闭状态</span><a href="#控制关闭状态" class="anchor">#</a></h4><p>通过 <code>visible</code> 属性控制关闭状态。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-tag":l.a,"s-button":x.a},initData:()=>({isVisible:!0}),onClose(t){this.data.set("isVisible",!1)},handleClick(){this.data.set("isVisible",!this.data.get("isVisible"))},template:'<div><s-tag closable="{{true}}" visible="{{isVisible}}" on-close="onClose">Movies</s-tag><br><br><s-button size="small" on-click="handleClick">Toggle</s-button></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1609227434100"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},u={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-tag icon="camera">camera&lt;/s-tag>\n        &lt;s-tag icon="bell" color="green">bell&lt;/s-tag>\n        &lt;s-tag icon="book" color="red">book&lt;/s-tag>\n        &lt;s-tag icon="control" color="orange">control&lt;/s-tag>\n        &lt;s-tag closable="{{true}}">\n            close1\n        &lt;/s-tag>\n        &lt;s-tag color="pink" closable="{{true}}">\n            &lt;s-icon type="close-circle" slot="closeIcon"/>\n            close\n        &lt;/s-tag>\n        \n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport Tag from \'santd/tag\';\nimport Icon from \'santd/icon\';\nexport default {\n    components: {\n        \'s-tag\': Tag,\n        \'s-icon\': Icon\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="图标按钮"><span>图标按钮</span><a href="#图标按钮" class="anchor">#</a></h4><p>当需要在 Tag 内嵌入 Icon 时，可以设置 icon 属性,具体取值地址查看：<a href="https://ecomfe.github.io/santd/#/components/icon%E3%80%82">https://ecomfe.github.io/santd/#/components/icon。</a></p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-tag":l.a,"s-icon":p.a},template:'<div><s-tag icon="camera">camera</s-tag><s-tag icon="bell" color="green">bell</s-tag><s-tag icon="book" color="red">book</s-tag><s-tag icon="control" color="orange">control</s-tag><s-tag closable="{{true}}">close1</s-tag><s-tag color="pink" closable="{{true}}"><s-icon type="close-circle" slot="closeIcon"></s-icon>close</s-tag></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1609227434094"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'};e.default=s.a.defineComponent({components:{readme:o,desc:c,basic:i,control:g,checkable:r,hottags:h,color:m,controlled:b,icon:u},template:"\n        <div>\n            <desc/>\n            <basic/>\n            <control/>\n            <hottags/>\n            <color/>\n            <checkable/>\n            <controlled/>\n            <icon/>\n            <readme/>\n        </div>\n    "})}}]);