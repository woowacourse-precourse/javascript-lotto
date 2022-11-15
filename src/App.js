const MissionUtils = require('@woowacourse/mission-utils');

class App {
  checkMoney(input) {
    if (isNaN(input)) {
      MissionUtils.Console.print('error : ' + input);
      throw new Error('[ERROR] 숫자가 아닙니다.');
    }
  }

  buyLotto(input) {
    let count = Math.floor(input / 1000);
    let lotto = [];
    MissionUtils.Console.print(count + '개를 구매했습니다.');
    for (let i = 0; i < count; i++) {
      //로또 번호 오름차순으로 정렬 해야됨
      let numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      lotto.push(numbers);
    }
    for (let j = 0; j < count; j++) {
      MissionUtils.Console.print(lotto[j]);
    }
    // let lotto = this.pickNumber(count);
    return lotto;
  }

  lottoNumber() {
    let winning = [];
    let bonus = 0;
    MissionUtils.Console.readLine('당첨 번호를 입력해 주세요.', (numbers) => {
      // 중복 검사
      let winning_number = numbers.split(',');
      winning = winning_number;
      MissionUtils.Console.print('당첨 번호 : ' + winning);
    });

    MissionUtils.Console.readLine('보너스 번호를 입력해 주세요.', (add) => {
      // 중복 검사
      bonus = Number(add);
      MissionUtils.Console.print('보너스 번호 : ' + bonus);
    });
    MissionUtils.Console.print('result : ' + winning + bonus);
    return [winning, bonus];
  }

  winningConfirmation() {
    MissionUtils.Console.print(this.lottoNumber());
  }

  inputMoney() {
    MissionUtils.Console.readLine('구입금액을 입력해 주세요.', (input) => {
      this.checkMoney(input);
      let lotto = this.buyLotto(input);
      return lotto;
    });
  }

  play() {
    MissionUtils.Console.print(this.inputMoney());
    this.lottoNumber();
    this.winningConfirmation();
  }
}

module.exports = App;
