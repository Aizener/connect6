import { ref } from 'vue';

export default () => {
  const kill1 = [
    '2,2,1,0',
    '0,2,2,1',
    '1,2,2,0',
    '2,2,2,1',
    '1,2,2,2',
    '1,2,2,1'
  ];
  const kill2 = [
    '1,1,2,0',
    '0,1,1,2',
    '2,1,1,0',
    '1,1,1,2',
    '2,1,1,1',
    '2,1,1,2'
  ];
  const data = ref<Array<Array<number>>>([
    [1, 1, 1, 1],
    [1, 0, 0, 1],
    [2, 0, 0, 2],
    [2, 2, 2, 2]
  ]);
  const active = ref<Array<number>>([]), type = ref(2);
  const kill = (row: Array<number>, col: Array<number>, idx1: number, idx2: number, kills: Array<string>, _item: number) => {
    for (const kill of kills) {
      if (kill === row.toString()) {
        data.value[idx1] = row.map(item => item === _item ? 0 : item);
      }
      if (kill === col.toString()) {
        data.value = data.value.map(items => {
          const newItem = items.map((item, idx) => {
            if (idx === idx2) {
              return item === _item ? 0 : item;
            }
            return item;
          });
          return newItem;
        })
      }
    }
  }
  const calcResult = (idx1: number, idx2: number) => {
    const row = data.value[idx1];
    const col = data.value.map(row => row[idx2]);
    if (type.value === 1) {
      kill(row, col, idx1, idx2, kill2, 2);
    } else if (type.value === 2) {
      kill(row, col, idx1, idx2, kill1, 1);
    }
  }
  const handleChoose = (idx1: number, idx2: number) => {
    if (active.value.length) {
      if (data.value[idx1][idx2]) {
        if (data.value[idx1][idx2] !== type.value) {
          return;
        }
        active.value = [idx1, idx2];
      } else {
        const [oldIdx1, oldIdx2] = active.value;
        if (
          (oldIdx1 === idx1 && Math.abs(oldIdx2 - idx2) === 1) ||
          (oldIdx2 === idx2 && Math.abs(oldIdx1 - idx1) === 1)
        ) {
          data.value[idx1][idx2] = data.value[oldIdx1][oldIdx2];
          data.value[oldIdx1][oldIdx2] = 0;
          calcResult(idx1, idx2);
          active.value = [];
          type.value = type.value === 1 ? 2 : 1;
        }
      }
    } else {
      if (data.value[idx1][idx2] !== type.value) {
        return;
      }
      active.value = [idx1, idx2];
    }
  }
  return {
    data,
    active,
    handleChoose
  }
}