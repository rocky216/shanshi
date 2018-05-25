<template lang="html">
<div class="footer">
  <div class="footer_item">
    <router-link to="/home" >
      <i class="fa fa-tree"></i>
      <p>我的菜品</p>
    </router-link>
  </div>
  <div class="footer_item">
    <i class="fa fa-square"></i>
    <p>点餐帮助</p>
  </div>
  <div class="footer_item">
    <i class="fa fa-reorder"></i>
    <p>我的订单</p>
  </div>
  <div class="footer_item">
    <i class="fa fa-user-o"></i>
    <p>个人中心</p>
  </div>
</div>
</template>

<script>
export default {
}
</script>

<style lang="less" scope>
@import "../../asset/less/common.less";

.footer {
  height: 1rem;
  width: 100%;
  position: fixed;
  bottom: 0;
  left:0;
  background: @backgroundColor;
  display: flex;
  font-size: @size12;
  border-top: 1px solid @grayColor;
  padding: 0.15rem 0;
  .footer_item {
    flex: 1;
    text-align: center;
    i {
      font-size: @size16;
    }
  }
}
a.router-link-active  {
  color: @baseColor;
}

</style>
