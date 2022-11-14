// 로또 번호 예외 처리
const rangeCheck = (numbers)=>{
  return numbers.every((number)=>number>=1 && number<=45)
}

const repeatedCheck = (numbers)=>{
  const numbersCheck = new Set(numbers);
  return numbersCheck.size === numbers.length
}

const lengthCheckLottoNumber = (numbers)=>{
  return numbers.length === 6
}

const includeString = (numbers) =>{
  return numbers.every((number)=>!isNaN(number))
}

// 돈 입력 예외 처리
const withoutRemainderByThousand = (money)=>{
  return money%1000 === 0
}

const isNotNumber = (money)=>{
  return !isNaN(money);
}

const smallerThanThousand = (money)=>{
  return !(money<1000)
}


// 당첨 번호와 보너스 번호 예외 처리
const winningRepeatedCheck = (numbers)=>{
  const numbersCheck = new Set(numbers.split(','));
  return numbersCheck.size === numbers.split(',').length
}

const winningRangeCheck = (numbers)=>{
  return numbers.split(',').every((number)=>number>=1 && number<=45)
}

const winningIncludeString = (numbers) =>{
  return numbers.split(',').every((number)=>!isNaN(number))
}

const winningLengthCheck = (numbers)=>{
  return numbers.split(',').length === 6
}

const winningIncludeBonusNumber = (numbers, bonus)=>{
  return !numbers.includes(bonus);
}

const winningIncludeFloatNumber = (numbers)=>{
  return !numbers.includes('.');
}

module.exports = {
  withoutRemainderByThousand,
  isNotNumber,
  smallerThanThousand,
  winningIncludeBonusNumber,
  winningIncludeFloatNumber,
  winningIncludeString,
  winningLengthCheck,
  winningRangeCheck,
  winningRepeatedCheck,
  rangeCheck,
  repeatedCheck,
  lengthCheckLottoNumber,
  includeString
};
