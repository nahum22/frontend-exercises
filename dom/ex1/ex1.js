let myLi = document.querySelector("li.start-here");
console.log(myLi);
myLi.textContent = "main title";

let myLiNextSibling = myLi.nextElementSibling;

let myUl = myLiNextSibling.firstElementChild;

let newSubTitle = document.createElement("li");

let subTitleText = document.createTextNode("sub title 4");
newSubTitle.appendChild(subTitleText);
myUl.appendChild(newSubTitle);

let myLiParent = myLi.parentElement;

myLiParent.lastChild.remove();

///6

let head = document.querySelector("head");

let title = head.lastChild;

title.textContent = "DOM Master";

let div = myLiParent.nextElementSibling;

let p = div.firstChild;

p.textContent = "Now I know how to traverse the DOM :D";

//updating paragraph content
