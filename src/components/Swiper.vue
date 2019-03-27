<template>
  <div class="swiper-container">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
      <!-- Slides -->
      <div class="swiper-slide">Slide 1</div>
      <div class="swiper-slide">Slide 2</div>
      <div class="swiper-slide">Slide 3</div>
    </div>
    <!-- If we need navigation buttons -->
    <div class="button-container">
      <div class="swiper-button-prev">
        <svg class="icon">
          <use xlink:href="#icon-left"></use>
        </svg>
      </div>
      <div class="swiper-button-next">
        <svg class="icon">
          <use xlink:href="#icon-right"></use>
        </svg>
      </div>
      <!-- If we need pagination -->
      <!--<div class="swiper-pagination"></div>-->
    </div>
  </div>
</template>

<script>

  import Swiper from 'swiper'

  export default {
    name: "Swipe",
    components:{

    },
    mounted(){
      new Swiper('.swiper-container',{
        // pagination: {
        //   el: '.swiper-pagination',
        //   type: 'fraction',
        // },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        speed: 300,
      })
    }
  }
</script>

<style scoped lang="scss">
  @import url('../../node_modules/swiper/dist/css/swiper.css');
  .swiper-container {
    position: relative;
    width: 1200px;
    height: 400px;
    .swiper-wrapper {

      .swiper-slide {
        height: 400px;
        width: 100%;
        background: #ccc;
      }
    }
    .button-container {
      position: absolute;
      height: 40px;
      width: 80px;
      background: #fff;
      z-index: 1;
      right: 0;
      bottom: 0;
      .swiper-button-next,
      .swiper-button-prev {
        background-image: none;
        height: 40px;
        width: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        align-items: center;
        .icon {
          width: 16px;
          height: 16px;
          margin-top: 8px;
        }
      }
      .swiper-button-next {
        right: 0;
      }
      .swiper-button-prev {
        left: 0;
      }
    }
  }
</style>