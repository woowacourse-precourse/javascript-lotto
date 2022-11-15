function convertToNumber(source) {
    return +source;
}

function convertToNumberArray(numbers) {
    if (typeof numbers === 'object') {
        return false;
    }

    if (typeof numbers === 'number') {
        return [numbers];
    }

    const numberArray = numbers.split(',');
    const hasNotNumber = numberArray.some((number) => !isNumber(number));
    if (hasNotNumber) return false;

    return numberArray.map((number) => +number);
}

function hasElement(source, ...elements) {
    return [...source].some((item) => elements.includes(item));
}

function isInRange(numbers, [from, to]) {
    let numberArray = numbers;

    if (typeof numbers === 'string') {
        numberArray = convertToNumberArray(numbers);
    }

    if (typeof numbers === 'number') {
        return numbers >= from && numbers <= to;
    }

    return numberArray.every((number) => !isNaN(number) && number >= from && number <= to);
}

function hasDuplication(numbers) {
    let numberArray = numbers;

    if (typeof numbers === 'string') {
        numberArray = numbers.split(',').map((number) => convertToNumber(number));
    }

    const newSetSize = new Set(numberArray).size;
    const numbersSize = numberArray.length;
    return newSetSize !== numbersSize;
}

function isLength(numbers, length) {
    if (typeof numbers === 'object') {
        return numbers.length === length;
    }

    return numbers.split(',').length === length;
}

function isNumber(source) {
    return !isNaN(+source);
}

function canDivideBy(number, operand) {
    if (typeof number === 'string') {
        number = convertToNumber(number);

        if (!isNumber(number)) return false;
    }

    if (typeof operand === 'string') {
        operand = convertToNumber(operand);

        if (!isNumber(operand)) return false;
    }

    return !!!(number % operand);
}

function isUnder(number, threshold) {
    if (typeof number === 'string') {
        number = convertToNumber(number);

        if (!isNumber(number)) return false;
    }

    return number < threshold;
}

module.exports = {
    convertToNumber,
    convertToNumberArray,
    hasElement,
    isInRange,
    hasDuplication,
    isLength,
    isNumber,
    canDivideBy,
    isUnder,
};
