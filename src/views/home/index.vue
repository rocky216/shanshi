<template lang="html">
<div class="home">
  <Search v-model="value"></Search>
  <div class="swipe" :auto="5000">
    <Swipe>
      <SwipeItem>
        <div class="SwipeItem">
          1
        </div>
      </SwipeItem>
      <SwipeItem>
        <div class="SwipeItem">
          2
        </div>
      </SwipeItem>
    </Swipe>
  </div>
</div>
</template>

<script>
import {Search,Swipe,SwipeItem} from "mint-ui"

export default {
  components: {
    Search,
    Swipe,
    SwipeItem
  },
  data(){
    return {
      value: ''
    }
  }
}
</script>

<style lang="less" scoped>
@import "../../asset/less/common.less";

.swipe {
  width: 100%;
  height: 4rem;
  .SwipeItem {
    width: 100%;
    background-color: #eee;
    height: 100%;
  }
}



</style>
