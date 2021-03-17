/**
* @file docs入口文件
*/
import san from 'san';
import Head from './head.md';
import Readme from '../README.md';
import Theme from './theme.md';
import Vertical from './vertical.md';
import Collapsed from './collapsed.md';
import Horizontal from './horizontal.md';
import Inline from './inline.md';
import Current from './current.md';
import Switch from './switch.md';
import OverflowedIndicator from './overflowedIndicator.md';


export default san.defineComponent({
    components: {
        readme: Readme,
        theme: Theme,
        vertical: Vertical,
        collapsed: Collapsed,
        horizontal: Horizontal,
        inline: Inline,
        head: Head,
        current: Current,
        switch: Switch,
        'overflowed-indicator': OverflowedIndicator

    },
    template: `
        <div>
            <head/>
            <horizontal/>
            <inline/>
            <current/>
            <vertical/>
            <theme/>
            <switch/>
            <overflowed-indicator/>
            <readme/>
        </div>
    `
});
