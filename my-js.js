const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
	return arr.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
};

const multiply = function(arr) {
  return arr.reduce((acc, curr) => {
    return acc * curr;
  }, 1);
};

const power = function(num, power) {
  return num**power;
};

const factorial = function(num) {
  if (num == 0) return 1;
	for (let i = num - 1; i >= 1; i--) {
    num *= i;
  };
  return num;
};
