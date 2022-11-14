class Lotto {
    #numbers;

    constructor(numbers) {
        this.validate(numbers);
        this.#numbers = numbers;
    }

    // 당첨 번호 검증 함수
    validate(numbers) {
        this.onlySixNumbers(numbers);
        this.validateLimitRangeNumber(numbers);
        this.validateNumber(numbers);
        this.validateMulty(numbers);
    }

    // 6보다 작거나 큰 개수의 숫자를 걸러주는 함수
    onlySixNumbers(numbers) {
        if (numbers.length !== 6) {
            throw new Error('[ERROR] 당첨 번호는 6개 입력해야 합니다.');
        }
    }

    // 1~45사이의 숫자 검증 함수
    validateLimitRangeNumber(numbers) {
        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i] > 45 || numbers[i] === 0 || numbers[i] < 0) {
                throw new Error('[ERROR] 당첨 번호는 1 ~ 45사이의 숫자를 입력해야 합니다.');
            }
        }
    }

    // 배열의 요소가 숫자로 구성되어 있는지 검증 함수
    validateNumber(array) {
        const number = array.map((item) => Number.isNaN(item));
        if (number.includes(true)) {
            throw new Error('[ERROR] 당첨 번호는 숫자를 입력해야 합니다.');
        }
    }

    // 배열의 요소가 중복되는지 검증 함수
    validateMulty(array) {
        const set = new Set();
        array.map((item) => set.add(item));
        if (set.size !== 6) {
            throw new Error('[ERROR] 당첨 번호는 중복 숫자가 불가합니다.');
        }
    }
}

module.exports = Lotto;
