const MissionUtils = require("@woowacourse/mission-utils");
class Lotto {
    #numbers;
    #bonus;

    constructor(numbers) {
        this.validate(numbers);
        this.#numbers = numbers;
    }

    validate(numbers) {
        if (numbers.length !== 6) {
            throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
        }
        if (new Set(numbers).size !== numbers.length) {
            throw new Error("[ERROR] 로또 번호는 중복될 수 없습니다.");
        }
        numbers.forEach((number) => {
            if (number < 1 || 46 < number)
                throw new Error(
                    "[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다."
                );
        });
        return;
    }

    // TODO: 추가 기능 구현
    setBonusNumber = (bonus) => {
        if (
            typeof Number(bonus) !== "number" ||
            Number(bonus) <= 0 ||
            46 <= Number(bonus)
        ) {
            throw new Error();
        }
        this.#bonus = bonus;
        this.#numbers.push(bonus);
    };

    getNumbers = () => this.#numbers;
}

module.exports = Lotto;
