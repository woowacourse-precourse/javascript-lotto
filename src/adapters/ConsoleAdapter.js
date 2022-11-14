const MissionUtils = require('@woowacourse/mission-utils');

/**
 * 콘솔 입출력 기능을 가진 클래스
 * - `readLine`: 주어진 질문을 화면에 출력하고, 사용자가 답변을 입력할 때까지 기다린 다음 입력된 답변을 인수로 전달하는 콜백 함수를 호출한다.
 * - `close`: Console에서 입출력을 제어하기 위해 사용하는 인스턴스를 닫는다.
 * - `print`: 주어진 문자열을 콘솔에 출력한다.
 * @typedef Console
 * @property {(query: string, callback: (answer: string) => void) => void} readLine -
 * @property {() => void} close
 * @property {() => void} print
 */

class ConsoleAdapter {
  #adapter;

  /**
   * @param {Console} [console=MissionUtils.Console]
   */
  constructor(console = MissionUtils.Console) {
    this.#adapter = console;
  }

  readLine(query, callback) {
    this.#adapter.readLine(query, callback);
  }

  close() {
    this.#adapter.close();
  }

  print(message) {
    this.#adapter.print(message);
  }
}

module.exports = ConsoleAdapter;
