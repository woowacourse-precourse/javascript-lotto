class Console {
  getAmount() {
    const { MSG, UNIT } = CONSTANT;
    Console.readLine(`${MSG.PURCHASE}\n`, answer => {
      this.validateAmount(answer);
      this.#amount = +answer;
      this.generateLotto(this.#amount / UNIT);
      this.printLottos();
      this.getWinner();
    });
  }
}