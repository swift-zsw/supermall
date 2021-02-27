<template>
  <div id="nav">
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
