const MissionUtils = require('@woowacourse/mission-utils');
const Model = require('../Model/Model');

const { Console } = MissionUtils;

class View {
  constructor() {
    this.model = new Model();
  }

  showMoney(userMoney) {
    Console.print(`구입금액을 입력해 주세요. \n ${userMoney}`);
  }

  showGenLottos(lottoLists) {
    Console.print(`${lottoLists.length}개를 구매했습니다.`);
    lottoLists.forEach((lotto) => Console.print(`[${lotto}]`));
  }

  showUserLottosNumber() {
    Console.print(`당첨 번호를 입력해 주세요. ${this.model.userLottoNumber}`);
  }

  showUserBonusNumber() {
    Console.print(`보너스 번호를 입력해 주세요. ${this.model.userBonusNumber}`);
  }
}

module.exports = View;
