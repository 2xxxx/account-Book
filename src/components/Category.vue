<template>

    <div class="category">
      <div class="head_nav">
        <p>记账</p>
        <span @click="manage()" v-show="!flag">管理</span>
        <span @click="reload()" v-show="flag">取消</span>
        <hr>
      </div>
      
      <ul class="items">
        <li :key='i' v-for="(item,i) in items" @click="skip(item)">
            <ul>
              <li><img :src="item.imgSrc" alt=""></li>
              <li class="sign">{{item.sort}}</li>
              <li><img class="cha" src="../assets/image/cha.png" alt="" v-show='flag' @click="del(i)"></li>
            </ul>
        </li>
        <!-- <router-link  tag="li" :to='{name:"List"}' v-for="(item,i) in items"  >
            
              <span @click="skip(item)">{{item.sort}}</span>
              <img :src="item.imgSrc" alt="">
              <img class="cha" src="../assets/image/cha.png" alt="" v-show='flag' @click="del(item)" :to='{name:"Category"}'>
        </router-link> -->
        
         <router-link tag="li" :to='{name:"Addevent"}'  >
           <span class="sign">添加</span>
            <img src="../assets/image/addition.png" alt="">
          </router-link>
        <!-- <li v-for="item in items" v-text="item">{{text}} </li> -->
      </ul>
       <foot-nav></foot-nav>
    </div>
</template>
<script>
import footNav from './footnav.vue'
import client from '../assets/clientStorage.js'

export default {
   components:{footNav},
  data(){
      return{
          // items:["食物","服饰","交通","日用品","美容","居家","社交","医疗","书籍","娱乐","通讯","添加"]
          items:[
            {sort:"食物",imgSrc:"http://localhost:8000/assets/image/food.png"},
            {sort:"服饰",imgSrc:"http://localhost:8000/assets/image/dress.png"},
            {sort:"交通",imgSrc:"http://localhost:8000/assets/image/cab.png"},
            {sort:"日用",imgSrc:"http://localhost:8000/assets/image/commodity.png"},
            {sort:"美容",imgSrc:"http://localhost:8000/assets/image/blingbling.png"},
            {sort:"居家",imgSrc:"http://localhost:8000/assets/image/fitting.png"},
            {sort:"社交",imgSrc:"http://localhost:8000/assets/image/social.png"},
            {sort:"医疗",imgSrc:"http://localhost:8000/assets/image/medical.png"},
            {sort:"书籍",imgSrc:"http://localhost:8000/assets/image/book.png"},
            {sort:"娱乐",imgSrc:"http://localhost:8000/assets/image/entertainment.png"},
            {sort:"通讯",imgSrc:"http://localhost:8000/assets/image/phone.png"}
       
          ],
          addItem:'',
          flag:false
      };
  },
  created:function(){
    // var timeOutEvent=0;
   
    // this.addItem=client.fetch('addItem');
    // client.save(this.items,"datas")
    // var item={sort:`${this.addItem}`,imgSrc:'http://localhost:8000/assets/image/star.png'};
    // this.items.push(item);
    // client.save(`${this.addItem}`,"addsign");
    // client.clear();
    this.items=client.fetch("datas");
    
  },
  methods:{
    skip(item){
    
      client.save(item,"sign");
      
      client.save(this.items,"datas");
      if(this.flag==true){
        // this.del();
      }
      else{
         this.$router.push({path:'/List'});
      }
      // alert(this.item);
      // // console.log(this.items);
      // console.log(this.key);
      // console.log(this.i);
      // console.log(this.items.item);
    },
    del(item){
      // alert(item);
      this.items.splice(item,1);
      console.log(this.items);

    },
    manage(){
      this.flag=true;
    },
    reload(){
      //  window.location.reload();
      this.flag=false;
    }

    // gtouchstart(){
    //   timeOutEvent=setTimeout("longPress()",500);
    //   return false;
    // },
    // gtouchend(){
    //   clearTimeout(timeOutEvent);
    //   if(timeOutEvent!=0){
    //     skip();
    //   }
    //   return false;
    // },
    // longPress(){
    //   timeOutEvent=0;
    //   this.flag=true;
    // }

  }

}
</script>
<style>
.category{position: relative;}
.category p{display: inline-block;}
.category .head_nav span{position:absolute;right: 8%;top:5px;color:#bcd8fc; }
hr{
  width: 90%;
  margin:5% auto -5% auto;
  background: #bcd8fc;

}
  .items{
    flex-wrap: wrap;
    color: gray;
  }
  .items>li{
    margin: 1rem;
    flex-grow: 1;
    position: relative;
  }
  .items>li img{
  width: 90px;
  height: 90px;
  position: absolute;
  left: 0;
  top: 0;
  border:1px solid black;
  border-radius:60px;
  padding: 10px;
  }
  .sign{
    transform: translateY(240%) translateX(10%);
     margin-top: 5px;
  }
   .items .cha{
     transform: translateY(-45%) translateX(100%);
     border:none;
     width:50px;
     height: 50px;
   }
</style>

