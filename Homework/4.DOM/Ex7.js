const body = document.querySelector("body");

const options = {
    top: "10px",
    right: "10px",
    message: "Hello!",
    className: "welcome"
};

let setStyles = () => {
    let elementCss = document.querySelector(".notification");
    elementCss.style.position = "absolute";
    elementCss.style.display = "block";
    elementCss.style.width = "auto";
    elementCss.style.top = options.top;
    elementCss.style.right = options.right;
    elementCss.style.backgroundColor = "purple";
};

let showNotification = options => {
    body.innerHTML = `<div class ="notification ${options.className}"> ${options.message} </div>`;
    setStyles();
    setTimeout(() => {
        let elementCss = document.querySelector(".notification");
        elementCss.innerHTML = '';
    }, 1500)
};

showNotification(options);