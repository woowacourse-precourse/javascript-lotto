const { MESSAGES } = require("../constraints");

/*validatePurchaseAmount(money:number):boolean
구입 금액을 유효성 검증하고, 통과 시 true 반환
 */
const validatePurchaseAmount = (money) => {
  if (isNaN(+money))
    throw new Error(MESSAGES.EXCEPTIONS.PURCHASE.TYPE_EXCEPTION);
  if (+money % 1000 !== 0)
    throw new Error(MESSAGES.EXCEPTIONS.PURCHASE.UNIT_EXCEPTION);

  return true;
};

/* validateWiningNumber(numbers:string):Array
당첨 번호를 유효성 검증하고, 통과 시 당첨 번호 배열을 반환 */
const validateWiningNumber = (numbers) => {
  numbers = numbers.split(",").map((el) => +el);

  if (numbers.includes(NaN))
    throw new Error(MESSAGES.EXCEPTIONS.TYPE_EXCEPTION);
  if (numbers.length !== 6)
    throw new Error(MESSAGES.EXCEPTIONS.COUNT_EXCEPTION);
  if (numbers.filter((el) => +el < 1 || +el > 45).length > 0)
    throw new Error(MESSAGES.EXCEPTIONS.RANGE_EXCEPTION);
  if ([...new Set(numbers)].length !== 6)
    throw new Error(MESSAGES.EXCEPTIONS.DUPLICATION_EXCEPTION);

  return numbers;
};

const validateBonusNumber = (number) => {
  number = +number;
  if (number === NaN) throw new Error(MESSAGES.EXCEPTIONS.TYPE_EXCEPTION);
  if (number < 1 || number > 45)
    throw new Error(MESSAGES.EXCEPTIONS.RANGE_EXCEPTION);
};

module.exports = {
  validatePurchaseAmount,
  validateWiningNumber,
  validateBonusNumber,
};
