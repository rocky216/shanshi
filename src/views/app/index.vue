<template lang="html">
  <div class="">
    <div class="">
      <router-view></router-view>
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
    return{}
  },
  created(){

  },
  methods: {

  }
}
</script>

<style lang="less" scoped>
.color {
  color: red;
}
</style>
