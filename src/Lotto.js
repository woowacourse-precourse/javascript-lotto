const { validateLotto } = require('./functionValidation')

class Lotto {
    #numbers

    constructor(numbers) {
        validateLotto(numbers)
        this.#numbers = this.lottoNumberSort(numbers)
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
