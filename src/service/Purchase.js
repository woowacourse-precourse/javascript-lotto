const {
  GAME_MESSAGES,
  ERROR_MESSAGES,
  NUMBERS,
} = require("../constants/constants");
const { Console, Random } = require("@woowacourse/mission-utils");
const { isDuplicated, isOutOfRange } = require("../utils/utils");

class Purchase {
  constructor(cost) {
    this.amountOfLotto = this.purchaseLotto(cost);
    this.lottoNumbers = this.getAllPurchasedLottos(this.amountOfLotto);

    this.printResult();

    return this.lottoNumbers;
  }

  validateCost = (cost) => {
    if (cost / NUMBERS.MIN_COST_NUM !== Math.floor(cost / NUMBERS.MIN_COST_NUM))
      throw new Error(ERROR_MESSAGES.INVALID_COST_UNIT);
    if (cost < NUMBERS.MIN_COST_NUM || cost > NUMBERS.MAX_COST_NUM)
      throw new Error(ERROR_MESSAGES.INVALID_COST_RANGE);

    return true;
  };
  purchaseLotto = (cost) => {
    this.validateCost(cost);
    this.amountOfLotto = Number(cost) / 1000;

    return this.amountOfLotto;
  };

  generateOneLotto = () => {
    const sixRandomNumber = Random.pickUniqueNumbersInRange(1, 45, 6);

    return sixRandomNumber.sort((a, b) => a - b);
  };
  getAllPurchasedLottos = (amount) => {
    const lottoNumbers = [];

    for (let i = 0; i < amount; i++) {
      lottoNumbers.push(this.generateOneLotto());
    }
    this.validateLottoNumbers(amount, lottoNumbers);
    this.lottoNumbers = lottoNumbers;

    return lottoNumbers;
  };

  validateLottoNumbers = (amount, lottoNumbers) => {
    lottoNumbers.forEach((eachLotto) => {
      if (eachLotto.length !== 6)
        throw new Error(ERROR_MESSAGES.INVALID_LOTTO_LENGTH);
      if (isDuplicated(eachLotto))
        throw new Error(ERROR_MESSAGES.DUPLICATED_LOTTO_NUM);
      if (isOutOfRange(eachLotto))
        throw new Error(ERROR_MESSAGES.INVALID_LOTTO_RANGE);
    });

    if (lottoNumbers.length !== amount)
      throw new Error(ERROR_MESSAGES.INVALID_LOTTO_AMOUNT);

    return true;
  };

  printResult = () => {
    Console.print(GAME_MESSAGES.RETURN_PURCHASED_AMOUNT(this.amountOfLotto));
    this.lottoNumbers.forEach((number) =>
      Console.print(`[${number.join(", ")}]`)
    );
  };
}

module.exports = Purchase;
