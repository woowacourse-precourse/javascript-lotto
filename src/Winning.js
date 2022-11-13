class Winning {
  constructor() {
    this.computer = [
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
      [1, 2, 3, 4, 5, 7],
      [1, 2, 3, 4, 5, 11]
    ];
    this.user = [1,2,3,4,5,11];
    this.bonus = 7;
    this.checkOverlap();
    this.bonusCount = 0;
  }

  checkOverlap() {
    let overlap = [];
    this.computer.forEach(lotto => {
      console.log(lotto);
      overlap.push(this.countOverlap(lotto));
    });
    console.log('overlap', overlap);
    this.countWinning(overlap, this.bonusCount);
  }

  countOverlap(lotto) {
    let overlap = [];
    this.bonusCount = 0;
    lotto.forEach(number => {
      if (this.user.includes(number)) {
        overlap.push(number);
      }
      if (number === this.bonus) {
        this.bonusCount += 1;
      }
    });
    if (overlap.length === 5 && this.bonusCount === 1) {
      return overlap.length = 7; // 5개일치 + 보너스번호 일치할 경우
    }
    return overlap.length;
  }

  countWinning(overlap) {
    let result = [0, 0, 0, 0, 0];
    overlap.forEach((count) => {
      if (count === 6) {
        result[4] += 1;
      } else if (count === 7) {
        result[3] += 1;
      } else if (count === 5) {
        result[2] += 1;
      } else if (count === 4) {
        result[1] += 1;
      } else if (count === 3) {
        result[0] += 1;
      }
    });
    return result;
  }

}

module.exports = Winning;