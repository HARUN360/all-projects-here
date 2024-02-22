
const allBtn = document.getElementsByClassName('add-btn');
for (const btn of allBtn) {
    btn.addEventListener('click', function (element) {
        const name = (element.target.parentNode.childNodes[1].innerText);
        const price = (element.target.parentNode.childNodes[3].childNodes[1].innerText);
        const category = (element.target.parentNode.childNodes[5].childNodes[1].innerText);
        element.target.setAttribute('disabled',false);
        element.target.parentNode.style.background = 'gray';
        const selectContainer = document.getElementById('selected-players-container');
        const div = document.createElement('div');
        div.classList.add('selected-players')
        const p = document.createElement('p');
        const p1 = document.createElement('p');
        const p2 = document.createElement('p');
        p.innerText = name;
        p1.innerText = price;
        p2.innerText = category;

        div.appendChild(p);
        div.appendChild(p1);
        div.appendChild(p2);
        selectContainer.appendChild(div);

        updateTotalCost(price);
        updateGrandTotal();

      

        const fristCount = getConvertedValue('cart');
        if(fristCount+1 > 6){
            alert('your limit crose');
            return;
        }


        // updated budge
        const budge = getConvertedValue('budget');
        document.getElementById('budget').innerText = budge - parseInt(price);

        const cart = getConvertedValue('cart');
        document.getElementById('cart').innerText = cart + 1;
        console.log(cart);
        const left = getConvertedValue('left');
        document.getElementById('left').innerText = left - 1;

    
    })
}

// grant cost
function updateGrandTotal(status) {
    const totalCost = getConvertedValue('total-cost');
    if (status == undefined) {
        document.getElementById('grand-total').innerText = totalCost;
    } else {
        const couponCode = document.getElementById("coupon-code").value;
        if(couponCode == 'love20'){
            const discountPrice = totalCost*0.20;
            document.getElementById('grand-total').innerText = totalCost - discountPrice;
        }else{
         alert('please enter your coopon code')
        }
    }

}

// total cost
function updateTotalCost(value) {
    const totalCost = getConvertedValue('total-cost');
    const sum = totalCost + parseInt(value);
    document.getElementById('total-cost').innerText = sum;
}

// inner text and number convert
function getConvertedValue(id) {
    const price = document.getElementById(id).innerText;
    const convertPrice = parseInt(price);
    return convertPrice;
}

