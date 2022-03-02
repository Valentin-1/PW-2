let parent = document.getElementById("parent");
let child = document.getElementById("child");
let btn = document.querySelector("button");

let removeBtn = () => {
    btn.addEventListener("click", () => {
        parent.removeChild(child);
    })
};