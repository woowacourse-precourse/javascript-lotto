function winningValidation(string) {
  checkWinningEmpty(string);
  checkWinningString(string);
  checkWinningRest(string);
  checkWinningSixNumber(string);

  return true;
}

function checkWinningEmpty(string) {
  if (string === '') {
    throw new Error('[ERROR] 공백은 입력할수 없습니다.');
  }
}

function checkWinningString(string) {
  if (/[^(0-9),]/gi.test(string)) {
    throw new Error('[ERROR] 숫자를 제외한 문자는 입력할수 없습니다.');
  }
}

function checkWinningRest(string) {
  const split = string.split(',');
  if (Math.min(...split) < 1 || Math.max(...split) > 45) {
    throw new Error('[ERROR] 1~45의 숫자만 쉼표로 구분하여 입력할수 없습니다.');
  }
}

function checkWinningSixNumber(string) {
  const split = string.split(',');
  if (split.length !== 6) {
    throw new Error('[ERROR] 6개의 숫자만 입력할수 없습니다.');
  }
}

module.exports = {
  winningValidation,
  checkWinningEmpty,
  checkWinningString,
  checkWinningRest,
  checkWinningSixNumber,
};
