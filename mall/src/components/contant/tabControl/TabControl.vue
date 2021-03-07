<template>
  <div class="tab-control">
      <div v-for="(item,index) in titles" 
            :key="index" 
            class="tab-control-item" 
            :class="{active:currentIndex==index}"
            @click="itemClick(index)"
            >
          <span>{{item}}</span>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        titles:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data(){
        return {
            currentIndex:0
        }
    },
    methods:{
        itemClick(index){
            this.currentIndex = index;
            this.$emit('tabClick',index)
        }
    }
}
</script>

<style>
.tab-control{
    display: flex;
    font-size: 15px;
    text-align: center;
    height: 44px;
    line-height: 44px;
    background-color: #FFF;
}
.tab-control-item{
    flex: 1;
}
.tab-control-item span{
        padding:5px;
}
.active{
    color: var(--color-high-text);
}
.active span{
    border-bottom: 3px solid var(--color-tint);

}

</style>