function checkValiPrice(number) {
  if (number % 1000 !== 0) {
    throw new Error(
      "[ERROR] 로또 구입 금액은 1000원 단위로 입력해 주셔야 합니다."
    );
  }
}

function checkValidNumbers(numbers) {
  checkNumbersLength(numbers);
  checkNumbersType(numbers);
  checkDuplicateNumber(numbers);
  checkNumbersRange(numbers);
}

function getTotalRevenue(countEachWinningCost) {
  return (
    countEachWinningCost[0] * 5000 +
    countEachWinningCost[1] * 50000 +
    countEachWinningCost[2] * 1500000 +
    countEachWinningCost[3] * 30000000 +
    countEachWinningCost[4] * 2000000000
  );
}

function getRevenuePrecent(countEachWinningCost, purchasePrice) {
  const totalRevenue = getTotalRevenue(countEachWinningCost);
  return ((totalRevenue / purchasePrice) * 100).toFixed(1);
}

function checkNumbersLength(numbers) {
  if (numbers.length !== 6)
    throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
}

function checkNumbersType(numbers) {
  numbers.map((number) => {
    if (isNaN(number)) throw new Error("[ERROR] 로또는 모두 숫자여야 합니다.");
  });
}
function checkNumbersRange(numbers) {
  numbers.map((number) => {
    if (number < 1 || 45 < number)
      throw new Error("[ERROR] 입력받은 숫자의 범위를 초과합니다.");
  });
}

function checkDuplicateNumber(numbers) {
  if (numbers.length !== new Set(numbers).size)
    throw new Error("[ERROR] 중복이 있습니다.");
}

module.exports.checkValiPrice = checkValiPrice;
module.exports.checkValidNumbers = checkValidNumbers;
module.exports.getRevenuePrecent = getRevenuePrecent;
