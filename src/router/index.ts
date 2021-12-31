import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Index from '@/layout/Index.vue'
import CourseLayout from '@/layout/CourseLayout.vue';
import LoginUser from '@/views/LoginUser.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: Index,
        redirect: '/Home',
        children: [
          {
            path: '/Home',
            component: () => import('@/views/Home.vue'),
            name: 'Home',
            meta: {
              title: '首页',
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
                    title: '课程首页',
                }
            }
        ]
    },

    {

        path: "/chooseCourse",
        component: CourseLayout,
        name: "chooseCourse",
        meta: {
            title: "选择课程",
        },
        children: [
            {
                path: "/Python",
                component: () => import('@/views/chooseCourse/Python.vue'),
                name: "Python",
                meta: {
                    title: "Python",
                },
            },
            {
                path: "/Java",
                component: () => import('@/views/chooseCourse/Java.vue'),
                name: "Java",
                meta: {
                    title: "Java",
                },
            },
            {
                path: "/Physics",
                component: () => import('@/views/chooseCourse/Physics.vue'),
                name: "大学物理",
                meta: {
                    title: "Physics",
                },
            },
        ],
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
        path: "/information",
        component: Index,
        children: [
            {
                path:'/information',
                component: () => import('@/views/Information.vue'),
                meta: {
                    title: '修改信息',
                }
            }
        ]
    },
    {
        path: "/quit",
        component: Index,
        children: [
            {
                path:'/quit',
                component: () => import('@/views/Quit.vue'),
                meta: {
                    title: '退出系统',
                }
            }
        ]
    },
    {
      path: '/login',
      name: 'login',
      component: LoginUser
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router