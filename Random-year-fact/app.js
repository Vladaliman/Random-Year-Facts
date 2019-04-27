let fact = document.querySelector('#fact');
let factText = document.querySelector('#factText');

let dateInput = document.querySelector('#numberInput');
dateInput.addEventListener('input', getFactFetch);
let button = document.querySelector('#getRandom');
button.addEventListener('click', fetchRandomYear)

function getFactFetch(){
    let year = dateInput.value;
    
    if(year != ''){
      fetch('http://numbersapi.com/'+year+'/year')
      .then(response => response.text())
      .then(data => {
        fact.style.display = 'block';
        factText.innerText = data;
      })
      .catch(err => console.log(err)); 
    }
  }
//Gets a random year fact 
function fetchRandomYear(){
    let randomYear = Math.floor(Math.random() * 2025);;

    if(randomYear != ''){
        fetch('http://numbersapi.com/'+randomYear+'/year')
        .then(response => response.text())
        .then(data => {
          fact.style.display = 'block';
          factText.innerText = data;
        })
        .catch(err => console.log(err)); 
    }
}