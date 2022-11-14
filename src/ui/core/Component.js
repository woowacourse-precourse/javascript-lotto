class Component {
  #ERRORMESSAGE = '[ERROR] YOU SHOULD DECLARE OVERIDING';

  #componentInstance;

  constructor(componentInstance) {
    this.#componentInstance = componentInstance;
  }

  render() {
    this.#componentInstance.print();
  }

  print() {
    throw new Error(this.#ERRORMESSAGE);
  }
}

module.exports = Component;
