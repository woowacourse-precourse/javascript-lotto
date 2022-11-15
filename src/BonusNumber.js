const ERROR_BONUS_IS_INT_MESSAGE = "[ERROR] 보너스 번호는 자연수여야 합니다.";
const ERROR_BONUS_VALUE_MESSAGE = "[ERROR] 보너스 번호는 1~45 사이의 숫자입니다."; 
const ERROR_BONUS_OVERLAP_MESSAGE = "[ERROR] 보너스 번호와 당첨 번호 중 중복되는 번호가 없어야 합니다.";

const validateBonusNumber = (bonusNum, winLotto) => {
    if(Number(bonusNum) % 1 !== 0) {
      throw new Error(ERROR_BONUS_IS_INT_MESSAGE);
    }
    if(Number(bonusNum) < 1 || 45 < Number(bonusNum)) {
      throw new Error(ERROR_BONUS_VALUE_MESSAGE);
    }
    if(winLotto.includes(bonusNum)) {
      throw new Error(ERROR_BONUS_OVERLAP_MESSAGE);
    }
}

module.exports = { validateBonusNumber };