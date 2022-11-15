class ExceptionState {
  constructor(state, reason = "") {
    this.state = state;
    this.reason = reason;
  }
}

module.exports = ExceptionState;
