<template>
    <div class="logo">
        <img src="@/assets/Techboom.jpg" alt="logo" />
        <span class="title">Tech Boom</span>
    </div>
</template>
<script setup lang="ts">
</script>
<style lang="scss" scoped>
.logo {
    width: 190px;
    background-color: #2b2f3a;
    height: 10%;
    border: none;
    line-height: 50px;
    margin: 0px;
    display: flex;
    align-items: center;
    padding-left: 19px;
    color: #fff;
    img {
        width: 64px;
        height: 64px;
        margin-right: 12px;
    }
    span {
        font-weight: 600;
        line-height: 50px;
        font-size: 16px;
        font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
        vertical-align: middle;
    }
}
</style>