class MyLotto {
  #purchase;
  #count;
  #myLottoNums;

  constructor(purchase){
    this.validate(purchase);
    this.#purchase = purchase;
    this.#count = this.countLotto(purchase);
  }

  validate(purchase) {
    // 구매금악 1,000단위로 나누어 떨어지는지 확인 
    if (purchase % 1000 != 0) {
      throw new Error("[ERROR] 구입 금액은 1,000원으로 나누어 떨어져야 합니다");
    }
  }

  countLotto(purchase) {
    // 구매금액을 1,000단위로 나누어 로또 수량 계산
    return parseInt(purchase / 1000);
  }

  issueLotto() {
    // 구매한 로또 수량에 맞게 로또 발행
  }

  sortLottoNums() {
    // 로또 번호 오름차순 정렬
  }

  getMyLottoNums() {
    // 로또 번호 반환
  }
}

module.exports = MyLotto;