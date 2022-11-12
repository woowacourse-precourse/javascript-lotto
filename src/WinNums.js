class WinNum {
  constructor(winNums) {
    this.isWinNumInRange(winNums);
  }

  isWinNumInRange(winNums) {
    const winNumsArr = winNums.split(',');
    winNumsArr.map((winNum) => {
      if (winNum < 1 || winNum > 45) {
        throw new Error('[ERROR] 1에서 45사이의 수를 입력해주세요.');
      } 
    })
  }
}

module.exports = WinNum;
