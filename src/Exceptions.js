const isNumber = (num) => {
  if (typeof num !== "number" || isNaN(num)) {
    throw new Error("[ERROR] 숫자만 입력하세요.");
  }
};

const isInThousands = (num) => {
  if (num % 1000 !== 0) {
    throw new Error("[ERROR] 구입 금액은 1000원 단위만 가능합니다.");
  }
};

const isInRange = (num) => {
  if (num < 1 || num > 45) {
    throw new Error("[ERROR] 1 ~ 45 사이의 숫자만 입력하세요.");
  }
};

const isExist = (arr, num) => {
  if (arr.includes(num)) {
    throw new Error("[ERROR] 당첨 번호에 보너스 숫자가 존재합니다.");
  }
};

const isSixNums = (arr) => {
  if (arr.length !== 6) {
    throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
  }
};

const isDuplicated = (arr) => {
  if (new Set(arr).size !== 6) {
    throw new Error("[ERROR] 중복된 숫자가 있습니다.");
  }
};

module.exports = {
  isNumber,
  isInThousands,
  isInRange,
  isExist,
  isSixNums,
  isDuplicated,
};
