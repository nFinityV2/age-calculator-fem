const dayInput = document.getElementById("day");
const monthInput = document.getElementById("month");
const yearInput = document.getElementById("year");
const dayOutput = document.getElementById("outputDay");
const monthOutput = document.getElementById("outputMonth");
const yearOutput = document.getElementById("outputYear");

const form = document.getElementById("age-form")
const btn = document.getElementById("btn")

form.addEventListener("submit", e => {
    e.preventDefault();
    ageCalculation(dayInput.value, monthInput.value, yearInput.value);
})

const ageCalculation = (d,m,y) => {
    const date = new Date();
    const shortDate = date.toLocaleDateString('en-AU');

    const dateD = shortDate.slice(0,2);
    const dateM = shortDate.slice(3,5);
    const dateY = shortDate.slice(6,12);

    console.log(`${dateD}/${dateM}/${dateY}`);

    let newYear = parseInt(dateY - y);
    let newMonth = parseInt(dateM - m);
    let newDay = parseInt(dateD - d);

    console.log(newMonth);

    if(newMonth === 0){
        newMonth;
        newDay++;
        console.log(newYear, newMonth, newYear)
    }
    else if(parseInt(m) < dateM){
        newYear;
        newMonth;
        newDay;
        console.log(newYear, newMonth, newYear)
    }
    else if(parseInt(m) > dateM){
        console.log(newYear, newMonth, newYear)
        newYear--;
        newMonth += 12;
        console.log(newYear, newMonth, newYear)
    }
    
    dayOutput.innerHTML = newDay;
    monthOutput.innerHTML = newMonth;
    yearOutput.innerHTML = newYear;

    console.log(newYear, newMonth, newDay);
}

