const MissionUtils = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');

class App {
  constructor() {
    this.purchase;
  }
  play() {
    let amount;
    let LottoList;

    this.purchase = this.Input('구입금액을 입력해 주세요.\n');
    if (this.purchase === undefined) return 0;
    this.CheckError();

    amount = this.getQuantity();
    LottoList = this.LottoNum(amount);
    this.PrintLottoList(amount);
  }

  Input(text) {
    let result;
    MissionUtils.Console.readLine(text, (answer) => {
      result = answer;
    });
    return result;
  }

  CheckError() {
    let regex = /^[0-9]+$/;

    if (this.purchase === undefined || this.purchase === null) {
      MissionUtils.Console.close();
      throw new Error('[ERROR] 입력된 값이 없습니다.');
    }
    if (!regex.test(this.purchase)) {
      MissionUtils.Console.close();
      throw new Error('[ERROR] 숫자 범위를 확인해주세요');
    }
  }

  getQuantity() {
    let amount = Number(this.purchase);
    if (amount % 1000 !== 0) {
      MissionUtils.Console.cose();
      throw new Error('[ERROR] 구입 금액이 1000원 단위가 아닙니다.');
    }
    let result = amount / 1000;
    return result;
  }

  LottoNum(amount) {
    let LottoList = [];
    for (let i = 0; i < amount; i++) {
      LottoList.push(this.randomNum());
    }
    return LottoList;
  }

  randomNum() {
    const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    return numbers;
  }

  LottoListSort(LottoList) {
    LottoList?.forEach((element) => {
      let str = `[`;
      element.forEach((val) => {
        str += val;
        str += `, `;
      });
      str = str.slice(0, str.length - 2);
      str += `]`;
      MissionUtils.Console.print(str);
    });
  }
}

module.exports = App;
