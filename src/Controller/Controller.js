const MissionUtils = require('@woowacourse/mission-utils');
const Model = require('../Model/Model');
const Lotto = require('../Model/Lotto');
const Validation = require('../Utilities/Validation');
const View = require('../View/View');

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
    const lottoList = Array.from(
      { length: Number(userMoney / 1000) },
      () => [],
    );

    return lottoList.map(() => {
      const lotto = new Lotto();
      return [...lotto.genLotto];
    });
  }

  getUserLottos() {
    Console.readLine('당첨 번호를 입력해 주세요.', (userLottoNumber) => {
      this.model.userLottoNumber = this.isValidUserLottoNumber(
        userLottoNumber.replace(/\s/g, ''),
      );
      this.view.showUserLottosNumber();
    });
  }

  getUserBonusNumber() {
    Console.readLine('보너스 번호를 입력해 주세요.', (userBonusNumber) => {
      this.model.userBonusNumber = this.validation.isValidBonusNumber(
        userBonusNumber.replace(/\s/g, ''),
      );
      this.view.showUserBonusNumber();
    });
  }
}

module.exports = Controller;
