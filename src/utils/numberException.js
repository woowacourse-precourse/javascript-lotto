const { ERROR_TEXT } = require('../const/text');

const isNotSix = (numbers) => {
  if (numbers.length !== 6) {
    throw new Error(ERROR_TEXT.WINNING_NOT_SIX);
  }
}
  
const includeNotNumber = (numberss) => {
  numberss.forEach((numbers) => checkIsNumber(numbers));
}
  
const checkIsNumber = (numbers) => {
  if(typeof numbers !== 'number' || /\s/g.test(numbers)) {
    throw new Error(ERROR_TEXT.WINNING_INCLUDE_NOT_NUMBER);
  }
}
  
const isDuplicated = (numberss) => {
  const set = new Set([...numberss]);
  if(set.size !== numberss.length) {
    throw new Error(ERROR_TEXT.WINNING_INCLUDE_DUPLICATE);
  }
}
  
const numberException = {
    isNotSix, 
    includeNotNumber, 
    isDuplicated
}
  
module.exports = numberException;