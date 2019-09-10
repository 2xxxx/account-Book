<template>
    <div class="footnav-containner">
        <ul class="bottom-nav">
            <router-link tag="li" :to='{name:"Detail",params:{ty:ty}}'><i class="icon iconfont iconjizhang"></i></router-link>
            <router-link tag="li" :to='{name:"Category"}'><i class="icon iconfont icontianjia"></i></router-link>
            <router-link tag="li" :to='{name:"Home"}'><i class="iconfont iconwode"></i></router-link>
        </ul>
     </div>
</template>
<script>


export default {
    data(){
        return{
            ty:''
        }
    },
  created(){
    this.ty =new Date().toLocaleDateString();
 
  }
}
</script>


<style>
    /* *{padding: 0;margin: 0; font-size:0.5rem; } */
    /* body{
        padding-bottom: 0.5rem;
    } */
    .bottom-nav{
        display: flex;
        position: fixed;
        bottom: 0;
        justify-content: space-around;
        align-items: center;
        z-index: 100;
        width: 100%;
        height: 10%;
        background-color: #f6feff;
    }
    .bottom-nav>li{
        
    }
    .bottom-nav>li:active{
        background: #000;
    }
    /* .bottom-nav>li>i{
        width:75px;
        height:75px;
        position: relative;
        margin-top:-2px;
    }
    .bottom-nav>li:nth-child(3)>i{
        width: 65px;
        height: 65px;
    } */
    .bottom-nav>li>span{
        color: #b8b2b3;
        position: absolute;
        bottom: 0px;
        font-size:0.4rem;
    }
  
   
  
</style>
