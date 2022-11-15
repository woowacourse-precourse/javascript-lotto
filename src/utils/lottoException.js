const isNotSix = (lottoNumbers) => {
  if (lottoNumbers.length !== 6) {
    throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
  }
}

const isOutOfRange = (lottoNumbers) => {
  lottoNumbers.forEach((lottoNumber) => checkIsValidRange(lottoNumber));
}

const checkIsValidRange = (lottoNumber) => {
  if(lottoNumber < 1 || lottoNumber > 45) {
    throw new Error('[ERROR] 생성 가능한 로또의 범위는 1~45까지의 수 입니다.');
  }
}

const includeNotNumber = (lottoNumbers) => {
  lottoNumbers.forEach((lottoNumber) => checkIsNumber(lottoNumber));
}

const checkIsNumber = (lottoNumber) => {
  if(typeof lottoNumber !== 'number' || /\s/g.test(lottoNumber)) {
    throw new Error('[ERROR] 생성된 로또에 숫자가 아닌 원소가 포함되어 있습니다.')
  }
}

const isDuplicated = (lottoNumbers) => {
  const set = new Set([...lottoNumbers]);
  if(set.size !== lottoNumbers.length) {
    throw new Error('[ERROR] 생성된 로또에 중복된 수가 포함되어 있습니다.');
  }
}

const lottoException = {
    isNotSix, 
    isOutOfRange,
    includeNotNumber, 
    isDuplicated
}

module.exports = lottoException;