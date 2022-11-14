const Message = Object.freeze({
  COST_MESSAGE: '구입금액을 입력해 주세요.\n',
  LOTTO_MESSAGE: '당첨 번호를 입력해 주세요.\n',
  BONUS_MESSAGE: '보너스 번호를 입력해 주세요.\n',

  ERROR_COST_UNIT: `[ERROR] 구입금액이 1000의 배수가 아닙니다.`,
  ERROR_COST_TYPE: `[ERROR] 구입금액은 숫자만 입력 가능합니다`,
  ERROR_COST_RANGE: `[ERROR] 최소 구입금액은 1000원입니다`,

  ERROR_LOTTO_COUNT: `[ERROR] 로또 번호는 서로 다른 6개의 숫자로 이루어져야 합니다.`,
  ERROR_LOTTO_RANGE: `[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.`,
  ERROR_LOTTO_TYPE: '[ERROR] 로또 번호는 숫자로만 이루어져야 합니다.',

  ERROR_LOTTO_BONUS_DUPLICATE: '[ERROR] 보너스 번호와 당첨 번호가 중복됩니다.',
});

module.exports = { Message };
