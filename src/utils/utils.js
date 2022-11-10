function calcPercentRounding(part, whole, decimal) {
  const percent = (parseInt(part, 10) / parseInt(whole, 10)) * 100;

  return percent.toFixed(decimal);
}

module.exports = {
  calcPercentRounding,
};
