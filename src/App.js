const MissionUtils = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');

class App {
  play() {
    MissionUtils.Console.print('구입금액을 입력해 주세요.');
    this.buyLotto();
  }

  buyLotto() {
    MissionUtils.Console.readLine('', (userInput) => {
      const PAID_MONEY = userInput.split('').map((item) => +item);
      const LOTTO_PRICE = 1000;

      if (PAID_MONEY.includes(NaN)) {
        throw new Error('[ERROR] 구입하실 금액은 숫자로 입력하셔야 합니다.');
      }
      if (userInput % LOTTO_PRICE !== 0 || userInput <= 0) {
        throw new Error('[ERROR] 로또는 1000원 단위로 구입하셔야 합니다.');
      }

      const AMOUNT = userInput / LOTTO_PRICE;
      this.printLottoNumber(AMOUNT, userInput);
    });
  }

  printLottoNumber(amount, investment) {
    MissionUtils.Console.print(`${amount}개를 구매했습니다.`);
    const LOTTO_NUMBER_ARRAY = [];

    for (let number = 0; number < amount; number += 1) {
      const LOTTO_NUMBER = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      LOTTO_NUMBER_ARRAY.push(LOTTO_NUMBER);
      MissionUtils.Console.print(`[${LOTTO_NUMBER.sort((a, b) => a - b).join(', ')}]`);
    }
    this.winNumber(LOTTO_NUMBER_ARRAY, investment);
  }

  winNumber(lottoNumber, investment) {
    MissionUtils.Console.print('\n당첨 번호를 입력해 주세요.');
    MissionUtils.Console.readLine('', (userInput) => {
      const WIN_NUMBER = userInput.split(',').map((item) => +item);
      const LOTTO_ARRAY = lottoNumber;
      new Lotto(WIN_NUMBER);
      this.bonusNumber(WIN_NUMBER, LOTTO_ARRAY, investment);
    });
  }

  bonusNumber(winNumber, lottoNumber, investment) {
    MissionUtils.Console.print('\n보너스 번호를 입력해 주세요.');
    MissionUtils.Console.readLine('', (userInput) => {
      const BONUS_NUMBER = Number(userInput);
      if (Number.isNaN(BONUS_NUMBER)) {
        throw new Error('[ERROR] 보너스 번호는 숫자만 입력하셔야 합니다.');
      }
      if (winNumber.includes(BONUS_NUMBER)) {
        throw new Error('[ERROR] 당첨 번호와 보너스 번호는 중복될 수 없습니다.');
      }
      if (BONUS_NUMBER < 1 || BONUS_NUMBER > 45) {
        throw new Error('[ERROR] 보너스 번호는 1 ~ 45 사이의 숫자를 입력 하셔야 합니다.');
      }
      const LOTTO_NUMBER_ARRAY = lottoNumber;
      const WIN_NUMBER_ARRAY = winNumber;
      const BONUS_NUMBER_ARRAY = [BONUS_NUMBER];

      this.result(LOTTO_NUMBER_ARRAY, WIN_NUMBER_ARRAY, BONUS_NUMBER_ARRAY, investment);
    });
  }

  result(lottoNumber, winNumber, bonusNumber, investment) {
    MissionUtils.Console.print('\n당첨 통계');
    MissionUtils.Console.print('---');
    const LOTTOWINNUMBER = [];
    const LOTTOBONUSNUMBER = [];

    for (let index = 0; index < lottoNumber.length; index += 1) {
      LOTTOWINNUMBER.push(
        lottoNumber[index].filter((sameNumber) => winNumber.includes(sameNumber))
      );

      LOTTOBONUSNUMBER.push(
        lottoNumber[index].filter((sameNumber) => bonusNumber.includes(sameNumber))
      );
    }
    for (let index = 0; index < LOTTOWINNUMBER.length; index += 1) {
      if (LOTTOWINNUMBER[index].length !== 5) {
        LOTTOBONUSNUMBER[index].pop();
      }
    }
    this.calculateRank(LOTTOWINNUMBER, LOTTOBONUSNUMBER, investment);
  }

  calculateRank(win, bonus, investment) {
    const RANK = {
      rank5: 0,
      rank4: 0,
      rank3: 0,
      rank2: 0,
      rank1: 0,
    };
    for (let index = 0; index < win.length; index += 1) {
      if (win[index].length === 3) RANK.rank5 += 1;
      if (win[index].length === 4) RANK.rank4 += 1;
      if (win[index].length === 5 && bonus[index].length === 0) RANK.rank3 += 1;
      if (win[index].length === 5 && bonus[index].length === 1) RANK.rank2 += 1;
      if (win[index].length === 6) RANK.rank1 += 1;
    }
    this.printRank(RANK, investment);
  }

  printRank(rank, investment) {
    MissionUtils.Console.print(`3개 일치 (5,000원) - ${rank.rank5}개`);
    MissionUtils.Console.print(`4개 일치 (50,000원) - ${rank.rank4}개`);
    MissionUtils.Console.print(`5개 일치 (1,500,000원) - ${rank.rank3}개`);
    MissionUtils.Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${rank.rank2}개`);
    MissionUtils.Console.print(`6개 일치 (2,000,000,000원) - ${rank.rank1}개`);
    const WIN_MONEY =
      rank.rank5 * 5000 +
      rank.rank4 * 50000 +
      rank.rank3 * 1500000 +
      rank.rank2 * 30000000 +
      rank.rank1 * 2000000000;
    this.returnOnInvestment(WIN_MONEY, investment);
  }

  returnOnInvestment(winMoney, investment) {
    let YIELD = (winMoney / Number(investment)) * 100;
    YIELD = Math.round(YIELD * 100) / 100;
    MissionUtils.Console.print(`총 수익률은 ${YIELD}%입니다.`);
    MissionUtils.Console.close();
  }
}

const app = new App();
app.play();

module.exports = App;
