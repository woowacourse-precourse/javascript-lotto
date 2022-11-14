const { LOTTO_VALUE } = require("../constants/index");

const isNumberType = (value) => !isNaN(value);

const isThousandUnits = (value) => value % LOTTO_VALUE.UNIT === 0;

const isValuesNumberType = (values) => values.every((value) => !isNaN(value));

const isValuesValidRange = (values) =>
  values.every((value) => value >= LOTTO_VALUE.MIN && value <= LOTTO_VALUE.MAX);

module.exports = {
  isNumberType,
  isThousandUnits,
  isValuesNumberType,
  isValuesValidRange,
};
