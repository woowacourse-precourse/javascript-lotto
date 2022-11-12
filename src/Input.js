const { Console, Random } = require('@woowacourse/mission-utils');
const { InputException, BonusException } = require('../Exception');
const Lottos = require('./Lotto');

class Input {
    money;
    winningRottoNumber;
    randomRottoNumber;
    bonusNumber;

    start() {
        this.inputMoney();
    }

    inputMoney() {
        Console.readLine('구입금액을 입력해주세요.\n', (money) => {
            const exception = new InputException();
            exception.checkInputException(money); // 검증

            this.money = money;
            Console.print(`${+money / 1000}개를 구매했습니다.`);
            this.randomRottoNumber = this.makeRandomLottos(+money / 1000); // 저장

            this.inputLottoNumbers(); // 다음 단계
        });
    }

    inputLottoNumbers() {
        Console.readLine('당첨 번호를 입력해 주세요.\n', (string) => {
            let lotto = string.split(',').map((number) => number.trim());

            const exception = new Lottos(lotto); // 검증

            this.winningRottoNumber = lotto; // 당첨 번호 저장 (#numbers)

            this.inputBonusNumber(); // 다음 단계
        });
    }

    inputBonusNumber() {
        Console.readLine('보너스 번호를 입력해 주세요.\n', (bonus) => {
            const exception = new BonusException();
            exception.checkBonusException(bonus); // 검증

            this.bonusNumber = bonus; // 보너스 번호 저장

            const output = new Output();
            output.process(
                this.money,
                this.winningRottoNumber,
                this.randomRottoNumber,
                this.bonusNumber
            ); // 다음단계
        });
    }

    makeRandomLottos(number) {
        const lottos = [];
        for (let index = 1; index <= number; index++) {
            const currentNumbers = this.makeRandomLotto();
            this.showLottoNumbers(currentNumbers);
            lottos.push(currentNumbers);
        }
        return lottos;
    }
    makeRandomLotto() {
        const lotto = Random.pickUniqueNumbersInRange(1, 45, 6);
        lotto.sort((a, b) => a - b);
        return lotto;
    }
    showLottoNumbers(lotto) {
        Console.print(
            `[${lotto[0]}, ${lotto[1]}, ${lotto[2]}, ${lotto[3]}, ${lotto[4]}, ${lotto[5]}]`
        );
    }
}

module.exports = Input;
