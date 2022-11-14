const MESSAGE = Object.freeze({
  INSERT_MONEY: `구입금액을 입력해 주세요.
`,
  BUY_AMOUNT: `개를 구매했습니다.`,
  LOTTO_NUMBER_CHOICE: `당첨 번호를 입력해 주세요.
`,
  BONUSE: `보너스 번호를 입력해 주세요.
`,
  RESULT: {
    PREFIX: `당첨통계
---`,
    THREEWIN: `3개 일치 (5,000원) - `,
    FOURWIN: `4개 일치 (50,000원) - `,
    FIVEWIN: `5개 일치 (1,500,000원) - `,
    BONUSEWIN: `5개 일치, 보너스 볼 일치 (30,000,000원) - `,
    ALLWIN: `6개 일치 (2,000,000,000원) - `,
    EA: `개`,
  },

  ERROR: {
    PREFIX: `[ERROR]`,
    VALID_MONEY: `올바른 금액을 입력하세요. 로또는 한 장당 1000원 입니다.`,
    WIN_NUMBER: `1부터 45까지의 숫자를 입력해 주세요, 각 숫자는 ',' 로 구분하며 총 6자리 입니다.`,
    BONUSE_NUMBER: `1부터 45까지의 숫자를 하나만 입력해 주세요, 당첨번호와 중복될 수 없습니다.`,
    LOTTO_NUMBER: `로또 번호는 중복되지 않게 선택해야 합니다.`,
    LOTTO_LENGTH: `로또 번호는 6개여야 합니다.`,
  },

  profit(profit) {
    return `총 수익률은 ${profit}%입니다.`;
  },
});

module.exports = MESSAGE;
