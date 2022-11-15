const isNotSix = (numbers) => {
  if (numbers.length !== 6) {
    throw new Error('[ERROR] 당첨 번호는 6개 입니다.');
  }
}
  
const includeNotNumber = (numberss) => {
  numberss.forEach((numbers) => checkIsNumber(numbers));
}
  
const checkIsNumber = (numbers) => {
  if(typeof numbers !== 'number' || /\s/g.test(numbers)) {
    throw new Error('[ERROR] 당첨 번호에 숫자가 아닌 원소가 포함되어 있습니다.')
  }
}
  
const isDuplicated = (numberss) => {
  const set = new Set([...numberss]);
  if(set.size !== numberss.length) {
    throw new Error('[ERROR] 당첨 번호에 중복된 수가 포함되어 있습니다.');
  }
}
  
const numberException = {
    isNotSix, 
    includeNotNumber, 
    isDuplicated
}
  
module.exports = numberException;