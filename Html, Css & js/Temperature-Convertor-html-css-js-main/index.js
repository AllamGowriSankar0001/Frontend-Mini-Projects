function convertfrom() {

  let input = parseFloat(document.getElementById("input").value);
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;
  let result;

  if (isNaN(input)) {
    alert("Please enter a valid number!");
    return;
  }

  let celsius;
  switch (from) {
    case "Celsius":
      celsius = input;
      break;
    case "Fahrenheit":
      celsius = (input - 32) * 5 / 9;
      break;
    case "Kelvin":
      celsius = input - 273.15;
      break;
    default:
      alert("Unknown input unit");
      return;
  }

  switch (to) {
    case "Celsius":
      result = celsius;
      break;
    case "Fahrenheit":
      result = (celsius * 9 / 5) + 32;
      break;
    case "Kelvin":
      result = celsius + 273.15;
      break;
    default:
      alert("Unknown target unit");
      return;
  }

  // show numeric value with first letter of unit (uppercase)
  const unitLetter = (to && to.length) ? to.charAt(0).toUpperCase() : '';
  document.getElementById("result").textContent = result.toFixed(2) + " " + unitLetter;
}
