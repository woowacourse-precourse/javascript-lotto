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

  showUserLottosNumber(userLottoNumber) {
    Console.print(`당첨 번호를 입력해 주세요. ${userLottoNumber}`);
  }

  showUserBonusNumber(userBonusNumber) {
    Console.print(`보너스 번호를 입력해 주세요. ${userBonusNumber}`);
  }

  showUserLottoResults(lottoResults) {
    const resultMessages = [
      '3개 일치 (5,000원) - ',
      '4개 일치 (50,000원) - ',
      '5개 일치 (1,500,000원) - ',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - ',
      '6개 일치 (2,000,000,000원) - ',
    ];
    Object.values(lottoResults).forEach((count, idx) => {
      Console.print(`${resultMessages[idx]} ${count}개`);
    });
  }
}

module.exports = View;
