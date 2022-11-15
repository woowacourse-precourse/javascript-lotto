const { deepFreeze } = require('./helper');

const LOTTO_CONSTANT = deepFreeze({
  lowest: 1,
  highest: 45,
  numbersLength: 6,
  price: 1000,
});

const LOTTO_REGEX = deepFreeze({
  //regex: 000으로 끝나는 자연수
  price: /^[\w]*?000$/,
  //regex: 1부터 45까지 자연수
  lottoNumber: /^(?:[1-9]|[1-3][0-9]|4[0-5])$/,
});

module.exports = { LOTTO_CONSTANT, LOTTO_REGEX };
