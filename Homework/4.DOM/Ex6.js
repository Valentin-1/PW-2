const links = [
    "https://google.com", "/page.html", "https://yandex.com", "/page2.html", "https://vk.com","/page3.html", 
    "https://instagram.com", "/page4.html", "https://megogo.com", "/page5.html"
];

const addLinks = () => {
    const ul = document.createElement("ul");
    document.querySelector("body").appendChild(ul);
    const currying = tag => text => `<${tag}><a href="${text}">${text}</a></${tag}>`;

    for (let link of links) {
        let tag = currying("li");
        let text = tag(`${link}`);
        ul.innerHTML += text;
    }
};

const setStyles = () => {
  const hyperLinks = document.querySelectorAll("a");

  for (const link of hyperLinks) {
      if (link.innerHTML.includes("http")) {
          link.style.color = "red";
      }
  }
};

addLinks();
setStyles();