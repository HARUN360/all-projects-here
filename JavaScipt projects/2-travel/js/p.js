const allBtn = document.getElementsByClassName('add-btn');

let count = 0;
for(const btn of allBtn){
 btn.addEventListener('click', function(e){
    count = count + 1;
    const placeName = e.target.parentNode.childNodes[1].innerText;
    // console.log(placeName);
    const price = e.target.parentNode.childNodes[3].childNodes[1].innerText;
    // console.log(price);
   
    const selectedContainer = document.getElementById('selected-place-container');
    const li =document.createElement('li');
    const p = document.createElement('p');
    p.innerText = placeName;
    const p2 = document.createElement('p');
    p2.innerText = price;
   li.appendChild(p);
   li.appendChild(p2);

   selectedContainer.appendChild(li)

   // bajet 900ar jonno
   const budge = document.getElementById('budget').innerText;
   const convertedBudge = parseInt(budge);
   if(convertedBudge - parseInt(price) < 0 ){
      alert ('low budge, please earn mone');
      return;
   }
   document.getElementById('budget').innerText = convertedBudge - parseInt(price);
  
//    total cost 
// const totalCost = document.getElementById('total-cost').innerText;
// const convertedTotalCost =  parseInt(totalCost);
// const sum = convertedTotalCost + parseInt(price);
// setInnerText('total-cost',sum);
totalCost('total-cost',price);

// grant total
// const grantToatal = document.getElementById('grand-total').innerText;
// const convertedGrandtotal = parseInt(grantToatal);
// const sum2 = convertedGrandtotal + parseInt(price);
// setInnerText('grand-total',sum2);
grandTotal('grand-total', price);
// console.log(sum2);

e.target.parentNode.parentNode.style.backgroundColor = 'gray';
e.target.setAttribute('disabled',false);
// e.target.
// e.target.style.display = 'none';



    setInnerText('cart-count',count);
 })


}

// total cost 
function totalCost(id,value){
   const totalCost = document.getElementById(id).innerText;
   const convertedTotalCost =  parseInt(totalCost);
   const sum = convertedTotalCost + parseInt(value) ;
   setInnerText(id,sum);
}

// grand total
function grandTotal(cat){
   const totalCost = document.getElementById('total-cost').innerText;
   const convertedTotalCost = parseInt(totalCost);
   if(cat == 'bus'){
      setInnerText('grand-total', convertedTotalCost + 100);
   }else if(cat == 'train'){
      setInnerText('grand-total', convertedTotalCost - 200);
   }else if(cat == 'flight'){
      setInnerText('grand-total', convertedTotalCost + 500);
   }else{
      setInnerText('grand-total', convertedTotalCost);
   }

}








// inner text change or set
function setInnerText(id,value){
   document.getElementById(id).innerText=value;
}