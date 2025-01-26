// first of all slecting the buton the input field and the img
let button = document.querySelector("#button");
let input = document.querySelector("#input");
let img = document.querySelector("#img");

//ading a evetn listner to the button

button.addEventListener("click", () => {
  const inputv = input.value;
  if (!inputv) {
    alert("Please Enter Some valid url");
  } else {
    const url = inputv.trim();
    img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${url}`;
  }
});
