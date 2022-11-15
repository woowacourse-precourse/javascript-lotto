class WinningHistory {
  count;

  constructor() {
    this.count = 0;
  }

  getMessage() {
    throw new Error('추상 메소드는 오버라이딩이 필요합니다.');
  }

  getReward() {
    throw new Error('추상 메소드는 오버라이딩이 필요합니다.');
  }

  check(lotto) {
    const succeed = this.checkRule(lotto);
    if (succeed) {
      this.count += 1;
    }
    return succeed;
  }

  checkRule(lotto) {
    throw new Error('추상 메소드는 오버라이딩이 필요합니다.');
  }

  totalReward() {
    return this.getReward() * this.count;
  }
}

module.exports = WinningHistory;
