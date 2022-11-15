const MissionUtils = require('@woowacourse/mission-utils');
const Lotto = require('../Model/Lotto');
const Validation = require('../Utilities/Validation');
const View = require('../View/View');
const {
  LOTTO_RANK,
  LOTTO_PRIZE,
  MESSAGE,
  LOTTO_SPEC,
} = require('../Constants');

const { Console } = MissionUtils;

class Controller {
  constructor(model) {
    this.model = model;
    this.validation = new Validation();
    this.view = new View();
  }

  start() {
    this.getUserMoneyAndGenWinningNumbers();
    this.getUserLottoNumber();
    this.getUserBonusNumber();
    this.getUserLottoResult();
    this.getUserRateOfReturn();
  }

  getUserMoneyAndGenWinningNumbers() {
    Console.readLine(MESSAGE.INPUT_MONEY, (userMoney) => {
      const userInput = userMoney.replace(/\s/g, '');
      this.model.userMoney = this.validation.isValidUserMoney(userInput);
      this.model.lottoLists = this.genWinningNumbersAsMoney(userInput);
      this.view.showMoney(this.model.userMoney);
      this.view.showGenLottos(this.model.lottoLists);
    });
  }

  genWinningNumbersAsMoney(userMoney) {
    const lottoList = Array.from({
      length: Number(userMoney / LOTTO_SPEC.MIN_COST),
    });
    return lottoList.map(() => {
      const lotto = new Lotto();
      return lotto.genWinningNumbers;
    });
  }

  getUserLottoNumber() {
    Console.readLine(MESSAGE.INPUT_LOTTONUMBERS, (userLottoNumber) => {
      this.model.userLottoNumber = this.validation.isValidUserLottoNumber(
        userLottoNumber.replace(/\s/g, ''),
      );
      this.view.showUserLottosNumber(userLottoNumber);
    });
  }

  getUserBonusNumber() {
    Console.readLine(MESSAGE.INPUT_BONUSNUMBER, (userBonusNumber) => {
      this.model.userBonusNumber = this.validation.isValidBonusNumber(
        userBonusNumber.replace(/\s/g, ''),
      );
      this.view.showUserBonusNumber(userBonusNumber);
    });
  }

  getUserLottoResult() {
    const { lottoLists, userLottoNumber, userBonusNumber } = this.model;
    const finalResults = lottoLists.map(
      (lotto) => lotto.filter((num) => userLottoNumber.includes(num)).length,
    );
    this.genLottoResults(finalResults, userBonusNumber);
  }

  genLottoResults(finalResults, bonus) {
    finalResults.forEach((correctNum) => {
      this.compareLottos(correctNum, bonus);
    });
    this.view.showUserLottoResults(this.model.lottoResults);
  }

  compareLottos(correctNum, bonus) {
    const { lottoResults } = this.model;
    if (correctNum === LOTTO_RANK.FIVE) lottoResults.five_th += 1;
    if (correctNum === LOTTO_RANK.FOUR) lottoResults.four_th += 1;
    if (correctNum === LOTTO_RANK.THREE) {
      lottoResults.three_rd += 1;
      if (bonus === this.model.userBonusNumber) {
        lottoResults.two_nd += 1;
      }
    }
    if (correctNum === LOTTO_RANK.ONE) lottoResults.one_st += 1;
  }

  getUserRateOfReturn() {
    const { lottoResults, userMoney } = this.model;
    const prizeByRank = [
      LOTTO_PRIZE.FIVE_TH,
      LOTTO_PRIZE.FOUR_TH,
      LOTTO_PRIZE.THREE_RD,
      LOTTO_PRIZE.TWO_ND,
      LOTTO_PRIZE.ONE_ST,
    ];
    const userPrize = Object.values(lottoResults).reduce(
      (sum, rank, idx) => sum + rank * prizeByRank[idx],
      0,
    );
    this.view.showUserRateOfReturn(((userPrize * 100) / userMoney).toFixed(1));
  }
}

module.exports = Controller;
