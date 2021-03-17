<text lang="cn">
#### 自定义图标
图标可以被自定义。
</text>

```html
<template>
    <div>
        <s-button type="primary" on-click="clickHandler">Open the notification box</s-button>
    </div>
</template>

<script>
import {Notification, Button} from 'santd';

export default {
    components: {
        's-button': Button
    },
    clickHandler() {
        Notification.open({
            message: 'Notification Title',
            description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
            icon: '<s-icon type="smile" style="color:#108ee9"/>'
        });
    }
}
</script>
```
