/*document.body.style.background = "red";

setTimeout(function background() {
    document.body.style.background = "green";
}, 3000);


function buttonClickColor() {
    document.body.style.background = "orange";
}*/

const listItems = document.getElementsByTagName("li"); 

let i = 1;
setInterval (() => {
    if (i <= 20){
        const list = document.createElement("li");
        const textList = document.createTextNode(`Element ${i}`);
        list.appendChild(textList);
        document.getElementById("listID").appendChild(list);
        if (i % 2 === 0) {
            list.style.backgroundColor = "green"; 
        } else {
            list.style.backgroundColor = "purple";
        }
        i++;
    }
}, 2000);

let list = document.getElementById("list");

