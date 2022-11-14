const isPurchasePriceToNumber = (price) => {
  return [...price].some((ch) => {
    return !("0" <= ch && ch <= "9");
  });
};
const getTotalProfit = (purchase, resultProfit) => {};
module.exports = { isPurchasePriceToNumber, getTotalProfit };
