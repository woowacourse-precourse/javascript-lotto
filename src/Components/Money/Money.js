class Money {
  #money;

  constructor(money) {
    this.#money = money;
  }

  multiply(count) {
    return this.#money * count;
  }

  addSeperator() {
    return String(this.#money)
      .split('')
      .reverse()
      .reduce((strings, string, index) => {
        if (index > 0 && index % 3 === 0) strings.push(',');
        strings.push(string);

        return strings;
      }, [])
      .reverse()
      .join('');
  }
}

module.exports = Money;
