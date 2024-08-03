var btnplus = document.getElementsByClassName('fa-plus-circle')
var btnminus =document.getElementsByClassName('fa-minus-circle')
var price = document.getElementsByClassName('unit-price')
var total =document.getElementsByClassName('total')
var qte = document.getElementsByClassName('quantity')
var hearts= document.getElementsByClassName('fa-heart')
var sum =0
var card= document.getElementsByClassName('card')
var remove = document.getElementsByClassName('fa-trash-alt')

for (let i = 0; i < card.length; i++) {
  
 

btnplus[i].addEventListener('click',function add(){
  console.log(i);
    qte[i].innerHTML = parseInt(qte[i].textContent)+1
    sum += parseInt(price[i].textContent)

    total[0].innerHTML = sum
})

btnminus[i].addEventListener('click',function minus(){


    if   (  parseInt(qte[i].textContent) > 0  )
  {  qte[i].innerHTML = parseInt(qte[i].textContent)-1

    sum -= parseInt(price[i].textContent)
   
    total[0].innerHTML = sum
}})

hearts[i].addEventListener('click',function like() {
    
   if(hearts[i].style.color =='red')
   
    {hearts[i].style.color ='black'}

     else {hearts[i].style.color ='red'}
})

remove[i].addEventListener('click',del)

function del() {
    //err => card[i].parentNode.removeChild(card[i])
    sum -= parseInt(price[i].textContent)*parseInt(qte[i].textContent)
  
    total[0].innerHTML = sum

  card[i].style.display="none"

}}