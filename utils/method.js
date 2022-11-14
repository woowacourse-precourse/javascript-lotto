const LottoPaymentUI = require("../src/ui/component/LottoPayment");
const LottoWinCountUI = require("../src/ui/component/LottoWinCount");
const LottoIncomeUI = require("../src/ui/component/LottoIncome");
const Component = require("../src/ui/core/Component");

const LottoDrawFactory = require("../src/domain/LottoDrawFactory");

const LottoIncome = require("../src/domain/LottoIncome");
const LottoWinCount = require("../src/domain/LottoWinCount");

const { VARIABLE_LOTTO, LOTTO_ERROR_MESSAGE } = require("./constants");

const validateLottoRange = (number) => {
  if (!VARIABLE_LOTTO.regex.test(number)) {
    throw new Error(LOTTO_ERROR_MESSAGE.range);
  }

  return Number(number);
};

const print = {
  lottoPaymentUI: ({ count, lottos }) => {
    const ui = new LottoPaymentUI({ count, lottos });
    ui.print();
  },

  lottoWinCountUI: ({ winScore }) => {
    const ui = new LottoWinCountUI({ winScore });
    ui.print();
  },

  lottoIncomeUI: ({ income }) => {
    const ui = new LottoIncomeUI({ income });
    ui.print();
  },

  lottoAdjustmentUI: ({ lotto, bonus, lottoStore }) => {
    const inputInstances = new LottoDrawFactory({ lotto, bonus, lottoStore });

    const lottoWinCount = new LottoWinCount(inputInstances);
    const lottoIncome = new LottoIncome(inputInstances);

    print.lottoWinCountUI({ winScore: lottoWinCount.getResult() });
    print.lottoIncomeUI({ income: lottoIncome.getResult() });
  },
};

module.exports = {
  validateLottoRange,
  print,
};
