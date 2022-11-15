function isUnique(numbers) {
	return numbers.length === [...new Set(numbers)].length;
}

function isNumber(number) {
	return !(/[^0-9]/.test(number));
}

const isInRange = (min, max, number) => {
  return !(number < min || number > max);
};

module.exports = {isNumber, isInRange, isUnique};
