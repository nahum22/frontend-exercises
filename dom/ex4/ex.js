function addField() {
  let input = document.createElement("input");
  input.type = "text";

  let form = document.querySelector("#dynamicForm");
  form.appendChild(input);
}

function submitForm() {
  let allFilled = true;
  let inputs = document.querySelectorAll("#dynamicForm input");
  let message = "";
  console.log(inputs);
  inputs.forEach((element) => {
    if (element.value == "-" || element.value == null) {
      allFilled = false;
    } else {
      message += " " + element.value;
    }
  });

  if (allFilled === false) {
    window.alert("fill all fields");
  } else {
    window.alert(message);
  }
}
