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

module.exports = {
  rangeCheck,
  repeatedCheck,
  lengthCheckLottoNumber,
  includeString
};
