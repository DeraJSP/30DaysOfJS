// Exercises: Level 1

// 1

const birthYear = Number(prompt("Enter birth year"));
const fullYear = now.getFullYear();
const userAge = fullYear - birthYear;

userAge > 18
	? alert(`You are ${userAge}. You are old enough to drive.`)
	: alert(
			`You are ${userAge}. You are left with ${18 - userAge} years to drive.`,
		);

// 2

const myAge = Number(prompt("Enter birth my age:"));
const yourAge = Number(prompt("Enter birth your age:"));

if (myAge > yourAge) {
	let ageGap = myAge - yourAge;
	console.log(ageGap);
} else {
	ageGap = yourAge - myAge;
	console.log(ageGap);
}

// 3

const a = 4;
const b = 3;

if (a > b) {
	console.log("a is greater than b");
} else {
	console.log("a is less than b");
}

a > b ? console.log("a is greater than b") : console.log("a is less than b");

// 4

const num = Number(prompt("Enter a number:"));
const check = num % 2;

if (check == 0) {
	console.log(`${num} is an even number`);
} else {
	console.log(`${num} is an odd number`);
}

// Exercises: Level 2

// 1

const score = Number(prompt("Enter student score:"));

switch (true) {
	case score > 79 && score < 101:
		console.log("Student grade is A");
		break;
	case score > 69 && score < 90:
		console.log("Student grade is B");
		break;
	case score > 59 && score < 70:
		console.log("Student grade is C");
		break;
	case score > 49 && score < 60:
		console.log("Student grade is D");
		break;
	case score >= 0 && score < 50:
		console.log("Student grade is F");
		break;
	default:
		console.log("Entered score is not valid");
}

// 2

let month = prompt("Enter month of the year:");
month = month.charAt(0).toUpperCase() + month.slice(1).toLowerCase();

switch (true) {
	case month == "September" || month == "October" || month == "November":
		console.log("The season is Autumn");
		break;
	case month == "December" || month == "January" || month == "February":
		console.log("The season is Winter");
		break;
	case month == "March" || month == "April" || month == "May":
		console.log("The season is Spring");
		break;
	case month == "June" || month == "July" || month == "August":
		console.log("The season is Summer");
		break;
	default:
		console.log("Entered month is not valid");
}

// 3

let day = prompt("What is the day today?");
day = day.charAt(0).toUpperCase() + day.slice(1).toLowerCase();

switch (true) {
	case day == "Monday" ||
		day == "Tuesday" ||
		day == "Wednesday" ||
		day == "Thursday" ||
		day == "Friday":
		console.log(`${day} is a working day`);
		break;
	case day == "Saturday" || day == "Sunday":
		console.log(`${day} is a weekend`);
		break;
	default:
		console.log("Entered day is not valid");
}

// Exercises: Level 3

// 1

let enteredMonth = prompt("Enter a month:");
enteredMonth =
	enteredMonth.charAt(0).toUpperCase() + enteredMonth.slice(1).toLowerCase();

switch (true) {
	case enteredMonth == "September" ||
		enteredMonth == "April" ||
		enteredMonth == "June" ||
		enteredMonth == "November":
		console.log(`${enteredMonth} has 30 days`);
		break;
	case enteredMonth == "March" ||
		enteredMonth == "May" ||
		enteredMonth == "July" ||
		enteredMonth == "August" ||
		enteredMonth == "October" ||
		enteredMonth == "July" ||
		enteredMonth == "January" ||
		enteredMonth == "December":
		console.log(`${enteredMonth} has 31 days`);
		break;
	case enteredMonth == "February":
		console.log(`${enteredMonth} has 28 days`);
		break;
	default:
		console.log("Entered month is not valid");
}

// 2

let selectedMonth = prompt("Enter a month:");
selectedMonth =
	selectedMonth.charAt(0).toUpperCase() +
	selectedMonth.slice(1).toLowerCase();

const now = new Date();
let fullYear = now.getFullYear();
leapCheck = fullYear % 4;

if (
	selectedMonth == "September" ||
	selectedMonth == "April" ||
	selectedMonth == "June" ||
	selectedMonth == "November"
) {
	console.log(`${selectedMonth} has 30 days`);
} else if (
	selectedMonth == "March" ||
	selectedMonth == "May" ||
	selectedMonth == "July" ||
	selectedMonth == "August" ||
	selectedMonth == "October" ||
	selectedMonth == "July" ||
	selectedMonth == "January" ||
	selectedMonth == "December"
) {
	console.log(`${selectedMonth} has 31 days`);
} else if (selectedMonth == "February" && leapCheck == 0) {
	console.log(`${selectedMonth} has 29 days`);
} else if (selectedMonth == "February" && leapCheck !== 0) {
	console.log(`${selectedMonth} has 28 days`);
} else {
	console.log("Entered month is not valid");
}
