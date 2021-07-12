import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/recommend/personality',  //重定向  主页的热门推荐
    },
    {
        path: '/content',
        name: 'Content',
        component: () => import('../views/Content')
    },
    {
        path: '/recommend',
        name: 'Recommend',
        component: () => import( '../views/Recommend.vue'),
        //嵌套路由
        children: [
            {
                path: "/recommend/personality",
                component: () => import( '../views/Recommend/Personality'),
            }, {
                path: "/recommend/songster",
                component: () => import( '../views/Recommend/Songster'),
            }, {
                path: "/recommend/radioStation",
                component: () => import( '../views/Recommend/RadioStation'),
            }, {
                path: "/recommend/rankingList",
                component: () => import( '../views/Recommend/RankingList'),
            }, {
                path: "/recommend/singer",
                component: () => import( '../views/Recommend/Singer'),
            }, {
                path: "/recommend/newMusic",
                component: () => import( '../views/Recommend/NewMusic'),
            }
        ]
    }
]

const router = new VueRouter({
    routes
})

export default router
