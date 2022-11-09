const DEFAULTS = Object.freeze({
  START_RANGE_NUM : 1,
  END_RANGE_NUM : 45,
  CAN_CNT_RANGE : 6,
  PURCHASE_UNIT : 1000,
});

const MONEY = Object.freeze({
  MONEY_SUCCESS: [2000000000, 30000000, 1500000, 50000, 5000],
});

const CONSOLELINE = Object.freeze({
  PURCHASE_MONEY_INPUT : '구입금액을 입력해 주세요.',
  ANSWERNUM_INPUT : '당첨 번호를 입력해 주세요.',
  BONUSNUM_INPUT : '보너스 번호를 입력해 주세요.',
  ANSWER_STATIST : '당첨 통계\n---',
});

const RESULTLINE = {
  PURCHASE_CHECK : num => `${String(num)}개를 구매했습니다.`,
  FIFTH : num => `3개 일치 (5,000원) - ${String(num)}개`,
  FOURTH : num => `4개 일치 (50,000원) - ${String(num)}개`,
  THIRD : num => `5개 일치 (1,500,000원) - ${String(num)}개`,
  SECOND : num => `5개 일치, 보너스 볼 일치 (30,000,000원) - ${String(num)}개`,
  FIRST : num => `6개 일치 (2,000,000,000원) - ${String(num)}개`,
  TOTAL_PER : percent => `총 수익률은 ${String(percent)}%입니다.`
};

const ERRORLINE = Object.freeze({
  BUY_CHECK : '[ERROR] 구매 갯수는 정수로만 입력해주세요',
  INPUT_UNIT_CHECK : '[ERROR] 구매 금액은 1,000원 단위로 입력해주세요.',
  SEPARATOR_CHECK : '[ERROR] 당첨번호는 쉼표를 사용하여 구분해주세요.',
  NUMRANGE_CHECK : '[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.',
  INPUT_CNT_CHECK : '[ERROR] 숫자는 6개만 입력해주세요.',
  BONUS_CHECK : '[ERROR] 1개의 숫자만 입력해주세요.',
  DUPLICATE_CHECK : '[ERROR] 중복되지 않는 수들로 작성해주세요.'
})

module.exports = {DEFAULTS, MONEY, CONSOLELINE, RESULTLINE, ERRORLINE};