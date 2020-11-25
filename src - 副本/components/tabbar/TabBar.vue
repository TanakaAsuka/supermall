<template>
  <div id="tab-bar">
      <slot></slot>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  #tab-bar {
  display: flex;
  background: rgb(87, 38, 62);
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0 -5px 10px rgb(231, 231, 231);
  
}
</style>