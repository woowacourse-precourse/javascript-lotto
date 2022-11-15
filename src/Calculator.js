class Calculator {
  conductRevenue(rewards, payMoney) {
    const sum = rewards.reduce((total, arg) => {
      if (arg[2] != 0) {
        return (total += arg[1] * arg[2]);
      }
      return total;
    }, 0);
    return Math.round((sum / payMoney) * 10000) / 100;
  }
}
module.exports = Calculator;
