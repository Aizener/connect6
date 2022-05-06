<script setup lang="ts">
import Board from './components/board/Board.vue'
import Mask from './components/mask/Mask.vue'
import Views from './components/views/Views.vue'
import Players from './components/players/Players.vue'
</script>

<template>
  <Players></Players>
  <Board></Board>
  <Views></Views>
  <Mask></Mask>
</template>

<style lang="scss">
* {
  margin: 0;
}
#app {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: rgb(249, 249, 249);
}
</style>
