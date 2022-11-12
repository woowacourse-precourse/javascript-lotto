const { Console, Random } = require('@woowacourse/mission-utils');
const { InputException } = require('../src/Exception');
const Lotto = require('./Lotto');

class App {
    money;
    lottoNumbers;
    bonusNumber;
    randomLottoNumbers;

    play() {
        this.process();
    }

    // 구입 금액 입력 받기, 구매할 로또 개수와 번호 보여주기
    // 정답 로또 번호 입력받기, 비교해서 결과 도출하기
    async process() {
        this.money = await this.inputMoney();
        this.lottoNumbers = await this.inputLottoNumbers();
        this.bonusNumber = await this.inputBonusNumber();

        const compareResult = this.compare(
            this.lottoNumbers,
            this.bonusNumber,
            this.randomLottoNumbers
        );

        const finalResult = this.showResult(compareResult);
    }

    inputMoney() {
        return new Promise((resolve, reject) => {
            Console.readLine('구입금액을 입력해주세요.\n', (money) => {
                this.verification(money);
                console.log(`${+money / 1000}개를 구매했습니다.`);
                const lotto = new Lotto();
                this.randomLottoNumbers = lotto.makeRandomLottos(+money / 1000);
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

    compare(winningNumbers, bonusNumber, randomNumbers) {
        let arr = [];

        randomNumbers.forEach((lotto) => {
            let count = 0;
            let current = lotto;

            for (let number of lotto) {
                winningNumbers.indexOf(number.toString()) > -1
                    ? count++
                    : (count += 0);
            }

            arr.push(count);

            if (count === 5 && current.findIndex((e) => e === bonusNumber)) {
                arr.pop();
                arr.push(6);
            }
            if (count === 6) {
                arr.pop();
                arr.push(7);
            }
        });

        return arr;
    }

    showResult(compareResult) {
        const result = {
            '3': ['3개 일치 (5,000원) - ', 0],
            '4': ['4개 일치 (50,000원) - ', 0],
            '5': ['5개 일치 (1,500,000원) - ', 0],
            '6': ['5개 일치, 보너스 볼 일치 (30,000,000원) - ', 0],
            '7': ['6개 일치 (2,000,000,000원) - ', 0],
        };
        compareResult.forEach((number) => {
            if (+number >= 3) result[number.toString()][1]++;
        });

        for (let key in result) {
            console.log(`${result[key][0]} + ${result[key][1]}개`);
        }
    }

    verification(input) {
        const exception = new InputException(input);
        exception.checkInputException();
    }
}

const app = new App();
app.play();

module.exports = App;
