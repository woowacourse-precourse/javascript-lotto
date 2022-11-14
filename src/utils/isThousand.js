const isThousand = (input) => {
  return parseInt(input) % 1000 === 0 ? true : false;
};
module.exports = isThousand;
