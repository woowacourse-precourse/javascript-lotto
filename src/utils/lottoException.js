const { ERROR_TEXT } = require('../const/text');

const isNotSix = (lottoNumbers) => {
  if (lottoNumbers.length !== 6) {
    throw new Error(ERROR_TEXT.LOTTO_NOT_SIX);
  }
}

const isOutOfRange = (lottoNumbers) => {
  lottoNumbers.forEach((lottoNumber) => checkIsValidRange(lottoNumber));
}

const checkIsValidRange = (lottoNumber) => {
  if(lottoNumber < 1 || lottoNumber > 45) {
    throw new Error(ERROR_TEXT.LOTTO_OUT_OF_RANGE);
  }
}

const includeNotNumber = (lottoNumbers) => {
  lottoNumbers.forEach((lottoNumber) => checkIsNumber(lottoNumber));
}

const checkIsNumber = (lottoNumber) => {
  if(typeof lottoNumber !== 'number' || /\s/g.test(lottoNumber)) {
    throw new Error(ERROR_TEXT.LOTTO_NOT_NUMBER);
  }
}

const isDuplicated = (lottoNumbers) => {
  const set = new Set([...lottoNumbers]);
  if(set.size !== lottoNumbers.length) {
    throw new Error(ERROR_TEXT.LOTTO_INCLUDE_DUPLICATE);
  }
}

const lottoException = {
    isNotSix, 
    isOutOfRange,
    includeNotNumber, 
    isDuplicated
}

module.exports = lottoException;