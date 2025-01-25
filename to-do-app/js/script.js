//selecting the input field
let inputfield = document.querySelector("#task-input");
//selecting button
let button = document.querySelector("#add-task-btn");
//selecing task list
let tasklist = document.querySelector("#task-list");
clear();

//know adding a event listner to the button
button.addEventListener("click", () => {
  //know making the input into a variable
  const task = inputfield.value.trim();
  if (!task) {
    inputfield.classList.add("border-2", "border-red-500");
  }
  //know making an elemetn li and appending this inot the ul
  else {
    inputfield.classList.remove("border-2", "border-red-500");

    let t = document.createElement("li");
    t.textContent = task;
    tasklist.appendChild(t);

    //creaitng an remvoe button and then appending it to the li
    let remove = document.createElement("button");
    remove.textContent = "Remove";
    remove.classList.add(
      "inline-flex",
      "justify-between",
      "ml-96",
      "items-center",
      "bg-red-500",
      "text-white",
      "font-bold",
      "px-2",
      "py-1",
      "rounded",
      "hover:bg-red-600",
      "focus:outline-none"
    );

    t.appendChild(remove);
    //now applying a more strategic to it by making it to the eventlistener
    remove.addEventListener("click", () => {
      t.remove();
    });
  }
  clear();
});

//making a fucntion to clear the input field
function clear() {
  return (inputfield.value = "");
}
