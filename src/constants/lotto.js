const WINNING_NUMBER_COUNT = 6

const range = {
  MIN: 1,
  MAX: 45,
}

const validationError = {
  TYPE: `[ERROR] 당첨 번호와 보너스 번호는 정수여야 합니다.`,
  WINNING_NUMBER_COUNT: `[ERROR] 당첨 번호는 ,로 구분하여 ${WINNING_NUMBER_COUNT}개를 입력해야 합니다.`,
  RANGE: `[ERROR] 당첨 번호와 보너스 번호는 ${range.MIN}부터 ${range.MAX} 사이여야 합니다.`,
  DUPLICATION: `[ERROR] 당첨 번호와 보너스 번호에 중복된 정수가 존재하면 안 됩니다.`,
}

module.exports = {
  WINNING_NUMBER_COUNT,
  range,
  validationError,
}
