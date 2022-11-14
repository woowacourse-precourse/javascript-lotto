const {ERROR_MESSAGE} = require("./constant.js")

const payValidate = (userInput) =>  {
  
    if (userInput === "") throw new Error(ERROR_MESSAGE.BLANK);
  
    const inputArr = Array.from(userInput).map((i) => Number(i)); //문자열을 Number형 배열로 변환
    for(var i=0;i<inputArr.length;i++){
        if(isNaN(inputArr[i])) throw new Error(ERROR_MESSAGE.NOT_NUMBER);
    }

    if(parseInt(userInput) % 1000 != 0) throw new Error(ERROR_MESSAGE.UNIT_ERROR);
    
    
  }
  
module.exports = payValidate;