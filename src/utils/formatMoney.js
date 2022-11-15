const formatMoney = (money) => {
  const formattedMoney = new Intl.NumberFormat("en-US").format(money);
  return formattedMoney;
};

module.exports = formatMoney;
