const STATIC = require("./static.json");
const ERROR = STATIC.error;

class Exception {
    validate(numbers) {
        if (numbers.length !== 6) {
            throw new Error(ERROR.validate);
        }
    }

    string(number) {
        if (!Number(number) && number !== 0) {
            throw new Error(ERROR.string);
        }
    }

    divide(number) {
        if ((number % 1000 !== 0)) {
            throw new Error(ERROR.divide);
        }
    }

    duplicate(numbers) {
        let tempNumbers = new Set(numbers);
        tempNumbers = [...tempNumbers];
        if (tempNumbers.length < numbers.length) {
            throw new Error(ERROR.duplicate);
        }
    }

    range(number) {
        if (number < 1 || number > 45) {
            throw new Error(ERROR.range);
        }
    }
}

module.exports = Exception;
