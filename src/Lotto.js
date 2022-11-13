class Lotto {
  #winnigNums;

  constructor(winnigNums) {
    this.validate(winnigNums);
    this.#winnigNums = winnigNums.map((num) => +num);
  }

  validate(winnigNums) {
    if (winnigNums.length !== 6) {
      throw new Error(
        `[ERROR] 당첨 번호는 중복되지 않는 1 ~ 45 사이의 숫자 6개를 ','로 구분하여 입력해야 합니다.`
      );
    }

    winnigNums.some((num) => {
      if (
        typeof +num !== 'number' ||
        Number.isNaN(+num) ||
        +num < 1 ||
        +num > 45
      ) {
        throw new Error(
          `[ERROR] 당첨 번호는 중복되지 않는 1 ~ 45 사이의 숫자 6개를 ','로 구분하여 입력해야 합니다.`
        );
      }
    });

    if (winnigNums.length !== new Set(winnigNums).size) {
      throw new Error(
        `[ERROR] 당첨 번호는 중복되지 않는 1 ~ 45 사이의 숫자 6개를 ','로 구분하여 입력해야 합니다.`
      );
    }
  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;
