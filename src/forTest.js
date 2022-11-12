const { Console } = require('@woowacourse/mission-utils');

// 수익률 계산 테스트

const calculateEarnings = (wonCountArr, purchaseAmount) => {
  let totalEarnings = 0;
  const prizeMoney = [5000, 50000, 1500000, 30000000, 2000000000];

  wonCountArr.forEach((value, index) => {
    totalEarnings += prizeMoney[index] * value;
  });

  return (totalEarnings / purchaseAmount) * 100;
};

module.exports = calculateEarnings;
