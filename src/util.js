const sortAscending = (randomNums) => {
  randomNums.sort((firstElement, secondElement) => {
    return firstElement - secondElement;
  });
};

module.exports = {
  sortAscending,
};
