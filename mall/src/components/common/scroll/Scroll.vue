<template>
  <div class="wrapper" ref="wrapper">
      <div class="content" >
          <slot></slot>
      </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    name: "Scroll",
    props:{
        probeType:{
            type:Number,
            default:0
        },
        pullUpLoad:{
            type:Boolean,
            default:false
        }
    },
    //ref如果是绑定在组件中的，那么通过this.$refs.refname获取到的是一个组件对象
    // ref如果是绑定在普通元素中，那么通过this.$refs.refname获取到的是一个元素对象
    data(){
        return {
            bscroll:null
        }
    },
    mounted(){
        console.log(this.$refs.wrapper)
        this.bscroll = new BScroll(this.$refs.wrapper,{
            probeType:this.probeType,
            pullUpLoad:this.pullUpLoad,
            click:true
        })
        if( this.probeType === 2 ||this.probeType === 3 ){
            this.bscroll.on('scroll',(position)=>{
            // console.log(position)
            this.$emit('scroll',position)
        })
        }

        // this.bscroll.on('pullingUp',()=>{
        //     console.log('上拉加载更多')
        // })
        if(this.pullUpLoad){
            this.bscroll.on('pullingUp',()=>{
            // console.log('上拉加载更多')
            this.$emit('pullingUpLoad')
        })
        }

    },
    methods:{
        backTop(x,y,time=300){
            this.bscroll && this.bscroll.scrollTo && this.bscroll.scrollTo(x,y,500)
        },
        finishPullUp(){
            this.bscroll && this.bscroll.finishPullUp && this.bscroll.finishPullUp()
        },
        refresh(){
            this.bscroll && this.bscroll.refresh && this.bscroll.refresh();
        },
        getScrollY(){
            return this.bscroll?this.bscroll.y:0;
        }
    }
}
</script>

<style scoped>

</style>>

</style>