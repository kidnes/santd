<text lang="cn">
#### 基本
基础分页
</text>

```html
<template>
    <div>
        <s-pagination total="{{50}}" defaultCurrent="{{1}}"></s-pagination>
    </div>
</template>
<script>
import {Pagination} from 'santd';

export default {
    components: {
        's-pagination': Pagination
    }
}
</script>
```
