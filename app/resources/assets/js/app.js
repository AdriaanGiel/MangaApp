import './bootstrap';
import router from './routes.js';
import Register from './components/front/register';

const app = new Vue({
    el: '#app',
    components:{
        'register': Register,
    },
    router:router
});