const { Console } = require('@woowacourse/mission-utils');
const Validation = require('./Validation');

let instance = null;

class HandleException {
    constructor() {
        if (instance) {
            return instance;
        }

        instance = this;
    }

    tryValidate(inputValue, validateType) {
        const myValidation = new Validation();
        const { isInvalidation, errorObject } = myValidation.invalidateValue(
            inputValue,
            validateType
        );

        if (isInvalidation) {
            this.returnException(errorObject);
            return;
        }
    }

    returnException(errorObject) {
        Console.print(errorObject.message);
        Console.close();
        throw errorObject;
    }
}

module.exports = HandleException;
