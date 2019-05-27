/**
  Write a JavaScript program to display the current day and time in the following format.
  Sample Output :
  Today is : Tuesday. 
  Current time is : 10 PM : 30 : 38
*/

const DAYS = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday'
];

function log(time) {
  const date = new Date(time || Date.now());
  const dayIndex = date.getDay();
  const dayString = DAYS[dayIndex];
  console.log(dayString);
}

log();