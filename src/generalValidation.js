const {ERROR_MESSAGE} = require("./constant.js")

const generalValidation = (userInput) =>  {
  
    if (userInput === "") throw new Error(ERROR_MESSAGE.BLANK);
  
    const inputArr = Array.from(userInput).map((i) => Number(i)); //문자열을 Number형 배열로 변환
    for(var i=0;i<inputArr.length;i++){
        if(isNaN(inputArr[i])) throw new Error(ERROR_MESSAGE.NOT_NUMBER);
    }
    
  }
  
module.exports = generalValidation;