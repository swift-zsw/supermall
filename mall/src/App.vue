<template>
  <div id="app">
    <router-view/>
    <main-tab-bar></main-tab-bar>
  </div>

</template>
<script>
import MainTabBar from './components/contant/MainTabBar/MainTabBar'

export default {
  components:{
    MainTabBar
  }
}
</script>

<style lang="scss">
  @import "assets/css/base.css";
</style>
