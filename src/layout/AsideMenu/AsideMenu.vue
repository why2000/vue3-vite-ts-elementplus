<template>
    <!-- <MenuLogo></MenuLogo> -->
    <el-menu
        :default-active="activeIndex"
        class="el-menu-vertical-demo"
        background-color="#274FAE"
        :collapse="isCollapse"
        @open="handleOpen"
        @close="handleClose"
        unique-opened
        router
    >
        <MenuItem :menuList="menuList" :collapse="isCollapse" :courseID="courseID"></MenuItem>

        <router-link to="/login" class="login">
            <el-button type="primary" :icon="UserFilled" circle></el-button>
        </router-link>
    </el-menu>
</template>

<script setup lang="ts">
// import MenuLogo from './MenuLogo.vue'
import { reactive, computed } from 'vue'
import { useRoute } from 'vue-router';
import { useStore } from '@/store'
import MenuItem from './MenuItem.vue';
import MenuLogo from './MenuLogo.vue';
import {
    UserFilled
} from '@element-plus/icons-vue'

defineProps(['courseID', 'isCollapse'])

const store = useStore();
const route = useRoute();

//获取激活的菜单
const activeIndex = computed(() => {
    const { path } = route;
    return path;
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
        number:2, // number: 2两个界面都显示， 1首页显示，2选择课程显示
        meta: {
            title: "首页",
            icon: "Menu",
        },
        children: []
    },
    {
        path: '/myCourse',
        number:1,
        meta: {
            title: "我的课程",
            icon: "Notebook",

        },
        children: []
    },
    {
        path: "/courseHome",
        name: "courseHome",
        number:0,
        meta: {
            title: "课程内容",
            icon: "Reading",
            roles: ["sys:goods"],
            parentId: 0,

        },
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
        path: "/calendar",
        name: "calendar",
        number:1,
        meta: {
            title: "日历",
            icon: "Calendar",
        },
    },
    {
        path: "/setting",
        name: "setting",
        number:1,
        meta: {
            title: "设置",
            icon: "Setting",
        },
    },
    {
        path: "/question",
        name: "question",
        number:1,
        meta: {
            title: "帮助",
            icon: "QuestionFilled",
        },
    },
]);
</script>

<style lang="scss">
.login {
    margin-left: 8px;
    margin-bottom: 0px;
}
</style>