require('./bootstrap');

window.Vue = require('vue');


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/es';
Vue.use(ElementUI, { locale });

Vue.component('fullcalendar-component', require('./components/FullCalendar.vue').default);
Vue.component('Padre', require('./components/EjemploPadre.vue').default);
Vue.component('ejemplo-component', require('./components/Ejemplo.vue').default);
//Ejercicio de vueJS
Vue.component('vueex', require('./components/VueEX.vue').default);
Vue.component('vueexhijo', require('./components/VueEXhijo.vue').default);
Vue.component('form-component', require('./components/form.vue').default);


const app = new Vue({
    el: '#app'
});
