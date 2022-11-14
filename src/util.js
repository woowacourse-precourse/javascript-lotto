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

  
  function validateBounus(bonusNum, winNums) {
    if (isNaN(bonusNum)) {
      return [false, new Error("[ERROR] 보너스번호는 숫자여야 합니다.")];
    }
    if (winNums.includes(bonusNum)) {
      return [false, new Error("[ERROR] 보너스 번호가 당첨번호에 포함되어 있습니다.")];
    }
    return [true, bonusNum];
  }


  function validatePrice(price) {
    const priceNum = parseInt(price);
    if (isNaN(priceNum)) {
      return [false, new Error("[ERROR] price는 숫자여야 합니다.")];
    }
    if (priceNum % 1000 !== 0) {
      return [false, new Error("[ERROR] price가 1000으로 나누어 떨어지지 않습니다.")];
    }
    return [true, priceNum];
  }


  module.exports = {validateWinNums, validateBounus, validatePrice}