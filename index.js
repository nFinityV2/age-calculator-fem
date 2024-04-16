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
    if(!dayInput.value || !monthInput.value || !yearInput.value){
        console.error("Field is required.")
    }
    else if(parseInt(dayInput.value) < 1 || parseInt(dayInput.value) > 31){
        console.error("Invalid day")
    }
    else if(parseInt(monthInput.value) < 1 || parseInt(monthInput.value) >= 12){
        console.error("Invalid month")
    }
    else if(parseInt(yearInput.value) < 1 || parseInt(yearInput.value) > 9999){
        console.error("Invalid year")
    } else {
        ageCalculation(parseInt(dayInput.value), parseInt(monthInput.value), parseInt(yearInput.value));
    }
})

const leapYear = (year) => {
    if(year % 4 === 0 && year % 100 !== 0){
        return true;
    } 
    else if(year % 400 === 0){
        return true;
    }
    return false;
}

const daysInMonth = (month, year) => {
    switch(month){
        case 1, 3, 5, 7, 8, 10, 12:
            return 31;
        case 4, 6, 9, 11:
            return 30;
        case 2:
            if(leapYear(year)){
                return 29;
            } else {
                return 28;
            }
        default:
            return -1;
    }
}

const ageCalculation = (d,m,y) => {
    const date = new Date();
    const shortDate = date.toLocaleDateString('en-AU');

    const dateD = parseInt(shortDate.slice(0,2));
    const dateM = parseInt(shortDate.slice(3,5));
    const dateY = parseInt(shortDate.slice(6,12));

    // console.log(`${dateD}/${dateM}/${dateY}`);

    let newYear = dateY - y;
    let newMonth = dateM - m;
    let newDay = dateD - d;

    if(newMonth === 0){
        newMonth;
        newDay++;
    }
    else if(m < dateM){
        newYear;
        newMonth;
        newDay;
    }
    else if(m > dateM){
        newYear--;
        newMonth += 12;
    }

    dayOutput.innerHTML = newDay;
    monthOutput.innerHTML = newMonth;
    yearOutput.innerHTML = newYear;
}

