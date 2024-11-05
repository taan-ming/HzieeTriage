<template>
  <NavMenuHead></NavMenuHead>
  <div class="hor-nav-dia">
    <NavMenuLeft class="block1"></NavMenuLeft>
    <router-view class="block2"></router-view>
     <!-- <DialogBox class="block2"></DialogBox> -->
    <!-- <GuaHao class="block2"></GuaHao> -->
  </div>
</template>

<script>
import NavMenuHead from './components/element/NavMenuHead.vue'
import NavMenuLeft from './components/element/NavMenuLeft.vue'
// import DialogBox from './components/DialogBox.vue'
// import GuaHao from './components/element/GuaHao.vue'
export default {
  name: 'App',
  components: {
    NavMenuHead,
    NavMenuLeft,
    // DialogBox,
    // GuaHao
  }
}
</script>

<style>
html, body, #app{
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
.hor-nav-dia{
  display: flex;
  flex: 1;
  height: 90%;
}
.block1{
  width: 200px;
}
.block2{
  flex: 4;
}
NavMenuHead{
  position:fixed;
  top: 0;
  z-index: 1000;
}
</style>
