<template>
  <div class="page">
    <nav-bar :titleName="'找回密码'"></nav-bar>
    <div class="wrapper">
      <div class="wrapper-item">
        <div class="wrapper-item-left">
          手机号&emsp;
        </div>
        <div class="wrapper-item-right">
          <input type="number" style="font-size:16px;" ref="telephoneNumber" v-model="telephoneNumber" placeholder="请输入手机号"/>
          <div @click="clearTelephoneNumber" v-show="telephoneNumber !== '' " class="clear">
            <img src="../assets/clear.png">
          </div>
        </div>
      </div>

      <div class="wrapper-item">
        <div class="wrapper-item-left">
          验证码&emsp;
        </div>
        <div class="wrapper-item-right">
          <input style="font-size:16px;" ref="verificationCode" v-model="verificationCode" placeholder="请输入验证码"/>
          <div @click="clearVerificationCode" v-show="verificationCode !== '' " class="clear">
            <img src="../assets/clear.png">
          </div>
        </div>
        <div class="verificationCode">
          <button @click="getVerificationCode" :disabled="telephoneNumber === ''">
            获取验证码
          </button>
        </div>
      </div>

      <div class="wrapper-item">
        <div class="wrapper-item-left">
          新密码&emsp;
        </div>
        <div class="wrapper-item-right">
          <input type="password" minlength="8" v-model="newPassword" ref="newPassword" placeholder="请输入8位以上新密码"/>
          <div @click="clearNewPassword" v-show="newPassword !== '' " class="clear">
            <img src="../assets/clear.png">
          </div>
        </div>
      </div>

      <div class="wrapper-item">
        <div class="wrapper-item-left">
          确认密码
        </div>
        <div class="wrapper-item-right">
          <input type="password" v-model="confirmPassword" ref="confirmPassword" placeholder="请确认您的密码"/>
          <div @click="clearConfirmPassword" v-show="confirmPassword !== '' " class="clear">
            <img src="../assets/clear.png">
          </div>
        </div>
      </div>
    </div>

    <button @click="confirm" :disabled="confirmDisabled" class="confirm">
      确定
    </button>
  </div>
</template>

<script>
import NavBar from '../components/NavBar'

export default {
  name: 'RecoverPassword',
  components:{
    NavBar
  },
  data () {
    return {
      telephoneNumber: '',
      newPassword: '',
      confirmPassword: '',
      verificationCode: ''
    }
  },
  methods: {
    clearTelephoneNumber () {
      this.telephoneNumber = ''
      this.$refs.telephoneNumber.focus()
    },
    clearVerificationCode () {
      this.verificationCode = ''
      this.$refs.verificationCode.focus()
    },
    clearNewPassword () {
      this.newPassword = ''
      this.$refs.newPassword.focus()
    },
    clearConfirmPassword () {
      this.confirmPassword = ''
      this.$refs.confirmPassword.focus()
    },
    confirm () {
      // 判断手机号格式是否正确
      if (!(/^1[3456789]\d{9}$/.test(this.telephoneNumber))) {
       // util.showToast(this, '手机号有误，请重新输入', 1500, 'warn')
      } else {
        // 判断新密码和确认密码是否一致
        if (this.newPassword !== this.confirmPassword) {
         // util.showToast(this, '密码不一致，请重新输入', 1500, 'warn')
        } else {
         /* let options = {
            img: 'success',
            content: '设置成功，请重新登录',
            confirm: { text: '知道了', func: this.relogin }
          }*/
         // this.$createHintDialog(this, options).show()
        }
      }
    },
    relogin () {
      this.$router.push('/login')
    },
    getVerificationCode () {
      if (!(/^1[3456789]\d{9}$/.test(this.telephoneNumber))) {
       // util.showToast(this, '手机号有误，无法获取验证码', 1500, 'warn')
      }
    }
  },
  computed: {
    confirmDisabled () {
      if (this.telephoneNumber === '' || this.newPassword === '' || this.confirmPassword === '' || this.verificationCode === '') {
        return true
      } else {
        return false
      }
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../common/css/base.styl'

  .page
    background #ffffff
    font-size f14
      color main-text-color
    .wrapper
      padding 1px 20px 0px 20px
      .wrapper-item
        display flex
        align-items center
        border-bottom 1px solid divider-color
        .wrapper-item-left
          padding-right 30px
          font-weight 400
          font-size 14px
        .wrapper-item-right
          flex 1
          position relative
          display flex
          input
            font-weight 500
            width 100%
            font-size 14px
            height 52px
            padding-right  15px
            flex 1
            outline none
          .clear
            position absolute
            right 0px
            top 18px
            img
              width 15px
          input::-webkit-input-placeholder
                  font-size 14px
          input:-moz-placeholder
            font-size 14px
          input:-ms-input-placeholder
            font-size 14px
        .verificationCode
          padding-left 20px
          button
            color main-color
            font-size f14
          button:disabled
            color btn-disabled !important
    .confirm
      height 44px
      font-size f15
      color #FFFFFF
      line-height @height
      text-align center
      border-radius 5px
      background main-color
      margin 30px 20px 0 20px
      border none
      width -webkit-fill-available
    .confirm:disabled
      background btn-disabled !important
    .confirm:hover,.confirm:active
      background #CC1915

</style>
