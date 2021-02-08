import { createElement } from "../../utils/createElement";

function createNumberElements(outputElement) {
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
  return [7, 8, 9, 4, 5, 6, 1, 2, 3, 0].map((number) =>
    createElement("button", {
      innerText: number,
      className: "calculator__number",
      onclick: () => {
        outputElement.value += number;
      },
    })
  );
}

// https://javascript.info/object
const operators = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => a / b,
  "%": (a, b) => a % b,
};

let lastOperator = null;
let lastNumber = null;
function createOperators(outputElement) {
  // https://javascript.info/keys-values-entries
  return Object.keys(operators).map((operator) =>
    createElement("button", {
      innerText: operator,
      className: "calculator__operator",
      onclick: () => {
        lastOperator = operator;
        lastNumber = +outputElement.value;
        outputElement.value = "";
      },
    })
  );
}

function createCalculateElement(outputElement) {
  return createElement("button", {
    innerText: "=",
    className: "calculator__calculate",
    onclick: () => {
      const number = +outputElement.value;
      const operatorFunction = operators[lastOperator];
      const result = operatorFunction(lastNumber, number);
      outputElement.value = result;
    },
  });
}

export function createCalculatorElement() {
  const outputElement = createElement("input", {
    className: "calculator__output",
    readOnly: true,
  });
  const numberElements = createNumberElements(outputElement);
  const operatorElements = createOperators(outputElement);
  const calculateElement = createCalculateElement(outputElement);

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
  const children = [
    outputElement,
    ...numberElements,
    ...operatorElements,
    calculateElement,
  ];
  return createElement("div", {
    className: "calculator",
    children: children,
  });
}
