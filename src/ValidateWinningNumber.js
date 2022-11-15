class ValidateWinningNumber {

  constructor(inputWinningNumber) {
    this.winningNumber = [];
    this.validate(inputWinningNumber);
  }

  validate(inputWinningNumber) {
    const numberArray = inputWinningNumber.split(',');
    const isCorrect = /[^0-9]/g;

    numberArray.forEach(number => {
      if (isCorrect.test(number)) throw new Error('[ERROR] 당첨 번호는 ,(콤마)로 구분한 6개의 숫자를 입력해야 합니다.');

      this.winningNumber.push(Number(number));
    });
  }
};

module.exports = ValidateWinningNumber;