
/*function fetchdata() {
    setTimeout( () => {
    fetch('https://fakestoreap.com/products/1').then((data)=>
    console.log(data)).catch((err)=>console.log(err))},2000)
    return data
}

async function waitCall() {
    try {
      
            const response = await fetchdata()
           console.log(response);
    } catch (error) {
      console.log("Err");
    }
  }
  waitCall();*/

  async function waitCall() {

    setTimeout(async () => {
        try{
            const response = await fetch('https://fakestoreapi.com/products/1');
            const responseData = await response.json();
            console.log(responseData);
             return responseData
        }catch(error)
        {
            console.error("Erreur lors de la récupération des données de l'API :", error.message);
        }
       
      }, 2000 );
   
}
//waitCall()


async function iterateWithAsyncAwait(key) {

   switch (key) {
    default : return "Go";
    case 1: return "My";
   case 2: return "Code";
   }}
 // iterateWithAsyncAwait(3)




  function LeapYearChecker(year) {
    
 return year%4==0 && year%400==0 ? true : false
}
//console.log(LeapYearChecker(1660));

function TicketPricing(age) {
  switch (true) {
    case (age<=12):
      return "$10"

    case (age>12&&age<17):
        return "$15"

    case (age>=18):
      return "$20"
   
    default:
      return false
 
  }
}
//console.log(TicketPricing(1));

function WeatherClothingAdviser(tmp,Rain) {

  switch (true) {
    case (tmp>=25&&!Rain):
      return "go to beach"
    case (tmp>=25&&Rain):
      return "stay at home"
    case (tmp>=15&&tmp<25&&!Rain):
      return "go to the job"
    case (tmp>=15&&tmp<25&&Rain):
      return "drink coffee"
    case (tmp<15&&Rain):
      return "sleep"
        case (tmp<15&&!Rain):
      return "sleep"
    default:
      break;
  }
  
}
//console.log(WeatherClothingAdviser(40,false));






function Palindrome(str){
  if(str.length == 1) return true;
  if(str.length == 2) return str[0] === str[1];
  if(str[0] === str.slice(-1)) return Palindrome(str.slice(1,-1))
  return false;
}

//console.log(Palindrome("anna"))

function PowerFunction(n,pow) {
  if (pow==0) {
    return 1
  }
  return PowerFunction(n,pow-1)*n
  
}
console.log(PowerFunction(-5,3));