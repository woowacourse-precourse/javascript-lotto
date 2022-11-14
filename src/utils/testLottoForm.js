const getTestLottoForm = (lotto) =>
  `[${lotto.getLottoNumbers()}]`.split(",").join(", ");

module.exports = { getTestLottoForm };
