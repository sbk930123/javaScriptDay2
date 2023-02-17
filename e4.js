const nameInput = document.getElementById("name");

function myFunc(e) {
  console.log(e.key);
}

nameInput.addEventListener("change", myFunc);