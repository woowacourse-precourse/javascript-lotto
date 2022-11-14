const MissionUtils = require('@woowacourse/mission-utils');
const Lotto = require('../Model/Lotto');
const Validation = require('../Utilities/Validation');
const View = require('../View/View');
const { LOTTO_RANK } = require('../Constants');
const { Console } = MissionUtils;

class Controller {
  constructor(model) {
    this.model = model;
    this.validation = new Validation();
    this.view = new View();
  }

  getUserMoneyAndLottos() {
    Console.readLine('구입금액을 입력해 주세요.', (userMoney) => {
      const userInput = userMoney.replace(/\s/g, '');
      this.model.userMoney = this.validation.isValidUserMoney(userInput);
      this.model.lottoLists = this.genLottoAsMoney(userInput);
      this.view.showMoney(this.model.userMoney);
      this.view.showGenLottos(this.model.lottoLists);
    });
  }

  genLottoAsMoney(userMoney) {
    const lottoList = Array.from({ length: Number(userMoney / 1000) });
    return lottoList.map(() => {
      const lotto = new Lotto();
      return lotto.genLotto;
    });
  }

  getUserLottoNumber() {
    Console.readLine('당첨 번호를 입력해 주세요.', (userLottoNumber) => {
      this.model.userLottoNumber = this.validation.isValidUserLottoNumber(
        userLottoNumber.replace(/\s/g, ''),
      );
      this.view.showUserLottosNumber(userLottoNumber);
    });
  }

  getUserBonusNumber() {
    Console.readLine('보너스 번호를 입력해 주세요.', (userBonusNumber) => {
      this.model.userBonusNumber = this.validation.isValidBonusNumber(
        userBonusNumber.replace(/\s/g, ''),
      );
      this.view.showUserBonusNumber(userBonusNumber);
    });
  }

  getTest() {
    this.getUserMoneyAndLottos();
    this.getUserLottoNumber();
    this.getUserBonusNumber();
    this.getUserLottoResult();
  }

  getUserLottoResult() {
    const { lottoLists, userLottoNumber, userBonusNumber } = this.model;
    const results = lottoLists.map(
      (lotto) => lotto.filter((num) => userLottoNumber.includes(num)).length,
    );
    this.getUserChart(results, userBonusNumber);
  }

  getUserChart(results, bonus) {
    results.forEach((correctNum) => {
      this.compareLottos(correctNum, bonus);
    });
    this.view.showUserLottoResults(this.model.lottoResults);
  }

  compareLottos(correctNum, bonus) {
    const { lottoResults } = this.model;
    if (correctNum === LOTTO_RANK.FIVE) lottoResults.five += 1;
    if (correctNum === LOTTO_RANK.FOUR) lottoResults.four += 1;
    if (correctNum === LOTTO_RANK.THREE) {
      lottoResults.three += 1;
      if (bonus === this.model.userBonusNumber) {
        lottoResults.two += 1;
      }
    }
    if (correctNum === LOTTO_RANK.ONE) lottoResults.one += 1;
  }
}

module.exports = Controller;
