class ExceptionState {
  static EXCEPTION_STATE = "exception";
  static SUCCESS_STATE = "success";

  constructor(state, reason = "") {
    this.state = state;
    this.reason = reason;
  }
}

module.exports = ExceptionState;
