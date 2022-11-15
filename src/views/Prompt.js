const MissionUtils = require('@woowacourse/mission-utils');
const Messages = require('../constants/Messages');
const PromptError = require('../errors/PromptError');

/**
 * Console.readLine의 콜백 지옥에서 벗어나게 도와주는 클래스입니다.
 * Javascript Generator 문법을 응용하여 async/await 없이 입력을 가능케 합니다.
 *
 * @example
 * new Prompt(function*(prompt) {
 *   prompt.print('반갑습니다! 나이가 어떻게 되시나요?');
 *   yield '당신의 입력 : ';
 *   prompt.print(`당신은 ${prompt.read()}살 이군요!`);
 *   prompt.print('당신의 거주지가 어떻게 되시나요?');
 *   yield '당신의 입력 : ';
 *   prompt.print(`${prompt.read()}! 좋은 곳이네요.`);
 * }).start();
 */
class Prompt {
  /** @type {Generator} */
  #routine;

  /** @type {Generator} */
  #runState;

  /** @type {string[]} */
  #lines = [];

  /**
   * @param {(prompt: Prompt) => Generator} routine
   */
  constructor(routine) {
    this.#routine = routine;
  }

  start() {
    this.#runState = this.#run();
    this.#runState.next();
  }

  /**
   * @param {string} message
   * @param  {...string} args
   */
  print(message, ...args) {
    MissionUtils.Console.print(Messages.format(message, ...args));
  }

  read() {
    return this.#lines.shift();
  }

  /**
   * @returns {number}
   */
  readNumber() {
    const number = Number(this.read());
    if (Number.isNaN(number)) throw new PromptError(Messages.PROMPT_READ_MUST_NUMBER);

    return number;
  }

  /**
   * @param {string} text
   */
  #onReadLine(text) {
    this.#lines.push(text);
    try {
      this.#runState.next();
    } catch (error) {
      // Generator가 이미 동작중이라는 에러는 무시
      if (error instanceof TypeError && error.message === 'Generator is already running') {
        return;
      }
      throw error;
    }
  }

  *#run() {
    const routineState = this.#routine(this);
    while (!routineState.done) {
      const query = routineState.next().value;
      if (query !== '' && !query) break;

      let readDone = false;
      MissionUtils.Console.readLine(query, (text) => {
        this.#onReadLine(text);
        readDone = true;
      });
      if (!readDone) yield;
    }
    MissionUtils.Console.close();
  }
}

module.exports = Prompt;
