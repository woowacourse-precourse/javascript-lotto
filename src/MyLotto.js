const MissionUtils = require("@woowacourse/mission-utils");

class MyLotto {
  #purchase;
  #count;
  #myLottoes;

  constructor(purchase){
    this.validate(purchase);
    this.#purchase = purchase;
    this.#count = this.countLotto(purchase);
    this.#myLottoes = this.issueLotto(this.countLotto(purchase));
  }

  validate(purchase) {
    // 구매금악 1,000단위로 나누어 떨어지는지 확인 
    if(purchase % 1000 != 0) {
      throw new Error("[ERROR] 구입 금액은 1,000원으로 나누어 떨어져야 합니다.");
    }
  }

  countLotto(purchase) {
    // 구매금액을 1,000단위로 나누어 로또 수량 계산 (0원일 경우 0 반환)
    return purchase == 0 ? 0 : parseInt(purchase / 1000);
  }

  issueLotto(count) {
    // 구매한 로또 수량에 맞게 로또 발행
    const lottoes = new Array();
    for (let i=0; i<count; i++){
      const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      lottoes.push(this.sortNumbers(numbers));
    }
    return lottoes;
  }

  sortNumbers(numbers) {
    // 로또 번호 오름차순 정렬
    numbers.sort(function(a, b) {
      return a - b;
    });
    return numbers;
  }

  getPurchase() {
    // 로또 번호 반환
    return this.#purchase;
  }

  getCount() {
    // 로또 개수 반환
    return this.#count;
  }

  getMyLottoes() {
    // 로또 번호 반환
    return this.#myLottoes;
  }
}

module.exports = MyLotto;