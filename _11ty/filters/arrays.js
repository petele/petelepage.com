module.exports = {
  limit: (array, count) => {
    if (count < 0) {
      return array.slice(count);
    }
    return array.slice(0, count);
  },
  min: (...numbers) => {
    return Math.min.apply(null, numbers);
  },
};
