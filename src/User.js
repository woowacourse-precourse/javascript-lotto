const MissionUtils = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');
const RandomNums = require('./RandomNums');

const REGEX_NUM = /^[0-9]+$/;
const PRICE_PER_LOTTO = 1000;

class User {
  readInput() {
    MissionUtils.Console.readLine('구입금액을 입력해 주세요.\n', (money) => {
      this.validateMoney(money);
      this.makeLotto();
    });
  }

  validateMoney(money) {
    User.checkIsNum(money);
    this.checkRightAmountMoney(money);
    this.money = money;
  }

  static checkIsNum(input) {
    if (REGEX_NUM.test(input) === false) {
      throw new Error('[ERROR] 로또 번호는 숫자만 입력해야 합니다.\n');
    }
  }

  checkRightAmountMoney(money) {
    if (Number(money) % PRICE_PER_LOTTO !== 0) {
      throw new Error('[ERROR] 금액은 1,000원 단위로만 입력할 수 있습니다.');
    }
  }

  makeLotto() {
    const amount = this.getAmount();
    this.randomNums = new RandomNums();
    this.readLottoNums();
  }

  getAmount() {
    return this.money / PRICE_PER_LOTTO;
  }

  readLottoNums() {
    MissionUtils.Console.readLine('당첨 번호를 입력해 주세요.\n', (numbers) => {
      this.lotto = new Lotto(numbers.split(','));
      this.readBonusNum();
    });
  }

  readBonusNum() {
    MissionUtils.Console.readLine(
      '보너스 번호를 입력해 주세요.\n',
      (number) => {
        this.validateBonusNum(number);
      }
    );
  }

  validateBonusNum(number) {
    User.checkIsNum(number);
    this.lotto.checkNumRange(number);
    this.bonusNum = number;
  }
}

module.exports = User;
