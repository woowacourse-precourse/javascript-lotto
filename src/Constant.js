const INPUT_MESSAGES = {
  MONEY: "구입금액을 입력해주세요.\n",
  WINNING_NUMBERS: "\n당첨 번호를 입력해주세요.\n",
  BONUS_NUMBER: "보너스 번호를 입력해주세요.\n"
}

const OUTPUT_MESSAGES = {
  WINNING_STAT: "\n당첨 통계\n---",
  PRIZE_5: "3개 일치 (5,000원)",
  PRIZE_4: "4개 일치 (50,000원)",
  PRIZE_3: "5개 일치 (1,500,000원)",
  PRIZE_2: "5개 일치, 보너스 볼 일치 (30,000,000원)",
  PRIZE_1: "6개 일치 (2,000,000,000원)",
}

const ERROR_MESSAGES = {
  ERROR_MONEY: "[ERROR] 유효하지 않은 값을 입력하셨습니다. 다시 확인하세요.",
  ERROR_WINNING_NUMBER: "[ERROR] 로또 번호는 6개여야 합니다.",
  ERROR_OVERLAP: "[ERROR] 로또 번호는 중복되지 않아야 합니다.",
  ERROR_NOT_RANGE: "[ERROR] 로또 번호가 유효하지 않습니다. 1부터 45까지의 자연수를 입력해주세요.",
  ERROR_BONUS_NUMBER: "[ERROR] 보너스 번호가 유효하지 않습니다. 1부터 45까지의 자연수를 입력해주세요.",
  ERROR_INCLUDE_WINNING_NUMBER: "[ERROR] 당첨 번호에 보너스 번호가 포함됩니다. 당첨번호에 포함하지 않는 수를 입력해주세요."

}

const PRIZE_REWARD = {
  REWARD_PRIZE_5: 5000,
  REWARD_PRIZE_4: 50000,
  REWARD_PRIZE_3: 1500000,
  REWARD_PRIZE_2: 30000000,
  REWARD_PRIZE_1: 2000000000
}

const LOTTO_INFO_VALUES = {
  LOTTO_COST: 1000,
  MIN_LOTTO_NUMBER: 1,
  MAX_LOTTO_NUMBER: 45,
  NUMBER_OF_WINNING_NUMBER: 6,
  NUMBER_OF_BONUS_NUMBER: 1,
  ADD_CORRECT_NUMBER: 1,
  COUNT_WINNING: 1,
  GET_PRIZE_2: 2
}

const INITIALIZE_VALUES = {
  ZERO: 0,
  REPLACE_BEFORE: / /g,
  REPLACE_AFTER: '',
  SPLIT_CHAR: ',',
  PRINT_RATE_COMMA: /\B(?=(\d{3})+(?!\d))/g
}

module.exports = {
  INPUT_MESSAGES,
  OUTPUT_MESSAGES,
  ERROR_MESSAGES,
  PRIZE_REWARD,
  LOTTO_INFO_VALUES,
  INITIALIZE_VALUES
};