/**
 * @file 组件 card
 * @author chenkai13 <chenkai13@baidu.com>
 */

import './style/index.less';
import san from 'san';
import {classCreator} from '../core/util';

const prefixCls = classCreator('card')();

export default san.defineComponent({
    template: `
        <div class="${prefixCls}-grid"><slot /></div>
    `
});
