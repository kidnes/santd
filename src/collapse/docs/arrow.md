<text lang="cn">
#### 隐藏箭头
你可以通过 `showArrow` 值为 `false` , 隐藏 CollapsePanel 组件的箭头图标。
</text>

```html
<template>
    <div>
    <s-collapse on-change="handleChange" defaultActiveKey="{{['1']}}">
        <s-panel header="This is panel header 1" key="1">
            <p>
                A dog is a type of domesticated animal.
                Known for its loyalty and faithfulness,
                it can be found as a welcome guest in many households across the world.
            </p>
        </s-panel>
        <s-panel header="This is panel header 3" showArrow="{{false}}" key="2">
            <p>
                A dog is a type of domesticated animal.
                Known for its loyalty and faithfulness,
                it can be found as a welcome guest in many households across the world.
            </p>
        </s-panel>
    </s-collapse>
  </div>
</template>
<script>
import {Collapse} from 'santd';

export default {
    components: {
        's-collapse': Collapse,
        's-panel': Collapse.Panel
    },
    handleChange(args) {
        console.log('handleChange', args);
    }
}
</script>
```
