/** @format */

// Various Tracks in ACA

let trackOne = "Frontend Web Development";
let trackTwo = "Backend Web Development";
let trackThree = "Digital Marketing";
let trackFour = "Data Analytics";
let trackFive = "Cyber Security";
let trackSix = "Machine Learning";
let trackEight = "UI/UX deign";
let trackNine = "Project Management";
let school = "Atuenyi Coding Academy";
let myName = "Michael Ubek";

//Template Stings
let choice = `There are several tracks in ${school}, like ${trackThree}, ${trackTwo} and so forth. But you see my track, the master of them all, ${trackOne}; it is never to be compared with.\n\n My name is ${myName}. Cheers`;

// Display/Log to Console
console.log(choice);
alert(choice);
confirm(choice);
prompt(choice);

//Normal String Method
let secondChoice =
  "There are several tracks in " +
  school +
  ", like " +
  trackThree +
  ", " +
  trackTwo +
  " and so forth. But you see my track, the master of them all, " +
  trackOne +
  " it is never to be compared with.\n\n My name is " +
  myName +
  ". Cheers";

// Display Log to Console
console.log(secondChoice);
alert(secondChoice);
confirm(secondChoice);
prompt(secondChoice);
