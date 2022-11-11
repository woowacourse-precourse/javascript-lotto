const { Console } = require("@woowacourse/mission-utils");
const { USER_INPUT_PHRASE } = require('./config');


const getTicketBudget = (budgetAction) => {
    Console.readLine(USER_INPUT_PHRASE.REQUEST_PURCHASE_AMOUNT,
        (budget) => budgetAction(budget));
};
const getTargetNumber = (targetAction) => {
    Console.readLine(USER_INPUT_PHRASE.REQUEST_TARGET_NUMBER, (targetInput) => {
        targetAction(targetInput.split(USER_INPUT_PHRASE.REQUEST_TARGET_DELIMITER));
    });
};

module.exports = { getTicketBudget, getTargetNumber };