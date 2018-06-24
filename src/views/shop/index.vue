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
  <div class="list">
    <div class="left">
      <ul>
        <li>全部</li>
        <li>家庭宴客餐</li>
        <li>凉菜</li>
        <li>蒸菜</li>
        <li>蒸鱼</li>
      </ul>
    </div>
    <div class="right">
      <ul>
        <li>
          <div class="rightImg">
            <img src="http://wap.pushans.com/UploadFiles/ADImage/c5e9c4c4-c320-464f-a973-2754598f676c.jpg" alt="">
          </div>
          <div class="rightText">
            <h2>高级定制营养套餐F</h2>
            <div class="select">
              <Badge size="small" type="primary">选厨师</Badge>
              <Badge size="small" type="primary">选厨师</Badge>
              <Badge size="small" type="primary">选厨师</Badge>
            </div>
            <div class="sales">
              <span>销量77份</span>
              <span>仅剩13份</span>
            </div>
            <div class="price">
              <span class="redColor">￥25元</span>
            </div>
          </div>
        </li>
        <li>
          <div class="rightImg">
            <img src="http://wap.pushans.com/UploadFiles/ADImage/c5e9c4c4-c320-464f-a973-2754598f676c.jpg" alt="">
          </div>
          <div class="rightText">
            <h2>高级定制营养套餐F</h2>
            <div class="select">
              <Badge size="small" type="primary">选厨师</Badge>
              <Badge size="small" type="primary">选厨师</Badge>
              <Badge size="small" type="primary">选厨师</Badge>
            </div>
            <div class="sales">
              <span>销量77份</span>
              <span>仅剩13份</span>
            </div>
            <div class="price">
              <span class="redColor">￥25元</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>
import {Badge } from "mint-ui"
export default {
  components: {
    Badge
  },
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
        a {
          color: @greenColor;
        }
      }
    }
  }
}
.nav {
  background: @whiteColor;
  border-top: 1px solid @grayddd;
  border-bottom: 1px solid @grayeee;
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
.list {
  background-color: @whiteColor;
  display: flex;
  .left {
    width: 2.5rem;
    background-color: @grayf1;
    ul {
      li {
        border-bottom: 1px solid @grayddd;
        padding: 0.2rem;
        text-align: center;
      }
    }
  }
  .right {
    width: 7.5rem;
    ul {
      li{
        display: flex;
        padding: 0.2rem;
        box-sizing: border-box;
        border-bottom: 1px solid @grayddd;
        .rightImg {
          width: 1.5rem;
          height: 1.5rem;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .rightText {
          padding: 0 0.2rem;
          .select {
            margin-top: 0.15rem;
            span {
              color: @whiteColor;
            }
          }
          .sales {
            color: @gray999;
          }
          .price {
            font-size: 0.45rem;
          }
        }
      }
    }
  }
}
</style>
