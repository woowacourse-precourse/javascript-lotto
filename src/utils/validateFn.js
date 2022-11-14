const { RANGE, THOUSAND } = require("../constant/inputMessage");

const removeDuplication = (userInput) => {
  const removeArr = userInput.filter((v, i) => {
    return userInput.indexOf(v) === i;
  });

  return removeArr;
};

// 로또 번호 범위 확인
const checkLottoRange = (numbers) =>
  numbers.every((v) => +v >= RANGE.START && +v <= RANGE.END);

// 숫자가 아닌 것을 입력했을 경우
const insideNotNumber = (userInput) =>
  [...userInput].every((v) => +v || v === "0");

// 입력값이 1,000 단위가 아닐 경우
const onlyInputInThousand = (userInput) => +userInput % THOUSAND !== 0;

// 입력값으로 로또를 구매할 수 없을 경우
const checkBelowThousand = (userInput) => +userInput < THOUSAND;

// 입력값이 6개가 아닌 경우
const isSixNumbers = (userInput) =>
  userInput.split(",").filter((v) => v !== ",").length === RANGE.COUNT;

// 입력값의 범위가 1 ~ 45 사이가 아닌 경우 (당첨 번호)
const checkWinRange = (userInput) =>
  userInput.split(",").every((v) => +v >= RANGE.START && +v <= RANGE.END);

// 입력값 내에 똑같은 숫자가 존재할 경우
const checkDuplicationNumber = (userInput) => {
  const arr = userInput.split(",").map(Number);

  return removeDuplication(arr).length === arr.length;
};

// 입력값 내의 .이 존재하여 정수 및 실수로 인식할 경우
const checkValidationInput = (userInput) => userInput.includes(".");

// 숫자가 아닌 것을 입력했을 경우
const existNotNumberInInput = (userInput) => +userInput;

// 입력값의 범위가 1 ~ 45 사이가 아닌 경우 (보너스 번호)
const checkBonusRange = (userInput) =>
  +userInput >= RANGE.START && +userInput <= RANGE.END;

// 당첨 번호와 보너스 번호의 중복 확인
const checkDuplicationInWinNumbers = (userInput, winLottos) =>
  winLottos.includes(+userInput);

module.exports = {
  insideNotNumber,
  onlyInputInThousand,
  checkBelowThousand,
  isSixNumbers,
  checkWinRange,
  checkDuplicationNumber,
  checkValidationInput,
  existNotNumberInInput,
  checkBonusRange,
  checkDuplicationInWinNumbers,
  removeDuplication,
  checkLottoRange,
};
