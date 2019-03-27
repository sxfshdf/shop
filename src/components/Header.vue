<template>
  <header>
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
    name: "Header"
  }
</script>

<style scoped lang="scss">
  header {
    height: 64px;
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
          margin-left: 24px;
          .icon {
            height: 20px;
            width: 20px;
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