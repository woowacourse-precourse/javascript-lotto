const ErrorBoundary = require('./error/ErrorBoundary');
const { TICKET_ERROR_MESSAGE, TICKET_PRICE } = require('./constants/lotto');

const Budget = class extends ErrorBoundary {
  #budget;

  constructor(budget) {
    super();
    this.#budget = budget;
    this.setup(this.#budget);
  }

  validate(budget) {
    const isBudgetDivided = budget % TICKET_PRICE === 0;

    if (isBudgetDivided === true) {
      return { status: true };
    }

    const budgetErrorMessage = this.getErrorMessage(isBudgetDivided);
    return { status: false, message: budgetErrorMessage };
  }

  static getErrorMessage(isBudgetDivided) {
    const { DIVIDED, DEFAULT } = TICKET_ERROR_MESSAGE;

    if (isBudgetDivided === false) return DIVIDED;
    return DEFAULT;
  }

  buyTicket() {
    return this.#budget / TICKET_PRICE;
  }
};

module.exports = Budget;
