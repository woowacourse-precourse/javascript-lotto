const PURCHASE_ERROR_MESSAGE = {
  INPUT_ONLY_NUMBER: '[ERROR] 구매 금액은 숫자만 입력해주세요.',
  INPUT_VALID_UNIT: '[ERROR] 1000원 단위로 입력해주세요.',
}

const WINNING_ERROR_MESSAGE = {
  INPUT_SEPARATION_NUMBER: '[ERROR] 각 번호를 콤마로 구분하여 입력해주세요.',
  INPUT_SIX_NUMBER: '[ERROR] 당첨 번호 6개를 입력해주세요.',
  INPUT_ONLY_NUMBER: '[ERROR] 당첨 번호는 숫자만 입력해주세요.',
  INPUT_WITHIN_RANGE: '[ERROR] 당첨 번호는 1 ~ 45 범위의 숫자로 입력해주세요.',
  INPUT_DIFFERENT_NUMBER: '[ERROR] 당첨 번호를 중복 없이 입력해주세요.',
}

const BONUS_ERROR_MESSAGE = {
  INPUT_ONLY_NUMBER: '[ERROR] 보너스 번호는 숫자를 입력해주세요.',
  INPUT_WITHIN_RANGE: '[ERROR] 보너스 번호는 1 ~ 45 범위의 숫자로 입력해주세요.',
  INPUT_NON_WINNING_NUMBER: '[ERROR] 보너스 번호는 당첨 번호에 없는 숫자를 입력해주세요.',
}

const PROCESS_MESSAGE = {
  INPUT_PURCHASE_AMOUNT: '구입금액을 입력해 주세요.',
  INPUT_WINNING_NUMBER: '당첨번호를 입력해 주세요.',
  INPUT_BONUS_NUMBER: '보너스 번호를 입력해 주세요.',
}

module.exports = {
  PURCHASE_ERROR_MESSAGE,
  WINNING_ERROR_MESSAGE,
  BONUS_ERROR_MESSAGE,
  PROCESS_MESSAGE,
}