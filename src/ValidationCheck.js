const userInput = require("./App.js");

const isValidUserNumberInput = (userInput) => {
    if(!hasOnlyNumber(userInput)) {
        return { isValid: false, errorType: "[ERROR] INVALID_INPUT_TYPE" };
    }
    if(!dividedInUnitOf1000(userInput)) {
        return { isValid: false, errorType: "[ERROR] NOT_DIVISIBLE_BY_1000" };
    }

    return {isValid : true};
};

const hasOnlyNumber = (userInput) => {
    return userInput
        .split('')
        .map((eachLetter) => parseInt(eachLetter), 10)
        .every((number) => !isNaN(number));
};

const dividedInUnitOf1000 = (userInput) => {
    const DEVIDED_BY_1000 = parseInt(userInput) % 1000;
    if(DEVIDED_BY_1000 === 0) return true;
    return false;
};

module.exports = isValidUserNumberInput;