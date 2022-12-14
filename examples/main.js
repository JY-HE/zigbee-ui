import Vue from 'vue';
import App from './App.vue';
import ZigbeeUI from '../packages';

Vue.config.productionTip = false;
Vue.use(ZigbeeUI);

new Vue({
    render: h => h(App),
}).$mount('#app');
