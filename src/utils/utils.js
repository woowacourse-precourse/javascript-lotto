const { FORMAT } = require("../constant/constant");

const round = (num) => {
  return (+(Math.round(num + `e+${FORMAT.RESULT_ROUND}`) + `e-${FORMAT.RESULT_ROUND}`)).toFixed(FORMAT.RESULT_ROUND);
}

const changePrintFormat = () => {
  String.prototype.format = function() {
    return [...arguments].reduce((pattern,value) => pattern.replace(/%s/,value), this);
  };
}

const toLocaleMoney = (money) => {
  return money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

module.exports = { round, changePrintFormat, toLocaleMoney };
