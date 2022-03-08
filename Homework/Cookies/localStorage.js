const textContainer = document.getElementById("textArea");

textContainer.value = localStorage.getItem('textContainer');
textContainer.oninput = () => {
    localStorage.setItem('textContainer', textContainer.value)
}
