function winningValidation(string) {
  checkWinningEmpty(string);
}

function checkWinningEmpty(string) {
  if (string === '') {
    throw new Error('[ERROR] 공백은 입력할수 없습니다.');
  }
}

function checkWinningString(string) {}

function checkWinningRest(string) {}

module.exports = {
  winningValidation,
  checkWinningEmpty,
};
