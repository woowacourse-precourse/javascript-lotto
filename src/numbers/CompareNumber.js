const CORRECT = [];
let count = 0;

class CompareNumber {
  constructor(correct) {
    this.correct = correct;
  }

  checkNumber(computerNumbers, inputLottoNumbers) {
    computerNumbers.forEach(function (firstnumber) {
      firstnumber.forEach(function (secondnumber) {
        const COMPARE = inputLottoNumbers.indexOf(secondnumber);
        if (COMPARE > -1) {
          count += 1;
        }
      });
      CORRECT.push(count);
      count = 0;
    });
    this.correct = CORRECT;
  }
}

module.exports = CompareNumber;
