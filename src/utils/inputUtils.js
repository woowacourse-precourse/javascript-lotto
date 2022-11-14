const { Console } = require('@woowacourse/mission-utils');
const { USER_INPUT_PHRASE } = require('./config');
const { validateLottoBudget, validateTargetNumber, validateBonusNumber } = require('./validate');

const getLottoBudget = (budgetAction) => {
  Console.readLine(USER_INPUT_PHRASE.REQUEST_PURCHASE_AMOUNT, (budget) => {
    validateLottoBudget(budget);
    budgetAction(budget);
  });
};

const getTargetNumber = (targetAction) => {
  Console.readLine(USER_INPUT_PHRASE.REQUEST_TARGET_NUMBER, (targetInput) => {
    const targetNumber = [...targetInput.split(USER_INPUT_PHRASE.DELIMITER)];
    validateTargetNumber(targetNumber);
    targetAction(targetNumber);
  });
};

const getBonusNumber = (bonusAction) => {
  Console.readLine(USER_INPUT_PHRASE.REQUEST_BONUS_NUMBER, (bonusInput) => {
    validateBonusNumber(bonusInput);
    bonusAction(bonusInput);
  });
};

module.exports = { getLottoBudget, getTargetNumber, getBonusNumber };
