function checkWinningEmpty(string) {
  if (string === '') {
    throw new Error('[ERROR] 공백은 입력할 수 없습니다.');
  }
}
function checkWinningString(string) {
  if (/[^(0-9),]/gi.test(string)) {
    throw new Error('[ERROR] 숫자만 입력해주세요.');
  }
}

function checkWinningRest(string) {
  const splitArray = string.split(',');
  if (Math.min(splitArray) < 1 || Math.min(splitArray) > 45) {
    throw new Error(
      '[ERROR] 1~45의 숫자만 쉼표로 구분해서 입력할 수 있습니다.',
    );
  }
}

function checkWinningValidation(string) {
  checkWinningEmpty(string);
  checkWinningString(string);
  checkWinningRest(string);

  return true;
}

module.exports = checkWinningValidation;
