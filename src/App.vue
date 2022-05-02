<script setup lang="ts">
import Board from './components/board/Board.vue'
import Mask from './components/mask/Mask.vue'
import { io } from 'socket.io-client'

const socket = io('ws://localhost:3002')
socket.on('createPlayer', data => {
  console.log('data', data)
})
console.log('socket', socket)
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
