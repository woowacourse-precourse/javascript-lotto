const MissionUtils = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');

class App {
  constructor() {
    this.purchase;
  }
  play() {
    let amount;
    let LottoList;
    let WinningNum;
    let BonusNum;
    let result;
    let YieldAmount;

    this.purchase = this.Input('구입금액을 입력해 주세요.\n');
    if (this.purchase === undefined) return 0;
    this.CheckError();

    amount = this.getQuantity();
    LottoList = this.LottoNum(amount);
    this.PrintLottoList(amount);

    WinningNum = this.Input('당첨 번호를 입력해 주세요.');
    WinningNum = this.InputArrangment(WinningNum);
    BonusNum = this.Input('보너스 번호를 입력해 주세요.');

    const lotto = new Lotto(WinningNum);

    result = lotto.CompareResult(BonusNum, LottoList);
    YieldAmount = this.CalcYield(result);

    this.FinalResult(result, YieldAmount);
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

  InputArrangment(WinningNum) {
    let result = WinningNum.split(',').map(function (value) {
      return parseInt(value, 10);
    });
    return result;
  }

  CalcYield(result) {
    let YieldAmount =
      result[0] * 5000 +
      result[1] * 50000 +
      result[2] * 1500000 +
      result[3] * 30000000 +
      result[4] * 2000000000;
    YieldAmount = (YieldAmount / this.purchase) * 100;
    YieldAmount.toFixed(1);
    return YieldAmount;
  }

  FinalResult(result, YieldAmount) {
    MissionUtils.Console.print(`당첨 통계`);
    MissionUtils.Console.print(`---`);
    MissionUtils.Console.print(`3개 일치 (5,000원) - ${result[0]}개`);
    MissionUtils.Console.print(`4개 일치 (50,000원) - ${result[1]}개`);
    MissionUtils.Console.print(`5개 일치 (1,500,000원) - ${result[2]}개`);
    MissionUtils.Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${result[3]}개`
    );
    MissionUtils.Console.print(`6개 일치 (2,000,000,000원) - ${result[4]}개`);
    MissionUtils.Console.print(`총 수익률은 ${YieldAmount}%입니다.`);
    MissionUtils.Console.print(`총 수익률은 ${YieldAmount}%입니다.`);
  }
}

module.exports = App;
