const formatArray = (array) => {
  return `[${String(array).replace(/,/g, ", ")}]`;
};

module.exports = { formatArray };
