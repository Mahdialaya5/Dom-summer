
function fetchdata() {
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
  //waitCall()

  async function waitCall() {

  
        try{
            const response = await fetch('https://fakestoreapi.com/products/1');
            const responseData = await response.json();
            console.log(responseData);
             return responseData
        }catch(error)
        {
            console.error("Erreur lors de la récupération des données de l'API :", error.message);
        }  
}
/*
// Example Task
const promise1 = Promise.resolve('Promise 1 resolved');
const promise2 = new Promise((resolve) => setTimeout(resolve, 2000, 'Promise 2 resolved'));
const promise3 = new Promise((resolve) => setTimeout(resolve, 1000, 'Promise 3 resolved'));

Promise.all([promise1, promise2, promise3])
  .then(values => {
    console.log(values);
  });
*/
async function api1() {
  return new Promise((resolve) => 
    setTimeout(() => {
      fetch('https://fakestoreapi.com/products/1')
        .then((data) => data.json())
        .then((data) => {
          console.log(data);
          resolve('Promise 1 resolved');
        })
        .catch((err) => {
          console.log(err);
          resolve('Promise 1 failed');
        });
    }, 2000)
  );
}

async function api2() {
  return new Promise((resolve) => 
    setTimeout(() => {
      fetch('https://fakestoreapi.com/products/2')
        .then((data) => data.json())
        .then((data) => {
          console.log(data);
          resolve('Promise 2 resolved');
        })
        .catch((err) => {
          console.log(err);
          resolve('Promise 2 failed');
        });
    }, 2000)
  );
}

async function api3() {
  return new Promise((resolve) => 
    setTimeout(() => {
      fetch('https://fakestoreapi.com/products/3')
        .then((data) => data.json())
        .then((data) => {
          console.log(data);
          resolve('Promise 3 resolved');
        })
        .catch((err) => {
          console.log(err);
          resolve('Promise 3 failed');
        });
    }, 2000)
  );
}

Promise.all([api1(), api2(), api3()])
  .then((values) => {
    console.log(values);
  })
 




function iterateWithAsyncAwait(key) {

   switch (key) {
    default :console.log('go'); ;
    case 1:console.log('my'); 
   case 2: console.log('code'); 
   }}
 // iterateWithAsyncAwait(3)
 //console.log(iterateWithAsyncAwait(3));



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
//console.log(PowerFunction(-5,3));