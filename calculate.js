
const splitting = () => {
    let totalSum = parseFloat(document.querySelector('#totalSum').value);
    let nrPeople = parseInt(document.querySelector('#nrPeople').value);
    
    var val = document.getElementById('options').value;
    
    function check() {

        if ( val == "0" ) {
            alert("Please make a selection");
            return false;
        }
        if ( nrPeople == "0" || totalSum == null || nrPeople == null) { //second condition doesn't work!!!!
            alert("Error");
        }
        if ( val == "op3" ) {
            const calculate = totalSum / (nrPeople - 1);
            document.querySelector('#myPay').innerHTML = "<span class='text'>You pay: </span>" + "$" + 0.00;
            document.querySelector('#perPerson').innerHTML = "<span class='text'> Others: </span>" + "$" + calculate.toFixed(2) + "/person";
        
        }
        else if ( val == "op2" ) {
            const myPay = totalSum / 2;
            const othersPay = myPay / (nrPeople - 1);
            document.querySelector('#myPay').innerHTML = "<span class='text'> You pay: </span>" + "$" + myPay.toFixed(2);
            document.querySelector('#perPerson').innerHTML = "<span class='text'> Others: </span>" + "$" + othersPay.toFixed(2) + "/person";
        }
        else {
            const calculate = totalSum / nrPeople;
            document.querySelector('#myPay').innerHTML = "<span class='text'> You pay: </span>" + "$" + calculate.toFixed(2);
            document.querySelector('#perPerson').innerHTML = "<span class='text'> Others: </span>" + "$" + calculate.toFixed(2) + "/person";
        }    
    
    }   
    
    check();
    };
    
    const button = document.querySelector('#calculateButton');
    button.addEventListener('click', (e) => {
        e.preventDefault();
        splitting();
    });