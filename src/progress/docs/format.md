<text lang="cn">
#### 自定义文字格式
`format` 属性指定格式。
</text>

```html
<template>
    <div class="demo-format">
        <s-progress type="circle" percent="{{75}}" format="{{format1}}"/>
        <s-progress type="circle" percent="{{100}}" format="{{format2}}"/>
    </div>
</template>
<script>
import {Progress, Button} from 'santd';

export default {
    components: {
        's-button': Button,
        's-button-group': Button.Group,
        's-progress': Progress
    },
    initData() {
        return {
            format1: percent => `${percent} Days`,
            format2: () => 'Done'
        };
    }
}
</script>

<style>
.demo-format div.san-progress-circle,
.demo-format div.san-progress-line {
    margin-right: 8px;
    margin-bottom: 8px;
}
</style>
```
