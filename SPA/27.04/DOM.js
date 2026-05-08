const inputElement = document.getElementById("input");
const buttonLoop = document.getElementById("loop");
const buttonRecursion = document.getElementById("recursion");
const resultInput = document.getElementById("result");

function loop() {
  catchError(inputElement);
  let res = 1;

  for (let i = 1; i <= inputElement.value; i++) {
    res = res * i;
  }

  resultInput.value = res;
}

function recursion() {
  catchError(inputElement);
  const n = inputElement.value;

  function calcRecursion(n){
    if (n === 0) return 1;
    return  n * calcRecursion(n - 1);
  }

  const res = calcRecursion(n);
  resultInput.value = res;
}

function catchError(inputElement) {
  try {
    if (inputElement.value === "") {
      throw new ReferenceError("field can't be empty");
    }
    if (inputElement.value < 0) {
      throw new ReferenceError("field only accepts non-negative integers");
    }
  } catch (error) {
    console.error(error);
  }
}
