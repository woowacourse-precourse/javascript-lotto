const { ERROR_MESSAGE, NUMBERS_LIMIT } = require('./constant/constantOfLotto');

const { NOT_SIX_NUMBERS_MESSAGE, INCORRECT_LOTTO_NUMBER_MESSAGE, DUPLICATE_NUMBER_MESSAGE } =
    ERROR_MESSAGE;
const { MAX_NUMBER, MIN_NUMBER, COUNT } = NUMBERS_LIMIT;

class WinningNumber {
    setWinningNumber(numbers) {
        WinningNumber.#winningNumberValidate(numbers);
        this.winningNumber = numbers;
    }

    setBonusNumber(number) {
        this.#bonusNumberValidate(number);
        this.bonusNumber = number;
    }

    getWinningNumber() {
        return this.winningNumber;
    }

    getBonusNumber() {
        return this.bonusNumber;
    }

    static #winningNumberValidate(input) {
        if (new Set(input).size !== COUNT) {
            throw new Error(NOT_SIX_NUMBERS_MESSAGE);
        }

        input.forEach((number) => {
            if (Number(number) >= MIN_NUMBER && Number(number) <= MAX_NUMBER) {
                return;
            }

            throw new Error(INCORRECT_LOTTO_NUMBER_MESSAGE);
        });
    }

    #bonusNumberValidate(input) {
        if (this.winningNumber.includes(input)) {
            throw new Error(DUPLICATE_NUMBER_MESSAGE);
        }

        if (!(Number(input) >= MIN_NUMBER && Number(input) <= MAX_NUMBER)) {
            throw new Error(INCORRECT_LOTTO_NUMBER_MESSAGE);
        }
    }
}

module.exports = WinningNumber;