const addButton = document.querySelector("button")
const input = document.querySelector("input")
const list = document.querySelector("ul")
let inputFromUser;
let counter =0;
input.addEventListener("input", getInput)
addButton.addEventListener("click", addItem)
function getInput(e) {
    getItemsfromLocal()
    inputFromUser = e.target.value;
    return inputFromUser
}
function addItem() {
    let li = document.createElement("li")
    li.textContent = inputFromUser
    list.appendChild(li)
    window.localStorage.setItem(`todo-${counter}`,`${inputFromUser}`)
    input.value = '';
    counter ++;
}
function getItemsfromLocal () {
    for (let property in window.localStorage) {
        if (property.match(/todo-[0-9]+/g)) {
            list.innerHTML += `<li>${window.localStorage[property]}</li>`
        }
    }
}
