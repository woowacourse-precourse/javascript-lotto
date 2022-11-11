const Validator = require('./Validator');

// 사용자가 방문해서 사는 곳
class LottoSeller {
  #lottos;

  set lottos(lottoList) {
    this.#lottos = lottoList;
  }

  get lottos() {
    return this.#lottos;
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

  // count 개수만큼 로또 발행
  issueLotto(count) {
    const lottos = [];
    console.log('issueLotto', count);

    // 로또 발행하는 부분
    // 다 발행되면
    // 다 제대로 발행됐는지확인도 해야하나? count비교?
    this.#lottos = lottos;
  }

  purchase = (money) => {
    //  검증()
    // 하나씩 배열에 추가
    this.isValidMoney(money);
    this.issueLotto('count 테스트');
  };
}

module.exports = LottoSeller;
