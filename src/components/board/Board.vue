<script setup lang="ts">
import Piece from '../piece/Piece.vue';
import useState from './useState';

const {
  data,
  active,
  handleChoose
} = useState();
</script>

<template>
  <div class="board">
    <div
      class="board-row"
      v-for="(list, idx1) in data"
      :key="idx1"
    >
      <Piece
        v-for="(item, idx2) in list"
        :key="idx2"
        :item="item"
        :idx1="idx1"
        :idx2="idx2"
        :active="active"
        @trigger="(idx1, idx2) => handleChoose(idx1, idx2)"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.board {
  width: 280px;
  height: 280px;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    left: 34px;
    top: 34px;
    width: calc(100% - 70px);
    height: calc(100% - 70px);
    border: 1px solid #666;
    box-sizing: border-box;
  }
  &-row {
    width: 100%;
    height: 25%;
    display: flex;
    position: relative;
    &:last-child {
      .board-row--col::after {
        display: none;
      }
    }
    &--col {
      width: 100%;
      height: 100%;
      position: relative;
      &::before {
        content: '';
        position: absolute;
        left: 10px; top: 10px; right: 10px; bottom: 10px;
        border-radius: 5px;
        z-index: 10;
        transition: all .3s;
      }
      &.active::before {
        transform: scale(1.1);
        border: 1px solid tomato;
      }
      &.white::before  {
        background-color: #ccc;
      }
      &.black::before {
        background-color: #333;
      }
      &::after {
        content: '';
        position: absolute;
        left: 35px;
        top: 35px;
        width: 100%;
        height: 100%;
        border: 1px solid #666;
        box-sizing: border-box;
      }
      &:nth-child(4)::after {
        display: none;
      }
    }
  }
}
</style>
