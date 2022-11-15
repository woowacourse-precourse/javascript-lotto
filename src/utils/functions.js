const validateType = (target, errorMessage) => {
  if (
    typeof +target !== "number" ||
    Number.isNaN(+target) ||
    +target < 1 ||
    +target > 45
  )
    throw new Error(errorMessage);
};

module.exports = {
  validateType,
};
