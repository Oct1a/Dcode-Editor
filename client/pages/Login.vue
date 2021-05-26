<template>
  <div class="page">
      <div class="page-login">
          <div class="text item">
            <el-row class="login-card">
              <el-col :span="12" style="margin-left:50%;width:40%">
                <h2 class="title">
                  用户登录
                </h2>
                <el-form :model="formData" :rules="formRules" ref="loginForm" label-width="0px" style="padding:0 30px 0 30px;margin:10px;">
                  <el-form-item prop="username" required>
                    <el-input v-model="formData.username" name="userName" placeholder="请输入用户名">
                      <i slot="prefix" class="el-icon-user"></i>
                    </el-input>
                  </el-form-item>
                  <el-form-item prop="email" v-if="type === 'register'" required>
                    <el-input v-model="formData.email" autocomplete="off" placeholder="请输入邮箱">
                      <span slot="prefix" class="el-icon-message"></span>
                    </el-input>
                  </el-form-item>
                  <el-form-item prop="password" required>
                    <el-input placeholder="请输入密码" show-password v-model="formData.password" name="password">
                        <span slot="prefix" class="el-icon-lock"></span>
                    </el-input>
                  </el-form-item>
                  <el-form-item @keyup.enter.native="dialogVisible = true">
                    <el-button  type="primary" @click="dialogVisible = true" round size="medium" style="width:100%;background:#2f54eb;padding:15px;">{{type === 'login' ? '登录' : '注册'}}</el-button>
                    <p class="changeBtn" @click="switchType" style="float: right;color: #adadad;">
                      <span>{{type === 'login' ? '立即注册' : '马上登录'}}</span>
                    </p>
                </el-form-item>
               </el-form>
              </el-col>
            </el-row>
          </div>
          <el-dialog
            title="登录验证"
            :visible.sync="dialogVisible"
            :show-close="false "
            width="20%"
            :close-on-click-modal="false"
            :close-on-press-escape="false"
            >
            <drag-verify-img-chip
                ref="dragVerify"
                :isPassing.sync = "isPassing"
                :imgsrc="verifyImg"
                :showRefresh="true"
                text="请按住滑块拖动"
                successText="验证通过"
                :width="260"
                handlerIcon="el-icon-d-arrow-right"
                successIcon="el-icon-circle-check"
                @refresh="reimg"
                @passcallback="doSubmit"
                @passfail="passfail"
                >
              </drag-verify-img-chip>
          </el-dialog>
      </div>
  </div>
</template>

<script>
  import userModel from '@/libs/userModel'
  import dragVerifyImgChip from "vue-drag-verify-img-chip";
	import {
		Form,
		FormItem,
		Input
	} from 'element-ui'

	export default {
		components: {
			[Form.name]: Form,
			[FormItem.name]: FormItem,
      [Input.name]: Input,
      dragVerifyImgChip,
		},
		data() {
			return {
        dialogVisible:false,
        isPassing:false,
        imgUrl:require("@/common/images/login_bg.png"),
				loading: false,
				loadingVerify: false,
				inputType: 'password',
        type: 'login',
        verifyImg:"https://img0.baidu.com/it/u=3026939796,485761977&fm=26&fmt=auto&gp=0.jpg",
				formData: {
					email: '',
					username: '',
					password: ''
				},
				formRules: {
					username: [
						{required: true, message: '用户名不能为空', trigger: 'blur'}
					],
					password: [
						{required: true, message: '密码不能为空', trigger: 'blur'}
          ],
          email:[
            {required: true, message: '邮箱不能为空', trigger: 'change'},
            // {validator: validateEmail, trigger: 'change'}
          ]
				}
			}
    },
    watch: {
      dialogVisible(){
        // 当弹窗状态改变时，刷新图片地址
        this.reimg()
      }
    },
		created() {
			// 进入登录页面先清空个人信息
      this.fromUrl = this.$route.query.from ? window.decodeURIComponent(this.$route.query.from) : ''
      this.keyupSubmit()
		},
		methods: {
      // 绑定回车事件
      keyupSubmit(){
        document.onkeydown=()=>{
          let _key=window.event.keyCode;
          if(_key===13){
            let formData = {...this.formData}
            console.log(formData)
            if(formData.password && formData.username){
              this.dialogVisible = true
            }
          }
        }
      },
			/**
			 登陆
			 */
			doSubmit() {
        this.isPassing = !this.isPassing
        this.$refs.dragVerify.reset()
        this.dialogVisible = false
				// 验证成功
				this.$refs.loginForm.validate((valid) => {
					let fnName = this.type === 'login' ? 'doLogin' : 'doRegister'
					if (valid) {
						this[fnName]();
					} else {
						this.$store.dispatch('showMassage', {type: 'error', message: '请正确填写表单！'})
						return false;
					}
				});
			},
			doLogin() {
				let formData = {...this.formData}
				// 登录操作
				userModel.doLogin(formData).then(() => {
					if(this.fromUrl){
            console.log(this.fromUrl)
						this.$router.push(this.fromUrl)
					}else{
						userModel.goBeforeLoginUrl()
					}
				})
			},
			doRegister() {
				let formData = {...this.formData}
				// 注册操作
				userModel.doRegister(formData).then(() => {
					if(this.fromUrl){
						this.$router.push(this.fromUrl)
					}else{
						userModel.goBeforeLoginUrl()
					}
				})
      },
      validateEmail(val){
          return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(val)
      },
			switchType(){
				if(this.type === 'login'){
					this.type = 'register'
				}else{
					this.type = 'login'
				}
      },
      reimg(){ //刷新验证图片
          // 当启用刷新图片时调用改函数
          let list = [
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1017748215,3835401839&fm=26&gp=0.jpg",
            "https://img2.baidu.com/it/u=3251757891,2905627848&fm=26&fmt=auto&gp=0.jpg",
            "https://img2.baidu.com/it/u=1376319214,2872501189&fm=26&fmt=auto&gp=0.jpg",
            "https://img1.baidu.com/it/u=1648934633,1654247132&fm=26&fmt=auto&gp=0.jpg"
          ]
          this.verifyImg = list[Math.floor(Math.random()*(list.length-1+1)+0)]
      },
      passfail(){
        this.reimg()
      },
		}
	}
</script>

<style lang="scss" scoped>
    .page{
      position: relative;
      margin-top: 7%;
      width: 100%;
      height: 100%;
      background:url('../common/images/login_bg2.png')  no-repeat 0 0;
      background-size: 494px 602px;
    }
    .login-card{
        height: 100%;
        padding-right: 130px;
        padding-top: 80px;
        width:100%;
    }
    .title{
      font-size: 2.3rem;
      font-weight: bold;
      margin: 20px 0 50px 40px;
    }
    .changeBtn{
      cursor: pointer;
    }
    /deep/ .el-input__inner{
      border-radius: 30px;
        line-height: 80px;
        background-color: #f5f5f5;
        border: none;
        text-indent: 20px;
        height: 50px;
        /* margin-bot tom: 20px; */
    }
    /deep/ .el-input__prefix{
      font-size: 1.4rem;
      padding:8px;
    }
    /deep/ .el-form-item__error{
      padding-left: 50px;
    }
    /deep/ .el-form-item{
      margin-bottom: 40px;
    }

    /deep/ .el-dialog__header{
      text-align: center;
    }
    /deep/ .el-dialog__body{
      padding: 3px 25px 25px 25px;
      .drag_verify{
          margin-top:20px
      }
    }

</style>