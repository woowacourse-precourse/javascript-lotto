const getProfitRate = (startMoney, earnMoney) => {
  let rate = ((earnMoney / startMoney) * 100).toFixed(1);
  if (rate[rate.length - 1] === '0') rate = Number(rate);

  return rate + '%';
};

module.exports = getProfitRate;
