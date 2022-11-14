const { Console } = require('@woowacourse/mission-utils');
const { Random } = require('@woowacourse/mission-utils');

const Lotto = require('./Lotto');
const Bonus = require('./Bonus');
const Error = require('./components/Error');

class App {
  #money;

  #count;

  play() {
    this.error = new Error();
    this.getPurchaseAmount();
  }

  getPurchaseAmount() {
    Console.readLine('구매금액을 입력해 주세요. \n', (money) => {
      if (this.error.isDividedByTen(money)) {
        this.#money = money;
        this.printPurchasemoney(money);
        this.getLottoList();
      }
    });
  }

  printPurchaseCount (money) {
    const count = money / 1000;
    Console.print(`${amount}개를 구매했습니다.`);
    this.#count = count;
  }

  getLottoList() {
    const amount = this.#amount;
    let lottoList = [];
    let countIndex = 0;

    while (countIndex < amount) {
      const lottoNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      lottoNumbers.sort((a, b) => a - b);
      lottoList.push(lottoNumbers);
      countIndex++;
    }

    this.printLottoList(lottoList);
  }

  printLottoList(lottoList) {
    lottoList.forEach((lottoNumbers) => {
      Console.print(lottoNumbers);
    });

    this.getUserLottoNumbers(lottoList);
  }

  inputWinningNumber(lottoList) {
    Console.readLine('당첨 번호를 입력해 주세요. \n', (numbers) => {
      const  winningNumber = numbers.split(',');
      new Lotto(winningNumber);
      this.getUserBonusNumber(winningNumber, lottoList);
    });
  }

  inputBonus(winningNumber, lottoList) {
    Console.readLine('보너스 번호를 입력해 주세요. \n', (bonus) => {
      new Bonus(bonus, winningNumber);
      this.getCountOfMatchingNumber(lottoList, userLottoNumbers, bonus);
    });
  }

  getCountOfMatchingNumber(lottoList, userLottoNumber, userBonusNumber) {
    let result = {
      three: 0,
      four: 0,
      five: 0,
      fiveBonus: 0,
      six: 0,
    };

    lottoList.forEach((list) => {
      let count = { normal: 0, bonus: 0 };

      list.forEach((number) => {
        if (userLottoNumber.map(Number).includes(number) === true) {
          count.normal++;
        }

        if (userBonusNumber.includes(number) === true) {
          count.bonus++;
        }
      });

      this.getLottoResult(count.normal, count.bonus, result);
    });
  }

  getLottoResult(normalCount, bonusCount, result) {
    if (normalCount === 3) {
      result.three++;
    } else if (normalCount === 4) {
      result.four++;
    } else if (normalCount === 5) {
      result.five++;
    } else if (normalCount === 5 && bonusCount === 1) {
      result.fiveBonus++;
    } else if (normalCount === 6) {
      result.six++;
    }
  }
}

const app = new App();
app.play();

module.exports = App;
