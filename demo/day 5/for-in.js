// for-in method


let myData = {
    firstName : "Kannan",
    lastName : "S",
    eMail : "kannansiva0910@gmail.com",
    location : "neyveli",
    qualification : "B.E",
    passedOut : "2023",
    frontEnd: "HTML, CSS, BS, JS"
}
git 

let myArray = [];

for (key in myData){
let op = []
op.push(key);
op.push(myData[key])
myArray.push(op)

}
console.log(myArray)
