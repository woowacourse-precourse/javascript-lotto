const pickLotto = require('./PickLotto');
const MissionUtils = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');

class playLotto {
  cost = 0;
  userNumArray = [];
  answerLotto = [];
  bonus = 0;
  constructor() {
    this.PickLotto = new pickLotto();
  }

  playGame() {
    MissionUtils.Console.readLine('구입금액을 입력해 주세요.\n', (userCost) => {
      if (typeof userCost !== Number) throw '[ERROR] 숫자를 입력해 주세요.';
      else if (userCost % 1000 !== 0)
        throw '[ERROR] 1,000원 단위로 구매해야 합니다.';
      this.cost = parseInt(userCost);
      this.pickUserLotto(cost);
    });
  }

  pickUserLotto(cost) {
    const num = parseInt(cost / 1000);
    MissionUtils.Console.print(`${num}개를 구매했습니다.`);
    for (i in num) {
      const numbers = MissionUtils.Random.pickUniqueNumbersInRange(
        1,
        45,
        6
      ).sort();
      userNumArray.push(numbers);
    }

    userNumArray.map((lotto) => {
      MissionUtils.Console.print(lotto);
    });
    this.pickRandomNum();
  }

  pickRandomNum() {
    MissionUtils.Console.readLine(
      '당첨 번호를 입력해 주세요.\n',
      (userInput) => {
        const numbers = userInput.split(',').map((number) => {
          if (number < 1 || number > 45)
            throw '[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.';
          return parseInt(number);
        });
        new Lotto(numbers);
        this.answerLotto = numbers;
        this.pickBonus();
      }
    );
  }

  pickBonus() {
    MissionUtils.Console.readLine(
      '보너스 번호를 입력해 주세요.\n',
      (userInput) => {
        const number = parseInt(userInput);
        if (number < 1 || number > 45)
          throw '[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.';
        if (this.answerLotto.includes(number))
          throw '[ERROR] 보너스 번호가 중복되었습니다.';
        this.bonus = number;
      }
    );
  }
}
