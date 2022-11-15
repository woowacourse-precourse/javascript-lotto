const { Console, Random } = require('@woowacourse/mission-utils');
const { InputException, BonusException } = require('./Exception');
const Lotto = require('./Lotto');
const Output = require('./Output');
const constant = require('./module/constant');

class Input {
    money;
    winningRottoNumber;
    randomRottoNumber;
    bonusNumber;

    process() {
        this.inputMoney();
    }

    inputMoney() {
        Console.readLine(constant.INPUT_MONEY, (money) => {
            new InputException(money);
            this.money = money;

            Console.print(constant.BLANK);
            Console.print(`${+money / 1000}개를 구매했습니다.`);
            this.randomRottoNumber = this.makeRandomLottos(+money / 1000);

            Console.print(constant.BLANK);
            this.inputLottoNumbers();
        });
    }

    inputLottoNumbers() {
        Console.readLine(constant.INPUT_WINNIG, (string) => {
            let lotto = string.split(',').map((number) => number.trim());
            new Lotto(lotto);
            this.winningRottoNumber = lotto;

            Console.print(constant.BLANK);
            this.inputBonusNumber();
        });
    }

    inputBonusNumber() {
        Console.readLine(constant.INPUT_BONUS, (bonus) => {
            new BonusException(bonus, this.winningRottoNumber);
            this.bonusNumber = bonus;

            Console.print(constant.BLANK);
            const output = new Output();
            output.process(
                this.money,
                this.winningRottoNumber,
                this.randomRottoNumber,
                this.bonusNumber
            );
        });
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
    makeRandomLottos(number) {
        const lottos = [];
        for (let index = 1; index <= number; index++) {
            const currentNumbers = this.makeRandomLotto();
            this.showLottoNumbers(currentNumbers);
            lottos.push(currentNumbers);
        }
        return lottos;
    }
}

module.exports = Input;
