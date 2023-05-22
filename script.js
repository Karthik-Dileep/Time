console.log("Hello World")
console.error("Hello World")
console.warn("Hello World")
var a=10;
let b=9;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
let person={
    Name:"Kuttappan",
    Age:55,
    Place:"Manakkad",
}
//console.log($(person.Name)"lives in "$(person.Place))


let fruits=["Apple","Mango"];
fruits.push("Orange");
console.log(fruits[1]);
console.log(fruits.length);
fruits.pop();
console.log(fruits);
fruits.shift();
console.log(fruits);
fruits.unshift("Papaya");
console.log(fruits);
fruits.length;

let classes=[{
        Name:"Karthik",
        Age:18,
        Place:"Muvattupuzha"
    },
    {   
        Name:"Liya",
        Age:17,
        Place:"Aluva"
    }
];
console.log(classes[1].Name);
//Arrow Function
let c=20;
let d=10;
if(c>d)
{
    console.log("True")
}
else
{
    console.log("false");
}

var i=1;
while(i<6)
{
    console.log(i);
    i++
}
var i=1
do 
{
    console.log(i);
    i++
}while(i<6)