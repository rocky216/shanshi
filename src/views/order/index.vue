<template lang="html">
<div class="order">
  <div class="orderNav">
    <ul>
      <li class="active">全部订单</li>
      <li>已完成</li>
      <li>待支付</li>
      <li>已取消</li>
    </ul>
  </div>
  <div class="orderList">
    <ul>
      <li>
        <div class="shopInfo">
          <div class="img">
            <img src="http://wap.pushans.com/UploadFiles/ADImage/c5e9c4c4-c320-464f-a973-2754598f676c.jpg" alt="">
          </div>
          <div class="text">
            <h2>吉安市鼎泰步行街健康厨房</h2>
            <p>订单号：1806250000006</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</div>
</template>

<script>


export default {
  components: {

  },
  data(){
    return {

    }
  }
}
</script>

<style lang="less" scoped>
@import "../../asset/less/common.less";

.orderNav {
  ul {
    display: flex;
    width: 100%;
    background-color: @whiteColor;
    li {
      flex: 1;
      padding: 0.3rem;
      text-align: center;
      border-bottom: 1px solid @grayddd;
    }
    li.active {
      color: @redColor;
      border-color: @redColor;
    }
  }
}
.orderList {
  ul {
    li {
      padding: 0.2rem;
      background-color: @whiteColor;
      .shopInfo {
        display: flex;
        .img {
          width: 1.2rem;
          height: 1.2rem;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .text {
          width: 8rem;
          padding: 0 0.2rem;
        }
      }
    }
  }
}


</style>
