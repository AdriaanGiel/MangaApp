let routes = [
    // Front Routes
    {
        path: '/',
        component: require('./pages/front/home')
    },
    {
        path: '/home',
        component: require('./pages/front/home')
    },
    {
        path: '/register',
        component: require('./pages/front/register')
    },
    {
        path: '/login',
        component: require('./pages/front/login')
    },
    {
        path: '/my-profile',
        component: require('./pages/front/profile')
    },
    {
        path: '/manga',
        component: require('./pages/front/manga')
    },
    {
        path: '/lists',
        component: require('./pages/front/lists')
    },
    {
        path: '/reviews',
        component: require('./pages/front/reviews')
    },

    // Admin routes
    {
        path: '/admin',
        component: require('./pages/admin/users')
    },
    {
        path: '/admin/users',
        component: require('./pages/admin/users')
    },
    {
        path: '/admin/reviews',
        component: require('./pages/admin/reviews')
    },
    {
        path: '/admin/comments',
        component: require('./pages/admin/comments')
    }
];

export default new VueRouter({
   routes
});