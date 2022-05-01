export default () => {
  const getClassName = (active: Array<number>, item: number, idx1: number, idx2: number) => {
    const classNames = [];
    classNames.push(['white', 'black'][item - 1])
    if (
      active[0] === idx1 &&
      active[1] === idx2 &&
      item !== 0
    ) {
      classNames.push('active');
    }
    return classNames;
  }

  return {
    getClassName
  }
}