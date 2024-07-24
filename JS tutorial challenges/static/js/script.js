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

function reset() {
    document.getElementById('ageInDays').remove();
    
}

function generateCat() {
    var image= document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src = "https://cdn2.thecatapi.com/images/ebv.jpg"
    div.appendChild(image);
}

