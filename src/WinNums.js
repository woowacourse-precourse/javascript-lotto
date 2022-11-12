class WinNum {
  constructor(winNums) {
    this.isWinNumInRange(winNums);
    this.isWinNumOverlap(winNums);
    this.isNumsCountSix(winNums);
  }

  isWinNumInRange(winNums) {
    const winNumsArr = winNums.split(',');
    winNumsArr.map((winNum) => {
      if (winNum < 1 || winNum > 45) {
        throw new Error('[ERROR] 1에서 45사이의 수를 입력해주세요.');
      } 
    });
  }

  isWinNumOverlap(winNums) {
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
}

module.exports = WinNum;
