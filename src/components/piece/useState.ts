export default (active: Array<Number>) => {
  const getClassName = (item: number, idx: number, idx2: number) => {
    console.log(111, active)
    const classNames = [];
    classNames.push(['white', 'black'][item - 1])
    if (
      active[0] === idx &&
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