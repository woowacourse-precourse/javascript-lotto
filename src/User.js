const {
  ERR_MONEY_MIN,
  ERR_ONLY_NUM,
  ERR_MONEY_UNIT,
  CMM_BUY_LOTTO,
  LOTTO_MIN_NUM,
  LOTTO_MAX_NUM,
  LOTTO_NUM_COUNT,
} = require('./Constants');
const { Console, Random } = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');

class User {
  #money;
  #lottoCnt;
  #lottos = [];
  #earns = 0;
  toString() {
    console.log(`${this.#money}, ${this.#lottoCnt}`);
  }
  constructor(money) {
    this.#money = money;
    this.#lottoCnt = this.buyLotto(money);
    this.makeLotto(this.#lottoCnt);
    Console.print(`\n${this.#lottoCnt}${CMM_BUY_LOTTO}`);
  }
  makeLotto(lottoCnt) {
    for (let i = 0; i < lottoCnt; i++) {
      const randomNum = Random.pickUniqueNumbersInRange(
        LOTTO_MIN_NUM,
        LOTTO_MAX_NUM,
        LOTTO_NUM_COUNT
      );
      const lotto = new Lotto(randomNum);
      this.#lottos.push(lotto);
    }
  }
  buyLotto(money) {
    this.validateMoneyInput(money);
    return money / 1000;
  }
  printUsersLottos() {
    this.#lottos.forEach((e) => e.toString());
  }
  validateMoneyInput(money) {
    const money_int = parseInt(money);
    if (!money_int || !Number.isInteger(money_int)) {
      throw new Error(ERR_ONLY_NUM);
    }
    if (money_int < 1000) {
      throw new Error(ERR_MONEY_MIN);
    }
    if (money_int % 1000 !== 0) {
      throw new Error(ERR_MONEY_UNIT);
    }
  }
  checkRankWithUserLottos(winningNumList, bonusNum) {
    const resultList = [];
    this.#lottos.forEach((userLotto) =>
      resultList.push(this.checkRankWithOneLotto(userLotto.getNumbers(), winningNumList, bonusNum))
    );
    return resultList;
  }
  checkRankWithOneLotto(userLottoNum, winningNumList, bonusNum) {
    //높은 순위부터 체크
    const answerList = [...winningNumList, bonusNum];
    if (this.count(userLottoNum, answerList) === 6 && this.count([bonusNum], userLottoNum) === 1) {
      return '5개 보너스';
    }
    return `${this.count(userLottoNum, answerList)}개`;
  }
  count(userList, answerList) {
    //두 배열의 일치하는 원소의 갯수를 반환 (단, 두 배열은 모두 다른 6,7개의 숫자로 구성되어있어야함)
    console.log(userList, answerList);
    let count = 0;
    userList.forEach((num) => {
      if (answerList.includes(num)) count += 1;
    });
    return count;
  }
}

module.exports = User;
