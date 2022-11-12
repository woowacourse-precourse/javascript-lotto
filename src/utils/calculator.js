const { LOTTO_INFO } = require('../common/constants');

const rest = (money) => money % `${LOTTO_INFO.PRICE}`;
const lottoCount = (money) => money / `${LOTTO_INFO.PRICE}`;

module.exports = {
  rest,
  lottoCount,
};
