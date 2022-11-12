class LottoCost {
  constructor(lottoCost) {
    this.validate(lottoCost);
  } 
  
  validate(lottoCost) {
    if (+lottoCost % 1 !== 0) {
      throw new Error('[ERROR] 정수를 입력해주세요.');
    }
    if (+lottoCost % 1000 !== 0) {
      throw new Error('[ERROR] 1000원 단위로 입력해주세요.');
    }
    if (lottoCost === '') {
      throw new Error('[ERROR] 숫자를 입력해 주세요.');
    }
    const input = lottoCost.split('');
    input.map((el) => {
      if (el === ' ') throw new Error('[ERROR] 공백을 제거해주세요.');
    });
  }
}

module.exports = LottoCost;
