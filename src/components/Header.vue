<template>
  <header ref="header">
    <div class="head-container">
      <div class="logo-wrapper">
        <h2>SHOP</h2>
      </div>
      <div class="head-actions">
        <div class="action search">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-search"></use>
          </svg>
          <input type="text" class="search-input" placeholder="搜索商品">
        </div>
        <div class="action cart">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-shopping"></use>
          </svg>
          <span class="num">10</span>
        </div>
        <div class="action user">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-user"></use>
          </svg>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    name: "Header",
    mounted() {
      window.addEventListener('scroll', this.handleScroll)
    },
    methods: {
      handleScroll() {
        if(window.scrollY > 0) {
          this.$refs.header.classList.add('active')
        } else {
          this.$refs.header.classList.remove('active')
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  header {
    height: 64px;
    background: #fff;
    transition: all 0.3s;
    &.active {
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
      width: 100%;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 999;
    }
    .head-container {
      width: 1200px;
      height: 100%;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .logo-wrapper {

      }
      .head-actions {
        display: flex;
        align-items: center;
        .action {
          margin-left: 20px;
          .icon {
            height: 20px;
            width: 20px;
          }
        }
        .user, .cart {
          height: 32px;
          width: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }
        .cart {
          position: relative;
          .num {
            height: 16px;
            width: 16px;
            border-radius: 10px;
            position: absolute;
            top: 0px;
            right: 0px;
            background: red;
            font-size: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #fff;
          }
        }
        .search {
          position: relative;
          .icon {
            position: absolute;
            left: 10px;
            top: 5px;
          }
          .search-input {
            height: 32px;
            width: 240px;
            left: 0;
            top: 0;
            outline: none;
            padding-left: 40px;
            padding-right: 10px;
            border-radius: 16px;
            border: none;
            &::placeholder {
              color: #ccc;
            }
          }
        }
      }
    }
  }
</style>