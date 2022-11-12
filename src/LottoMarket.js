const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require('./Lotto');
const { Console, Random } = MissionUtils;
const constants = require("./Constants");

class LottoMarket {
    purchaseLotto(money) {
        let userLottos = [];
        while (userLottos.length < parseInt(money / 1000)) {
            userLottos.push(new Lotto(this.drawLottery()));
        }
        this.showLottoes(userLottos);
        return userLottos;
    }

    showLottoes(buyingLottoes) {
        Console.print(`\n${buyingLottoes.length}개를 구매했습니다.`)
        let Lottoes = buyingLottoes.reduce((acc, cur) => {
            Console.print(cur.getNumbers());
        }, []);
    }

    drawLottery() {
        let lottoNums = [];
        while (lottoNums.length < 6) {
            lottoNums.push(this.createNumber(lottoNums));
        }
        lottoNums.sort((a, b) => a - b);
        return lottoNums;
    }

    createNumber(winningNumbers) {
        let newNumber = Random.pickNumberInRange(1, 45);

        return this.validate(winningNumbers, newNumber)
            ? this.createNumber(winningNumbers)
            : parseInt(newNumber);
    }

    validate(winningNumbers, newNumber) {
        return winningNumbers.includes(newNumber);
    }
}

module.exports = LottoMarket;