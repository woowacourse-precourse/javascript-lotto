class QuickPick {
  #quickPick;

  constructor(quickPick) {
    this.#quickPick = quickPick;
    this.getQuickPick = this.getQuickPick.bind(this);
  }

  getQuickPick() {
    return this.#quickPick;
  }
}

module.exports = QuickPick;
