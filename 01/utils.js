const operators = ["+", "-", "*", "/"];

const getRandomNumberBetweenOneAnd = (num = 10) => {
  return Math.ceil(Math.random() * num);
};

const roundOnTwoDecimalsIfNeeded = num => {
  return Math.round(num * 100) / 100;
};

const calculateResult = calculation => {
  switch (calculation.operator) {
    case "+":
      return calculation.numberA + calculation.numberB;
    case "-":
      return calculation.numberA - calculation.numberB;
    case "*":
      return calculation.numberA * calculation.numberB;
    case "/":
      return calculation.numberA / calculation.numberB;
  }
};

const createCalculation = () => {
  const numberA = getRandomNumberBetweenOneAnd(10);
  const numberB = getRandomNumberBetweenOneAnd(10);
  const operator = operators[getRandomNumberBetweenOneAnd(4) - 1];
  return { numberA, numberB, operator };
};

const getCalculationDom = calculation => {
  return document.createTextNode(
    `${calculation.numberA} ${calculation.operator} ${calculation.numberB} = `
  );
};
