module.exports = {
  env: {
    node: true,
    commonjs: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 2022,
  },
  extends: ['airbnb'],
  rules: {
    'linebreak-style': ['error', 'windows'],

    // 우아한테크코스 프로그래밍 요구사항
    // https://github.com/solo5star/javascript-lotto#-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D-%EC%9A%94%EA%B5%AC-%EC%82%AC%ED%95%AD
    'max-depth': ['error', 2],

    // 우아한테크코스 프로그래밍 요구사항 - 추가된 요구사항
    // https://github.com/solo5star/javascript-lotto#%EC%B6%94%EA%B0%80%EB%90%9C-%EC%9A%94%EA%B5%AC-%EC%82%AC%ED%95%AD
    'max-lines-per-function': ['error', 15],
  },
};
