const MESSAGE = {
  NOT_INPUT_NUMBER: `[ERROR] 구입 금액은 숫자만 입력해야 합니다.`,
  ONLY_INPUT_THOUSAND: `[ERROR] 입력할 로또 구입 금액은 1,000원 단위여야 합니다.`,
  BELOW_THOUSAND: `[ERROR] 로또 구입 금액은 최소 1,000원입니다.`,
};

const TYPE = {
  NOT_NUMBER: `Not a Number in inside`,
  NOT_THOUSAND: `Not a Thousand in inside`,
  NOT_BUY_LOTTO: `Can not buy a lotto`,
};

module.exports = {
  MESSAGE,
  TYPE,
};
