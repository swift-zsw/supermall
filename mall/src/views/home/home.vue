<template>
  <div>
      <nav-bar class="home-nav"><div slot="center">购物车</div></nav-bar>
      <home-swiper :banner='banner'></home-swiper>
      <recommend-view :recommend="recommend"></recommend-view>
  </div>
</template>

<script>
// import NavBar from 'components/common/navbar/NabBar'
import NavBar from '@/components/common/navbar/NavBar.vue'
import {getHomeMultiData} from '@/network/home'
import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
export default {
  data(){
    return{
      banner:[],
      recommend:[]
    }
  },
  components:{
    NavBar,
    HomeSwiper,
    RecommendView

  },
  created(){
    getHomeMultiData().then(res=>{
      this.banner = res.data.banner.list
      this.recommend = res.data.recommend.list
      console.log(res.data)
    })
  }
}
</script>

<style>
.home-nav{

  background-color: var(--color-tint);
}
</style>