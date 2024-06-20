// Excercises: Level 1

const challenge = "30 Days Of JavaScript";
console.log(`${challenge}`);
console.log(`${challenge.length}`);
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.substr(3, 4));
console.log(challenge.substr(3, 18));
console.log(challenge.includes("Script"));
console.log(challenge.split());
console.log(challenge.split(" "));
const behemoth = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(behemoth.split(","));
console.log(challenge.replace("JavaScript", "Python"));
console.log(challenge.charAt(15));
console.log(challenge.charCodeAt("J"));
console.log(challenge.indexOf("a"));
console.log(challenge.lastIndexOf("a"));
const sentence =
	"You cannot end a sentence with because because because is a conjunction";
console.log(sentence.lastIndexOf("because"));
console.log(sentence.indexOf("because"));
console.log(challenge.trim(" "));
console.log(challenge.startsWith("30"));
console.log(challenge.endsWith(" JavaScript"));
const pattern = /a/gi;
console.log(challenge.match(pattern));
const phraseOne = "30 Days of";
const phraseTwo = "JavaScript";
const space = " ";
const fullPhrase = phraseOne + space + phraseTwo;
console.log(fullPhrase);
console.log(challenge.repeat(2));

// Excercises: Level 2

const motherTeresa =
	"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.";
console.log(motherTeresa);

const num = 10;
const stringNum = "10";
console.log(num === stringNum);

const parsedNum = Number(stringNum);
console.log(num === parsedNum);

const decNum = "9.8";
const wholeNum = 10;
console.log(decNum === wholeNum);

const finalNum = Math.round(Number(decNum));
console.log(finalNum === wholeNum);

const wordOne = "Python";
const wordTwo = "Jargon";
console.log(wordOne.includes("on"));
console.log(wordTwo.includes("on"));

const jargonPhrase = "I hope this course is not full of jargon";
console.log(jargonPhrase.includes("jargon"));

const hundredNum = Math.floor(Math.random() * 101); // creates random number between 0 and 10
console.log(hundredNum);

const fiftyNum = Math.floor(50 + Math.random() * 51); // creates random number between 0 and 10
console.log(fiftyNum);

const twoHundredNum = Math.floor(Math.random() * 252); // creates random number between 0 and 10
console.log(twoHundredNum);

const string = "JavaScript";
lastIndex = string.lastIndexOf("t");
console.log(string[Math.floor(Math.random() * lastIndex + 1)]);

const sequence = "1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125";

console.log(sequence);

const slicePhrase =
	"You cannot end a sentence with because because because is a conjunction";
const start = slicePhrase.indexOf("because");
console.log(slicePhrase.substr(start, 23));

// Excercises: Level 3

const loveString =
	"Love is the best thing in this world. Some found their love and some are still looking for their love.";

const lovePattern = /love/gi;
console.log(loveString.match(lovePattern).length);
const becauseString =
	"You cannot end a sentence with because because because is a conjunction";
const becausePattern = /because/gi;
console.log(becauseString.match(becausePattern).length);

const dirtyString =
	"%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";
const cleanString = dirtyString.replace(/[,%$@&#;!]/g, "");
console.log(cleanString);

const salary = 5000 * 12;
const bonus = 10000;
const courses = 15000 * 12;
const annualIncome = salary + bonus + courses;
console.log(annualIncome);
