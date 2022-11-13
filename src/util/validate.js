function isDuplicate(numbers) {
  return numbers.some((num, idx) => {
    return numbers.indexOf(num) !== idx;
  });
}

function isIncludeNaN(numbers) {
  return numbers.some((num) => typeof num !== "number");
}

module.exports = { isDuplicate, isIncludeNaN };
