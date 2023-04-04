// Typewriter Effect.

var typeName = document.getElementById("name");
var myName = ["Basim Ahmed Khan", "A Frontend Developer", "A Web Designer", "A Game Developer"];
let charPosition = 0;
let textPosition = 0;

let typeWriter = setInterval(() => {
    let span = document.createElement("span");
    let text = myName[textPosition];
    span.innerText = text[charPosition];
    typeName.appendChild(span);
    if(++charPosition === text.length)
    {
        textPosition++;
        let delChild = setInterval(() => {
            typeName.removeChild(typeName.lastElementChild);
            if(--charPosition === 0)
            {
                clearInterval(delChild);
            }
        }, 100);
    }
    if(textPosition === myName.length)
    {
        clearInterval(typeWriter);
    }
}, 200);


// Hamburger Nav.

var collapse = document.getElementById("nav");
var navItem = document.getElementsByClassName("nav-item");
document.getElementById("hamburger").addEventListener("click", () => {
    collapse.classList.toggle("hamCollapse");
    for(let i=0; i<navItem.length; i++){
        navItem[i].classList.toggle("display");
    }
});