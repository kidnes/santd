<text lang="cn">
#### 简单列表
列表拥有大、中、小三种尺寸。
通过设置 `size` 为 `large` `small` 分别把按钮设为大、小尺寸。若不设置 `size`，则尺寸为中。
可通过设置 `header` 和 `footer`，来自定义列表头部和尾部。
如果`header`或 `footer`是个复杂结构，比如里面需要放组件，那么支持用`slot`来处理。
</text>

```html
<template>
    <div>
        <h3 style="margin-bottom: 16px;">Default Size</h3>
        <s-list bordered="{{true}}" dataSource="{{data}}">
            <div slot="header">Header</div>
            <s-list-item slot="renderItem"><s-text mark>[ITEM]</s-text> {{item}}</s-list-item>
            <div slot="footer">Footer</div>
        </s-list>
        <h3 style="margin: 16px 0;">Small Size</h3>
        <s-list bordered="{{true}}" dataSource="{{data}}" size="small">
            <div slot="header">Header</div>
            <s-list-item slot="renderItem">{{item}}</s-list-item>
            <div slot="footer">Footer</div>
        </s-list>
        <h3 style="margin: 16px 0;">Large Size</h3>
        <s-list bordered="{{true}}" dataSource="{{data}}" size="large">
            <div slot="header">Header</div>
            <s-list-item slot="renderItem">{{item}}</s-list-item>
            <div slot="footer">Footer</div>
        </s-list>
    </div>
</template>
<script>
import {List, Icon, Typography} from 'santd';

export default {
    components: {
        's-list': List,
        's-list-item': List.Item,
        's-text': Typography.Text
    },
    initData() {
        return {
            data: [
                'Racing car sprays burning fuel into crowd.',
                'Japanese princess to wed commoner.',
                'Australian walks 100km after outback crash.',
                'Man charged over missing wedding girl.',
                'Los Angeles battles huge wildfires.'
            ]
        }
    }
}
</script>
```
