<template>
    <!-- <MenuLogo></MenuLogo> -->
    <el-menu
        :default-active="activeIndex"
        class="el-menu-vertical-demo"
        background-color="#F5F6F7"
        :collapse="isCollapse"
        @open="handleOpen"
        @close="handleClose"
        unique-opened
        router
    >
        <MenuItem :menuList="menuList" :collapse="isCollapse" :courseID="courseID"></MenuItem>

        <router-link to="/login" class="login">
            <el-button  type="Default">Login</el-button>
        </router-link>
    </el-menu>
</template>

<script setup lang="ts">
// import MenuLogo from './MenuLogo.vue'
import { reactive, computed } from 'vue'
import { useRoute } from 'vue-router';
import { useStore } from '@/store'
import MenuItem from './MenuItem.vue';
import MenuLogo from './MenuLogo.vue'

defineProps(['courseID'])

const store = useStore();
const route = useRoute();

//获取激活的菜单
const activeIndex = computed(() => {
    const { path } = route;
    return path;
})

const isCollapse = computed(() => {
    return store.getters['getCollapse']
})


const handleOpen = (key: string | number, keyPath: string) => {
    console.log(key, keyPath)
}
const handleClose = (key: string | number, keyPath: string) => {
    console.log(key, keyPath)
}

//菜单数据
let menuList = reactive([
    {
        path: '/',
        component: "Layout",
        id: 0B11111,
        number:2, // number: 2两个界面都显示， 1首页显示，2选择课程显示
        meta: {
            title: "首页",
            icon: "HomeFilled",
            roles: ["sys:manage"],

        },
        children: []
    },
    {
        path: '/courseHome',
        component: "Layout",
        id: 0B11111,
        number:0,
        meta: {
            title: "课程首页",
            icon: "Notebook",
            roles: ["sys:manage"],

        },
        children: []
    },
    {
        path: "/chooseCourse",
        component: "Layout",
        alwaysShow: true,
        name: "chooseCourse",
        number:2,
        meta: {
            title: "选择课程",
            icon: "School",
            roles: ["sys:manage"],
            parentId: 0,
        },
        children: [
            {
                path: "/Python",
                component: "/system/department/department",
                alwaysShow: false,
                name: "Python",
                Id: 0B11111,
                number:2,
                meta: {
                    title: "Python",
                    icon: "Reading",
                    roles: ["sys:dept"],
                    parentId: 17,

                },
            },
            {
                path: "/Java",
                component: "/system/User/UserList",
                alwaysShow: false,
                name: "Java",
                id: 0B11111,
                number:2,
                meta: {
                    title: "Java",
                    icon: "Reading",
                    roles: ["sys:user"],
                    parentId: 17,

                },
            },
            {
                path: "/Physics",
                component: "/system/Role/RoleList",
                alwaysShow: false,
                name: "Physics",
                id: 0B11111,
                number:2,
                meta: {
                    title: "大学物理",
                    icon: "Reading",
                    roles: ["sys:role"],
                    parentId: 17,

                },
            },
        ],
    },
    {
        path: "/Video",
        component: "Layout",
        alwaysShow: true,
        name: "Video",
        Id: 0B10000,
        number:0,
        meta: {
            title: "上传视频",
            icon: "Film",
            roles: ["sys:goods"],
            parentId: 0,

        },
    },
    {
        path: "/editPractice",
        component: "Layout",
        alwaysShow: true,
        name: "editPractice",
        Id: 0B01000,
        number:0,
        meta: {
            title: "编辑练习",
            icon: "List",
            roles: ["sys:systemConfig"],
            parentId: 0,

        },
    },
    {
        path: "/comment",
        component: "Layout",
        alwaysShow: true,
        name: "comment",
        Id: 0B00100,
        number:0,
        meta: {
            title: "评价报告",
            icon: "UploadFilled",
            roles: ["sys:systemConfig"],
            parentId: 0,

        },
    },
    {
        path: "/loadCourseware",
        component: "Layout",
        alwaysShow: true,
        name: "loadCourseware",
        Id: 0B00010,
        number:0,
        meta: {
            title: "上传课件",
            icon: "FolderOpened",
            roles: ["sys:systemConfig"],
            parentId: 0,

        },
    },
    {
        path: "/information",
        component: "Layout",
        alwaysShow: true,
        name: "information",
        Id: 0B00001,
        number:1,
        meta: {
            title: "修改信息",
            icon: "Avatar",
        },
    },
    {
        path: "/quit",
        component: "Layout",
        alwaysShow: true,
        name: "quit",
        Id: 0B00001,
        number:1,
        meta: {
            title: "退出系统",
            icon: "SwitchButton",
            roles: ["sys:systemConfig"],
            parentId: 0,

        },
    },
]);
</script>

<style lang="scss">
.login {
    margin-left: 20px;
    margin-bottom: 0px;
}
</style>