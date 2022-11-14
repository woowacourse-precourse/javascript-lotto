const LENGTH_INPUT_LOTTO_NUMBER_ERROR ="[ERROR] 로또 번호는 6개여야 합니다."
const RANGE_INPUT_LOTTO_NUMBER_ERROR ="[ERROR] 로또 번호의 범위는 1~45까지여야 합니다."
const REPEATED_LOTTO_NUMBER_ERROR ="[ERROR] 로또 번호에 중복된 값이 없어야 합니다."
const STRING_LOTTO_NUMBER_ERROR ="[ERROR] 로또 번호 중 숫자가 아닌 값이 있으면 안됩니다."

const INPUT_MONEY = '구입금액을 입력해 주세요.';
const INPUT_WINNING_NUMBER = '당첨 번호를 입력해 주세요.';
const INPUT_BONUS_NUMBER = '보너스 번호를 입력해 주세요.';
const PURCHASE_LOTTO = '개를 구매했습니다.';
const WINNING_STATICS= "당첨 통계\n---";
const THREE_MATCHED = "3개 일치 (5,000원) - ";
const FOUR_MATCHED = "4개 일치 (50,000원) - ";
const FIVE_MATCHED = "5개 일치 (1,500,000원) - ";
const FIVE_WITH_BONUS_MATCHED = "5개 일치, 보너스 볼 일치 (30,000,000원) - ";
const SIX_MATCHED = "6개 일치 (2,000,000,000원) - ";
const TOTAL_PROFIT = "총 수익률은 ";
const PROFIC_PERCENT = "%입니다.";
const THE_NUMBER_OF = "개";

module.exports = {
  LENGTH_INPUT_LOTTO_NUMBER_ERROR,
  RANGE_INPUT_LOTTO_NUMBER_ERROR,
  STRING_LOTTO_NUMBER_ERROR,
  REPEATED_LOTTO_NUMBER_ERROR,
  INPUT_MONEY,
  INPUT_BONUS_NUMBER,
  INPUT_WINNING_NUMBER,
  PURCHASE_LOTTO,
  WINNING_STATICS,
  THREE_MATCHED,
  FOUR_MATCHED,
  FIVE_MATCHED,
  FIVE_WITH_BONUS_MATCHED,
  SIX_MATCHED,
  TOTAL_PROFIT,
  PROFIC_PERCENT,
  THE_NUMBER_OF
};
