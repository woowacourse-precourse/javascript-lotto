const isNumberType = (value) => !isNaN(value);

const isThousandUnits = (value) => value % 1000 === 0;

module.exports = { isNumberType, isThousandUnits };
