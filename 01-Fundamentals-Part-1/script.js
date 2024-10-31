// --- "console.log()" - You can use if write anything to your browsers console.

console.log('Hello, World!');

// ------- ** Values and Variables

let firstName = 'Anil';
console.log(firstName); // variable refers to the value store init.

// --- In JavaScript a variable can be declared using [const, let & var]

// "const" - The value cannot be changed.
const birthYear = 2002;
// birthYear = 2001; // TypeError: Assignment to constant variable.
console.log(birthYear);

// "let" - The value can be changed.
let myAge = 2024 - birthYear;
myAge = 2030 - birthYear;
console.log(myAge);

// "var" - The value can be changed. NOT Recommend
var currentJob = 'back-end developer';
currentJob = 'full-stack developer';
console.log(currentJob);

// ------- ** Variable Naming & Comments
/*
1. The name should be unique.
2. The name should not be any reserved keyword.
3. The name must start with a character, _ and $.
*/

// Single line Comment

/* 
   This is a
   multi line
   Comment
*/

// ------- ** Data Types

// --- JavaScript Primitive Data Types [String, Number, Boolean, Null, Undefined, Symbol]

// 01. "String" - [ Single Quotes (''), Double Quotes(""), & Backticks (``)]

const customerName = 'Manoj';
const purchaseAmount = 123.45;

const greetingMessage = `Hello, ${customerName}! Thank you for your purchase of $${purchaseAmount}`;
console.log(greetingMessage, typeof greetingMessage); // string

// 02. Number - represent quantitative data like prices, quantities, and ratings.

const productPrice = 899.99; // Price in dollars
const stockQuantity = 20; // Quantity
const productRating = 4.8; // rating (out of 5 stars)

console.log(productRating, typeof productRating); // number

// 03. Booleans - This type is commonly used to store yes/no values

// true --- means "Yes, correct" 1
// false --- means "no, incorrect" 0

// Is the product on sale?
const isOnSale = true;

// Is the product available for purchase?
const isAvailable = false;

console.log(isAvailable, typeof isAvailable); // boolean

// 04. Null - is just a special value which represents “nothing”, “empty” or “value unknown”.

const discountCode = null; // No discount code applied
console.log(discountCode, typeof discountCode); // object

// 05. Undefined - A variable that has not been assigned a value is undefined.

let specialOffer;
// let specialOffer = undefined
console.log(specialOffer, typeof specialOffer); // undefined

// ------- ** Operators

// --- Operator performs some operation on single or multiple operands (data value) and produces a result.

// ----- • Arithmetic Operators

// 1. Addition (+)

const accountBalance = 1500;
const depositAmount = 500;

const newBalance = accountBalance + depositAmount;
console.log(`$${newBalance}`); // $2000

// 2. Subtraction (-)

const withdrawalAmount = 750;

const remainingBalance = newBalance - withdrawalAmount;
console.log(`$${remainingBalance}`); // $1250

// 3. Multiplication (*)

const principalAmount = 10000;
const annualInterestRate = 0.05; // Annual interest rate (5%)

const interestEarned = principalAmount * annualInterestRate; // Interest earned in one year
console.log(`$${interestEarned}`); //  $500

// 4. Division (/)

const loanAmount = 1200;
const numberOfMonths = 24;

const monthlyPayment = loanAmount / numberOfMonths;
console.log(`$${monthlyPayment.toFixed(2)}`); // $50.00

// 5. Modulus (%)

const remainder = loanAmount % numberOfMonths; // Any remaining amount
console.log(`Remainder: ${remainder}`); // Remainder: 0

// 6. Increment (++) and Decrement (--) Operator

let cartQuantity = 1;

// Increment (++)
cartQuantity++; // Increment quantity by 1
console.log(`Quantity after adding an item: ${cartQuantity}`); // 2

// Decrement (--)
cartQuantity--; // Decrement quantity by 1
console.log(`Quantity after removing an item: ${cartQuantity}`); // 1

// ----- • Comparison Operators

// 1. Equal to (==)

