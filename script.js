// Typewriter Effect.

var typeName = document.getElementById("name");
var myName = ["Basim Ahmed Khan", "A Frontend Developer", "A Web Designer", "A Freelancer", "An Automation Developer"];
let charPosition = 0;
let textPosition = 0;

typeWriter = () => {
    typeName.innerText = myName[textPosition].substring(0, charPosition);
    if(charPosition++ != myName[textPosition].length)
    {
        setTimeout(typeWriter, 100);
    }
    let text = myName[textPosition];
    if(charPosition === text.length+1)
    {
        setTimeout(delChar, 3000);
    }
};

delChar = () => {
    typeName.innerText = myName[textPosition].substring(0, charPosition);
    if(--charPosition >= 0)
    {
        setTimeout(delChar, 50);
    }
    if(charPosition === 0)
    {
        if(textPosition === myName.length-1)
        {
            textPosition = 0;
        }
        else
        {
            textPosition++;
        }
        setTimeout(typeWriter, 1000);
    }
};

typeWriter();


// Hamburger Nav.

var collapse = document.getElementById("nav");
var navItem = document.getElementsByClassName("nav-item");
document.getElementById("hamburger").addEventListener("click", hameffect = () => {
    collapse.classList.toggle("hamCollapse");
    for(let i=0; i<navItem.length; i++){
        navItem[i].classList.toggle("display");
    }
});