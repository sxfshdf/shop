<template>
  <div class="home">
    <HeadSwiper></HeadSwiper>
    <div class="goods-recommend">
      <div class="goods-image-wrapper">
        <img src="" alt="">
      </div>
      <div class="goods-description">
        <div class="goods-title">
          Beats Studio<sup>3</sup> Wireless
        </div>
        <div class="goods-content">
          <ul>
            <li><span class="circle"></span>采用Apple W1 芯片，实现1 类无线蓝牙®连接，提升电池能效</li>
            <li><span class="circle"></span>Beats Pure ANC (完全自适应消噪) 主动阻隔外界噪音</li>
            <li><span class="circle"></span>采用Fast Fuel 技术，在电量不足时，充电10 分钟即可持续播放3小时</li>
            <li><span class="circle"></span>实时音频调校，打造至臻聆听体验</li>
          </ul>
        </div>
        <div class="goods-price">
          <span class="rmb">￥</span><span class="price-num">2,789</span>
        </div>
      </div>
    </div>
    <section class="new-goods">
      <div class="left-side">
        <div class="title">
          <div class="main-title">New Arrival</div>
          <div class="sub-title">新品推荐</div>
        </div>
        <div class="button-detail">所有商品</div>
      </div>
      <div class="middle-swipe">
        <HomeBodySwiper></HomeBodySwiper>
      </div>
      <div class="right-side">
        <div class="right-line"></div>
        <div class="right-title">01</div>
      </div>
    </section>
    <div class="goods-recommend">
      <div class="goods-image-wrapper">
        <img src="" alt="">
      </div>
      <div class="goods-description">
        <div class="goods-title">
          Beats EP
        </div>
        <div class="goods-content">
          <ul>
            <li><span class="circle"></span>精湛的音质，带来 Beats 一贯的清澈音色和深度音场</li>
            <li><span class="circle"></span>使用不锈钢强化，设计轻盈耐用</li>
            <li><span class="circle"></span>无需电池，无间断播放</li>
            <li><span class="circle"></span>可上下调节的滑杆，提供个人化的贴合体验</li>
          </ul>
        </div>
        <div class="goods-price">
          <span class="rmb">￥</span><span class="price-num">761</span>
        </div>
      </div>
    </div>
    <section class="new-goods">
      <div class="left-side">
        <div class="title">
          <div class="main-title">Hot Goods</div>
          <div class="sub-title">热销商品</div>
        </div>
        <div class="button-detail">所有商品</div>
      </div>
      <div class="middle-swipe">
        <HomeBodySwiper></HomeBodySwiper>
      </div>
      <div class="right-side">
        <div class="right-line"></div>
        <div class="right-title">02</div>
      </div>
    </section>
    <div class="to-top" v-show="showTop" @click="toTop">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-totop"></use>
      </svg>
    </div>
  </div>
</template>

<script src="./home.js">

</script>

<style scoped lang="scss">
  @import '../../assets/css/common.scss';
  .home {
    width: 1200px;
    margin: 20px auto;
    .goods-recommend {
      margin: 120px 0;
      width: 1080px;
      display: flex;
      .goods-image-wrapper {
        background: #ccc;
        height: 320px;
        width: 480px;
        flex-shrink: 0;
      }
      .goods-description {
        margin-top: auto;
        margin-left: 80px;
        .goods-title {
          font-size: 24px;
          font-weight: bold;
          text-align: left;
          sup {
            font-size: 18px;
          }
        }
        .goods-content {
          ul {
            color: #999;
            margin-top: 32px;
            li {
              text-align: left;
              margin: 10px 0;
              display: flex;
              align-items: center;
              .circle {
                flex-shrink: 0;
                display: inline-block;
                height: 8px;
                width: 8px;
                border-radius: 50%;
                margin-right: 12px;
                border: 1px solid #ccc;
              }
            }
          }
        }
        .goods-price {
          text-align: left;
          margin-top: 48px;
          .rmb {
            font-size: 16px;
          }
          .price-num {
            font-size: 32px;
            font-weight: bold;
            line-height: 28px;
            margin-left: 4px;
          }
        }
      }
    }
    .new-goods {
      margin: 120px auto;
      display: flex;
      /*justify-content: space-between;*/
      .left-side {
        height: 240px;
        width: 480px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        .title {
          text-align: left;
          .main-title {
            font-size: 32px;
            font-weight: bold;
          }
          .sub-title {
            font-size: 20px;
            margin-top: 8px;
          }
        }
        .button-detail {
          height: 40px;
          width: 120px;
          border: 1px solid #333;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s;
          cursor: pointer;
          &:hover {
            background: #333;
            color: #fff;
          }
        }
      }
      .middle-swipe {

      }
      .right-side {
        display: flex;
        align-items: flex-start;
        margin-left: auto;
        .right-title {
          font-size: 20px;
          font-weight: bold;
          line-height: 20px;
          margin-left: 32px;
        }
        .right-line {
          height: 60px;
          width: 1px;
          background: #000;
        }
      }
    }
    .to-top {
      position: fixed;
      right: 40px;
      z-index: 999;
      bottom: 100px;
      padding: 8px;
      border: 1px solid #ddd;
      border-radius: 50%;
      cursor: pointer;
      transition: all 0.3s;
      .icon {
        height: 24px;
        width: 24px;
        color: #333;
      }
      &:hover {
        background: #333;
        border: 1px solid #333;
        .icon {
          color: #fff;
        }
      }
    }
  }
</style>