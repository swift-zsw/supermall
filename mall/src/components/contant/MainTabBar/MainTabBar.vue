<template>
  <div>
    <tab-bar>
      <tab-bar-item path='/home'>
        <img src="@/assets/img/tabbar/home.svg" alt="" slot='tab-icon'>
        <img src="@/assets/img/tabbar/home_active.svg" alt="" slot='tab-icon-activate'>
        <div class="tab-item" slot='tab-text'>首页</div>
      </tab-bar-item>
      <tab-bar-item path='/category'>
        <img src="@/assets/img/tabbar/category.svg" alt="" slot='tab-icon'>
        <img src="@/assets/img/tabbar/category_active.svg" alt="" slot='tab-icon-activate'>
        <div class="tab-item" slot='tab-text'>分类</div>
      </tab-bar-item>
      <tab-bar-item path='/cart'>
        <img src="@/assets/img/tabbar/shopcart.svg" alt="" slot='tab-icon'>
        <img src="@/assets/img/tabbar/shopcart_active.svg" alt="" slot='tab-icon-activate'>
        <div class="tab-item" slot='tab-text'>购物车</div>
      </tab-bar-item>
      <tab-bar-item path='/profile'>
        <img src="@/assets/img/tabbar/profile.svg" alt="" slot='tab-icon'>
        <img src="@/assets/img/tabbar/profile_active.svg" alt="" slot='tab-icon-activate'>
        <div class="tab-item" slot='tab-text'>我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
  
</template>

<script>
import TabBar from '../../common/tabbar/TabBar'
import TabBarItem from '../../common/tabbar/TabBarItem'
export default {
    components:{
        TabBar,
        TabBarItem
    }
}
</script>

<style>
  .tab-item img {
    margin-top: 3px;
    height: 24px;
    width: 24px;
    vertical-align: middle; 
    margin-bottom: 2px;
  }
</style>