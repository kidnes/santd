<text lang="cn">
#### 基本
基本滑动条。当 `range` 为 `true` 时，渲染为双滑块。当 `disabled` 为 `true` 时，滑块处于不可用状态。
</text>

```html
<template>
    <div>
        <s-slider defaultValue="{{30}}" disabled="{{disabled}}" />
        <s-slider range="{{true}}" defaultValue="{{[20, 50]}}" disabled="{{disabled}}" />
        Disabled <s-switch size="small" checked="{{disabled}}" on-change='handleDisabledChange'/>
    </div>
</template>
<script>
import {Slider, Switch} from 'santd';
export default {
    components: {
        's-slider': Slider,
        's-switch': Switch
    },
    handleDisabledChange(checked)  {
        this.data.set('disabled', checked);
    }
}
</script>
```
