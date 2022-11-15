class Lotto {
    #numbers;

    constructor(numbers) {
        this.validate(numbers);
        this.#numbers = numbers;
    }

    validate(numbers) {
        // 로또 번호의 개수가 6개가 맞는지 체크.
        if (numbers.length !== 6) {
            throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
        }
        // 로또 번호에 중복이 있는지 체크.
        const dict = {};
        for (let num of numbers) {
            if (dict[num] !== undefined) {
                throw new Error('[ERROR] 중복된 로또 번호가 존재합니다.');
            }
            dict[num] = 1;
        }
    }

    // Lotto 번호들을 문자열로 변환하여 리턴한다.
    printNumbers() {
        const result = this.#numbers.join(', ');
        return `[${result}]`;
    }
}

// TODO: 추가 기능 구현

module.exports = Lotto;
