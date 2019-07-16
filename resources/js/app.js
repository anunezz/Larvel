require('./bootstrap');

window.Vue = require('vue');


Vue.component('fullcalendar-component', require('./components/FullCalendar.vue').default);
Vue.component('Padre', require('./components/EjemploPadre.vue').default);
Vue.component('ejemplo-component', require('./components/Ejemplo.vue').default);
//Ejercicio de vueJS
Vue.component('vueex', require('./components/VueEX.vue').default);
Vue.component('vueexhijo', require('./components/VueEXhijo.vue').default);




const store = new Vuex.Store({
    
});


const app = new Vue({
    el: '#app',
    store
});
