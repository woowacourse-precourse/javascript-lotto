const REWARDS = [0, 5000, 50000, 1500000, 30000000, 2000000000]
const RANK_MESSAGE = ['', 
  '3개 일치 (5,000원) - ',
  '4개 일치 (50,000원) - ', 
  '5개 일치 (1,500,000원) - ', 
  '5개 일치, 보너스 볼 일치 (30,000,000원) - ', 
  '6개 일치 (2,000,000,000원) - ',
]

const INPUT_MESSAGE = {
  BUDGET: '구입금액을 입력해 주세요.\n',
  LOTTO: '당첨 번호를 입력해주세요.\n',
  BONUS: '보너스 번호를 입력해 주세요.\n',
}

const ERROR_MESSAGE_BUDGET = {
  ISNAN: '[ERROR] 금액은 정수 값이어야 합니다.',
  RANGE: '[ERROR] 금액은 최소 1000원 이상이어야만 합니다.',
  UNIT: '[ERROR] 금액은 1000원 단위어야만 합니다.',
}

const ERROR_MESSAGE_LOTTO = {
  LENGTH: '[ERROR] 로또 번호는 6개여야 합니다.',
  RANGE: '[ERROR] 로또 번호는 1에서 45 사이의 숫자만 가능합니다.',
  ISINTEGER: '[ERROR] 로또 번호는 정수만 가능합니다.',
  OVERLAP: '[ERROR] 로또 번호는 중복될 수 없습니다',
}

const ERROR_MESSAGE_BONUS = {
  RANGE: '[ERROR] 보너스 번호는 1에서 45 사이의 숫자만 가능합니다.',
  ISINTEGER: '[ERROR] 보너스 번호는 정수만 가능합니다.',
  OVERLAP: '[ERROR] 보너스 번호는 로또 번호와 중복될 수 없습니다.',
}

module.exports = {
    REWARDS,
    RANK_MESSAGE,
    INPUT_MESSAGE,
    ERROR_MESSAGE_BUDGET,
    ERROR_MESSAGE_LOTTO,
    ERROR_MESSAGE_BONUS,
}