<template>
  <div id="app">
    <router-view></router-view>
    <tab-bar>
      <tab-bar-item path="/home" activeColor="green">
        <img
          slot="item-icon"
          src="./assets/img/tabbar/1.jpg"
          alt=""
          srcset=""
        />
        <img
          slot="item-icon-active"
          src="./assets/img/tabbar/1-active.jpg"
          alt=""
          srcset=""
        />
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="green">
        <img
          slot="item-icon"
          src="./assets/img/tabbar/1.jpg"
          alt=""
          srcset=""
        />
        <img
          slot="item-icon-active"
          src="./assets/img/tabbar/1-active.jpg"
          alt=""
          srcset=""
        />
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart" activeColor="green">
        <img
          slot="item-icon"
          src="./assets/img/tabbar/1.jpg"
          alt=""
          srcset=""
        />
        <img
          slot="item-icon-active"
          src="./assets/img/tabbar/1-active.jpg"
          alt=""
          srcset=""
        />
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="yellow">
        <img
          slot="item-icon"
          src="./assets/img/tabbar/1.jpg"
          alt=""
          srcset=""
        />
        <img
          slot="item-icon-active"
          src="./assets/img/tabbar/1-active.jpg"
          alt=""
          srcset=""
        />
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
    <h2>{{$store.state.a.sexy}}</h2>
    {{ $store.state.info }}
    <button @click="modify">modify</button>
    <button @click="subtraction">-</button>
    <HelloWorld />
    <h2>{{ $store.getters.powerCounters }}</h2>
<h2>{{$store.getters.moreAge(25)}}</h2>
    <div class="picWrap" @click="isShow = !isShow">
      <img v-if="!isShow" class="pic" src="./assets/img/tabbar/1.jpg" alt="" srcset="" />
      <img v-else class="pic" src="./assets/img/tabbar/1-active.jpg" alt="" srcset="" />
    </div>
  </div>
</template>
<script>
import TabBar from "./components/tabbar/TabBar";
import TabBarItem from "./components/tabbar/TabBarItem.vue";
import HelloWorld from "./components/HelloWorld.vue";
export default {
  data() {
    return {
      counter: 0,
      isShow: false,
    };
  },
  methods: {
    addition() {
      this.$store.commit("increament");
    },
    subtraction() {
      this.$store.commit("decreament");
    },
    modify(){
      this.$store.commit("modifySexy")
      
    }
  },
  components: {
    TabBar,
    TabBarItem,
    HelloWorld,
  },
};
</script>

<style lang="scss">
@import "assets/css/base.css";
.picWrap{
  margin-bottom: 200px;
}
img.pic {
  width: 100%;
}
img{
  width: 50px;
  vertical-align: middle;
}
body {
  font-size: 14px;
}
</style>
