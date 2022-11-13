const { LOTTO_INFO } = require('../common/constants');

const rest = (money) => money % `${LOTTO_INFO.PRICE}`;
const calculateLottoQuantity = (money) => money / `${LOTTO_INFO.PRICE}`;

module.exports = {
  rest,
  calculateLottoQuantity,
};
