const {
  ERR_MONEY_MIN,
  ERR_ONLY_NUM,
  ERR_MONEY_UNIT,
  CMM_BUY_LOTTO,
  LOTTO_MIN_NUM,
  LOTTO_MAX_NUM,
  LOTTO_NUM_COUNT,
  RANK2_MONEY,
  RANK5_MONEY,
  RANK4_MONEY,
  RANK3_MONEY,
  RANK1_MONEY,
  RANK_NO_MONEY,
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
    const resultMap = new Map();
    this.#lottos.forEach((userLotto) => {
      const earn = this.checkRankWithOneLotto(userLotto.getNumbers(), winningNumList, bonusNum);
      if (resultMap.has(earn)) {
        resultMap.set(earn, resultMap.get(earn) + 1);
      } else {
        resultMap.set(earn, 1);
      }
      this.#earns += earn;
    });
    return resultMap;
  }
  checkRankWithOneLotto(userLottoNum, winningNumList, bonusNum) {
    //높은 순위부터 체크
    const answerList = [...winningNumList, bonusNum];
    const answerCount = this.count(userLottoNum, answerList);
    switch (answerCount) {
      case 3:
        return RANK5_MONEY;
      case 4:
        return RANK4_MONEY;
      case 5:
        return RANK3_MONEY;
      case 6:
        return this.checkRank1or2(bonusNum, userLottoNum);
      default:
        return RANK_NO_MONEY;
    }
  }
  checkRank1or2(bonusNum, userLottoNum) {
    if (userLottoNum.includes(bonusNum)) return RANK2_MONEY;
    return RANK1_MONEY;
  }
  count(userList, answerList) {
    //두 배열의 일치하는 원소의 갯수를 반환 (단, 두 배열은 모두 다른 6,7개의 숫자로 구성되어있어야함)
    let count = 0;
    userList.forEach((num) => {
      if (answerList.includes(num)) count += 1;
    });
    return count;
  }
  getEarns() {
    return this.#earns;
  }
}

module.exports = User;
