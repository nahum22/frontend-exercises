function checkAndSubmit() {
  if (visCode.value.toLowerCase() == hidCode.value.toLowerCase()) {
    document.getElementById("form").submit();
  } else {
    return false;
  }
}

function isAlphanumeric(str) {
  return str.match(/^[a-zA-Z0-9]+$/) !== null;
}

function generateSmsCode() {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let smsCode = "";
  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    const randomCharacter = characters[randomIndex];
    smsCode += randomCharacter;
  }
  return smsCode;
}

function fillCode(el) {
  if (isAlphanumeric(el.value)) {
    let concatenatedValues = inputs.reduce((accu, currentValue) => {
      return accu + currentValue.value;
    }, "");

    hidCode.value = concatenatedValues;
  }
}

function fillFromClipboard(event) {
  event.preventDefault();
  let paste = event.clipboardData;
  if (isAlphanumeric(paste) && paste.length === 6) {
    for (let i = 0; i < 6; i++) {
      numList[i].value = paste[i];
    }
  } else {
    return false;
  }
}

function checkValue(el) {
  if (!isAlphanumeric(el.value)) {
    el.classList.add("error");
  } else {
    el.classList.remove("error");
  }
}

// Moved the declaration of numList before its first use
let numList = document.querySelectorAll("input:not([type='hidden'])");
let hidCode = document.querySelector("input[type='hidden']");
let visCode = document.querySelector("input#vis-code");
let sms = generateSmsCode();
visCode.value = sms;

let inputs = Array.from(numList);
inputs.shift();

inputs.forEach((el) => {
  el.addEventListener("keyup", () => fillCode(el));
  el.addEventListener("keyup", () => checkValue(el));
  el.addEventListener("keyup", () => checkAndSubmit());
});
