<template lang="html">
<div class="shop">
  <div class="shopInfo">
    <div class="shopImg">
      <img src="http://wap.pushans.com/UploadFiles/ADImage/c5e9c4c4-c320-464f-a973-2754598f676c.jpg" alt="">
    </div>
    <div class="shopText">
      <h2>南昌瓦罐食府</h2>
      <p><i class="fa fa-volume-control-phone"></i>17588888888</p>
      <div class="eval">
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>

        <div class="myeval">
          <router-link to="/">本店评价</router-link>
        </div>
      </div>
    </div>
  </div>
  <div class="nav">
    <ul>
      <li>价格 <i class="fa fa-sort"></i> </li>
      <li>好评 <i class="fa fa-sort"></i> </li>
      <li>销量 <i class="fa fa-sort"></i> </li>
    </ul>
  </div>
  <div class="">

  </div>
</div>
</template>

<script>
export default {
  data(){
    return {

    }
  }
}
</script>

<style lang="less" scoped>
@import "../../asset/less/common.less";
.shopInfo {
  display: flex;
  padding: 0.2rem;
  background-color: @whiteColor;
  .shopImg {
    width: 2rem;
    height: 2rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .shopText {
    font-size: 0.6rem;
    padding: 0 .2rem;
    width: 7rem;
    p {
      margin-top: 0.2rem;
      i {
        color:@redColor;
        font-size: 0.5rem;
        margin-right: 0.2rem;
      }
    }
    .eval {
      overflow: hidden;
      i {
        font-size: 0.45rem;
        color:@yellowColor;
      }
      .myeval {
        float: right;
        font-size: 0.45rem;
      }
    }
  }
}
.nav {
  background: @whiteColor;
  border-top: 1px solid @grayddd;
  ul{
    width: 100%;
    display: flex;
    li{
      flex: 1;
      text-align: center;
      height: 1rem;
      line-height: 1rem;
    }
  }
}

</style>
