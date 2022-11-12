const MESSAGE = {
  INSERT_MONEY: `구입금액을 입력해 주세요.
`,
  BUY_AMOUNT: `개를 구매했습니다.`,
  LOTTO_NUMBER_CHOICE: `당첨 번호를 입력해 주세요.
`,
  BONUSE: `보너스 번호를 입력해 주세요.
`,

  ERROR: {
    PREFIX: `[ERROR]`,
    VALID_MONEY: `올바른 금액을 입력하세요. 로또는 한 장당 1000원 입니다.`,
    WIN_NUMBER: `1부터 45까지의 숫자를 입력해 주세요, 각 숫자는 ',' 로 구분하며 총 6자리 입니다.`,
    BONUSE_NUMBER: `1부터 45까지의 숫자를 하나만 입력해 주세요`,
    LOTTO_NUMBER: `로또 번호는 중복되지 않게 선택해야 합니다.`,
    LOTTO_LENGTH: `로또 번호는 6개여야 합니다.`,
  },
};

module.exports = MESSAGE;
