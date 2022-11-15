const App = require('../src/App.js');

describe('Domain logic test', () => {
  test('Input amount must be a multiple of 1000', () => {
    expect(() => {
      const app = new App();
      app.validateAmount('3500');
    }).toThrow('[ERROR]');
  });

  test('Input amount must be a number', () => {
    expect(() => {
      const app = new App();
      app.validateAmount('asdf');
    }).toThrow('[ERROR]');
  });

  test('Winner input must be a number', () => {
    expect(() => {
      const app = new App();
      app.compareResults('1,2,a');
    }).toThrow('[ERROR]');
  });

  test('Winner input must have 6 numbers', () => {
    expect(() => {
      const app = new App();
      app.compareResults('1,2,3,4,5');
    }).toThrow('[ERROR]');
  });

  test('Winner input must have unique numbers', () => {
    expect(() => {
      const app = new App();
      app.compareResults('1,2,3,4,5,5');
    }).toThrow('[ERROR]');
  });

  test('Winner input must be a number between 1 and 45', () => {
    expect(() => {
      const app = new App();
      app.compareResults('1,2,3,4,5,0');
    }).toThrow('[ERROR]');
  });

  test('Bonus input must be a number', () => {
    expect(() => {
      const app = new App();
      app.checkBonus('a');
    }).toThrow('[ERROR]');
  });

  test('Bonus input must be a number from 1 to 45', () => {
    expect(() => {
      const app = new App();
      app.checkBonus('46');
    }).toThrow('[ERROR]');
  });

  test('Bonus input must not be included in winner numbers', () => {
    expect(() => {
      const app = new App();
      app.compareResults('1,2,3,4,5,6');
      app.checkBonus('6');
    }).toThrow('[ERROR]');
  });

  test('Bonus input must not be included in winner numbers', () => {
    expect(() => {
      const app = new App();
      app.compareResults('1,2,3,4,5,6');
      app.checkBonus('6');
    }).toThrow('[ERROR]');
  });
});
