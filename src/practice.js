let items = [
  [1, 2, 4, 9, 32, 37],
  [14, 15, 16, 17, 18, 22],
  [4, 12, 22, 23, 31, 41],
];

items.forEach(function (item) {
  console.log(item); // 출력 결과: item, item2, item3
});
items.forEach((item) => {
  console.log(item);
});
