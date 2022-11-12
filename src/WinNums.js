class WinNums {
  constructor(winNums) {
    this.isInRange(winNums);
    this.isOverlap(winNums);
    this.isNumsCountSix(winNums);
    this.hasBlank(winNums);
  }

  isInRange(winNums) {
    const winNumsArr = winNums.split(',');
    winNumsArr.map((winNum) => {
      if (winNum < 1 || winNum > 45) {
        throw new Error('[ERROR] 1에서 45사이의 수를 입력해주세요.');
      } 
    });
  }

  isOverlap(winNums) {
    const winNumsArr = winNums.split(',');
    const set = new Set(winNumsArr);
    if (set.size < winNumsArr.length) {
      throw new Error('[ERROR] 당첨 번호에 중복되는 숫자가 있습니다.');
    }
  }

  isNumsCountSix(winNums) {
    const winNumsArr = winNums.split(',');
    if (winNumsArr.length !== 6) {
      throw new Error('[ERROR] 숫자 여섯개를 입력해주세요.');
    }
  }

  hasBlank(winNums) {
    const winNumsArr = winNums.split('');
    winNumsArr.map((el) => {
      if (el === ' ') throw new Error('[ERROR] 입력에 공백이 있습니다.');
    }); 
  }
}

module.exports = WinNums;
