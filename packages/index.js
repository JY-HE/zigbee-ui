// 整个包的入口
// 定义 install 方法，接受 Vue 作为参数，如果使用 use 注册插件，则所有的组件都将被注册
import Button from './Button/Button.vue';
import Dialog from './Dialog/Dialog.vue';
import './fonts/iconfont.css';

var components = [Button, Dialog];

const install = function (Vue, options) {
    if (options && options.components) {
        components = options.components;
    }
    components.forEach(item => {
        // 全局注册组件
        Vue.component(item.name, item);
    });
};

// 判断是否时直接引入文件，如果是，就不用调用Vue.use，script直接引用
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export { Button, Dialog };

export default { install };
