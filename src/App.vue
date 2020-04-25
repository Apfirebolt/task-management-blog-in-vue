<template>
  <div class="container-fluid" id="main_container">
    <header-component></header-component>
    <router-view></router-view>
    <footer-component></footer-component>
  </div>
</template>

<script>
import HeaderComponent from './components/common/header/Header.vue';
import FooterComponent from './components/common/footer/Footer.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent
  }
}
</script>

<style>
  #main_container {
    min-height: 100vh;
    height: auto;
    width: auto;
    background-color: #FFF;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
  }
</style>
