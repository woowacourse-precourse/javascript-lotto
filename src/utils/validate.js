const isNumberType = (value) => !isNaN(value);

const isThousandUnits = (value) => value % 1000 === 0;

const isValuesNumberType = (values) => values.every((value) => !isNaN(value));

module.exports = { isNumberType, isThousandUnits, isValuesNumberType };
