<script setup lang="ts">
import { defineProps, PropType } from 'vue';
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
    type: Object as PropType<Array<number>>,
    required: true
  }
})

const { idx1, idx2 } = props;

const {
  getClassName,
} = useState();
</script>

<template>
  <div
    class="board-row--col"
    :class="getClassName(props.active, props.item, idx1, idx2)"
    @click="$emit('trigger', idx1, idx2)"
  ></div>
</template>

<style lang="scss">

</style>
