const validateNumber = (target) => {
  const numberReg = /^[0-9]*$/;
  return numberReg.test(target);
};

module.exports = validateNumber;
