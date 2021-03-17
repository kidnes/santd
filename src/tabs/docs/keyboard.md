<text lang="cn">
#### 基本用法
开启键盘切换。
</text>

```html
<template>
    <div>
        <s-tabs
            defaultActiveKey="1"
            on-change="handleChange"
            keyboard="{{true}}"
        >
            <s-tabpane tab="Tab 1" key="1">Content of Tab Pane 1</s-tabpane>
            <s-tabpane tab="Tab 2" key="2">Content of Tab Pane 2</s-tabpane>
            <s-tabpane tab="Tab 3" key="3">Content of Tab Pane 3</s-tabpane>
            <s-tabpane tab="Tab 4" key="4"><span slot="tab">Tab 4</span>Content of Tab Pane 4</s-tabpane>
        </s-tabs>
    </div>
</template>
<script>
import {Tabs} from 'santd';

export default {
    components: {
        's-tabs': Tabs,
        's-tabpane': Tabs.TabPane,
    },
    handleChange(key) {
        console.log('change', key);
    }
}
</script>
```
