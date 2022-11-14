const LottoPaymentUI = require('../src/ui/component/LottoPayment');
const LottoWinCountUI = require('../src/ui/component/LottoWinCount');
const LottoIncomeUI = require('../src/ui/component/LottoIncome');
const Component = require('../src/ui/core/Component');

const LottoDrawFactory = require('../src/domain/LottoDrawFactory');

const LottoIncomeDomain = require('../src/domain/LottoIncome');
const LottoWinCountDomain = require('../src/domain/LottoWinCount');

const { VARIABLE_LOTTO, LOTTO_ERROR_MESSAGE } = require('./constants');

const validateLottoRange = number => {
  if (!VARIABLE_LOTTO.regex.test(number)) {
    throw new Error(LOTTO_ERROR_MESSAGE.range);
  }

  return Number(number);
};

const print = {
  lottoPaymentUI: ({ count, lottos }) => {
    const ui = new Component(new LottoPaymentUI({ count, lottos }));
    ui.render();
  },

  lottoWinCountUI: ({ winScore }) => {
    const ui = new Component(new LottoWinCountUI({ winScore }));
    ui.render();
  },

  lottoIncomeUI: ({ income }) => {
    const ui = new Component(new LottoIncomeUI({ income }));
    ui.render();
  },

  lottoAdjustmentUI: ({ lotto, bonus, lottoStore }) => {
    const inputInstances = new LottoDrawFactory({ lotto, bonus, lottoStore });

    const lottoWinCount = new LottoWinCountDomain(inputInstances);
    const lottoIncome = new LottoIncomeDomain(inputInstances);

    print.lottoWinCountUI({ winScore: lottoWinCount.getResult() });
    print.lottoIncomeUI({ income: lottoIncome.getResult() });
  },
};

module.exports = {
  validateLottoRange,
  print,
};
