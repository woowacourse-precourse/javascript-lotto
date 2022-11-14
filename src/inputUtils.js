const { Console } = require('@woowacourse/mission-utils');
const { USER_INPUT_PHRASE } = require('./config');

const getLottoBudget = (budgetAction) => {
  Console.readLine(USER_INPUT_PHRASE.REQUEST_PURCHASE_AMOUNT, (budget) => {
    budgetAction(budget);
  });
};

const getTargetNumber = (targetAction) => {
  Console.readLine(USER_INPUT_PHRASE.REQUEST_TARGET_NUMBER, (targetInput) => {
    targetAction(targetInput.split(USER_INPUT_PHRASE.REQUEST_TARGET_DELIMITER));
  });
};

const getBonusNumber = (bonusAction) => {
  Console.readLine(USER_INPUT_PHRASE.REQUEST_BONUS_NUMBER, (bonusInput) => {
    bonusAction(bonusInput);
  });
};

module.exports = { getLottoBudget, getTargetNumber, getBonusNumber };
