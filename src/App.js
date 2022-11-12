const { Console, Random } = require('@woowacourse/mission-utils');
const { InputException } = require('../src/Exception');
const Lotto = require('./Lotto');

class App {
    money;
    lottoNumbers;
    bonusNumber;

    play() {
        this.process();
    }

    // 구입 금액 입력 받기, 구매할 로또 개수와 번호 보여주기
    // 정답 로또 번호 입력받기, 비교해서 결과 도출하기
    async process() {
        this.money = await this.inputMoney();
        this.lottoNumbers = await this.inputLottoNumbers();
        this.bonusNumber = await this.inputBonusNumber();
    }

    inputMoney() {
        return new Promise((resolve, reject) => {
            Console.readLine('구입금액을 입력해주세요.\n', (money) => {
                this.verification(money);
                console.log(`${+money / 1000}개를 구매했습니다.`);
                const lotto = new Lotto();
                lotto.makeRandomLottos(+money / 1000);
                resolve(money);
            });
        });
    }

    inputLottoNumbers() {
        return new Promise((resolve, reject) => {
            Console.readLine('당첨 번호를 입력해 주세요.\n', (lotto) => {
                resolve(lotto.split(',').map((number) => number.trim()));
            });
        });
    }

    inputBonusNumber() {
        return new Promise((resolve, reject) => {
            Console.readLine('보너스 번호를 입력해 주세요.\n', (bonus) => {
                resolve(bonus);
            });
        });
    }

    verification(input) {
        const exception = new InputException(input);
        exception.checkInputException();
    }
}

const app = new App();
app.play();

module.exports = App;
