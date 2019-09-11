<template>
<div class="navBar">
  <div @click="back" v-show="showBackIcon" class="bar-left">
    <img src="../assets/back.png">
  </div>
  <div class="bar-center">
  {{titleName}}
  </div>
  <div class="bar-right">

  </div>

</div>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    titleName:String,
    showBackIcon:{
      type: Boolean,
      required: false, // 是否是必传
      default: true
    },
    rightFunc:Object
  },
  methods:{
    back () {
      this.$router.back()
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../common/css/base.styl'
  .navBar
    height 44px
    line-height 44px
    display flex
    align-items center
    position relative
    .bar-left
      position absolute
      display flex
      align-items center
      img
        width 20px
    .bar-center
      flex 1
      margin 0 44px
</style>
