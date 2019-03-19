let id = document.getElementById("grabId");
let assign = document.getElementById("assignAtt");
console.log(id);
console.log(assign);

function setCard(){

let element = document.getElementById(id.value);
element.style.color = assign.value;
console.log(element);
};

function resetCards()
{
    let cards = document.getElementsByTagName("section");
    for(let card in cards)
    {
        cards[card].style = "";
    }
    
}