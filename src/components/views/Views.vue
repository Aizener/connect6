<script setup lang="ts">
import { useMainStore } from '@/store'
const mainStore = useMainStore()
</script>

<template>
  <h2>观众列表</h2>
  <ul class="views">
    <li v-for="(item, idx) in mainStore.views" :key="idx">
      <span>{{ idx }}{{ item }}</span>
    </li>
  </ul>
</template>

<style lang="scss">
h2 {
  margin-top: 30px;
}
ul {
  width: 100%;
  margin: 0;
  display: flex;
  overflow-x: auto;
  box-sizing: border-box;
  padding: 0 30px;
  li {
    flex-shrink: 0;
    list-style: none;
    width: 15px;
    text-align: center;
    margin: 10px 5px;
    word-break: break-all;
  }
}
</style>
