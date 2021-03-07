<template>
  <div id="home">
      <nav-bar class="home-nav"><div slot="center">购物车</div></nav-bar>
      <tab-control 
          :titles='["流行","新款","精选"]'  
          @tabClick='tabClick'
          ref="tabControl2"
          class="tabControl"
          v-show="tabControlShow"
          ></tab-control>
      <scroll 
        class="content" 
        ref="scroll" 
        :probe-type="3" 
        @scroll = "showBackTop"
        :pull-up-load="true"
        @pullingUpLoad = "loadMore"        
        >
        <home-swiper :banner='banner' @swiperLoadImg="swiperLoadImg"></home-swiper>
        <recommend-view :recommend="recommend"></recommend-view>
        <feature-view/>
        <tab-control 
          :titles='["流行","新款","精选"]'  
          @tabClick='tabClick'
          ref="tabControl1"></tab-control>
        <goods-list :goods="showGoods"></goods-list>
      </scroll>
      <!-- 修饰.native修饰什么时候使用？
      在需要监听一个组件的原生事件时，必须给对应的事件加上.native修饰符，才能进行监听，vue3版本可以监听 -->
      <back-top @click.native = "backTop" v-show="isShow"></back-top>


  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar.vue'
import TabControl from '@/components/contant/tabControl/TabControl'
import GoodsList from '@/components/contant/goods/GoodsList'
import BackTop from '@/components/contant/backTop/BackTop'
import Scroll from '@/components/common/scroll/Scroll'

import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
import FeatureView from './childComps/FeatureView'

import {getHomeMultiData,getHomeGoods} from '@/network/home'
import {debounce} from '@/common/utils'

export default {
  data(){
    return{
      banner:[],
      recommend:[],
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]}
      },
      currentType:'pop',
      isShow:false,
      tabControlTop:0,
      tabControlShow:false,
      scrollY:0
    }
  },
  components:{
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop


  },
  created(){
      this.getHomeMultiData();
      this.getHomeGoods('pop');
      this.getHomeGoods('new');
      this.getHomeGoods('sell');
      

  },
  mounted(){
    //1、图片加载完成的事件监听
    const refresh = debounce(this.$refs.scroll && this.$refs.scroll.refresh,500); 
    //3、监听item中的图片加载完成
      this.$bus.$on('imgLoadFinish',()=>{
      // console.log('+++')
         refresh()
        // this.$refs.scroll.refresh();
      })
      //2、获取tabControl的offsetTop
      // 所有的组件都有一个属性$el;用于获取组件中的元素
  },
  methods:{
    /**
     * 网络请求的方法
     */
    getHomeMultiData(){
        getHomeMultiData().then(res=>{
        this.banner = res.data.banner.list
        this.recommend = res.data.recommend.list
        console.log(res.data,1)
      })
    },
    getHomeGoods(type){
      const page = this.goods[type].page+1
      getHomeGoods(type,page).then(res=>{
        // console.log(res,2)
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page +=1 
      })
    },
    /**
     * 点击事件的方法
     */
    tabClick(index){
      switch(index){
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break

        case 2:
          this.currentType = 'sell'
          break
      }
      this.$refs.tabControl1.currentIndex = index
      this.$refs.tabControl2.currentIndex = index
    },
    backTop(){
      console.log("回到顶部")
      this.$refs.scroll.backTop(0,0,500)
    },
    showBackTop(position){
      // console.log(position)
      //1、判断BackTop是否显示
      this.isShow = (-position.y > 1000)
      // 2、决定TabControl是否吸顶
      this.tabControlShow = (-position.y > this.tabControlTop)
    },
    loadMore(){
      // console.log("上拉加载更多")
      this.getHomeGoods(this.currentType)
      this.$refs.scroll.finishPullUp();
      this.$refs.scroll.refresh();  
    },
    swiperLoadImg(){
      // console.log(this.$refs.tabControl1.$el.offsetTop)
      this.tabControlTop = this.$refs.tabControl1.$el.offsetTop

    }
  },
  computed:{
    showGoods(){
      return this.goods[this.currentType].list
    }
  },
  activated(){
    console.log('activate')
    // console.log(this.$refs.scroll.getScrollY())
    this.$refs.scroll.backTop(0,-this.scroll,0)
    this.$refs.scroll.refresh()
  },
  deactivated(){
    console.log(-this.scrollY)
    console.log('deactivated')
    this.scrollY = this.$refs.scroll.getScrollY()
  }
}
</script>

<style scoped>

#home{
  /* padding-top:44px; */
  /* 100视口 vh->viewport height */
  height: 100vh;
  display: relative;
}
.home-nav{

  background-color: var(--color-tint);
  /* 在使用浏览器原生滚动时，为了让导航不跟随一起滚动 */
  /* position:fixed;
  top:0;
  left:0;
  right:0;
  z-index: 9; */

}
.tabControl{
  position:relative;
  z-index: 9;
}
/* .tabControl{
  position: sticky;
  top:44px;
  z-index: 9;
} */
  .content {
    overflow: hidden;

    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
    background-color: #fff;
  }
    /* .content {
      height: calc(100% - 93px);
      margin-top: 44px; 
      overflow:hidden;
    } */
</style>