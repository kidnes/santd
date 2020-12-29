(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{556:function(t,s,e){"use strict";e.r(s);var n=e(0),i=e.n(n),p={template:'<section class="markdown"><h2 id="api"><span>API</span><a href="#api" class="anchor">#</a></h2><pre><code class="language-html">&lt;Steps&gt;&lt;Step title=&quot;第一步&quot; /&gt;&lt;Step title=&quot;第二步&quot; /&gt;&lt;Step title=&quot;第三步&quot; /&gt;&lt;/Steps&gt;</code></pre><h3 id="steps"><span>Steps</span><a href="#steps" class="anchor">#</a></h3><p>整体步骤条。</p><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>type</td><td>步骤条类型，有 默认 和 navigation 两种</td><td>string</td><td>-</td></tr><tr><td>current</td><td>指定当前步骤，从 0 开始记数。在子 Step 元素中，可以通过 <code>status</code> 属性覆盖状态</td><td>number</td><td>0</td></tr><tr><td>direction</td><td>指定步骤条方向。目前支持水平（<code>horizontal</code>）和竖直（<code>vertical</code>）两种方向</td><td>string</td><td>horizontal</td></tr><tr><td>labelPlacement</td><td>指定标签放置位置，默认水平放图标右侧，可选 <code>vertical</code> 放图标下方</td><td>string</td><td>horizontal</td></tr><tr><td>progressDot</td><td>点状步骤条，labelPlacement 将强制为 <code>vertical</code></td><td>Boolean | slot</td><td>false</td></tr><tr><td>size</td><td>指定大小，目前支持普通（<code>default</code>）和迷你（<code>small</code>）</td><td>string</td><td>default</td></tr><tr><td>status</td><td>指定当前步骤的状态，可选 <code>wait</code> <code>process</code> <code>finish</code> <code>error</code></td><td>string</td><td>process</td></tr><tr><td>initial</td><td>起始序号，从 0 开始记数</td><td>number</td><td>0</td></tr><tr><td>on-change</td><td>点击切换步骤时触发</td><td>(current) =&gt; void</td><td>-</td></tr></tbody></table><h3 id="stepsstep"><span>Steps.Step</span><a href="#stepsstep" class="anchor">#</a></h3><p>步骤条内的每一个步骤。</p><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>description</td><td>步骤的详情描述，可选</td><td>string | slot</td><td>-</td></tr><tr><td>icon</td><td>步骤图标的类型，可选</td><td>string | slot</td><td>-</td></tr><tr><td>status</td><td>指定状态。当不配置该属性时，会使用 Steps 的 <code>current</code> 来自动置顶状态。可选 <code>wait</code> <code>process</code> <code>finish</code> <code>error</code></td><td>string</td><td>wait</td></tr><tr><td>title</td><td>标题</td><td>string | slot</td><td>-</td></tr><tr><td>subTitle</td><td>子标题</td><td>string | slot</td><td>-</td></tr><tr><td>disabled</td><td>禁用点击</td><td>boolean</td><td>-</td></tr></tbody></table></section>'},o={template:'<section class="markdown"><h1 id="steps-步骤条"><span>Steps 步骤条</span><a href="#steps-步骤条" class="anchor">#</a></h1><p>引导用户按照流程完成任务的导航条。</p><h2 id="何时使用"><span>何时使用</span><a href="#何时使用" class="anchor">#</a></h2><p>当任务复杂或者存在先后关系时，将其分解成一系列步骤，从而简化任务。</p><h2 id="代码演示"><span>代码演示</span><a href="#代码演示" class="anchor">#</a></h2></section>'},a=e(104),d={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-steps current="{{1}}">\n            &lt;s-step title="Finished" subTitle="subTitle" description="This is a description." >&lt;/s-step>\n            &lt;s-step title="In Progress" description="This is a description." />\n            &lt;s-step title="Waiting" description="This is a description." />\n      &lt;/s-steps>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport Steps from \'santd/steps\';\nexport default {\n    components: {\n        \'s-steps\': Steps,\n        \'s-step\': Steps.Step\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="基本用法"><span>基本用法</span><a href="#基本用法" class="anchor">#</a></h4><p>简单的步骤条。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-steps":a.a,"s-step":a.a.Step},template:'<div><s-steps current="{{1}}"><s-step title="Finished" subTitle="subTitle" description="This is a description."></s-step><s-step title="In Progress" description="This is a description."></s-step><s-step title="Waiting" description="This is a description."></s-step></s-steps></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1609227434778"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},c={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-steps current="{{1}}" size="small">\n            &lt;s-step title="Finished" />\n            &lt;s-step title="In Progress" />\n            &lt;s-step title="Waiting" />\n      &lt;/s-steps>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport Steps from \'santd/steps\';\nexport default {\n    components: {\n        \'s-steps\': Steps,\n        \'s-step\': Steps.Step\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="mini版"><span>mini版</span><a href="#mini版" class="anchor">#</a></h4><p>迷你版的步骤条，通过设置 <code>&lt;s-steps size=&quot;small&quot;&gt;</code> 启用</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-steps":a.a,"s-step":a.a.Step},template:'<div><s-steps current="{{1}}" size="small"><s-step title="Finished"></s-step><s-step title="In Progress"></s-step><s-step title="Waiting"></s-step></s-steps></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1609227434784"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},r=e(3),l={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-steps current="{{2}}">\n            &lt;s-step title="Login" icon="user" />\n            &lt;s-step title="Verification" icon="solution" />\n            &lt;s-step title="Play">\n                &lt;s-icon type="loading" slot="icon" />\n            &lt;/s-step>\n            &lt;s-step title="Done" icon="smile-o" />\n      &lt;/s-steps>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport san from \'san\';\nimport Steps from \'santd/steps\';\nimport Icon from \'santd/icon\';\n\nexport default {\n    components: {\n        \'s-steps\': Steps,\n        \'s-step\': Steps.Step,\n        \'s-icon\': Icon\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="带图标的步骤条"><span>带图标的步骤条</span><a href="#带图标的步骤条" class="anchor">#</a></h4><p>通过设置 Steps.Step 的 icon slot，可以启用自定义图标。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-steps":a.a,"s-step":a.a.Step,"s-icon":r.a},template:'<div><s-steps current="{{2}}"><s-step title="Login" icon="user"></s-step><s-step title="Verification" icon="solution"></s-step><s-step title="Play"><s-icon type="loading" slot="icon"></s-icon></s-step><s-step title="Done" icon="smile-o"></s-step></s-steps></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1609227434766"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},h=(e(771),e(11)),x={initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n    &lt;div>\n        &lt;s-steps current=\"{{current}}\">\n            &lt;s-step s-for=\"step in steps\" title=\"{{step.title}}\" />\n        &lt;/s-steps>\n        &lt;div class=\"steps-content\">{{steps[current].content}}&lt;/div>\n        &lt;div class=\"steps-action\">\n            &lt;s-button\n                s-if=\"{{current &lt; steps.length - 1}}\"\n                type=\"primary\"\n                on-click=\"next\"\n            >next&lt;/s-button>\n            &lt;s-button\n                s-if=\"{{current > 0}}\"\n                style=\"margin-left: 8px\"\n                on-click=\"prev\"\n            >Previous&lt;/s-button>\n        &lt;/div>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport Steps from 'santd/steps';\nimport Icon from 'santd/icon';\nimport Button from 'santd/button';\nexport default {\n    components: {\n        's-steps': Steps,\n        's-step': Steps.Step,\n        's-icon': Icon,\n        's-button': Button\n    },\n    initData() {\n        return {\n            current: 0,\n            steps: [{\n                title: 'First',\n                content: 'First-content',\n            }, {\n                title: 'Second',\n                content: 'Second-content',\n            }, {\n                title: 'Last',\n                content: 'Last-content',\n            }]\n        }\n    },\n    next() {\n        const cur = +this.data.get('current');\n        this.data.set('current', cur + 1);\n    },\n    prev() {\n        const cur = +this.data.get('current');\n        this.data.set('current', cur - 1);\n    }\n}\n&lt;/script>\n&lt;style>\n  .steps-content {\n    margin-top: 16px;\n    border: 1px dashed #e9e9e9;\n    border-radius: 6px;\n    background-color: #fafafa;\n    min-height: 200px;\n    text-align: center;\n    padding-top: 80px;\n  }\n\n  .steps-action {\n    margin-top: 24px;\n  }\n&lt;/style></code></pre>",text:'\n<h4 id="步骤切换"><span>步骤切换</span><a href="#步骤切换" class="anchor">#</a></h4><p>通常配合内容及按钮使用，表示一个流程的处理进度。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-steps":a.a,"s-step":a.a.Step,"s-icon":r.a,"s-button":h.a},initData:()=>({current:0,steps:[{title:"First",content:"First-content"},{title:"Second",content:"Second-content"},{title:"Last",content:"Last-content"}]}),next(){const t=+this.data.get("current");this.data.set("current",t+1)},prev(){const t=+this.data.get("current");this.data.set("current",t-1)},template:'<div><s-steps current="{{current}}"><s-step s-for="step in steps" title="{{step.title}}"></s-step></s-steps><div class="steps-content">{{steps[current].content}}</div><div class="steps-action"><s-button s-if="{{current < steps.length - 1}}" type="primary" on-click="next">next</s-button><s-button s-if="{{current > 0}}" style="margin-left: 8px" on-click="prev">Previous</s-button></div></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1609227434753"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},g={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-steps current="{{1}}" direction="vertical">\n            &lt;s-step title="Finished" subTitle="subTitle" description="This is a description." />\n            &lt;s-step title="In Progress" description="This is a description." />\n            &lt;s-step title="Waiting" description="This is a description." />\n      &lt;/s-steps>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport Steps from \'santd/steps\';\nexport default {\n    components: {\n        \'s-steps\': Steps,\n        \'s-step\': Steps.Step\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="竖直方向的步骤条"><span>竖直方向的步骤条</span><a href="#竖直方向的步骤条" class="anchor">#</a></h4><p>简单的竖直方向的步骤条。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-steps":a.a,"s-step":a.a.Step},template:'<div><s-steps current="{{1}}" direction="vertical"><s-step title="Finished" subTitle="subTitle" description="This is a description."></s-step><s-step title="In Progress" description="This is a description."></s-step><s-step title="Waiting" description="This is a description."></s-step></s-steps></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1609227434747"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},m={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-steps current="{{1}}" direction="vertical" size="small">\n            &lt;s-step title="Finished" description="This is a description." />\n            &lt;s-step title="In Progress" description="This is a description." />\n            &lt;s-step title="Waiting" description="This is a description." />\n      &lt;/s-steps>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport Steps from \'santd/steps\';\nexport default {\n    components: {\n        \'s-steps\': Steps,\n        \'s-step\': Steps.Step\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="竖直方向的小型步骤条"><span>竖直方向的小型步骤条</span><a href="#竖直方向的小型步骤条" class="anchor">#</a></h4><p>简单的竖直方向的小型步骤条。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-steps":a.a,"s-step":a.a.Step},template:'<div><s-steps current="{{1}}" direction="vertical" size="small"><s-step title="Finished" description="This is a description."></s-step><s-step title="In Progress" description="This is a description."></s-step><s-step title="Waiting" description="This is a description."></s-step></s-steps></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1609227434740"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},u={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-steps current="{{1}}"  status="error">\n            &lt;s-step title="Finished" description="This is a description." />\n            &lt;s-step title="In Progress" description="This is a description." />\n            &lt;s-step title="Waiting" description="This is a description." />\n      &lt;/s-steps>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport Steps from \'santd/steps\';\nexport default {\n    components: {\n        \'s-steps\': Steps,\n        \'s-step\': Steps.Step\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="步骤运行错误"><span>步骤运行错误</span><a href="#步骤运行错误" class="anchor">#</a></h4><p>使用 steps 的 <code>status</code> 属性来指定当前步骤的状态。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-steps":a.a,"s-step":a.a.Step},template:'<div><s-steps current="{{1}}" status="error"><s-step title="Finished" description="This is a description."></s-step><s-step title="In Progress" description="This is a description."></s-step><s-step title="Waiting" description="This is a description."></s-step></s-steps></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1609227434730"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},v={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-steps progressDot="{{true}}" current="{{1}}">\n            &lt;s-step title="Finished" description="This is a description." />\n            &lt;s-step title="In Progress" description="This is a description." />\n            &lt;s-step title="Waiting" description="This is a description." />\n      &lt;/s-steps>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport Steps from \'santd/steps\';\nexport default {\n    components: {\n        \'s-steps\': Steps,\n        \'s-step\': Steps.Step\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="点状步骤条"><span>点状步骤条</span><a href="#点状步骤条" class="anchor">#</a></h4><p>包含步骤点的进度条。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-steps":a.a,"s-step":a.a.Step},template:'<div><s-steps progressDot="{{true}}" current="{{1}}"><s-step title="Finished" description="This is a description."></s-step><s-step title="In Progress" description="This is a description."></s-step><s-step title="Waiting" description="This is a description."></s-step></s-steps></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1609227434701"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},w=e(117),b={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-steps current="{{1}}">\n            &lt;s-step title="Finished" description="You can hover on the dot." />\n            &lt;s-step title="In Progress" description="You can hover on the dot." />\n            &lt;s-step title="Waiting" description="You can hover on the dot." />\n            &lt;s-step title="Waiting" description="You can hover on the dot." />\n            &lt;s-popover content="step {{index}} status: {{status}}" slot="progressDot" popoverStyle="width:100%;height:100%;display:inline-block;">\n                &lt;span class="{{prefixCls}}-icon-dot" />\n            &lt;/s-popover>\n      &lt;/s-steps>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport san from \'san\';\nimport Steps from \'santd/steps\';\nimport Popover from \'santd/popover\';\n\nexport default {\n    components: {\n        \'s-steps\': Steps,\n        \'s-step\': Steps.Step,\n        \'s-popover\': Popover\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="自定义点状步骤条"><span>自定义点状步骤条</span><a href="#自定义点状步骤条" class="anchor">#</a></h4><p>为点状步骤条增加自定义展示。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-steps":a.a,"s-step":a.a.Step,"s-popover":w.a},template:'<div><s-steps current="{{1}}"><s-step title="Finished" description="You can hover on the dot."></s-step><s-step title="In Progress" description="You can hover on the dot."></s-step><s-step title="Waiting" description="You can hover on the dot."></s-step><s-step title="Waiting" description="You can hover on the dot."></s-step><s-popover content="step {{index}} status: {{status}}" slot="progressDot" popoverStyle="width:100%;height:100%;display:inline-block;"><span class="{{prefixCls}}-icon-dot"></span></s-popover></s-steps></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1609227434708"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},E=e(106),S={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-steps current="{{current}}" on-change="handleChange">\n            &lt;s-step title="Step 1" description="This is a description." />\n            &lt;s-step title="Step 2" description="This is a description." />\n            &lt;s-step title="Step 3" description="This is a description." />\n        &lt;/s-steps>\n        &lt;s-divider />\n        &lt;s-steps current="{{current}}" on-change="handleChange" direction="vertical">\n            &lt;s-step title="Step 1" description="This is a description." />\n            &lt;s-step title="Step 2" description="This is a description." />\n            &lt;s-step title="Step 3" description="This is a description." />\n        &lt;/s-steps>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport Steps from \'santd/steps\';\nimport Divider from \'santd/divider\';\n\nexport default {\n    initData() {\n        return {\n            current: 0\n        };\n    },\n    components: {\n        \'s-steps\': Steps,\n        \'s-step\': Steps.Step,\n        \'s-divider\': Divider\n    },\n    handleChange(current) {\n        console.log(\'on-change:\', current);\n        this.data.set(\'current\', current);\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="可点击"><span>可点击</span><a href="#可点击" class="anchor">#</a></h4><p>设置 on-change 后，Steps 变为可点击状态。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{initData:()=>({current:0}),components:{"s-steps":a.a,"s-step":a.a.Step,"s-divider":E.a},handleChange(t){console.log("on-change:",t),this.data.set("current",t)},template:'<div><s-steps current="{{current}}" on-change="handleChange"><s-step title="Step 1" description="This is a description."></s-step><s-step title="Step 2" description="This is a description."></s-step><s-step title="Step 3" description="This is a description."></s-step></s-steps><s-divider></s-divider><s-steps current="{{current}}" on-change="handleChange" direction="vertical"><s-step title="Step 1" description="This is a description."></s-step><s-step title="Step 2" description="This is a description."></s-step><s-step title="Step 3" description="This is a description."></s-step></s-steps></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1609227434694"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},f={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-steps current="{{1}}" type="navigation">\n            &lt;s-step title="Finished" subTitle="subTitle" description="This is a description." />\n            &lt;s-step title="In Progress" description="This is a description." />\n            &lt;s-step title="Waiting" description="This is a description." />\n      &lt;/s-steps>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport Steps from \'santd/steps\';\nexport default {\n    components: {\n        \'s-steps\': Steps,\n        \'s-step\': Steps.Step\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="导航步骤"><span>导航步骤</span><a href="#导航步骤" class="anchor">#</a></h4><p>导航类型的步骤条。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-steps":a.a,"s-step":a.a.Step},template:'<div><s-steps current="{{1}}" type="navigation"><s-step title="Finished" subTitle="subTitle" description="This is a description."></s-step><s-step title="In Progress" description="This is a description."></s-step><s-step title="Waiting" description="This is a description."></s-step></s-steps></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1609227434688"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},T={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-steps current="{{1}}" initial="{{4}}">\n            &lt;s-step title="Finished" subTitle="subTitle" description="This is a description." >&lt;/s-step>\n            &lt;s-step title="In Progress" description="This is a description." />\n            &lt;s-step title="Waiting" description="This is a description." />\n      &lt;/s-steps>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport Steps from \'santd/steps\';\nexport default {\n    components: {\n        \'s-steps\': Steps,\n        \'s-step\': Steps.Step\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="起始序号"><span>起始序号</span><a href="#起始序号" class="anchor">#</a></h4><p>设置步骤条起始序号。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-steps":a.a,"s-step":a.a.Step},template:'<div><s-steps current="{{1}}" initial="{{4}}"><s-step title="Finished" subTitle="subTitle" description="This is a description."></s-step><s-step title="In Progress" description="This is a description."></s-step><s-step title="Waiting" description="This is a description."></s-step></s-steps></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1609227434682"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'};s.default=i.a.defineComponent({components:{readme:p,desc:o,basic:d,size:c,icon:l,change:x,vertical:g,versmall:m,error:u,progess:v,customdot:b,click:S,navigation:f,initial:T},template:"\n        <div>\n            <desc/>\n            <basic/>\n            <size/>\n            <icon/>\n            <change/>\n            <vertical/>\n            <versmall/>\n            <error/>\n            <progess/>\n            <customdot/>\n            <click/>\n            <initial/>\n            <navigation/>\n            <readme/>\n        </div>\n    "})},771:function(t,s,e){var n=e(4),i=e(772);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[t.i,i,""]]);var p={insert:"head",singleton:!1};n(i,p);t.exports=i.locals||{}},772:function(t,s,e){(s=e(5)(!1)).push([t.i,"\n  .steps-content {\n    margin-top: 16px;\n    border: 1px dashed #e9e9e9;\n    border-radius: 6px;\n    background-color: #fafafa;\n    min-height: 200px;\n    text-align: center;\n    padding-top: 80px;\n  }\n\n  .steps-action {\n    margin-top: 24px;\n  }\n",""]),t.exports=s}}]);