import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Index from '@/layout/Index.vue'
import CourseLayout from '@/layout/CourseLayout.vue';
import LoginUser from '@/views/LoginUser.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: Index,
        redirect: '/home',
        children: [
          {
            path: '/home',
            component: () => import('@/views/home.vue'),
            name: 'home',
            meta: {
              title: '首页',
            }
          }
        ]
    },

    {
        path: "/myCourse",
        component: Index,
        children: [
            {
                path:'/myCourse',
                component: () => import('@/views/myCourse.vue'),
                meta: {
                    title: '我的课程',
                }
            }
        ]
    },

    {
        path: "/courseHome",
        component: CourseLayout,
        children: [
            {
                path:'/courseHome',
                component: () => import('@/views/courseHome.vue'),
                meta: {
                    title: '上传视频',
                }
            }
        ]
    },
    {
        path: "/Video",
        component: CourseLayout,
        children: [
            {
                path:'/Video',
                component: () => import('@/views/Video.vue'),
                meta: {
                    title: '上传视频',
                }
            }
        ]
    },
    {
        path: "/editPractice",
        component: CourseLayout,
        children: [
            {
                path:'/editPractice',
                component: () => import('@/views/EditPractice.vue'),
                meta: {
                    title: '编辑练习',
                }
            }
        ]
    },
    {
        path: "/comment",
        component: CourseLayout,
        children: [
            {
                path:'/comment',
                component: () => import('@/views/Comment.vue'),
                meta: {
                    title: '评价报告',
                }
            }
        ]
    },
    {
        path: "/loadCourseware",
        component: CourseLayout,
        children: [
            {
                path:'/loadCourseware',
                component: () => import('@/views/LoadCourseware.vue'),
                meta: {
                    title: '上传课件',
                }
            }
        ]
    },
    {
        path: "/calendar",
        component: Index,
        children: [
            {
                path:'/calendar',
                component: () => import('@/views/calendar.vue'),
                meta: {
                    title: '日历',
                }
            }
        ]
    },
    {
        path: "/setting",
        component: Index,
        children: [
            {
                path:'/setting',
                component: () => import('@/views/setting.vue'),
                meta: {
                    title: '设置',
                }
            }
        ]
    },
    {
        path: "/question",
        component: Index,
        children: [
            {
                path:'/question',
                component: () => import('@/views/question.vue'),
                meta: {
                    title: '帮助',
                }
            }
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: LoginUser,
        children: [
            {
                path:'/login',
                component: () => import('@/views/login.vue'),
                meta: {
                    title: 'login',
                }
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router