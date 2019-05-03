<template>
    <el-container class="index_container">
        <el-header class="index_header">
            <el-row>
                <el-col :span="4">
                    <div class="grid-content bg-purple">logo</div>
                </el-col>
                <el-col :span="16" class="header_center">
                    <div class="grid-content bg-purple-light">电商管理系统</div>
                </el-col>
                <el-col :span="4" class="header_right">
                    <div class="grid-content bg-purple">
                        <el-button type="success" @click="logout">退出</el-button>
                    </div>
                </el-col>
            </el-row>
        </el-header>
        <el-container>
            <el-aside class="index_aside">
                <el-menu
                    default-active="2"
                    class="el-menu-vertical-demo"
                    @open="handleOpen"
                    @close="handleClose"
                >
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>用户管理</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="1-1">选项1</el-menu-item>
                            <el-menu-item index="1-2">选项2</el-menu-item>
                            
                            
                        </el-menu-item-group>
                        
                    </el-submenu>
                   
                </el-menu>
            </el-aside>
            <el-main class="index_main">Main</el-main>
        </el-container>
    </el-container>
</template>
<script>
export default {
    // beforeCreate() {
    //     if (window.sessionStorage.getItem("token")) {
    //         //不用管
    //     } else {
    //         //没有
    //         //提示用户
    //         this.$message.warning("禁止访问,请登录");
    //         //回到登录页
    //         this.$router.push("/login");
    //     }
    // },
    methods: {
        logout() {
            this.$confirm("是否退出?", "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning"
            }).then(() => {
                //确定
                //删除token
                window.sessionStorage.removeItem("token");
                //返回登录页
                this.$router.push("/login");
                this.$message({
                    type: "success",
                    message: "退出成功!"
                });
            });
        }
    }
};
</script>
<style>
.index_container {
    height: 100%;
}
.index_header {
    background-color: #b3c0d1;
    height: 60px;
    line-height: 60px;
}
.header_center {
    text-align: center;
    font-size: 30px;
    align-content: center;
    font-weight: 400;
    color: white;
}
.header_right {
    text-align: right;
}
.index_aside {
    width: 200px;
}
.index_main {
    background-color: #e9eef3;
}
</style>