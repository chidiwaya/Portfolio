// const button = document.getElementById("This_button")

// button.addEventListener('click', function(){
//     const randomNumbers = Math.floor(Math.random() * 10) + 1;

//     console.log(randomNumbers);
// })

// const button1 = document.getElementById("Second_button")

for (chidi = 5; chidi < 10; chidi++){
    console.log(chidi);
}

const person ={
    name: "Chidi Umeadi",
    age: "24",
    nationality: "Nigeria",
    gender: "Male",
    complexion: "Black",
    fullInfo: function(){
        return this.name + " " + `is going to be ` + " " + this.age + " " + `by 8th December 2023`
    }
}
console.log(person.fullInfo());

function  displayDate(){
    console.log(Date());
}

var x = new String("Dony")
var y = new String("Dony")
console.log(x!==y);

let text = "I love coding, Coding is my calling and i know the whole world loves Coding"
// text = text.replaceAll("coding", "football")
text = text.replaceAll("Coding", "Football")

console.log(text);

let number = 200;
console.log(number.toString());

// array iteration merthod 

function displayDates(){
    console.log(Date());
}

const numbers = [45,20,35,70,65]

numbers.forEach(n =>{
    console.log(n);
});

const cars = ["BMW", "Lexus", "Mercedes-Benz", "Toyota"];
let texts = ``;

list: { 
   texts += cars[0];
   texts += cars[1];
   texts += cars[2];
   texts += cars[3];
}
console.log(texts);


let human = {
    firstName: "John",
    lastName:  "Doe",
    gender: "male",
     age: 24,
   fullInfo: function(){
    return `My name is` + " " + this.firstName + " " + this.lastName
   }

}

console.log(human.fullInfo());

const speak = function(name = 'Princejoe', time = 'Night') {
    console.log(`Good ${time} ${name}!`);   
}

speak();
