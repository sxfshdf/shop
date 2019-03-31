<template>
  <div class="home">
    <HeadSwiper></HeadSwiper>
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
  </div>
</template>

<script src="./home.js">

</script>

<style scoped lang="scss">
  .home {
    width: 1200px;
    margin: 20px auto;
    .new-goods {
      margin-top: 80px;
      display: flex;
      justify-content: space-around;
      .left-side {
        height: 240px;
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
        margin-bottom: 40px;
      }
      .right-side {
        display: flex;
        align-items: flex-start;
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
  }
</style>