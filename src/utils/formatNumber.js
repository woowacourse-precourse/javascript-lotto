const formatNumber = (benefit) => {
  const formattedNumber = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 1,
  }).format(benefit);
  return formattedNumber;
};

module.exports = formatNumber;
