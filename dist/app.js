const fact = document.querySelector('#fact');
const factText = document.querySelector('#factText');
const numberInput = document.querySelector('#numberInput');
numberInput.addEventListener('input', fetchFact)


function fetchFact() {
    const number = numberInput.value;
    fetch(`https://numbersapi.com/${number}`)
        .then(function (res) {
            return res.text();
        })
        .then(function (data) {
            if (number !== '') {
                fact.style.display = 'block';
                factText.innerHTML = data;
            } else {
                fact.style.display = 'none';
            }
        })
        .catch(function () { 
            console.log(err);
        });
    
}