const div1 = document.getElementById("div1");
const input = document.querySelector("input");
const infoDiv = document.getElementById("info");

input.addEventListener(
    "focus",
    (event) => {
        infoDiv.textContent = "Your name";
        event.target.style.display = "block";
        event.target.style.background = "pink";
    },
    true
);
input.addEventListener("blur", (event) => {
    div1.style.display = "none";
});

const btn1 = document.createElement("button");
const btn2 = document.createElement("button");
btn1.textContent = "Введіть посилання";
btn2.textContent = "Посилання";

document.body.appendChild(btn1);
document.body.appendChild(btn2);
let redirectUrl = "";

btn1.addEventListener("click", () => {
    redirectUrl = prompt("Введіть посилання:");
    if (btn1 === null) {
    return "error";
    }
console.log("hello");
});

btn2.addEventListener("click", function () {
    if (redirectUrl) {
        redirectUrl = checkProtocol(redirectUrl);
        window.location.href = redirectUrl;
    } else {
    alert("Посилання не введено!");
    }
});

function checkProtocol(url) {
    if (!/^https?:\/\//i.test(url)) {
    url = "http://" + url;
    }
    return url;
}

let myUrl = "LesiaHumenna.com";
myUrl = checkProtocol(myUrl);
console.log(myUrl);
//
const table = document.getElementById("table");
const tbody = table.querySelector("tbody");

let createRow = 10;
let createColumn = 10;

for (let i = 0; i < createRow; i++) {
    let row = document.createElement("tr");

    for (let j = 0; j < createColumn; j++) {
        let column = document.createElement("td");
        column.textContent = i * createColumn + (j + 1);
        row.appendChild(column);
    }
    tbody.appendChild(row);
}
//
const img = [
    "image = 1.jpg",
    "image = 2.jpg",
    "image = 3.jpg",
    "image = 4.jpg",
    "image = 5.jpg",
    "image = 6.jpg",
    "image = 7.jpg",
    "image = 9.jpg",
];

const divRandom = document.getElementById("divRandom");
const btn3 = document.createElement("button");
const div2 = document.createElement("div");
btn3.textContent = "Enter random img";

divRandom.appendChild(btn3);
btn3.appendChild(div2);

btn3.addEventListener("click", (event) => {
  let numRand = Math.floor(Math.random() * img.length);
    let imgRand = img[numRand];
        const imgEl = document.createElement("img");
        imgEl.src = numRand;
        div2.innerHTML = "";
        div2.appendChild(imgEl);
});
