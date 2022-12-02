const MissionUtils = require('@woowacourse/mission-utils');
const Lotto = require('../Lotto');
const Validate = require('../Validate');
const OutputView = require('./OutputView');

let lottoAmount;
let lottos = [];
let winningLotteryNumbers;
let bonusNumber;
let profit;
let result = {
  first: 0,
  second: 0,
  third: 0,
  fourth: 0,
  fifth: 0,
};

const WINNING_PRICE = {
  first: 2000000000,
  second: 30000000,
  third: 1500000,
  fourth: 50000,
  fifth: 5000,
};

const InputView = {
  readPurchase() {
    MissionUtils.Console.readLine('구입금액을 입력해 주세요.', (price) => {
      Validate.price(price);
      lottoAmount = parseInt(price) / 1000;
      this.makeLottoNumbers(lottoAmount);
      OutputView.printPurchaseList(lottoAmount, lottos);

      this.readWinningLotteryNumbers();
    });
  },
  makeLottoNumbers(amount) {
    for (let i = 0; i < amount; i++) {
      const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      const lotto = new Lotto(numbers);
      lottos.push(lotto.show());
    }
  },

  readWinningLotteryNumbers() {
    MissionUtils.Console.readLine('당첨 번호를 입력해 주세요.', (inputNumbers) => {
      const numbers = inputNumbers.toString().split(',').map(Number);
      Validate.lotteryNumbers(numbers);

      winningLotteryNumbers = numbers;

      this.readBonusNumber();
    });
  },
  readBonusNumber() {
    MissionUtils.Console.readLine('보너스 번호를 입력해 주세요.', (number) => {
      Validate.bonusNumber(number, winningLotteryNumbers);
      bonusNumber = number;

      this.compareNumbers();
      this.computeProfit();
      OutputView.printResult(result, profit);
    });
  },
  computeProfit() {
    const totalWinningPrice =
      WINNING_PRICE.fifth * result.fifth +
      WINNING_PRICE.fourth * result.fourth +
      WINNING_PRICE.third * result.third +
      WINNING_PRICE.second * result.second +
      WINNING_PRICE.first * result.first;
    const purchaseAmount = lottoAmount * 1000;
    const profitPercent = (totalWinningPrice / purchaseAmount) * 100;
    profit = Math.round(profitPercent * 100) / 100;
  },
  compareNumbers() {
    lottos.forEach((lotto) => {
      this.winLotto(lotto);
    });
  },
  winLotto(lotto) {
    const numbersOfMatch = winningLotteryNumbers.filter((num) => lotto.includes(num)).length;

    switch (numbersOfMatch) {
      case 3:
        return (result.fifth += 1);
      case 4:
        return (result.fourth += 1);
      case 5:
        if (!lotto.includes(bonusNumber)) return (result.third += 1);
        return (result.second += 1);
      case 6:
        return (result.first += 1);
      default:
        return;
    }
  },
};

module.exports = InputView;
