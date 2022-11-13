const userInput = require("./App.js");

let DEVIDED_BY_1000 = userInput % 1000;

const isValidUserNumberInput = (userInput) => {
    if(!hasOnlyNumber(userInput)) {
        return { isValid: false, errorType: "INVALID_INPUT_TYPE" };
    }
    if(!dividedInUnitOf1000(userInput)) {
        return { isValid: false, errorType: "NOT_DIVISIBLE_BY_1000" };
    }

    return {isValid : true};
}

const hasOnlyNumber = (userInput) => {
    return userInput
        .toString()
        .split('')
        .map((eachLetter) => parseInt(eachLetter), 10)
        .every((number) => !isNaN(number));
}

const dividedInUnitOf1000 = (userInput) => {
    return DEVIDED_BY_1000 === 0;
}

module.exports = isValidUserNumberInput;