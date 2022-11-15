const {ERROR_MESSAGE} = require("./message")
const {MONEY_UNIT} = require("./constants");

const payValidate = (userInput) =>  {
  
    if (userInput === "") throw new Error(ERROR_MESSAGE.BLANK);
  
    const inputArr = Array.from(userInput).map((i) => Number(i)); //문자열을 Number형 배열로 변환   
    inputArr.forEach((element)=> {
      if(isNaN(element)) throw new Error(ERROR_MESSAGE.NOT_NUMBER);
    })

    if(parseInt(userInput) % MONEY_UNIT != 0) throw new Error(ERROR_MESSAGE.UNIT_ERROR);
    
    
}
  
module.exports = payValidate;