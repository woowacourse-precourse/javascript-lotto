const DEFAULTS = Object.freeze({
  START_RANGE_NUM : 1,
  END_RANGE_NUM : 45,
  CAN_CNT_RANGE : 6,
  PURCHASE_UNIT : 1000,
});

const MONEY = Object.freeze({
  THREE_SUCCESS : 5000,
  FOUR_SUCCESS : 50000,
  FIVE_SUCCESS : 1500000,
  BONUS_SUCCESS : 30000000,
  SIX_SUCCESS : 2000000000,
});

const CONSOLELINE = Object.freeze({
  PURCHASE_MONEY_INPUT : '구입금액을 입력해 주세요.',
  ANSWERNUM_INPUT : '당첨 번호를 입력해 주세요.',
  BONUSNUM_INPUT : '보너스 번호를 입력해 주세요.',
  ANSWER_STATIST : '당첨 통계\n---',
});

const RESULTLINE = {
  PURCHASE_CHECK : num => `${String(num)}개를 구매했습니다.`,
  THREE : num => `3개 일치 (5,000원) - ${String(num)}개`,
  FOUR : num => `4개 일치 (50,000원) - ${String(num)}개`,
  FIVE : num => `5개 일치 (1,500,000원) - ${String(num)}개`,
  FIVE_BONUS : num => `5개 일치, 보너스 볼 일치 (30,000,000원) - ${String(num)}개`,
  SIX : num => `5개 일치, 보너스 볼 일치 (30,000,000원) - ${String(num)}개`,
  TOTAL_PER : percent => `총 수익률은 ${String(percent)}%입니다.`
};

module.exports = {DEFAULTS, MONEY, CONSOLELINE, RESULTLINE};