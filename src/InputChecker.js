function validateMoney(inputMoney) {
  if (!(/^[1-9][0-9]*[0]{3}$/.test(inputMoney))) {
    throw new Error('[ERROR] 입력값이 잘못되었습니다.')
  }
}

exports.validateMoney = validateMoney