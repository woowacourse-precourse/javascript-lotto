class App {
  #winNumber;
  #bonusNumber;
  #myLottoList;

  play() {}

  // 구입 금액 입력 메서드
  buy() {
    // 구입 금액 입력받기
    // 입력받은 금액으로 getLottoQuantity호출
    // 구매 수량에 맞게 로또 생성 메서드 호출
  }

  // 로또 수량만큼 로또 생성하는 메서드 (new Lotto())
  makeLottery() {
    // makeRandomLottoNumber() 호출
  }

  // 로또 결과 출력하기
  myLotteryResult() {
    // Lotto.checkMyLotteryRank() 사용
  }

  // 로또 당첨번호 생성
  makeWinNumber() {
    // 당첨번호 입력
    // 보너스 넘버 입력
  }

  // 수익률 출력하기
  printBenefitRate() {}
}

module.exports = App;
