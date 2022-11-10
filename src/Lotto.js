const MissionUtils = require('@woowacourse/mission-utils');

class Lotto {
    #numbers;

    constructor(numbers) {
        this.#numbers = numbers;
    }

    // 구입금액에 해당하는 만큼의 로또를 보여주는 함수
    showLotto(numbers) {
        for (let i = 0; i < numbers; i++) {
            this.printLotto();
        }
    }

    // 로또들을 출력하는 함수
    printLotto() {
        MissionUtils.Console.print(this.pickLotto());
    }

    // 로또들의 숫자를 랜덤하게 뽑는 함수
    pickLotto() {
        const pickLottoArray = MissionUtils.Random.pickUniqueNumbersInRange(1,45,6).sort(function (a, b) {
            if (a > b) return 1;
            if (a === b) return 0;
            if (a < b) return -1;
        });
        const pickLottoString = pickLottoArray.join(', ');
        return `[${pickLottoString}]`;
    }
}

let lotto = new Lotto();

module.exports = Lotto;
