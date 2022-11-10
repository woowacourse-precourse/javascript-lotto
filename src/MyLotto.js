class MyLotto {
  #purchase;
  #myLottoNums;

  constructor(purchase){
    this.validate(purchase);
    this.purchase = purchase
  }

  validate(purchase) {
    // 구매금악 1,000단위로 나누어 떨어지는지 확인 
  }

  countLotto() {
    // 구매금액을 1,000단위로 나누어 로또 수량 계산
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