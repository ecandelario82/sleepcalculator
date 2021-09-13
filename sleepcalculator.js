

//Func shows how many hours per week user slept
const getSleepHours = day => {

    switch (day) {
        case "monday":
            return 5;
            break;
        case "tuesday":
            return 5;
            break;
        case "wednesday":
            return 6;
            break;
        case "thursday":
            return 4;
            break;
        case "friday":
            return 4;
            break;
        case "saturday":
            return 5;
            break;
        case "sunday":
            return 9;
            break;
        
    }

};


//Func that calculates sum of hours slept

const getActualSleepHours = () => {
 return getSleepHours("monday") +
        getSleepHours("tuesday") +
        getSleepHours("wednesday") +
        getSleepHours("thursday") +
        getSleepHours("friday") +
        getSleepHours("saturday") +
        getSleepHours("sunday");

}



//Func for ideal hours
const getIdealSleepHours = (idealHours) => {
   idealHours = 8;
    return idealHours * 7;
}


//Func determines sleep debt
const calculateSleepDebt = () => {
    actualSleepHours = getActualSleepHours();
    idealSleepHours = getIdealSleepHours();
    if (actualSleepHours === idealSleepHours) {
    console.log(`Great job! You got the perfect amount of sleep!`)
    } else if (actualSleepHours > idealSleepHours) {
        console.log(`You got more sleep than needed by ${actualSleepHours - idealSleepHours} hour(s).`)
    } else {
console.log(`You should get some rest. You are ${idealSleepHours - actualSleepHours} hour(s) under your recommended sleeping hours.`)
    }

}

calculateSleepDebt();