const balance1 = 1500;
const balance2 = '1500'; // String type

const isEqual = balance1 == balance2; // Compares with type coercion
console.log(`Balances are equal: ${isEqual}`); // true

// 2. Strict Equality (===)

const enteredCode = 12345;
const expectedCode = '12345'; // String type

const isStrictlyEqual = enteredCode === expectedCode; // Strict comparison
console.log(`Payment code matches: ${isStrictlyEqual}`); // false

// 3. Not Equal to (!=)

const currentBalance = 800;
const minimumRequiredBalance = 1000;

const isNotEqual = currentBalance != minimumRequiredBalance;
console.log(`Balance is not equal to the required minimum: ${isNotEqual}`); // true

// 4. Strict Not Equal to (!==)

const accountNumber = 123456;
const inputAccountNumber = '123456'; // String type

const isNotStrictlyEqual = accountNumber !== inputAccountNumber; // Strict comparison
console.log(`Account number matches: ${isNotStrictlyEqual}`); // true

// 5. Greater Than (>)

// const accountBalance = 1500;
const threshold = 1000;

const exceedsThreshold = accountBalance > threshold;
console.log(`Balance exceeds threshold: ${exceedsThreshold}`); // true

// 6. Greater Than or Equal To (>=)

// const accountBalance = 1500;
const minimumBalance = 1500;

const meetsMinimum = accountBalance >= minimumBalance;
console.log(`Balance meets or exceeds minimum: ${meetsMinimum}`); // true

// 7. Less Than (<)

const account_Balance1 = 500;
const withdrawal_Amount = 600;

const isLessThanAvailable = account_Balance1 < withdrawal_Amount;
console.log(`Insufficient funds for withdrawal: ${isLessThanAvailable}`); // true

// 8. Less Than or Equal To (<=)

const account_Balance2 = 900;
const maximumLimit = 1000;

const belowOrEqual = account_Balance2 <= maximumLimit;
console.log(`Balance is below or equal to the maximum limit: ${belowOrEqual}`); // true

// ------- ** Strings and Template Literals

const first_Name = 'Anil';
const current_Job = 'Front-End Developer';
const birth_Year = 2002;
const now_Year = 2024;

// String Concatenation
const anil =
  "I'm " +
  first_Name +
  ', a ' +
  (now_Year - birthYear) +
  ' years old ' +
  current_Job +
  '!';

console.log(anil);

// String Template Literals (Interpolation)
const newAnil = `I'm ${first_Name}, a ${
  now_Year - birthYear
} years old ${current_Job}!`;

console.log(newAnil);

// ----- ** Type Conversion and Coercion

// Type conversion is when we manually convert from one type to another.
const inputYear = '2002';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Anil'));
console.log(typeof NaN);

console.log(String(21), 21);

// Type coercion is when javascript automatically converts types.
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' / '2');

let n = '1' + 1;
n -= 1; // n = n - 1;
console.log(n);

// ------- ** Taking Decision (if/else statements)

// --- An if, else if, and else statement each consist of a condition evaluated as true or false, and a block of code.

// 1. Check If Driver's License Is Valid

let age = 17;
if (age >= 18) {
  console.log('You can start getting a driving license');
} else {
  let yearsLeft = 18 - age;
  console.log(`You are too young. Wait another ${yearsLeft} years`);
}

// 2. Decide If the Weather Conditions Are Safe for Driving

let weatherCondition = 'Snowy';

if (weatherCondition === 'Clear') {
  console.log('Weather conditions are clear. You can drive safely.');
} else {
  console.log(
    'Weather conditions are not ideal for driving. Please exercise caution.'
  );
}

// ------- ** Truthy and Falsy Values

// --- Truthy expressions always evaluate to boolean true and falsy evaluate to boolean false.

// --- 5 falsy values: 0, '', undefined, null, NaN

if (0) {
  console.log('In Here');
} else {
  console.log('No, In Here!');
}

const money = 1000;
if (money) {
  console.log("Don't spend it all");
} else {
  console.log('You should get a Job!');
}
