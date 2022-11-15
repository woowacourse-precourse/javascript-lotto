function checkValiPrice(number) {
  if (number % 1000 !== 0) {
    throw new Error(
      "[ERROR] 로또 구입 금액은 1000원 단위로 입력해 주셔야 합니다."
    );
  }
}

function checkValidWinningNumber(inputWinningNumbers) {
  const winningNumbers = inputWinningNumbers.split(",");
  if (winningNumbers.length !== 6) {
    throw new Error("[ERROR] 입력받은 숫자가 6개가 아닙니다.");
  }

  winningNumbers.map((number) => {
    if (isNaN(number))
      throw new Error("[ERROR] 입력받은 숫자에 문자가 있습니다.");
  });

  winningNumbers.map((number) => {
    if (number < 1 || 45 < number)
      throw new Error("[ERROR] 입력받은 숫자의 범위를 초과합니다.");
  });

  if (winningNumbers.length !== new Set(winningNumbers).size)
    throw new Error("[ERROR] 중복이 있습니다.");
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

module.exports.checkValiPrice = checkValiPrice;
module.exports.checkValidWinningNumber = checkValidWinningNumber;
module.exports.getTotalRevenue = getTotalRevenue;
module.exports.getRevenuePrecent = getRevenuePrecent;
