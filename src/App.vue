<script setup lang="ts">
import Board from './components/board/Board.vue'
import { io } from 'socket.io-client'

const socket = io('ws://localhost:3002')
console.log('socket', socket)
</script>

<template>
  <Board></Board>
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
