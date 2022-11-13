class LottoController {
  #lottos;

  #winner;

  #amount;

  #prize;

  constructor() {
    this.#lottos = [];
    this.#winner = [];
    this.#amount = 0;
    this.#prize = 0;
  }

  validateAmount(amount) {
    const { CHECK, ERROR_MSG } = CONSTANT;
    if (!CHECK.ISNUMBER(amount) || CHECK.ISUNIT(amount))
      throw new Error(`${ERROR_MSG.WRONG_AMOUNT}`);
  }
}