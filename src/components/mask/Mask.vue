<script setup lang="ts">
import useState from './useState'
import { useMainStore } from '@/store'

const mainStore = useMainStore()

const {
  name,
  getStyle,
  handleConfirm
} = useState()
</script>

<template>
  <div class="mask" v-if="!mainStore.user">
    <div class="mask-form">
      <input
        v-model="name"
        type="text"
        placeholder="请输入您的名称"
      />
      <button :style="getStyle" @click="handleConfirm">确认</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.mask {
  position: fixed;
  left: 0; top: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  &-form {
    display: flex;
    flex-direction: column;
    input {
      width: 300px;
      height: 50px;
      border: none;
      outline: none;
      font-size: 18px;
      padding: 10px 20px;
      box-sizing: border-box;
      &:focus {
        border: 5px solid #4e6ef2;
      }
    }
    button {
      margin-top: 15px;
      border: none;
      outline: none;
      padding: 15px 0;
      background-color: orange;
      color: #fff;
      font-size: 18px;
      transition: all .5s;
      cursor: pointer;
      position: relative;
      &:active {
        transform: scale(.9);
        box-shadow: 2px 2px 5px #666, -2px -2px 5px #666;
      }
    }
  }
}
</style>