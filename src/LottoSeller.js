const Lotto = require('./Lotto');
const Validator = require('./Validator');

// 사용자가 방문해서 사는 곳
class LottoSeller {
  #lottos;

  #LOTTO_PRICE = 1000;

  set lottos(lottoList) {
    this.#lottos = lottoList;
  }

  get lottos() {
    return this.#lottos;
  }

  get lottoPrice() {
    return this.#LOTTO_PRICE;
  }

  isValidMoney(input) {
    // 빈입력인지
    // 공백이있는지
    Validator.isValidInput(input);

    // integer인지 확인 - 특수문자도 걸러짐
    // 양수인지 확인
    // 1000으로 나누어떨어지는지 확인
    // --> NumberTools 같은애 만들어서 확인 NumberUtil
  }

  countLottoTicket(money) {
    this.isValidMoney(money);
    return money / this.lottoPrice;
  }

  // count 개수만큼 로또 발행
  issueLotto(count) {
    const lottos = [];

    while (lottos.length < count) {
      lottos.push(Lotto.purchase());
    }

    // 로또 발행하는 부분
    // 다 발행되면
    // 다 제대로 발행됐는지확인도 해야하나? count비교?
    this.#lottos = lottos;
  }

  purchase = (money) => {
    //  검증()
    // 하나씩 배열에 추가
    this.issueLotto(this.countLottoTicket(money));
  };
}

module.exports = LottoSeller;
