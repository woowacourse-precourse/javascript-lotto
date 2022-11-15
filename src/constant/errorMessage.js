const PRICE_MESSAGE = {
  NOT_INPUT_NUMBER: `[ERROR] 구입 금액은 숫자만 입력해야 합니다.`,
  ONLY_INPUT_THOUSAND: `[ERROR] 입력할 로또 구입 금액은 1,000원 단위여야 합니다.`,
  BELOW_THOUSAND: `[ERROR] 로또 구입 금액은 최소 1,000원입니다.`,
};

const LOTTO_MESSAGE = {
  NOT_SIX_NUMBERS: `[ERROR] 로또 번호는 6개여야 합니다.`,
  CHECK_RANGE: `[ERROR] 로또 번호는 1 ~ 45 사이의 숫자만 입력해야 합니다.`,
  CHECK_DUPLICATION: `[ERROR] 중복된 번호가 존재합니다.`,
  CHECK_VALIDATION_INPUT: `[ERROR] 숫자 이외의 값을 입력하셨습니다.`,
  CHECK_BONUS_IN_WIN: `[ERROR] 당첨 번호와 보너스 번호가 중복됩니다.`,
};

const PRICE_TYPE = {
  NOT_NUMBER: `Not a Number in inside`,
  NOT_THOUSAND: `Not a Thousand in inside`,
  NOT_BUY_LOTTO: `Can not buy a lotto`,
};

const LOTTO_TYPE = {
  NOT_SIX_NUMBERS: `Not 6 Numbers`,
  NOT_RANGE: `Only numbers for the Range`,
  IS_DUPLICATION: `Exists Duplication`,
  IS_VALIDATION: `Exists other than a Number`,
  IS_BONUS_IN_WIN: `Exists bonus number in win numbers`,
};

module.exports = {
  PRICE_MESSAGE,
  LOTTO_MESSAGE,
  PRICE_TYPE,
  LOTTO_TYPE,
};
