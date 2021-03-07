<template>
  <div class="GoodsList">
      <goods-list-item v-for="(item,index) in goods" :key="index" :goodsItem="item">

      </goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'
export default {
    props:{
        goods:{
            type:Array,
            default(){
                return []
            }
        }
    },
    components:{
        GoodsListItem
    }
}
</script>

<style>
.GoodsList{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    padding: 2px;
}
</style>