import { ref } from 'vue';

export default () => {
  const data = ref<Array<Array<number>>>([
    [1, 1, 1, 1],
    [1, 0, 0, 1],
    [2, 0, 0, 2],
    [2, 2, 2, 2]
  ]);
  const active = ref<Array<number>>([]);
  const handleChoose = (idx1: number, idx2: number) => {
    if (active.value.length) {
      if (data.value[idx1][idx2]) {
        active.value = [idx1, idx2];
      } else {
        const [oldIdx1, oldIdx2] = active.value;
        if (
          (oldIdx1 === idx1 && Math.abs(oldIdx2 - idx2) === 1) ||
          (oldIdx2 === idx2 && Math.abs(oldIdx1 - idx1) === 1)
        ) {
          data.value[idx1][idx2] = data.value[oldIdx1][oldIdx2];
          data.value[oldIdx1][oldIdx2] = 0;
          active.value = [];
        }
      }
    } else {
      active.value = [idx1, idx2];
    }
  }
  return {
    data,
    active,
    handleChoose
  }
}