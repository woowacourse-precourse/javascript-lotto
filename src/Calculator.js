class Calculator {
  conductRevenue(rewards, payMoney) {
    if (!rewards.some((reward) => reward[2] != 0)) {
      // 당첨 개수가 없을때, 계산 전에 0을 반환한다.
      return 0;
    }
    const sum = rewards.reduce((total, arg) => {
      if (arg[2] != 0) {
        return (total += arg[1] * arg[2]);
      }
      return total;
    }, 0);
    return ((sum / payMoney) * 100).toFixed(1);
  }
}
module.exports = Calculator;
