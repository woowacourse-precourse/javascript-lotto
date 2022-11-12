const { Console } = require('@woowacourse/mission-utils');
const {
    InputException,
    LottoException,
    BonusException,
} = require('../src/Exception');
const Lotto = require('./Lotto');

class App {
    money;
    lottoNumbers;
    bonusNumber;
    randomLottoNumbers;

    inputException = new InputException();
    lottoException = new LottoException();
    bonusException = new BonusException();
    lottoInstance = new Lotto();

    play() {
        // this.process();
        this.inputMoney();
    }

    inputMoney() {
        // return new Promise((resolve, reject) => {
        //     Console.readLine('구입금액을 입력해주세요.\n', (money) => {
        //         this.inputException.checkInputException(money);
        //         console.log(`${+money / 1000}개를 구매했습니다.`);
        //         this.randomLottoNumbers = this.lottoClass.makeRandomLottos(
        //             +money / 1000
        //         );
        //         resolve(money);
        //     });
        // });

        Console.readLine('구입금액을 입력해주세요.\n', (money) => {
            this.inputException.checkInputException(money);
            Console.print(`${+money / 1000}개를 구매했습니다.`);
            this.money = money;
            this.randomLottoNumbers = this.lottoInstance.makeRandomLottos(
                +money / 1000
            );
            this.inputLottoNumbers();
        });
    }

    inputLottoNumbers() {
        // return new Promise((resolve, reject) => {
        //     Console.readLine('당첨 번호를 입력해 주세요.\n', (string) => {
        //         let lotto = string.split(',').map((number) => number.trim());
        //         this.lottoException.checkLottoException(lotto);
        //         resolve(lotto);
        //     });
        // });

        Console.readLine('당첨 번호를 입력해 주세요.\n', (string) => {
            let lotto = string.split(',').map((number) => number.trim());

            this.lottoException.checkLottoException(lotto);
            this.lottoNumbers = lotto;
            this.inputBonusNumber();
        });
    }

    inputBonusNumber() {
        // return new Promise((resolve, reject) => {
        //     Console.readLine('보너스 번호를 입력해 주세요.\n', (bonus) => {
        //         this.bonusException.checkBonusException(bonus);
        //         resolve(bonus);
        //     });
        // });

        Console.readLine('보너스 번호를 입력해 주세요.\n', (bonus) => {
            this.bonusException.checkBonusException(bonus);
            this.bonusNumber = bonus;
            this.process();
        });
    }

    process() {
        // this.money = await this.inputMoney();
        // this.lottoNumbers = await this.inputLottoNumbers();
        // this.bonusNumber = await this.inputBonusNumber();
        // this.inputMoney();
        const compareResult = this.compare(
            this.lottoNumbers,
            this.bonusNumber,
            this.randomLottoNumbers
        );
        const finalResult = this.showResult(compareResult);
        const profitRate = this.calProfitRate(finalResult);
        Console.print(`총 수익률은 ${profitRate}%입니다.`);
        Console.close();
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
        let sum = 0;
        const result = {
            '3': ['3개 일치 (5,000원) -', 0, 5000],
            '4': ['4개 일치 (50,000원) -', 0, 50000],
            '5': ['5개 일치 (1,500,000원) -', 0, 1500000],
            '6': ['5개 일치, 보너스 볼 일치 (30,000,000원) -', 0, 30000000],
            '7': ['6개 일치 (2,000,000,000원) -', 0, 200000000],
        };
        compareResult.forEach((number) => {
            if (+number >= 3) result[number.toString()][1]++;
        });

        for (let key in result) {
            if (result[key][1] > 0) sum += result[key][1] * result[key][2];
            Console.print(`${result[key][0]} ${result[key][1]}개`);
        }
        return sum;
    }

    calProfitRate(sum) {
        let result = parseFloat(((sum / +this.money) * 100).toFixed(2));
        return result;
    }
}

const app = new App();
app.play();

module.exports = App;
