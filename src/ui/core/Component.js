class Component {
  #ERRORMESSAGE = "[ERROR] YOU SHOULD DECLARE OVERIDING";

  print() {
    throw new Error(this.#ERRORMESSAGE);
  }
}

module.exports = Component;
