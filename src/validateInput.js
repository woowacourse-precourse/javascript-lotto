const validatePriceInput = (input) =>{
  const price = parseInt(input, 10)
  
  if(isNaN(price))throw new Error('[ERROR] 숫자를 입력해 주세요')
  if(price % 1000 !== 0)throw new Error('[ERROR] 1000 단위로 입력해주세요')
  
  return true
}

const validateLottoNumberInput = (input) => {
  const bonusNumber = parseInt(input, 10)

  if(isNaN(bonusNumber) || bonusNumber < 1 || 45 < bonusNumber)throw new Error('[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다')

  return true
}

const validateMatchNumbersInput = (input) => {
  const matchNumbers = input.split(',')

  if(matchNumbers.length !== 6)throw new Error('[ERROR] 6자리 숫자를 입력해주세요')

  return matchNumbers.every(number => validateLottoNumberInput(number))
}

const validateBonusNumberInput = (input, matchNumbers) => {
  validateLottoNumberInput(input)
  
  const bonusNumber = parseInt(input, 10)
  
  if(matchNumbers.includes(bonusNumber))throw new Error('[ERROR] 당첨 번호와 중복되는 번호입니다')
}


module.exports = {validatePriceInput, validateMatchNumbersInput, validateBonusNumberInput}