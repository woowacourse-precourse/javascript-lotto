const MissionUtils = require("@woowacourse/mission-utils");
const MyLotto = require("./MyLotto");
const Lotto = require("./Lotto");
const BonusNumber = require("./BonusNumber");

class App {
    money;
    myLotto;
    lotto;
    bonusNumber;
    result = {'1등': 0, '2등': 0, '3등': 0, '4등': 0, '5등': 0}
    revenue = 0

    play() {
        this.inputBuyLottoMoney();
    }

    inputBuyLottoMoney() {
        MissionUtils.Console.readLine('구입금액을 입력해 주세요.\n', (money) => {
            this.validateIsNumber(money);

            this.money = parseInt(money);
            this.myLotto = new MyLotto(this.money);

            this.printLottoList(this.myLotto.getMyLottoList());

            this.inputLottoNumbers();
        });
    }

    inputLottoNumbers() {
        MissionUtils.Console.readLine('당첨 번호를 입력해 주세요.\n', (numbersString) => {
            let numbers = numbersString.split(',').map((number) => {
                this.validateIsNumber(number);
                return parseInt(number);
            })
            this.lotto = new Lotto(numbers);

            this.inputBonusNumber();
        });
    }

    inputBonusNumber() {
        MissionUtils.Console.readLine('보너스 번호를 입력해 주세요.\n', (number) => {
            this.validateIsNumber(number);

            this.bonusNumber = new BonusNumber(parseInt(number), this.lotto.getLottoNumbers());

            this.checkAllLottoResult();
            this.printLottoResult();
            this.printLottoRateOfReturn(this.calculateRateOfReturn());

            MissionUtils.Console.close();
        });
    }

    checkAllLottoResult() {
        for (const myLottoNumbers of this.myLotto.getMyLottoList()) {
            let [lottoCount, bonus] = this.checkLottoResult(myLottoNumbers);
            if (lottoCount === 3) {
                this.result['5등'] += 1
                this.revenue += 5000
            }
            if (lottoCount === 4) {
                this.result['4등'] += 1
                this.revenue += 50000
            }
            if (lottoCount === 5 && !bonus) {
                this.result['3등'] += 1
                this.revenue += 1500000
            }
            if (lottoCount === 5 && bonus) {
                this.result['2등'] += 1
                this.revenue += 30000000
            }
            if (lottoCount === 6) {
                this.result['1등'] += 1
                this.revenue += 2000000000
            }
        }
    }

    checkLottoResult(myLottoNumbers) {
        let lottoCount = 0;
        let bonus = false;
        for (const number of myLottoNumbers) {
            if (this.lotto.getLottoNumbers().includes(number)) {
                lottoCount += 1;
            }
            if (number === this.bonusNumber.getBonusNumber()) {
                bonus = true;
            }
        }
        return [lottoCount, bonus];
    }

    calculateRateOfReturn() {
        return this.revenue / this.money * 100
    }

    validateIsNumber(money) {
        if (isNaN(money)) {
            throw new Error("[ERROR] 숫자만 입력 가능합니다.");
        }
    }

    printLottoList(lottoList) {
        MissionUtils.Console.print(lottoList.length + '개를 구매했습니다.');
        for (const lotto of lottoList) {
            MissionUtils.Console.print(lotto);
        }
    }

    printLottoResult() {
        MissionUtils.Console.print('3개 일치 (5,000원) - ' + this.result['5등']);
        MissionUtils.Console.print('4개 일치 (50,000원) - ' + this.result['4등']);
        MissionUtils.Console.print('5개 일치 (1,500,000원) - ' + this.result['3등']);
        MissionUtils.Console.print('5개 일치, 보너스 볼 일치 (30,000,000원) - ' + this.result['2등']);
        MissionUtils.Console.print('6개 일치 (2,000,000,000원) - ' + this.result['1등']);
    }

    printLottoRateOfReturn(rateOfReturn) {
        MissionUtils.Console.print('총 수익률은 ' + rateOfReturn + '%입니다.');
    }
}

// let app = new App();
// app.play()

module.exports = App;
