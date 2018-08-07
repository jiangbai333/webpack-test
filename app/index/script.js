import Vue from 'vue';
import iView from 'iview'
import App from '../../source/index/components/App.vue';
import Button from '../../source/index/components/Button.vue';

import {Rander} from '../../source/index/libs/rander';

let rnd =  new Rander(document.querySelector(".time"));

(function loop() {
    rnd.randerTime();
    setTimeout(loop, 1000)
})()

Vue.use(iView);

new Vue({
    el: '#app',
    render: h => h(Button)
});
new Vue({
    el: '#app1',
    render: h => h(App)
});
