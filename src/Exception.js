const validateSixLength = (arr) => {
  if (arr.length !== 6) throw new Error("[ERROR] 당첨 번호는 6개여야 합니다.");
};

const validatePurchaseAmount = (amount) => {
  if (amount < 1000)
    throw new Error("[ERROR] 구입 금액은 1000원 이상이어야 합니다.");
  if (amount % 1000 !== 0)
    throw new Error("[ERROR] 구입 금액은 1000원 단위여야 합니다.");
  return amount / 1000;
};

const validateNumber = (num) => {
  num.forEach((el) => {
    if (isNaN(el)) throw new Error("[ERROR] 숫자를 입력해 주세요");
    if (el < 1 || el > 45)
      throw new Error("[ERROR] 1 ~ 45 범위 내 숫자를 입력해 주세요");
  });
};

const validateBonusDuplicate = (bonus, winNum) => {
  if (winNum.includes(bonus))
    throw new Error("[ERROR] 보너스 숫자가 당첨 숫자에 포함됩니다.");
};

const validateBlank = (arr) => {
  arr.forEach((el) => {
    if (el.split("").includes(" "))
      throw new Error("[ERROR] 당첨 번호는 형식을 지켜주세요.");
  });
};

module.exports = {
  validateSixLength,
  validatePurchaseAmount,
  validateNumber,
  validateBonusDuplicate,
  validateBlank,
};
