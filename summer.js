var btn = document.getElementsByClassName('fa-plus-circle')
console.log(btn[0]);
var price= document.getElementsByClassName('unit-price')
console.log(price[0].innerHTML);
var total=document.getElementsByClassName('total')
console.log(total[0].innerHTML);
var totalprice=0
var heart= document.getElementsByClassName('fa-heart')
console.log(heart[0]);
var deleteicon = document.getElementsByClassName('fa-trash-alt')
console.log(deleteicon[0]);
var card = document.getElementsByClassName('card')
console.log(card[0]);



btn[0].addEventListener("click",function add() {
    

    totalprice += parseInt(price[0].textContent) 
    total[0].innerHTML=totalprice
    
    var newp = document.createElement('p');
    var newContent = document.createTextNode('checked');
    newtitle.appendChild(newContent);
    card[0].appendChild(newp);
    return totalprice
    })



heart[0].addEventListener("click",function style() {
     
if (heart[0].style.color=="red") {
        heart[0].style.color="black"
    }
    else heart[0].style.color="red"
    return heart[0]
})

deleteicon[0].addEventListener("click",function remove() {
    return card[0].parentNode.removeChild(card[0])
})