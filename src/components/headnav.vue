<template>
    <div class="headnav-containner">
         <i class="cubeic-back" @click="back()"></i>
         <title>{{title}}</title>
     </div>
</template>
<script>


export default {
    props: {
      title: {
        type: String,
        default: 'test'
      }
    },
    data(){
        return{
        }
    },
  
}
</script>


<style>
  
.head-nav{
    position: fixed;
    top: 0;
    justify-content: space-around;
    z-index: 100;
    width: 100%;
    height: 10%;
    background-color: #f6feff;
}
  
</style>
