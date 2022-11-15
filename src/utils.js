const { Console, Random } = require('@woowacourse/mission-utils');
const { ERROR_MESSAGE } = require('./constants');

const numberValidation = stringInput => {
	if (isNaN(stringInput) || isNaN(parseInt(stringInput))) {
		throw new Error(ERROR_MESSAGE.VALID_NUMBER);
	}

	return +stringInput;
};

const checkInRange = (startNum, endNum, numbersArr) => {
	let isInRange = true;

	numbersArr.map(num => {
		if (num < startNum || num > endNum) {
			isInRange = false;
		}
	});

	return isInRange;
};

const checkDuplicates = numbersArr => {
	let isDuplicate = false;

	numbersArr.map((num, idx) => {
		if (numbersArr.slice(idx + 1).includes(num)) {
			isDuplicate = true;
		}
	});

	return isDuplicate;
};

module.exports = {
	numberValidation,
	checkInRange,
	checkDuplicates,
};
