<template>
  <div id="app">
    <router-view></router-view>
    <tab-bar>
      <tab-bar-item path="/home" activeColor="green">
        <img slot="item-icon" src="./assets/img/tabbar/1.jpg" alt="" srcset="" />
        <img slot="item-icon-active" src="./assets/img/tabbar/1-active.jpg" alt="" srcset="" />
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="green">
        <img slot="item-icon" src="./assets/img/tabbar/1.jpg" alt="" srcset="" />
        <img slot="item-icon-active" src="./assets/img/tabbar/1-active.jpg" alt="" srcset="" />
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart" activeColor="green">
        <img slot="item-icon" src="./assets/img/tabbar/1.jpg" alt="" srcset="" />
        <img slot="item-icon-active" src="./assets/img/tabbar/1-active.jpg" alt="" srcset="" />
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="yellow">
        <img slot="item-icon" src="./assets/img/tabbar/1.jpg" alt="" srcset="" />
        <img slot="item-icon-active" src="./assets/img/tabbar/1-active.jpg" alt="" srcset="" />
        <div slot="item-text">我的</div>
      </tab-bar-item>

    </tab-bar>
  </div>
</template>
<script>
import TabBar from "./components/tabbar/TabBar";
import TabBarItem from "./components/tabbar/TabBarItem.vue";
export default {
  data() {
    return {};
  },
  methods: {},
  components: {
    TabBar,
    TabBarItem,
  }
};
new Promise((res,rej)=>{
  setTimeout(()=>{
    console.log('aaaa');
    res('aaaa'+'1111')
  },1000)
}).then(res=>{
    console.log('bbbb',res)
    return 'bbbb'+res
}).then((value)=>{
  console.log(value+"@@@@")
})

</script>

<style lang="scss">
@import "./assets/css/base.css";
img{
    width: 50px;
    vertical-align: middle;
  }
  body{
    font-size: 14px;
  }

</style>
