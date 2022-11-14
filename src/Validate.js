const MissionUtils = require("@woowacourse/mission-utils");

function validatePurchase(input) {
  if (isNaN(input)) {
    throw new Error("[ERROR] 구매 금액을 숫자로 입력해주세요.");
  }
  input = Number(input);
  if (input % 1000 !== 0 || !Number.isInteger(input)) {
    throw new Error("[ERROR] 구매 금액을 1000원 단위로 입력해주세요.");
  }
  if (input <= 0) {
    throw new Error("[ERROR] 유효한 구매 금액을 입력해주세요.");
  }
}
function validateBonusNumber(numbers, bonusNumber) {
  if (isNaN(bonusNumber)) {
    throw new Error("[ERROR] 보너스 번호를 숫자로 입력해주세요.");
  }
  if (numbers.indexOf(bonusNumber) > 0) {
    throw new Error("[ERROR] 당첨 번호를 제외한 숫자를 입력해주세요.");
  }
  bonusNumber = Number(bonusNumber);
  if (bonusNumber > 45 || bonusNumber < 1) {
    throw new Error("[ERROR] 1~45 범위의 숫자를 입력해주세요.");
  }
}
module.exports = { validateBonusNumber, validatePurchase };
