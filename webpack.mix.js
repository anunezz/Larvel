const mix = require('laravel-mix');

mix.styles([
    'resources/assets/plantilla/css/bootstrap.min.css',
    'resources/assets/plantilla/css/font-awesome.min.css',
    'resources/assets/plantilla/css/simple-line-icons.min.css',
    'resources/assets/plantilla/css/element.css'
], 'public/css/plantilla.css')
.scripts([
    'resources/assets/plantilla/js/jquery.min.js',
    'resources/assets/plantilla/js/bootstrap.min.js',
    'resources/assets/plantilla/js/popper.min.js',
    'resources/assets/plantilla/js/element.js',
    'resources/assets/plantilla/js/moment-with-locales.min.js',
    'resources/assets/plantilla/js/vuex.js'
], 'public/js/plantilla.js')
.js(['resources/js/app.js'],'public/js/app.js');
