let nameInput = document.getElementById("customerName");
let orderSelect = document.querySelector("#order");
let result =document.getElementsByClassName("result")[0];
let button =document.getElementsByTagName("button")[0];
function showOrder() {
    let customerName = nameInput.value;
    let order = orderSelect.value;

    result.textContent =
        "Hello " + customerName + "! Your order is " + order + ".";
    
}
function changeColor() {
    button.style.backgroundColor = "orange";
}
function resetColor() {
    button.style.backgroundColor = "";
}
function changeColor(){
    button.style.backgroundColor="darkblue";
    button.style.color="wite";
}
function resetColor() {
        button.style.backgroundColor="";
    button.style.color="";
}
