<template>
  <div class="body-swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">Slide 1</div>
      <div class="swiper-slide">Slide 2</div>
      <div class="swiper-slide">Slide 3</div>
    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
  import Swiper from 'swiper'

  export default {
    name: "HomeBodySwiper",
    mounted() {
      var swiper = new Swiper('.body-swiper-container', {
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          renderBullet: function (index, className) {
            return '<div class="' + className + '">' + (index + 1) + '<span class="separation">/</span> ' + '</div>';
          },
        },
      });
    }
  }
</script>

<style lang="scss">
  @import url('../../node_modules/swiper/dist/css/swiper.css');
  .body-swiper-container {
    position: relative;
    overflow: hidden;
    height: 290px;
    .swiper-wrapper {
      width: 420px;
      height: 240px;
      .swiper-slide {
        background: #ddd;
      }
    }
    .swiper-pagination {
      position: absolute;
      bottom: 0;
      display: flex;
      justify-content: flex-end;
      .swiper-pagination-bullet {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: #fff;
        opacity: 1;
        height: 20px;
        width: 24px;
        border-radius: 0;
        margin-left: 16px;
        margin-right: 0;
        color: #333;
        .separation {
          font-weight: normal;
        }
        &.swiper-pagination-bullet-active {
          font-weight: bold;
        }
        &:last-child {
          width: auto;
          .separation {
            display: none;
          }
        }
      }
    }
  }
</style>