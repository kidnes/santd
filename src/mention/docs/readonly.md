<text lang="cn">
#### 无效或只读
通过 disabled 属性设置是否生效。通过 readOnly 属性设置是否只读。

</text>

```html
<template>
    <div>
        <div style="margin-bottom: 10px">
            <s-mention
                style="width: '100%'"
                placeholder="this is disabled Mention"
                disabled="{{true}}"
                suggestions="{{ ['liyanhong666', 'mayun', 'mahuateng', 'zhouhongyi', 'leijun666', 'ww233'] }}"
            />
        </div>
        <s-mention
            style="width:100%"
            placeholder="this is readOnly Mention"
            readOnly="{{true}}"
            suggestions="{{ ['liyanhong666', 'mayun', 'mahuateng', 'zhouhongyi', 'leijun666', 'ww233'] }}"
          />
    </div>
  </div>
</template>
<script>
import {Mention} from 'santd';

export default {
    components: {
        's-mention': Mention
    }
}
</script>
```