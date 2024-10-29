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
