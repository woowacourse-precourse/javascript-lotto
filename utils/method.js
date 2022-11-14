const LottoPayment = require('../src/ui/component/LottoPayment');
const LottoWinCount = require('../src/ui/component/LottoWinCount');
const LottoIncome = require('../src/ui/component/LottoIncome');
const Component = require('../src/ui/core/Component');

const LottoCalculator = require('../src/domain/LottoCalculator');
const LottoDrawFactory = require('../src/domain/LottoDrawFactory');

const { VARIABLE_LOTTO, LOTTO_ERROR_MESSAGE } = require('./constants');

const validateLottoRange = number => {
  if (!VARIABLE_LOTTO.regex.test(number)) {
    throw new Error(LOTTO_ERROR_MESSAGE.range);
  }

  return Number(number);
};

const print = {
  lottoPaymentUI: ({ count, lottos }) => {
    const ui = new Component(new LottoPayment({ count, lottos }));
    ui.render();
  },

  lottoWinCountUI: ({ winScore }) => {
    const ui = new Component(new LottoWinCount({ winScore }));
    ui.render();
  },

  lottoIncomeUI: ({ income }) => {
    const ui = new Component(new LottoIncome({ income }));
    ui.render();
  },

  lottoAdjustmentUI: ({ lotto, bonus, lottoStore }) => {
    const lottoPayment = new LottoCalculator(
      new LottoDrawFactory({ lotto, bonus, lottoStore }),
    );

    print.lottoWinCountUI({ winScore: lottoPayment.getLottoCountScore() });
    print.lottoIncomeUI({ income: lottoPayment.getIncome() });
  },
};

module.exports = {
  validateLottoRange,
  print,
};
