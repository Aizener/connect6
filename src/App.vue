<script setup lang="ts">
import Board from './components/board/Board.vue'
import Mask from './components/mask/Mask.vue'
</script>

<template>
  <Board></Board>
  <Mask></Mask>
</template>

<style lang="scss">
* {
  margin: 0;
}
#app {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
