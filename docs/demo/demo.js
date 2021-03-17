/**
* @file docs入口文件
*/
import san from 'san';
import Basic from './basic.md';

export default san.defineComponent({
    components: {
        basic: Basic
    },
    template: `
        <div>
            <basic/>
        </div>
    `
});
