//UC2  
const IS_PART_TIME = 1
const IS_FULL_TIME = 2
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOURS = 20;
const NUM_OF_WORKING_DAYS = 20;
const MAX_WORKING_HOURS = 160;


function getWorkingHours(empCheck) {
    switch (empCheck) {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
            break;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
            break;
        default:
            return 0;
    }
}
let totalEmpHrs = 0;
let totalDays = 0;

//UC4
// for (let day = 1; day <= NUM_OF_WORKING_DAYS; day++) {
//     let empCheck = Math.floor(Math.random() * 10) % 3;
//     totalEmpHrs+= getWorkingHours(empCheck);
// }

while(totalEmpHrs<=MAX_WORKING_HOURS && totalDays<NUM_OF_WORKING_DAYS){
    totalDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    totalEmpHrs+= getWorkingHours(empCheck);
}
let empWage = totalEmpHrs * WAGE_PER_HOURS;
console.log("Total Emp Hour: ", totalEmpHrs, " Total Emp Wage: ", empWage," Total Days :",totalDays)