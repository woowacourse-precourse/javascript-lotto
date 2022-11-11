const { Random, Console } = require('@woowacourse/mission-utils');

class Lotto {
  #numbers;

  constructor(numbers) {
    console.log('생성자 들어왔니');
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    console.log('발리데이트 들어왔니');
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  // TODO: 추가 기능 구현
  bonusExecption(Number) {
    console.log('들어왔니');
    const ONLY_NUMBER = /^[1-9]{1}$|^[1-3]{1}[0-9]{1}$|^4{1}[0-5]{1}$/;
    if (!ONLY_NUMBER.test(Number))
      throw new Error('[ERROR] 1 부터 45 사이의 숫자를 입력해주세요.');
    this.bonusNumber = parseInt(Number);
  }

  compare(publishResult) {
    for (i = 0; i < publishResult.length; i++) {
      this.winningCount = 0;
      publishResult[i].map((x) => {
        this.comapreResult(publishResult[i], x);
      });
    }
  }

  comapreResult(publish, winning) {
    if (publish.includes(winning)) return (this.winningCount += 1);
  }

  firstPrize() {}

  secondPrize() {}

  thirdPrize() {}

  fourthPrize() {}

  fifthPrize() {}
}

module.exports = Lotto;
