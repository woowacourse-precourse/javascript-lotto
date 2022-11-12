const MissionUtils = require("@woowacourse/mission-utils");

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
        let filtered = numbers.filter((_, i, arr) => arr.indexOf(_) === i);
        if (filtered.length !== 6) {
            throw new Error(
                "[ERROR] 로또 번호에 중복된 숫자가 있으면 안됩니다."
            );
        }
    }

    // TODO: 추가 기능 구현

    print() {
        MissionUtils.Console.print(this.#numbers);
    }

    check(arr) {
        let score = this.score(arr);
        if (score < 6) return 0;
        if (score < 8) return 1;
        if (score < 10) return 2;
        if (score < 11) return 3;
        if (score < 12) return 4;
        return 5;
    }

    score(arr) {
        let sum = 0;
        for (let i in this.#numbers) {
            sum += arr[this.#numbers[i]];
        }
        return sum;
    }
}

module.exports = Lotto;
