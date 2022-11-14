const round = (num) => {
  return (+(Math.round(num + "e+1") + "e-1")).toFixed(1);
}

const changePrintFormat = () => {
  String.prototype.format = function() {
    return [...arguments].reduce((pattern,value) => pattern.replace(/%s/,value), this);
  };
}

const toLocaleMoney = (money) => {
  return money.toLocaleString('ko-KR');
}

module.exports = { round, changePrintFormat };
