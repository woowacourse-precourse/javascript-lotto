class Lotto {
    #numbers;

    constructor(numbers) {
        this.validate(numbers);
        numbers.sort((a, b) => a - b);
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

    // 파라미터로 입력받은 당첨 번호와 비교하여 당첨이면 당첨 금액 리턴. 아니면 0을 리턴.
    getWinningMoney(winningNumbers, bonusNumber) {
        const dict = {};
        let matchCount = 0;

        for (let num of winningNumbers) {
            dict[num] = 1;
        }

        for (let num of this.#numbers) {
            if (dict[num]) {
                matchCount++;
            }
        }
        // 1등 체크.
        if (matchCount === 6) {
            return 2000000000;
        }
        // 보너스 번호 체크.
        if (dict[bonusNumber]) {
            matchCount++;
        }
        // 2등 체크.
        if (matchCount === 6) {
            return 30000000;
        }
        // 3등
        if (matchCount === 5) {
            return 1500000;
        }
        // 4등
        if (matchCount === 4) {
            return 50000;
        }
        // 5등
        if (matchCount === 3) {
            return 5000;
        }
    }
}

// TODO: 추가 기능 구현

module.exports = Lotto;
