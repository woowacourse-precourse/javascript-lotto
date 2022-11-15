class Lotto {
    #numbers;

    constructor(numbers) {
        this.validate(numbers);
        this.checkDuplicate(numbers);
        this.checkNumber(numbers);
        this.#numbers = numbers;
    }

    validate(numbers) {
        if (numbers.length !== 6) {
            throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
        }
    }

    checkDuplicate(numbers) {
        const set = new Set(numbers);
        const uniqueArr = [...set];
        if (numbers.length !== uniqueArr.length) {
            throw new Error("[ERROR] 로또 번호는 중복될 수 없습니다.")
        }
    }

    checkNumber(numbers) {
        for (let x of numbers) {
            if (isNaN(x) === true) {
                throw new Error("[ERROR] 로또 번호는 숫자여야 합니다.");
            }
        }
    }

    getNumber() {
        return this.#numbers;
    }

}

module.exports = Lotto;
