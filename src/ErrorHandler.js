class ErrorHandler {
  checkAnArray(arr) {
    isSixNumber(arr);
    isDuplicated(arr);

    arr.forEach((value) => {
      isNaNError(value);
      is1To45(value);
    });
  }

  checkANumber(num) {
    isNaNError(num);
    is1To45(num);
  }
}
const isSixNumber = (arr) => {
  if (arr.length !== 6) {
    throw new Error(
      '[ERROR] 로또 번호는 6개여야 합니다. 쉼표(,)로 구분해주세요.'
    );
  }
};

const isNaNError = (num) => {
  if (isNaN(num)) {
    throw new Error('[ERROR] 다른 형식이 아닌 숫자만 입력해 주세요.');
  }
};

const isDuplicated = (arr) => {
  const set = new Set(arr);
  if (set.size !== 6) {
    throw new Error('[ERROR] 중복된 번호가 없어야 합니다.');
  }
};

const is1To45 = (num) => {
  if (!(num >= 1 && num <= 45)) {
    throw new Error('[ERROR] 1부터 45 사이의 숫자만 입력해 주세요.');
  }
};

module.exports = ErrorHandler;
