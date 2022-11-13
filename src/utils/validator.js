const { MESSAGES } = require("../constraints");

/*validatePurchaseAmount(money:number):boolean
구입 금액을 유효성 검증하고, 통과 시 true 반환
 */
const validatePurchaseAmount = (money) => {
  if (isNaN(+money)) throw new Error(MESSAGES.BUYING.TYPE_EXCEPTION);
  if (+money % 1000 !== 0) throw new Error(MESSAGES.BUYING.UNIT_EXCEPTION);

  return true;
};

/* validateWiningNumber(numbers:string):Array
당첨 번호를 유효성 검증하고, 통과 시 당첨 번호 배열을 반환 */
const validateWiningNumber = (numbers) => {
  numbers = numbers.split(",").map((el) => +el);

  if (numbers.includes(NaN))
    throw new Error(MESSAGES.WINNING_NUMBERS.TYPE_EXCEPTION);
  if (numbers.length !== 6)
    throw new Error(MESSAGES.WINNING_NUMBERS.COUNT_EXCEPTION);
  if (numbers.filter((el) => +el < 1 || +el > 45).length > 0)
    throw new Error(MESSAGES.WINNING_NUMBERS.RANGE_EXCEPTION);
  if ([...new Set(numbers)].length !== 6)
    throw new Error(MESSAGES.WINNING_NUMBERS.DUPLICATION_EXCEPTION);

  return numbers;
};

const validateBonusNumber = (number) => {};

module.exports = {
  validatePurchaseAmount,
  validateWiningNumber,
  validateBonusNumber,
};
