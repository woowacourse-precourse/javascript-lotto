const pickLotto = require('./PickLotto');
const MissionUtils = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');
const LottoResult = require('./LottoResult');

class PlayLotto {
  cost = 0;
  userNumArray = [];
  answerLotto = [];
  bonus = 0;

  constructor() {
    this.PickLotto = new pickLotto();
  }

  playGame() {
    MissionUtils.Console.readLine('구입금액을 입력해 주세요.\n', (userCost) => {
      //숫자인지 아닌지 판단하는 식 (isNaN)
      if (isNaN(userCost)) throw '[ERROR] 숫자를 입력해 주세요.';
      else if (userCost % 1000 !== 0)
        throw '[ERROR] 1,000원 단위로 구매해야 합니다.';
      this.cost = parseInt(userCost);
      this.pickUserLotto(this.cost);
    });
  }

  pickUserLotto(cost) {
    const num = parseInt(cost / 1000);
    MissionUtils.Console.print(`${num}개를 구매했습니다.`);

    for (let i = 0; i < num; i++) {
      const numbers = this.PickLotto.pickRandomLotto();
      this.userNumArray.push(numbers);
    }

    this.userNumArray.map((lotto) => {
      MissionUtils.Console.print(`[${lotto.join(', ')}]`); //, 로 다시 정렬
    });
    this.pickRandomNum();
  }

  pickRandomNum() {
    MissionUtils.Console.readLine(
      '당첨 번호를 입력해 주세요.\n',
      (userInput) => {
        const numbers = userInput.split(',').map((number) => {
          if (parseInt(number) < 1 || parseInt(number) > 45)
            throw '[ERROR] 로또 번호는 1부터 45 사이의 숫자입니다.';
          if (isNaN(number)) throw '[ERROR] 숫자를 입력하세요.';
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
          throw '[ERROR] 로또 번호는 1부터 45 사이의 숫자입니다.';
        if (this.answerLotto.includes(number))
          throw '[ERROR] 보너스 번호가 중복되었습니다.';
        this.bonus = number;
        this.LottoResult = new LottoResult(
          this.userNumArray,
          this.answerLotto,
          this.bonus,
          this.cost
        );

        this.LottoResult.winLottoLogic();
      }
    );
  }
}

module.exports = PlayLotto;
