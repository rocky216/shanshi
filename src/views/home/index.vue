<template lang="html">
<div class="home">
  <!-- <Search v-model="value"></Search> -->
  <div class="top">
    <div class="top_item">
      <div class="">
        <i class="fa fa-street-view"></i>
        <span>吉安</span>
      </div>
    </div>
    <div class="top_item">
      <router-link to="/search">
        <div class="searchBox">
          <i class="fa fa-search"></i>
        </div>
      </router-link>
    </div>
  </div>
  <div class="swipe" >
    <Swipe :auto="5000">
      <SwipeItem>
        <div class="SwipeItem">
          <img src="http://wap.pushans.com/UploadFiles/ADImage/e588c43c-7a37-464c-b2f3-260b43ef1f21.jpg" alt="">
        </div>
      </SwipeItem>
      <SwipeItem>
        <div class="SwipeItem">
          <img src="http://wap.pushans.com/UploadFiles/ADImage/c5e9c4c4-c320-464f-a973-2754598f676c.jpg" alt="">
        </div>
      </SwipeItem>
    </Swipe>
  </div>
  <div class="footScreen">
    <ul>
      <li>综合排序</li>
      <li>销量最高</li>
      <li>距离最近</li>
    </ul>
  </div>
  <div class="footList">
    <ul>
      <router-link to="/shop">
        <li>
          <div class="foot_item">
            <div class="img">
              <img src="http://wap.pushans.com/UploadFiles/ADImage/c5e9c4c4-c320-464f-a973-2754598f676c.jpg" alt="">
            </div>
            <div class="text">
              <p>谱膳司健康厨房</p>
              <div class="info">
                <div class="start">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star-half"></i>
                </div>
                <p>销量10109份</p>
              </div>
            </div>
          </div>
          <div class="foot_item">
            <div class="">
              <i class="fa fa-volume-control-phone"></i>
            </div>
            <p>660m</p>
          </div>
        </li>
      </router-link>
      <li>
        <div class="foot_item">
          <div class="img">
            <img src="http://wap.pushans.com/UploadFiles/ADImage/c5e9c4c4-c320-464f-a973-2754598f676c.jpg" alt="">
          </div>
          <div class="text">
            <p>谱膳司健康厨房</p>
            <div class="info">
              <div class="start">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star-half"></i>
              </div>
              <p>销量10109份</p>
            </div>
          </div>
        </div>
        <div class="foot_item">
          <div class="">
            <i class="fa fa-volume-control-phone"></i>
          </div>
          <p>660m</p>
        </div>
      </li>
      <li>
        <div class="foot_item">
          <div class="img">
            <img src="http://wap.pushans.com/UploadFiles/ADImage/c5e9c4c4-c320-464f-a973-2754598f676c.jpg" alt="">
          </div>
          <div class="text">
            <p>谱膳司健康厨房</p>
            <div class="info">
              <div class="start">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star-half"></i>
              </div>
              <p>销量10109份</p>
            </div>
          </div>
        </div>
        <div class="foot_item">
          <div class="">
            <i class="fa fa-volume-control-phone"></i>
          </div>
          <p>660m</p>
        </div>
      </li>
      <li>
        <div class="foot_item">
          <div class="img">
            <img src="http://wap.pushans.com/UploadFiles/ADImage/c5e9c4c4-c320-464f-a973-2754598f676c.jpg" alt="">
          </div>
          <div class="text">
            <p>谱膳司健康厨房</p>
            <div class="info">
              <div class="start">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star-half"></i>
              </div>
              <p>销量10109份</p>
            </div>
          </div>
        </div>
        <div class="foot_item">
          <div class="">
            <i class="fa fa-volume-control-phone"></i>
          </div>
          <p>660m</p>
        </div>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
import {Search,Swipe,SwipeItem} from "mint-ui"
import {fetch} from "utils"

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
  },
  created(){
    // this.testData()
  },
  methods: {
    testData(){
      const options={
        url: "/jxps/values/get",
      }
      fetch(options, ()=>{

      })
    }
  }

}
</script>

<style lang="less" scoped>
@import "../../asset/less/common.less";

.top{
  position: fixed;
  width: 100%;
  height: 1rem;
  left: 0;
  top:0;
  z-index: 10;
  background: @whiteColor;
  display: flex;
  .top_item:nth-child(1) {
    flex: 1;
    padding-left: 0.2rem;
    line-height: 0.8rem;
    font-size: 0.45rem;
    i {
      font-size: @size16;
    }

  }
  .top_item:nth-child(2) {
    padding: 0.1rem;
    flex: 3;
  }
  .searchBox {
    border: 1px solid @grayColor;
    height: 0.72rem;
    line-height: 0.8rem;
    border-radius: 0.4rem;
    i {
      font-size: @size16;
      float: left;
      margin-top: 0.2rem;
      margin-left: 0.2rem;
    }
  }
}

.swipe {
  margin-top: 0.8rem;
  width: 100%;
  height: 3rem;
  .SwipeItem {
    width: 100%;
    background-color: #eee;
    height: 100%;
    img {
      width: 100%;
    }
  }
}
.footScreen {
  padding: 0.2rem 0;
  background: @whiteColor;
  ul {
    display: flex;
    width: 100%;
    li{
      flex: 1;
      text-align: center;
    }
  }

}
.footList {
  background-color: @whiteColor;
  border-top: 1px solid @grayColor;
  li {
    height: 1.8rem;
    display: flex;
    padding: 0.2rem;
    border-bottom: 1px solid @grayColor;
    .foot_item:nth-child(1) {
      flex: 3;
      .img {
        width: 1.4rem;
        height: 1.4rem;
        float: left;
        margin-right: 0.3rem;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .info {
        display: flex;
        margin-top:0.3rem;
        .start {
          margin-right: 0.2rem;
          i {
            color: @redDeep;
          }
        }
      }
    }
    .foot_item:nth-child(2){
      flex: 1;
      text-align: right;
      i{
        color: @redDeep;
        margin-top: 0.2rem;
      }
      p {
        margin-top: 0.3rem;
      }
    }
  }
}


</style>
