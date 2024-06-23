// Excercises: Level 1

const firstName = "Jesse";
const lastName = "Pinkman";
const country = "US";
const city = "New Mexico";
const age = 26;
const isMarried = false;
const year = 2008;

console.log(
	typeof firstName,
	typeof lastName,
	typeof country,
	typeof city,
	typeof age,
	typeof isMarried,
	typeof year,
);

const num = 10;
const stringNum = "10";
console.log(typeof num === typeof stringNum);

console.log(parseInt("9.8") === 10);

// 4

const tuco = "Insane";
const saul = "Lawyer";
const ironMan = "Super Hero";

const accountBalance = 0;
let bigFoot;
const isBatman = false;

// 5

const calcuOne = 4 > 3;
const calcuTwo = 4 >= 3;
const calcuThree = 4 < 3;
const calcuFour = 4 <= 3;
const calcuFive = 4 == 4;
const calcuSix = 4 === 4;
const calcuSeven = 4 != 4;
const calcuEight = 4 !== 4;
const calcuNine = 4 != "4";
const calcuTen = 4 == "4";
const calcuEleven = 4 === "4";
const pythonLength = "python".length;
const jargonLength = "jargon".length;

console.log(
	calcuOne,
	calcuTwo,
	calcuThree,
	calcuFour,
	calcuFive,
	calcuSix,
	calcuSeven,
	calcuEight,
	calcuNine,
	calcuTen,
	calcuEleven,
	pythonLength > jargonLength,
);

// 6

const expressOne = 4 > 3 && 10 < 12;
const expressTwo = 4 > 3 && 10 > 12;
const expressThree = 4 > 3 || 10 < 12;
const expressFour = 4 > 3 || 10 > 12;
const expressFive = !(4 > 3);
const expressSix = !(4 < 3);
const expressSeven = !false;
const expressEight = !(4 > 3 && 10 < 12);
const expressNine = !(4 > 3 && 10 > 12);
const expressTen = !(4 === "4");
const wordOne = "Python";
const wordTwo = "Jargon";
console.log(wordOne.includes("on"));
console.log(wordTwo.includes("on"));
const expressEleven = !(wordOne.includes("on") && wordTwo.includes("on"));
console.log(
	expressOne,
	expressTwo,
	expressThree,
	expressFour,
	expressFive,
	expressSix,
	expressSeven,
	expressEight,
	expressNine,
	expressTen,
	expressEleven,
);

// 7

const now = new Date();
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(Date.now());

// Excercises: Level 2

// 1

let base = prompt("Enter base");
let height = prompt("Enter height");
let area = base * height * 0.5;
alert(`The area of the triangle is ${area}`);

2;

let sideA = Number(prompt("Enter side a"));
let sideB = Number(prompt("Enter side b"));
let sideC = Number(prompt("Enter side c"));

let perimeter = sideA + sideB + sideC;
alert(`The perimeter of the triangle is ${perimeter}`);

//3

let length = Number(prompt("Enter length"));
let width = Number(prompt("Enter width"));
let areaOfRect = length * width;
let periOfRect = (length + width) * 2;

alert(
	`The area of the triangle is ${areaOfRect} and the perimeter is ${periOfRect}`,
);

// 4

let radius = Number(prompt("Enter radius"));
let pi = 3.14;
let areaOfCircle = pi * radius * radius;
let CircumOfCircle = 2 * pi * radius;

alert(
	`The area of the circle is ${areaOfCircle} and the circumference is ${CircumOfCircle}`,
);

// 5

let x = 0;
let y = 0;
let yIntercept = 2 * x - 2;
let xIntercept = (y + 2) / -2;
let interSlope = (0 - -2) / (0 - -1);
console.log(
	`Slope is ${interSlope}, x-intercept is (${xIntercept}, 0) and y-intercept is (${yIntercept}, 0)`,
);

// 6

let slope = (10 - 2) / (6 - 2);
console.log(`Slope is ${slope}`);

// 7

console.log(interSlope === slope);

// 8

let xValue = -3;
let finalValue = xValue ** 2 + 6 * xValue + 9;
console.log(
	`Since final value is ${finalValue}, the x value y is 0 is ${xValue}`,
);

// 9

let hours = Number(prompt("Enter hours"));
let ratePerHr = Number(prompt("Enter rate per hour"));
let weeklyEarning = hours * ratePerHr;

alert(`Your weekly earning is ${weeklyEarning}`);

// 10

const myName = prompt("Enter name");
const nameLength = myName.length;

nameLength > 7 ? alert(`Your name is long`) : alert(`Your name is short`);

// 11

const fName = prompt("Enter first name");
const familyName = prompt("Enter first family name");
const fNameLength = fName.length;
const familyNameLength = familyName.length;

fNameLength > familyNameLength
	? alert(
			`Your first name, ${fName} is longer than your family name, ${familyName}`,
		)
	: alert(
			`Your family name, ${familyName} is longer than your first name, ${fName}`,
		);

// 12

const myAge = 86;
const yourAge = 25;
const ageGap = myAge - yourAge;

console.log(`I am ${ageGap} years older than you`);

// 13

const birthYear = Number(prompt("Enter birth year"));
const fullYear = now.getFullYear();
const userAge = fullYear - birthYear;

userAge > 18
	? alert(`You are ${userAge}. You are old enough to drive.`)
	: alert(
			`You are ${userAge}. You will be allowed to drive in ${18 - userAge} years.`,
		);

// 14

let yearsLived = Number(prompt("Enter number of years you live:"));
let secondsLived = 31536000 * yearsLived;
alert(`You lived ${secondsLived} seconds`);

// 15

const month = now.getMonth() + 1;
const date = now.getDate();
const hours = now.getHours();
const minutes = now.getMinutes();

console.log(`${fullYear}-${month}-${date} ${hours}:${minutes}`);
console.log(`${date}-${month}-${fullYear} ${hours}:${minutes}`);
console.log(`${date}/${month}/${fullYear} ${hours}:${minutes}`);

// Exercises: Level 3

const prettyMonth = ("0" + month).substr(-2);
const prettyDate = ("0" + date).substr(-2);
const prettyHours = ("0" + hours).substr(-2);
const prettyMinutes = ("0" + minutes).substr(-2);

console.log(
	`${fullYear}-${prettyMonth}-${prettyDate} ${prettyHours}:${prettyMinutes}`,
);
