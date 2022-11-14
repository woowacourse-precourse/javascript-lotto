const MESSAGE = {
  PROMPT_MONEY : '구입금액을 입력해 주세요.',
  PROMPT_LOTTO : '당첨 번호를 입력해 주세요.',
  PROMPT_BONUS : '보너스 번호를 입력해 주세요.',
  RESULT_STATISTICS : '\n당첨 통계\n---'
};

const ERROR_MESSAGE = {
  UNIT_ERROR : "[ERROR] 1,000원 단위의 금액이어야 합니다.",
  BONUS_RANGE_ERROR : "[ERROR] 보너스 번호로 1부터 45까지의 숫자만 입력할 수 있습니다.",
  BONUS_SAME_ERROR : "[ERROR] 보너스 번호로 당첨 번호와 중복된 숫자를 입력할 수 없습니다.",
  LOTTO_NUMBER_ERROR : "[ERROR] 로또 번호는 6개여야 합니다.",
  LOTTO_SAME_ERROR : "[ERROR] 로또 번호는 중복되지 않는 숫자여야 합니다.",
  LOTTO_RANGE_ERROR : "[ERROR] 로또 번호는 1부터 45까지의 숫자여야 합니다.",
  INPUT_CHARACTER_ERROR : "[ERROR] 숫자와 쉼표를 제외한 문자는 입력할 수 없습니다."
};

const MONEY = {
  THREE_SAME_MONEY : '5000',
  FOUR_SAME_MONEY : '50000',
  FIVE_SAME_MONEY : '1500000',
  FIVE_BONUS_SAME_MONEY : '30000000',
  SIX_SAME_MONEY : '2000000000',
  LOTTO_PRICE : 1000
};

module.exports = { MESSAGE, MONEY, ERROR_MESSAGE };