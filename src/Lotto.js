const {
    LENGTH_INPUT_LOTTO_NUMBER_ERROR,
    RANGE_INPUT_LOTTO_NUMBER_ERROR,
    REPEATED_LOTTO_NUMBER_ERROR,
    STRING_LOTTO_NUMBER_ERROR,
} = require('./constants')
const {
    rangeCheck,
    repeatedCheck,
    lengthCheckLottoNumber,
    includeString,
} = require('./validationLotto')
class Lotto {
    #numbers

    constructor(numbers) {
        this.validate(numbers)
        this.#numbers = this.lottoNumberSort(numbers)
    }

    validate(numbers) {
        if (!rangeCheck(numbers)) throw new Error(RANGE_INPUT_LOTTO_NUMBER_ERROR)

        if (!repeatedCheck(numbers)) throw new Error(REPEATED_LOTTO_NUMBER_ERROR)

        if (!lengthCheckLottoNumber(numbers)) throw new Error(LENGTH_INPUT_LOTTO_NUMBER_ERROR)

        if (!includeString(numbers)) throw new Error(STRING_LOTTO_NUMBER_ERROR)
    }

    lottoNumberSort(numbers) {
        function compareNumbers(a, b) {
            return a - b
        }

        return numbers.sort(compareNumbers)
    }

    getNumbers() {
        return this.#numbers
    }
    // TODO: 추가 기능 구현
}

module.exports = Lotto
