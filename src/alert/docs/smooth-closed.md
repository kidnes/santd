<text lang="cn">
#### 平滑地卸载
平滑、自然的卸载提示。
</text>

```html
<template>
    <div>
        <s-alert s-if="visible"
            message="Alert Message Text"
            type="success"
            closable="{{true}}"
            on-afterClose="afterClose"
        />
        <p>placeholder text here</p>
    </div>
</template>

<script>
import {Alert} from 'santd';

export default {
    components: {
        's-alert': Alert
    },
    initData() {
        return {
            visible: true
        };
    },
    afterClose() {
        this.data.set('visible', false);
        console.log('fired: afterClose');
    }
}
</script>
```
