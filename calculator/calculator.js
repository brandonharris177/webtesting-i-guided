module.exports = {
  add,
};

function isNumber(array) {
  const allNumbers = array.filter(value => typeof(value) === "number" && isNaN(value) === false);
  if (array.length === allNumbers.length) {
    return true
  } else {
    return false
  }
}

function add() {
  let array = Array.from(arguments)
  if (array.length === 0) {
    return 0
  } else if (
    isNumber(array)
  ) { 
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    let sum = array.reduce(reducer);
    return sum;
  } else {
    throw new Error("Both arguments must be numbers")
  }
}