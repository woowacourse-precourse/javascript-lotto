
function validateWinNums(winNums){
    const winNumRegex = /\d{1,2},\d{1,2},\d{1,2},\d{1,2},\d{1,2},\d{1,2}/;
    if (!winNumRegex.test(winNums)) {
      throw new Error("[ERROR] 당첨번호가 입력형식에 맞지 않습니다.");
    }
    const winArray = winNums.split(",").map(Number);
    const winSet = new Set(winArray);
    if(winSet.size !== winArray.length){
      throw new Error("[ERROR] 당첨번호에 중복된 숫자가 들어있습니다.");
    }
    if (!winArray.every(num => 1 <= num && num <= 45)) {
      throw new Error("[ERROR] 당첨번호는 1부터 45까지의 숫자여야 합니다.");
    }
  }



  module.exports = {validateWinNums, }