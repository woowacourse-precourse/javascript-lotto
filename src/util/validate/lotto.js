const isDuplicateNumber = (numbers) => {
  return new Set([...numbers]).size != numbers.length;
};

const isNumberLength = (numbers) => {
  return numbers.length != 6;
};

// console.log(isCorrectNumberLength([1, 2, 3, 4, 5, 6, 7]));
module.exports = { isDuplicateNumber, isNumberLength };
