const MissionUtils = require("@woowacourse/mission-utils");
const STATIC = require("./Static");
const UserLotto = require("./UserLotto");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.validateIsNum(numbers);
    this.validateIsRange(numbers);
    this.validateIsDuplicate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  validateIsNum = (numbers) => {
    numbers.map((e) => {
      if (isNaN(parseInt(e))) {
        throw new Error(STATIC.MESSAGE.ERR_INPUT);
      }
    });
  };

  validateIsRange = (numbers) => {
    numbers.map((e) => {
      if (e >= 45 || e < 1) {
        throw new Error(STATIC.MESSAGE.ERR_INPUT);
      }
    });
  };
  // TODO: 추가 기능 구현

  validateIsDuplicate = (numbers) => {
    numbers.map((number, idx) => {
      if (!this.duplicateCheck([...numbers], idx, number)) {
        throw new Error(STATIC.MESSAGE.ERR_DUPLICATE);
      }
    });
  };

  duplicateCheck = (answer, idx, val) => {
    answer.splice(idx, 1);
    return answer.every((e) => e != val);
  };
}

inputLottoNum = () => {
  MissionUtils.Console.readLine(STATIC.MESSAGE.LUCKY, (number) => {
    const lotto = new Lotto(number.split(","));
  });
};

inputBonusNum = () => {
  MissionUtils.Console.readLine(STATIC.MESSAGE.BONUS, (number) => {});
};

buyMoneyError = (money) => {
  if (money % 1000 != 0) {
    throw new Error(STATIC.MESSAGE.ERR_BUY);
  }
};

buyLotto = (lotto) => {
  MissionUtils.Console.readLine(STATIC.MESSAGE.BUYMONEY, (money) => {
    buyMoneyError(money);
    MissionUtils.Console.print(money / 1000 + STATIC.MESSAGE.BUYNUM);
    const userPickLotto = createUserLotto(money);
    inputLottoNum();
  });
};

createUserLotto = (money) => {
  return [...Array(money / 1000).keys()].map(() => {
    const randLotto = new UserLotto().number;
    MissionUtils.Console.print(randLotto);
    return randLotto;
  });
};

LottoGame = () => {
  buyLotto();
};

exports.Lotto = Lotto;
exports.LottoGame = LottoGame;
