const { Console } = require('@woowacourse/mission-utils');
const { GAME, RANK, ERROR } = require('./Message');

class Lotto {
  constructor(numbers) {
    this.validate(numbers);
    this.number = numbers;
  }

  validate(numbers) { // 유효성 검사
    if (numbers.length !== GAME.COUNT) {  // 숫자 길이가 6글자인지 확인
      throw new Error(`${ERROR.COMMON} ${ERROR.SIX_COUNT}`);
    } else if (new Set(numbers).size < GAME.COUNT) { // 숫자 중복 여부
      throw new Error(`${ERROR.COMMON} ${ERROR.OVERLAP}`);
    }
    const numberReg = /^[0-9]*$/;
    numbers.forEach((number) => {
      if (!numberReg.test(number) || number < GAME.START || number > GAME.END) { // 숫자가 범위 내에 있는지 확인
        throw new Error(`${ERROR.COMMON} ${ERROR.RANGE}`);
      }
    });
  }

  printLotto() { // 출력
    Console.print(`[${this.number.join(', ')}]`);
  }

