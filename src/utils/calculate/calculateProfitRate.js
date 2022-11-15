const calculateProfitRate = (startMoney, earnMoney) => {
  let rate = ((earnMoney / startMoney) * 100).toFixed(1);

  return Number(rate);
};

module.exports = calculateProfitRate;
