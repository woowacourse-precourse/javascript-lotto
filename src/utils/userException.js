const isNotNumber = (userEnterAmount) => {
  if(isNaN(userEnterAmount) || /\s/g.test(userEnterAmount)) {
    throw new Error('[ERROR] 로또 구입 금액은 공백이 포함되지 않은 숫자 형태로 입력해야 합니다.')
  }
}

const isInDivisible = (userEnterAmount) => {
  if(Number(userEnterAmount) % 1000 !== 0) {
    throw new Error('[ERROR] 로또 구입 금액은 1,000원 단위로 입력해야 합니다.')
  }
}

const userException = {
  isNotNumber, 
  isInDivisible
};

module.exports = userException;