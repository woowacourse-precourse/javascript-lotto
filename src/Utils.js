const Utils = {
  /**
   * 투자한 금액과 얻은 보상으로 얻은 수익률을 계산하여 반환합니다.
   *
   * @param {number} investment
   * @param {Reward[]} rewards
   * @returns {number}
   */
  calculateRateOfReturn(investment, rewards) {
    const earning = rewards.reduce((money, reward) => money + reward.getMoney(), 0);
    return (earning / investment) * 100;
  },
};

module.exports = Utils;
