<template lang="html">
  <div class="">
    <div class="">
      <transition :name="moveName" mode="out-in">

          <router-view></router-view>

      </transition>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "components/Footer"

export default {
  components: {
    Footer
  },
  data(){
    return{
      moveName: 'move-left'
    }
  },
  watch: {
    // '$route' (to, from) {
    //   const toDepth = to.path.split('/').length
    //   const fromDepth = from.path.split('/').length
    //   this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    //   console.log(this.transitionName);
    // }
  },
  created(){

  },
  methods: {

  }
}
</script>

<style lang="less" scoped>
.move-left-enter {
    transform: translate(100%);
}
.move-left-enter-active {
    transition: all 0.1s ease;
}
.move-left-leave-active {
    transform: translate(-100%);
    transition: all  0.1s ease;
}
.move-right-enter {
    transform: translate(-100%);
}
.move-right-enter-active {
    transition: all 0.1s ease;
}
.move-right-leave-active {
    transform: translate(100%);
    transition: all  0.1s ease;
}
</style>
