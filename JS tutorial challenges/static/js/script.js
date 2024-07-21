// Challenge 1: Age in days

function ageInDays() {
    var age = prompt("What year were you born? ")
    var ageInDays = (2024 - age) * 365
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are ' + ageInDays + ' days old');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer)
    document.getElementById('flex-box-result').appendChild(h1);
    
}



