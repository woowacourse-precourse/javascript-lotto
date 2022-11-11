const PARAMETERS = {
  purchaseAmountUnit: 1000,
  lottoNumberCount: 6,
  bonusNumberCount: 1,
  lottoNumberRange: [1, 45],
};

const CONSOLE_MESSAGE = {
  purchaseAmount: '구입금액을 입력해 주세요.',
  winningNumber: '당첨 번호를 입력해 주세요.',
  bonusNumber: '보너스 번호를 입력해 주세요.',
  lottoResult: '당첨 통계\n---',
};

const RESULT_MESSAGE = {
  purchase: (input) => `${input}개를 구매했습니다.`,
}

const ERROR_MESSAGE = {
  nonDigitInput: '[ERROR] 숫자만 입력해 주세요',
  inValidUnitOfMoney: '[ERROR] 구매 금액은 1,000 단위로 입력해 주세요',
  inValidSeperation: '[ERROR] 당첨번호는 쉼표를 사용해서 구분해 주세요',
  inValidInputCount: '[ERROR] 6개의 숫자를 입력해 주세요',
  duplicateWinningNumber: '[ERROR] 중복되지 않는 6개의 숫자를 입력해 주세요',
  duplicateBonusNumber: '[ERROR] 당첨 번호와 중복되지 않는 숫자를 입력해 주세요',
  outOfRange: '[ERROR] 1~45 사이의 숫자를 입력해 주세요',
};

module.exports = {
  PARAMETERS,
  CONSOLE_MESSAGE,
  RESULT_MESSAGE,
  ERROR_MESSAGE,
};
