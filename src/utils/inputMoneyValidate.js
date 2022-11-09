function isDivideThousand(value) {
  return value % 1000 === 0;
}

function isPositiveNumber(value) {
  return Math.sign(value) === 1;
}

module.exports = { isDivideThousand, isPositiveNumber };
