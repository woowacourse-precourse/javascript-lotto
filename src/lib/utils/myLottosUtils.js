const sortRandomLotto = (array) => {
  array.sort(function (a, b) {
    return a - b;
  });

  return array;
};

module.exports = { sortRandomLotto };
