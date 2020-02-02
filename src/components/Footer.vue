<template>
  <footer>
    <div class="footer-container">
      <div class="title">
        链接 :
      </div>
      <div class="link">
        <ul>
          <li>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-github-fill"></use>
            </svg>
          </li>
          <li>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-google-circle-fill"></use>
            </svg>
          </li>
          <li>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-QQ-circle-fill"></use>
            </svg>
          </li>
          <li>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-dribbble-circle-fill"></use>
            </svg>
          </li>
          <li>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-wechat-fill"></use>
            </svg>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    name: "Footer"
  }
</script>

<style scoped lang="scss">
  @import "../assets/css/common.scss";
  footer {
    background: #f5f5f5;
    padding: 20px 0;
    .footer-container {
      margin: 0 auto;
      text-align: left;
      width: 1200px;
      display: flex;
      align-items: center;
      .title {
        color: #666;
      }
      .link {
        margin-left: 20px;
        ul {
          display: flex;
          li {
            cursor: pointer;
            margin-right: 16px;
            .icon {
              height: 24px;
              width: 24px;
              color: #ccc;
            }
            &:hover {
              .icon {
                color: #333;
              }
            }
          }
        }
      }
    }
  }
</style>