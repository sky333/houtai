<template>
    <div class="login">
        <el-form
            :model="formData"
            :rules="rules"
            status-icon
            ref="formData"
            label-width="100px"
            class="demo-ruleForm"
            label-position="top"
        >
            <h2>用户登录</h2>
            <el-form-item label="用户名" prop="username">
                <el-input v-model.trim="formData.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input type="password" v-model.trim="formData.password" autocomplete="off"  @keyup.enter.native="submitForm('formData')" ></el-input>
            </el-form-item>
            <el-form-item>
                <el-button class="login_btn" type="primary" @click="submitForm('formData') ">提交</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
import { log } from 'util';
export default {
    data() {
        return {
            formData: {
                username: "",
                password: ""
            },
            rules: {
                username: [
                    {
                        required: true,
                        message: "请输入用户名",
                        trigger: "blur"
                    },
                    {
                        min: 3,
                        max: 15,
                        message: "长度在 3 到 15 个字符",
                        trigger: "change"
                    }
                ],
                password: [
                    {
                        required: true,
                        message: "请输入密码",
                        trigger: "blur"
                    },
                    {
                        min: 3,
                        max: 15,
                        message: "长度在 3 到 15 个字符",
                        trigger: "change"
                    }
                ]
            }
        };
    },
    methods:{
         submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // alert('submit!');
            //数据正确
            this.$http.post('/login',this.formData).then(res=>{
                console.log(res);
                if(res.data.meta.status ==400){
                    //错误弹窗
                    this.$message.error(res.data.meta.msg)
                }else{
                    //正确弹窗
                    this.$message.success(res.data.meta.msg)
                    //保存token
                    window.sessionStorage.setItem('token',res.data.data.token)
                    //编程式跳转
                    this.$router.push('/')
                }
            })
          } else {
            this.$message.error('请输入正确的用户名和密码');
            return false;
          }
        });
      },
    }
};
</script>
<style>
html,
body {
    height: 100%;
    padding: 0;
    margin: 0;
}
body > div:first-of-type{
    height: 100%;
}
.login {
    background-color: #324152;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}
.el-form {
    width: 580px;
    height: 440px;
    box-sizing: border-box;
    padding: 40px;
    border-radius: 10px;
    background-color: #fff;
}
.login_btn {
    width: 100%;
}
</style>