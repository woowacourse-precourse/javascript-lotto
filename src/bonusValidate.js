const {ERROR_MESSAGE} = require("./message");

const bonusValidate = (bonus, winningNums) =>  {
  
    if (bonus === "") throw new Error(ERROR_MESSAGE.BLANK);
  
    const inputArr = Array.from(bonus).map((i) => Number(i)); //문자열을 Number형 배열로 변환   
    inputArr.forEach((element)=> {
      if(isNaN(element)) throw new Error(ERROR_MESSAGE.NOT_NUMBER);
    })

    if(winningNums.includes(parseInt(bonus))) throw new Error(ERROR_MESSAGE.BONUS_DUPLICATE_ERROR);
      
}

module.exports = bonusValidate;