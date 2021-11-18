export const initIndexes = (cars, one = false) => {
  if (cars.length < 1) {
    return [];
  }
  if (one) {
    return [0];
  }
  if (cars.length >= 3) {
    return [0, 1, 2];
  }
  const indexes = [];
  cars.forEach((_, index) => {
    indexes.push(index);
  });
  return indexes;
};

export const shiftRow = (indexes, cars) => {
  const newIndexes = [];
  indexes.forEach((index) => {
    if (cars[index + 1] !== undefined) {
      newIndexes.push(index + 1);
    } else {
      newIndexes.push(0);
    }
  });
  return newIndexes;
};

export const unshiftRow = (indexes, cars) => {
  const newIndexes = [];
  indexes.forEach((index) => {
    if (cars[index - 1] !== undefined) {
      newIndexes.push(index - 1);
    } else {
      newIndexes.push(cars.length - 1);
    }
  });
  return newIndexes;
};
