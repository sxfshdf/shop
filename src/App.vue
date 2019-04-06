<template>
  <div id="app">
    <Header id="header"></Header>
    <main id="main">
      <router-view></router-view>
    </main>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import './assets/js/svg.js';

export default {
  name: 'app',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
  @import "./assets/css/common.scss";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
