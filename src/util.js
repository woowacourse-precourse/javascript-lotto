
function validateWinNums(winNums){
    const winNumRegex = /\d{1,2},\d{1,2},\d{1,2},\d{1,2},\d{1,2},\d{1,2}/;
    if (!winNumRegex.test(winNums)) {
      return [false, new Error("[ERROR] 당첨번호가 입력형식에 맞지 않습니다.")];
    }
    const winArray = winNums.split(",").map(Number);
    const winSet = new Set(winArray);
    if(winSet.size !== winArray.length){
      return [false, new Error("[ERROR] 당첨번호가 입력형식에 맞지 않습니다.")];
    }
    if (!winArray.every(num => 1 <= num && num <= 45)) {
      return [false, new Error("[ERROR] 당첨번호가 입력형식에 맞지 않습니다.")];
    }
    return [true, [...winArray]];
  }



  module.exports = {validateWinNums, }