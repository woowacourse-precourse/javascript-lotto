const Utils = {
  /**
   * 투자한 금액과 얻은 보상으로 얻은 수익률을 계산하여 반환합니다.
   *
   * @param {number} investment
   * @param {Reward[]} rewards
   * @returns {string}
   */
  calculateRateOfReturn(investment, rewards) {
    const earning = rewards.reduce((money, reward) => money + reward.getMoney(), 0);
    const rateOfReturn = (Math.round((earning / investment) * 10000) / 100).toFixed(1);
    const [integerPart, fractionPart] = rateOfReturn.split('.');

    return `${Number(integerPart).toLocaleString()}.${fractionPart}`;
  },
};

module.exports = Utils;
