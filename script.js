const inputElement = document.querySelector("#user-input");
const checkBtnElement = document.querySelector("#check-btn");
const clearBtnElement = document.querySelector("#clear-btn");
const resultElement = document.querySelector("#results-div");

function validateNumber() {
  const validFormats = [
    /^1 \d{3}-\d{3}-\d{4}$/,
    /^1 \(\d{3}\) \d{3}-\d{4}$/,
    /^1\(\d{3}\)\d{3}-\d{4}$/,
    /^1 \d{3} \d{3} \d{4}$/,
    /^\d{10}$/,
    /^\d{3}-\d{3}-\d{4}$/,
    /^\(\d{3}\)\d{3}-\d{4}$/,
  ];

  const phoneNumber = inputElement.value.trim();

  if (inputElement.value === "") {
    alert("Please provide a phone number");
    return false;
  }

  const isValidFormat = validFormats.some((format) => format.test(phoneNumber));

  if (isValidFormat) {
    resultElement.innerHTML = `<p>Valid US number: ${phoneNumber}</p>`;
  } else {
    resultElement.innerHTML = `<p>Invalid US number: ${phoneNumber}</p>`;
  }
}

checkBtnElement.addEventListener("click", validateNumber);

clearBtnElement.addEventListener("click", () => {
  inputElement.value = "";
  resultElement.innerHTML = "";
});
