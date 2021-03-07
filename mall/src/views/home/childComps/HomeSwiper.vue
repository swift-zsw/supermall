<template>
  <div>
    <swiper>
        <swiper-item v-for="(item,index) in banner" :key="index">
          <a :href="item.link"><img :src="item.image" alt="" @load="swiperLoadImg"></a>
        </swiper-item>
      </swiper>
  </div>
</template>

<script>
import {Swiper,SwiperItem} from '@/components/common/swiper'
export default {
    props:{
        banner:{
            type:Array,
            default(){
                return [] 
            }
        }
    },
    components:{
        Swiper,
        SwiperItem
    },
    methods:{
      swiperLoadImg(){
        this.$emit("swiperLoadImg")
      }
    }
}
</script>

<style>

</style>