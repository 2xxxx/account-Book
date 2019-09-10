<template>
  <div>
      <head-nav></head-nav>
      <transition name='slide-left'> 
          <keep-alive>
              <router-view class="router-view"></router-view>
          </keep-alive>
      </transition>
    <foot-nav></foot-nav>
   </div>
   
</template>




<script>
    import footNav from './footnav.vue'
    import headNav from './headnav.vue'
    import '../assets/js/jquery-1.8.3.min.js'
    // import '../assets/js/calendar.js'
    import client from '../assets/clientStorage.js'

    
   
    export default {
       components:{footNav,headNav},
        created(){
            client.save(true,"isis")
        }
       
    }
</script>

<style>
    .router-view{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        transition: all .5s cubic-bezier(.55,0,.1,1);
    }
</style>


