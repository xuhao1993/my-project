<template>
  <div class="page">
    <div class="icon">
      <img src="../assets/logo.png">
    </div>
    <div class="tab_head">
      <div @click="chooseItem =1" :class="chooseItem ===1?'selected':''">密码登录<div class="underline_one"></div></div>
      <div @click="chooseItem =2" :class="chooseItem ===2?'selected':''">验证码登录<div class="underline_two"></div></div>
    </div>
    <div v-show="chooseItem === 1" class="tab_first">
      <div class="input-wrapper">
        <input type="number" ref="telephoneNumber" placeholder="请输入手机号" v-model="telephoneNumber" />
        <div @click="clearTelephoneNumber"  v-show="telephoneNumber !== ''" class="clear">
          <img src="../assets/clear.png">
        </div>
      </div>
      <div class="input-wrapper">
        <input ref="password" type="password" placeholder="请输入密码" v-model="password" />
        <div @click="clearPassword" v-show="password !== ''" class="clear">
          <img src="../assets/clear.png">
        </div>
      </div>
    </div>
    <div v-show="chooseItem === 2" class="tab_second">
      <div class="input-wrapper">
        <input type="number" ref="mobileNumber" placeholder="请输入手机号" v-model="mobileNumber" />
        <div @click="clearMobileNumber"  v-show="mobileNumber !== ''" class="clear">
          <img src="../assets/clear.png">
        </div>
      </div>
      <div class="input-wrapper">
        <input ref="verificationCode" type="text" placeholder="请输入验证码" v-model="verificationCode" />
        <div @click="clearVerificationCode" v-show="verificationCode !== ''" class="clear">
          <img src="../assets/clear.png">
        </div>
        <div v-show="verificationCode === ''" class="getVerificationCode">
          <button @click="getVerificationCode" :disabled="mobileNumber === ''">
            获取验证码
          </button>
        </div>
      </div>
    </div>
    <div class="forgetPassword">
      <span @click="recoverPassword">忘记密码?</span>
    </div>

    <button @click="submit" :disabled="submitDisabled" class="submit">
      登录
    </button>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      chooseItem: 1,
      telephoneNumber: '',
      password: '',
      mobileNumber: '',
      verificationCode: ''
    }
  },
  methods: {
    clearTelephoneNumber () {
      this.telephoneNumber = ''
      this.$refs.telephoneNumber.focus()
    },
    clearPassword () {
      this.password = ''
      this.$refs.password.focus()
    },
    clearMobileNumber () {
      this.mobileNumber = ''
      this.$refs.mobileNumber.focus()
    },
    clearVerificationCode () {
      this.verificationCode = ''
      this.$refs.verificationCode.focus()
    },
    submit () {
      if (this.chooseItem === 1) {
        if (!(/^1[3456789]\d{9}$/.test(this.telephoneNumber))) {
        //  util.showToast(this, '手机号有误，请重新输入', 1500, 'warn')
          const toast = this.$createToast({
            type:'warn',
            time: 1500,
            txt: '手机号有误，请重新输入'
          })
          toast.show()
        } else {
          this.$router.replace({ path: '/' })
        }
      } else if (this.chooseItem === 2) {
        if (!(/^1[3456789]\d{9}$/.test(this.mobileNumber))) {
         // util.showToast(this, '手机号有误，请重新输入', 1500, 'warn')
          const toast = this.$createToast({
            type:'warn',
            time: 1500,
            txt: '手机号有误，请重新输入'
          })
          toast.show()
        } else {
          if (this.verificationCode === '') {
          //  util.showToast(this, '请输入您的短信验证码', 1500, 'warn')
            const toast = this.$createToast({
              type:'warn',
              time: 1500,
              txt: '请输入您的短信验证码'
            })
            toast.show()
          } else {
            this.$router.replace({ path: '/' })
          }
        }
      }
    },
    recoverPassword () {
      this.$router.push({ name: 'RecoverPassword' })
    },
    getVerificationCode () {
      if (!(/^1[3456789]\d{9}$/.test(this.mobileNumber))) {
       // util.showToast(this, '手机号有误，无法获取验证码', 1500, 'warn')
        const toast = this.$createToast({
          type:'warn',
          time: 1500,
          txt: '手机号有误，无法获取验证码'
        })
        toast.show()
      }
    }

  },
  computed: {
    submitDisabled () {
      if (this.chooseItem === 1) {
        if (this.telephoneNumber === '' || this.password === '') {
          return true
        } else {
          return false
        }
      } else if (this.chooseItem === 2) {
        if (this.mobileNumber === '') {
          return true
        } else {
          return false
        }
      } else {
        return true
      }
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../common/css/base.styl'

  .page
    background #ffffff
    font-size 15px
    color main-text-color
    .icon
      display flex
      justify-content center
      margin-top 64px
      margin-bottom 25px

      img
        width 100px
        height 100px
    .tab_head
      display flex
      align-items baseline
      justify-content center
      padding 0 15px 30px 15px
      div
        padding 0px 15px
        color auxiliary-text-color
        font-family PingFangSC-Regular
      .selected
        position relative
        font-size 19px
        font-weight 500
        font-family PingFangSC-Medium
        color main-text-color!important
        .underline_one
          position absolute
          bottom -10px
          top auto
          left 33px
          height 2px
          width 2px
          background-color main-color
        .underline_two
          position absolute
          bottom -10px
          top auto
          left 45px
          height 2px
          width 2px
          background-color main-color
    .tab_first,.tab_second
      padding 0 30px
      .input-wrapper
        display flex
        padding 5px 0px
        position relative
        input
          border 1px solid border-color
          border-radius 5px
          height 42px
          padding 0px 25px 0px 15px
          flex 1
          font-size 15px
          color main-text-color
          font-weight 500
          outline none
        .clear
          position absolute
          right 10px
          top 20px
          img
            width 15px
        .getVerificationCode
          position absolute
          height calc(100% - 20px)
          right 10px
          top 10px
          display flex
          button
            background main-color
            padding 0px 8px
            border-radius 5px
            border none
            color #fff
            font-size 13px
            button:disabled
              background btn-disabled !important
    .forgetPassword
      padding 10px 30px
      text-align right
      font-size 13px
    button:disabled
      background btn-disabled !important
    .submit
      height 44px

      font-size 15px
      color #FFFFFF

      line-height @height
      text-align center

      border-radius 5px
      background main-color
      margin 5px 30px 0 30px
      border none
      width -webkit-fill-available
</style>
