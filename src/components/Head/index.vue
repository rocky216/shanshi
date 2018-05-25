<template>
<div >
  <Header fixed :title="title"></Header>
</div>
</template>

<script>
import {Button, Header } from "mint-ui";

export default {
  props: ["title"],
  components: {
    Header
  },
  data(){
    return {
    }
  }
}
</script>

<style lang="less" scoped>

</style>
