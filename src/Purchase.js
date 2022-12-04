class Purchase {
  #PRICE = 1000;

  getCount(money) {
    const count = money / this.#PRICE;

    return count;
  }
}
