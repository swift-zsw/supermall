<template>
  <div class="tab-item" @click="itemClick">
    <div v-if='!isActivate'>
      <slot name='tab-icon'></slot>
    </div>
    <div v-else>
      <slot name='tab-icon-activate'></slot>
    </div>
    <!-- <div :class="{active:!isActivate}">
      <slot name='tab-text'></slot>  
    </div> -->
    <div :style="activateStyle">
      <slot name='tab-text'></slot>  
    </div>

  </div> 
</template>

<script>
export default {
  props:{
    path:String,
    active_color:{
      type:String,
      default:'red'
    }
  },
  data(){
    return{
      // isActivate:true
    }
  },
  methods:{
    itemClick(){
      this.$router.replace(this.path).catch((err)=>err)
    }
  },
  computed:{
    isActivate(){
      return this.$route.path.indexOf(this.path)!==-1
    },
    activateStyle(){
      return this.isActivate?{color:this.active_color}:{}
    }
  }
}
</script>

<style>

  .tab-item {
    flex:1;
    text-align: center;

    height: 49px;
    font-size: 14px;
  }

</style>