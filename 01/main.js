const main = {
  // Adds the result calculation to the list of calculations
  // + adjusts the color of the calcuation if it's correct or not
  addResultsToCalculationList: (success, calculation, userResult) => {
    const calculationList = document.getElementById("old-calculations");
    const calculationElement = document.createElement("p");
    calculationElement.style = `color: ${success ? "green" : "red"};`;
    calculationElement.appendChild(getCalculationDom(calculation));
    calculationElement.appendChild(document.createTextNode(userResult));
    calculationList.appendChild(calculationElement);
  },

  // Checks if the result is correct
  checkResult: (event, calculation) => {
    const value = event.target.value;
    const expectedResult = calculateResult(calculation);
    main.addResultsToCalculationList(
      roundOnTwoDecimalsIfNeeded(value) ===
        roundOnTwoDecimalsIfNeeded(expectedResult),
      calculation,
      value
    );
    main.renderCurrentCalculation();
  },

  // Creates the DOM element for the input field
  createInputField: calculation => {
    const input = document.createElement("input");
    input.type = "number";
    input.addEventListener("keypress", event => {
      if (event.key === "Enter") {
        main.checkResult(event, calculation);
      }
    });
    return input;
  },

  // renders the current calculation with the calculation itself and the input
  // field for the result
  renderCurrentCalculation: () => {
    const currentCalculation = document.getElementById("current-calculation");
    const calculation = createCalculation();
    currentCalculation.innerHTML = "";
    currentCalculation.appendChild(getCalculationDom(calculation));
    currentCalculation.appendChild(main.createInputField(calculation));
  }
};

main.renderCurrentCalculation();
