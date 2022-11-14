const FORMULA = {
  COMPARE: (former, latter) => former - latter,
  PROFIT: (revenue, pay) => revenue / pay * 100
}

const UNITS = {
  LOTTO_PRICE: 1000,
  LIMIT_LOTTO: 6,
  MIN: 1,
  MAX: 45,
}

const MESSAGE = {
  GUIDE_INPUT: '구입금액을 입력해 주세요.\n',
  GUIDE_NUMBER_OF_LOTTO: (count) => `\n${count}개를 구매했습니다.`,
  REQUEST_LUCKY_NUMBERS: '\n당첨 번호를 입력해 주세요.\n',
  REQUEST_BONUS_NUMBER: '\n보너스 번호를 입력해 주세요.\n',
  WINNING_STATS: (result, profit) => `\n당첨통계
---
3개 일치 (5,000원) - ${result.fifthPlace.count}개
4개 일치 (50,000원) - ${result.fourthPlace.count}개
5개 일치 (1,500,000원) - ${result.thirdPlace.count}개
5개 일치, 보너스 볼 일치 (30,000,000원) - ${result.secondPlace.count}개
6개 일치 (2,000,000,000원) - ${result.firstPlace.count}개
총 수익률은 ${profit}%입니다.`
}

const ERROR_MESSAGE = {
  LENGTH_OF_LUCKY_NUMBERS: "[ERROR] 당첨 번호는 6개여야 합니다.",
  DUPLICATE_OF_LUCKY_NUMBERS: "[ERROR] 당첨 번호는 중복이 없어야 합니다.",
  DUPLICATE_OF_BONUS_NUMBER: "[ERROR] 보너스 번호는 당첨번호와 달라야 합니다.",
  
  LENGTH_OF_LOTTO: "[ERROR] 로또 번호는 6개여야 합니다.",
  DUPLICATE_OF_LOTTO: "[ERROR] 로또 번호는 중복이 없어야 합니다.",
  DIGIT_OF_LOTTO: "[ERROR] 로또 번호는 1 ~ 45 사이의 숫자입니다.",

}

module.exports = {FORMULA, UNITS, MESSAGE, ERROR_MESSAGE};
