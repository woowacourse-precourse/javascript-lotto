const LOTTO_PRICE = {
  purchase: 1000,
  0: 0,
  1: 0,
  2: 0,
  3: 5000,
  4: 50000,
  5: 1500000,
  6: 2000000000,
  bonuse: 30000000,
};

const MESSAGE = {
  purchase: '구입금액을 입력해 주세요.\n',
  numberOfPurchase: '개를 구매했습니다.',
  winning: '\n당첨 번호를 입력해 주세요.\n',
  bonuse: '\n보너스 번호를 입력해 주세요.\n',
};

const ERROR_MESSAGE = {
  range: '[ERROR] 로또 번호는 1~45범위의 숫자여야 합니다.',
  length: '[ERROR] 로또 번호는 6개여야 합니다.',
  duplicate: '[ERROR] 로또 번호에 중복된 숫자가 있습니다.',
  bonusDuplicate: '[ERROR] 보너스 번호가 당첨 번호에 중복되는 값입니다.',
  number: '[ERROR] 입력값이 숫자가 아닙니다.',
  zero: '[ERROR] 구입금액은 0원보다 커야 합니다.',
  divisible: '[ERROR] 구입금액의 단위는 1000원입니다.',
};

module.exports = { LOTTO_PRICE, MESSAGE, ERROR_MESSAGE };
