const MissionUtils = require("@woowacourse/mission-utils");
const User = require("./User");
const LottoMachine = require("./LottoMachine");

class LottoCalculator {
  winningNumbers;
  bonusNumber;
  usersLottos;

  constructor(usersLottos) {
    this.usersLottos = usersLottos;
  }

  calculate() {
    const compareResult = [];

    this.usersLottos.forEach((usersLotto) => {
      const rank = this.compareNumber(usersLotto);
      compareResult.push(rank);
    });

    console.log(compareResult);
  }

  compareNumber(usersLotto) {
    let count = 0;
    
    usersLotto.forEach((number) => {
      if (this.winningNumbers.includes(number)) {
        count += 1;
      }
    });
    
    switch(count) {
      case 6: return 1;
      case 5:
        if (usersLotto.includes(this.bonusNumber)) {
          return 2;
        }
        return 3;
      case 4: return 4;
      case 3: return 5;
    } return -1;
  }
}

module.exports = LottoCalculator;
