function solution(s) {
  let number = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  while (s.match(/[a-z]/gi)) {
    Object.keys(number).map((engNum) => {
      s = s.replace(engNum, number[engNum]);
    });
  }

  return parseInt(s);
}
