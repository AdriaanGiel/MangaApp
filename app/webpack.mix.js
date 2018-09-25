let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */


mix.js('resources/assets/js/app.js', 'assets/js')
    .js('resources/assets/js/admin.js', 'assets/js')
    .stylus('resources/assets/styl/app.styl', 'assets/css');


    // .copyDirectory('resources/assets/img', 'public/img')
    // .copyDirectory('resources/assets/favicon', 'public/favicon')
    // .copyDirectory('node_modules/materialize-css/dist/fonts', 'public/fonts');

