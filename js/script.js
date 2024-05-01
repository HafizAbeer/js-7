const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

function clearOutput() {
    document.getElementById("output").innerHTML = " "
}

function showOutput(output) {
    document.getElementById("output").innerHTML = output
}

function inputValue() {
    return document.getElementById("inputText").value
}

function getNameOfToday() {
    let now = new Date()

    let today = now.getDay()

    let nameOfToday = days[today]

    showOutput(nameOfToday)
}

function daysSinceBorn() {
    let today = new Date()

    let bornDate = inputValue()


    const dob = new Date(bornDate)

    if (!bornDate) {
        alert("Enter your birth date")
        return
    }

    let msDiff = today.getTime() - dob.getTime()

    let daysDiff = msDiff / (1000 * 60 * 60 * 24)

    let html = Math.floor(daysDiff) + "&nbsp;" + "days have been passed since you born"

    showOutput(html)
}

function nextBirthday() {
    let today = new Date()

    let bornDate = inputValue()

    if (!bornDate) {
        alert("Enter your date of birth")
        return
    }

    const nextBirthday = new Date(bornDate)


    let msDiff = nextBirthday.getTime() - today.getTime()

    let daysDiff = msDiff / (1000 * 60 * 60 * 24)

    let html = "Your next birth day is " + Math.floor(daysDiff) + "days away"

    showOutput(html)


}

function greetUser() {
    let inputUserName = prompt("Enter your name: ")

    if (!inputUserName) {
        alert("Enter your name first")
        return
    }

    let now = new Date()
    console.log(now)


    let time = now.getHours()
    console.log(time)

    // let time = today.getTime()

    let greeting;

    if (time >= 4 && time < 12) {
        greeting = "Good Morning"
    } else if (time >= 12 && time < 16) {
        greeting = "Good Afternoon"
    } else if (time >= 16 && time < 19) {
        greeting = "Good Evening"
    } else {
        greeting = "Good Night"
    }

    showOutput(greeting + "&nbsp;" + inputUserName)

}

function tellTime() {
    let now = new Date()

    let hour = now.getHours()

    let min = now.getMinutes()

    let sec = now.getSeconds()

    let html = "Now the time is :" + hour + ":" + min + ":" + sec

    showOutput(html)
}

function calculateTax() {
    let value = Number(prompt("Enter your total amount:"))

    let tax = Number(prompt("Enter tax percentage:"))

    tax = value * tax / 100

    let bill = value + tax

    showOutput(bill)
}