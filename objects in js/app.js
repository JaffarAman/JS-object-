var obj = {
    name: "Jaffar",
    class: "Web and Mobile"
}
obj.times = ["9 to 11", "11 to 1", "1 to 3"]
console.log(obj.times[0])


var obj = {
    id: 1001,
    school: "Saylani",
    // name: ["Jaffar", "Aman"]
    name: {
        fName: "Jaffar",
        Lname: "Aman"
    }
}
console.log(obj.name.Lname)

var obj = new Object();
obj.firsrName = "Jaffar"
obj.lastName = "Aman"
obj.school = "saylani"

console.log(obj)

delete obj.school
console.log(obj)
var check = "firsrName" in obj
console.log(check)

var arr = JSON.stringify(obj)
console.log(arr)
/////xxxx---------xxxxxxxxx------------xxxxxxxxxx---------

for (var keys in obj) {
    console.log(keys)

    /////xxxx---------xxxxxxxxx------------xxxxxxxxxx---------
}
/////xxxx---------xxxxxxxxx------------xxxxxxxxxx---------

var ar = ["jaffar", "aman"]
for (var i of ar) {
    console.log(i)
}
/////xxxx---------xxxxxxxxx------------xxxxxxxxxx---------

/////xxxx---------xxxxxxxxx------------xxxxxxxxxx---------

var cal = {
    name: "Jaffar Aman",
    class: "Web And Mobile",
    sub1: 75,
    sub2: 45,
    sub3: 68,
    add: function () {
        return this.sub1 + this.sub2 + this.sub3
    }
}
/////xxxx---------xxxxxxxxx------------xxxxxxxxxx---------





/////xxxx---------xxxxxxxxx------------xxxxxxxxxx---------
var quiz = [
    {
        Question: "What is the CAPITAL OF Pakistan",
        answer: {
            a: "Karachi",
            b: "Lahore",
            c: "Islamabad",
            d: "Multan"
        },
        correctAnswer: "Islamabad"
    }
]
var qus = document.getElementById("qus")
var opt1 = document.getElementById("opt1")
var opt2 = document.getElementById("opt2")
var opt3 = document.getElementById("opt3")
var opt4 = document.getElementById("opt4")

qus.innerHTML = quiz[0].Question

opt1.innerHTML = quiz[0].answer.a
opt2.innerHTML = quiz[0].answer.b
opt3.innerHTML = quiz[0].answer.c
opt4.innerHTML = quiz[0].answer.d
/////xxxx---------xxxxxxxxx------------xxxxxxxxxx---------



///////10- 06 - 2021///////////////

// var obj = {
//     name: "Jaffar Aman"


// }




/////xxxx---------xxxxxxxxx------------xxxxxxxxxx---------
var arr = [];
for (var i = 0; i < 5; i++) {
    var userInput = prompt("Enter Number 1 to 10:");
    arr.push(userInput)
    document.write(arr[i], "<br>")
}
/////xxxx---------xxxxxxxxx------------xxxxxxxxxx---------






/////xxxx---------xxxxxxxxx------------xxxxxxxxxx---------
var nuber = prompt("Enter your name:")
var obj = {
    userName: nuber
}
console.log(obj.userName)
/////xxxx---------xxxxxxxxx------------xxxxxxxxxx---------





/////xxxx---------xxxxxxxxx------------xxxxxxxxxx---------
var plan1 = {
    name: "plan1",
    price: 8,
    space: 100,
    trasnfer: 1000,
    page: 12,
    discountMonths: [6, 7]
}

function calcAnnual() {
    var bestPrice = plan1.price;
    var now = new Date();
    var getMonths = now.getMonth();
    for (var i = 0; i < plan1.discountMonths.length; i++) {
        if (plan1.discountMonths[i] == getMonths) {
            bestPrice = plan1.price * .8;
            break;
        }

    }
    return bestPrice * 12
}

var annualPrice = calcAnnual()
console.log(annualPrice)
/////xxxx---------xxxxxxxxx------------xxxxxxxxxx---------



/////xxxx---------xxxxxxxxx------------xxxxxxxxxx---------
var plan1 = {
    price: 20,
    discountMonths: [5, 9],
    calcAnnual: function () {
        var bestPrice = this.price;
        var now = new Date();
        var getMonths = now.getMonth();
        for (var i = 0; i < this.discountMonths.length; i++) {
            if (this.discountMonths[i] == getMonths) {
                bestPrice = this.price * .8;
                break;
            }
        }
        return bestPrice * 12
    }

}

var answer = plan1.calcAnnual()
console.log(answer)
/////xxxx---------xxxxxxxxx------------xxxxxxxxxx---------
