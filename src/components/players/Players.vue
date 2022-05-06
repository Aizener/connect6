<script setup lang="ts">
import useState from './useState'

const {
  isJoin,
  players,
  handleConfirm
} = useState()
</script>

<template>
  <div class="players">
    <h2>
      {{ players[0] }}
      <span v-show="!players[0]" style="color: gray;">虚位以待</span>
    </h2>
    <button @click="handleConfirm" :style="{
      backgroundColor: isJoin ? 'tomato' : 'orange',
    }">
      {{ isJoin ? '退出观战' : '我要参战' }}
    </button>
    <h2>
      {{ players[1] }}
      <span v-show="!players[1]" style="color: gray;">虚位以待</span>
    </h2>
  </div>
</template>

<style lang="scss">
.players {
  display: flex;
  align-items: center;
  padding: 0 10px;
  margin: 30px 0;
  h2 {
    margin: 0;
    font-size: 18px;
    text-align: center;
  }
  button {
    width: 130px;
    margin: 0 30px;
    outline: none;
    border: none;
    padding: 15px;
    background-color: orange;
    color: #fff;
    box-shadow: 3px 3px 3px #333;
    &:active {
      box-shadow: 3px 3px 3px inset #3333;
    }
  }
}
</style>
