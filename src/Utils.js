const { ErrorMessage } = require("./Constants");

function validateUserMoney(userMoney) {
  if (userMoney % 1000 !== 0) {
    throw Error(ErrorMessage.puchaseAmount);
  }
}

module.exports = {
  validateUserMoney,
};
