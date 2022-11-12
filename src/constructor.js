const LOTTO = {
  MIN: 1,
  MAX: 45,
  LENGTH: 6,
  BONUS_COUNT: 1,
}

const WINNING_CRITERIA = {
  FIRST_PLACE: { rank: 1, equals: 6, bonus: 0 },
  SECOND_PLACE:  { rank: 2, equals: 5, bonus: 1 },
  THIRD_PLACE: { rank: 3, equals: 5, bonus: 0 },
  FOURTH_PLACE: { rank: 4, equals: 4, bonus: 0 },
  LAST_PLACE: { rank:5, equals: 3, bonus: 0 },
}

const MONEY = {
  PURCHASE_UNIT: 1000,
  FIRST_PLACE: 2000000000,
  SECOND_PLACE: 30000000,
  THIRD_PLACE: 1500000,
  FOURTH_PLACE: 50000,
  LAST_PLACE: 5000,
}

const COMMAND = {
  INPUT_PURCHASE_AMOUNT: '구입금액을 입력해 주세요.\n',
  INPUT_WINNING_NUMBERS: '당첨 번호를 입력해 주세요.\n',
  INPUT_BOUNS_NUMBER: '보너스 번호를 입력해 주세요.\n',
}

const MESSAGE = {
  PURCHASE_AMOUNT: '개를 구매했습니다.',
  WINNING_STATUS: '당첨 통계\n___',
}

const ERROR = {
  PREFIX: '[ERROR]',
  DUPLICATE_NUMBERS: '중복된 숫자가 있습니다.',
  OUT_OF_LOTTO_LENGTH: `로또 번호는 ${LOTTO.LENGTH}개여야 합니다.`,
  ONLY_NUMBER: '숫자만 입력해야합니다.',
  OUT_OF_NUMEBR_RANGE: `${LOTTO.MIN}~${LOTTO.MAX}사이 숫자만 가능합니다.`,
  NOT_DIVIDED: `${MONEY.PURCHASE_UNIT.toLocaleString()}원 단위로 나누어 떨어져야합니다.`
}

module.exports = {
  LOTTO,
  WINNING_CRITERIA,
  MONEY,
  COMMAND,
  MESSAGE,
  ERROR,
}