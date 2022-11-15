class WinningNumber {
  #winningNumbers;
  #bonusNumber;

  constructor(winningArr) {
    this.validate(winningArr);
    this.sortData(winningArr);
    this.#winningNumbers = winningArr;
  }


  validate(winningArr) {
    var isOverlap = new Set(winningArr).size != winningArr.length;   
    if(winningArr.length !== 6 || isOverlap) {
      throw new Error('[ERROR]당첨 입력값이 잘못되어, 게임을 종료합니다.');
    }
  }

  sortData(winningArr) {
    winningArr.sort(function(a, b) { 
      return a - b;
    });
   }
 
}

module.exports = WinningNumber;
