<template lang="html">
<div class="search">
  <div class="search_item">
    <i class="fa fa-angle-left" @click="goBack"></i>
  </div>
  <div class="search_item">
    <Search v-model="value" @keyup.enter.native="startSearch"></Search>
  </div>
</div>
</template>

<script>
import {Search} from "mint-ui"

export default {
  components:{
    Search
  },
  data(){
    return {
      value: ''
    }
  },
  methods: {
    startSearch(event){
      alert(1)
    },
    goBack(){
      this.$router.push('/')
    }
  }
}
</script>

<style lang="less" scoped>
@import "../../asset/less/common.less";
.search {
  display: flex;
  .search_item:nth-child(1) {
    flex: 1;
    line-height: 1.5rem;
    text-align: center;
    i {
      font-size: @size20;
    }
  }
  .search_item:nth-child(2) {
    flex: 6
  }
}
</style>
