<template>
  <div class="options">
    宽度：<input type="text"
              @keydown.up="containerStyle.width=(parseInt(containerStyle.width)+10)+'px'"
              @keydown.down="containerStyle.width=(parseInt(containerStyle.width)-10)+'px'"
              v-model="containerStyle.width">
  </div>
  <div class="container" :style="containerStyle">
    <header>
      <a href="#">
        <img src="@/assets/images/banner.jpg" alt="">
      </a>
    </header>
    <main>
      <section class="item">
        <div class="left"></div>
        <div class="right">
          <a href="">海外酒店</a>
          <a href="">团购</a>
          <a href="">特惠酒店</a>
          <a href="">客栈公寓</a>
        </div>
      </section>
      <section class="item">
        <div class="left"></div>
        <div class="right">
          <a href="">海外酒店</a>
          <a href="">团购</a>
          <a href="">特惠酒店</a>
          <a href="">客栈公寓</a>
        </div>
      </section>
      <section class="item">
        <div class="left"></div>
        <div class="right">
          <a href="">海外酒店</a>
          <a href="">团购</a>
          <a href="">特惠酒店</a>
          <a href="">客栈公寓</a>
        </div>
      </section>
      <section class="item">
        <div class="left"></div>
        <div class="right">
          <a href="">海外酒店</a>
          <a href="">团购</a>
          <a href="">特惠酒店</a>
          <a href="">客栈公寓</a>
        </div>
      </section>
      <section class="extra">
        <a href="">
          <img src="@/assets/images/extra1.jpg" alt="">
        </a>
        <a href="">
          <img src="@/assets/images/extra2.jpg" alt="">
        </a>
      </section>
    </main>
    <footer>
      <nav>
        <a href="">电话预订</a>
        <a href="">下载客户端 </a>
        <a href="">关于我们</a>
      </nav>
      <p class="link">
        <a href="">网站地图</a>
        <a href="">ENGLISH</a>
        <a href="">电脑版</a>
      </p>
      <p>
        &copy;2021 | 携程旅游
      </p>
    </footer>
  </div>
</template>

<script setup>
  import {reactive} from "vue";

  let containerStyle = reactive({
    width:'500px'
  })
</script>

<style lang="scss" scoped>
  .options{
    text-align: center;
    margin-bottom: 10px;
  }
  .container{
    margin: 0 auto;
    border: solid 3px #ccc;
  }
  header{
    display: flex;
    a{
      flex: 1;
      img{
        width: 100%;
      }
    }
  }
  main{
    box-sizing: border-box;
    padding: 0 10px;
    display: flex;
    flex-direction: column;
    section.item:nth-of-type(1){
      background-color: #42b983;
    }
    section.item:nth-of-type(2){
      background-color: #80b4ff;
    }
    section.item:nth-of-type(3){
      background-color: #ff586d;
    }
    section.item:nth-of-type(4){
      background-color: #a934ff;
    }

    section.item{
      display: flex;
      border-radius: 5px;
      margin-top: 10px;
      .left{
        flex: 1;
      }
      .right{
        flex: 2;
        display: flex;
        flex-wrap: wrap;
        a{
          width: 50%;
          color:white;
          border-left: solid 1px white;
          border-bottom: solid 1px white;
          box-sizing: border-box;
          text-align: center;
          height: 50px;
          line-height: 50px;
          text-decoration-line: none;
        }
        a:last-of-type(-n+2){
          border-bottom: none;
        }
      }
    }
    section.extra{
      display: flex;
      margin-top: 10px;
      a{
        flex:1;
        text-align: center;
        box-sizing: border-box;
        padding: 0 10px;
        img{
          width: 100%;
          border-radius: 5px;
        }
      }
    }
  }

  footer{
    margin-top: 10px;
    font-size: 14px;
    nav{
      display: flex;
      justify-content:space-around ;
      border-top: solid 1px #ccc;
      border-bottom: solid 1px #ccc;
      align-items: center;
      height: 36px;
      a{
        flex: 1;
        color: #888;
        text-decoration: none;
        text-align: center;
      }
    }
    p{
      text-align: center;
      line-height: 25px;
    }
    p.link{

    }
  }
</style>