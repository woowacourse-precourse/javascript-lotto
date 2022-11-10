function winningValidation(string) {
  checkWinningEmpty(string);
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

function checkWinningRest(string) {}

module.exports = {
  winningValidation,
  checkWinningEmpty,
  checkWinningString,
};
