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
        case 1:
        case 3:
        case 5: 
        case 7:
        case 8: 
        case 10:
        case 12:
            return 31;
        case 4: 
        case 6: 
        case 9:
        case 11:
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

    const currentDay = parseInt(shortDate.slice(0,2));
    const currentMon = parseInt(shortDate.slice(3,5));
    const currentYear = parseInt(shortDate.slice(6,12));

    console.log(`${currentDay}/${currentMon}/${currentYear}`);

    let newYear = currentYear - y;
    let newMonth = currentMon - m;
    let newDay = currentDay - d;

    if(newMonth === 0){
        console.log(newMonth, newDay)
        if(d > currentDay){
            newYear--;
            newMonth += 11;
            newDay += daysInMonth(m, currentYear);
        }
        newMonth;
        newDay;
    }
    else if(m < currentMon){
        newYear;
        if(d > currentDay){
            newMonth--;
            newDay += daysInMonth(m, currentYear);
        }
        
        newMonth;
        newDay;
    }
    else if(m > currentMon){
        newYear--;
        if(d > currentDay){
            newMonth--;
            newDay += daysInMonth(m, currentYear);
        }
        newMonth += 12;
        newDay;
    }
    
    // if(d > currentDay){
        
    //     newDay += daysInMonth(currentMon, currentYear);
    // } else {
    //     newDay;
    // }

    dayOutput.innerHTML = newDay;
    monthOutput.innerHTML = newMonth;
    yearOutput.innerHTML = newYear;
}

