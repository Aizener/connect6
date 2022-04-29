<script setup lang="ts">
import { PropType } from '@vue/runtime-core';
import useState from './useState';
const props = defineProps({
  idx1: {
    type: Number,
    required: true
  },
  idx2: {
    type: Number,
    required: true
  },
  item: {
    type: Number,
    required: true
  },
  active: {
    type: Object as PropType<Array<Number>>,
    required: true
  }
})
const { item, idx1, idx2 } = props;

const {
  getClassName,
} = useState(props.active);
</script>

<template>
  <div
    class="board-row--col"
    :class="getClassName(item, idx1, idx2)"
    @click="$emit('trigger', idx1, idx2)"
  ></div>
</template>

<style lang="scss">

</style>
