const ErrorBoundary = require('./error/ErrorBoundary');
const { BUDGET_ERROR_MESSAGE, TICKET_PRICE } = require('./constants/lotto');

const Budget = class extends ErrorBoundary {
  #budget;

  constructor(budget) {
    super();

    this.#budget = budget;
    this.validateInput(this.#budget);
  }

  validate(budget) {
    const isBudgetDivided = budget % TICKET_PRICE === 0;

    if (isBudgetDivided) return { status: true };

    const budgetErrorMessage = this.getErrorMessage(isBudgetDivided);
    return { status: false, message: budgetErrorMessage };
  }

  getErrorMessage(isBudgetDivided) {
    const { DIVIDED, DEFAULT } = BUDGET_ERROR_MESSAGE;

    if (!isBudgetDivided) return DIVIDED;
    return DEFAULT;
  }

  countTicket() {
    this.ticketCount = this.#budget / TICKET_PRICE;
    return this.ticketCount;
  }
};

module.exports = Budget;
