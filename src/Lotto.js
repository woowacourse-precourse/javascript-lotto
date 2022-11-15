class Lotto {
    #numbers;

    constructor(numbers) {
        this.validate(numbers);
        this.#numbers = numbers;
    }
    validate(numbers) {
        if (numbers.length !== 6) {
            throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
        }
        if (new Set(numbers).size !== 6) {
            throw new Error("[ERROR] 중복된 로또 번호가 존재합니다.");
        }
        if (!numbers.every((lottoNumber) => lottoNumber > 0 && lottoNumber < 46)) {
            throw new Error("[ERROR] 로또 번호는 1~45인 숫자여야 합니다.");
        }
    }
}
module.exports = Lotto;
