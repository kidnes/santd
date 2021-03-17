<text lang="cn">
#### 基本
简单的徽章展示，当`count`为`0`时，默认不显示，但是可以使用`showZero`修改为显示。
</text>

```html
<template>
    <div>
        <s-badge count="{{5}}"><a href="#" class="head-example"></a></s-badge>
        <s-badge showZero="{{true}}" count="{{0}}"><a href="#" class="head-example"></a></s-badge>
        <s-badge>
            <s-icon slot="count" type="clock-circle" style="color: #f5222d;"></s-icon>
            <a href="#" class="head-example"></a>
        </s-badge>
    </div>
</template>
<script>
import {Badge, Icon} from 'santd';

export default {
    components: {
        's-badge': Badge,
        's-icon': Icon
    }
}
</script>
```
