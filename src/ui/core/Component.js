class Component {
  #ERROR_MESSAGE = '[ERROR] YOU SHOULD DECLARE OVERIDING';

  print() {
    throw new Error(this.#ERROR_MESSAGE);
  }
}

module.exports = Component;
