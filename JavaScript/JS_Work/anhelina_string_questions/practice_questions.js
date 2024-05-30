// Author: Anhelina Romanchuk  Date: May 28 - May 30, 2024  

// Exercise 1 Reverse number
function revNumber(number) {
    let numberArr = number.toString().split('');
    let revArr = numberArr.reverse().join('');
    let numberInt = parseInt(revArr);
    return numberInt;
}
console.log(revNumber(12345));

// // Exercise 2 Alphabetical order string
// function alphabeticOrder(string) {
//     let strArr = string.split('');
//     let sortArr = strArr.sort().join('');
//     return sortArr;
// }
// console.log(alphabeticOrder('keyincollege'));

// // Exercise 3 Get the file extension
// function fileExtension(file) {
//     let extension = file.split('.').pop();
//     return extension;
// }
// console.log(fileExtension('file.rom.txt'));

// // Exercise 4 Get date return in the same format it was entered
// function curDate(format) {
//     let currentDate = new Date();
//     let day = currentDate.getDate();
//     let month = currentDate.getMonth() + 1;
//     let year = currentDate.getFullYear();
  
//     // If input mm-dd-yyyy than output is the same
//     if (format === 'MM-DD-YYYY') {
//         return `${month}-${day}-${year}`;
//     } 
//     else if (format === 'MM/DD/YYYY') {
//         return `${month}/${day}/${year}`;
//     } 
//     else if (format === 'DD-MM-YYYY') {
//         return `${day}-${month}-${year}`;
//     } 
//     else if (format === 'DD/MM/YYYY') {
//         return `${day}/${month}/${year}`
//     }
// }
// console.log(curDate('MM-DD-YYYY')); 
// console.log(curDate('MM/DD/YYYY')); 
// console.log(curDate('DD-MM-YYYY')); 
// console.log(curDate('DD/MM/YYYY')); 

// // Exercise 5 Captalize the first letter in string
// function cuptFirstLetter(str){
//     let firstLetter = str.charAt(0);
//     if(firstLetter === firstLetter.toUpperCase()){
//         return str;
//     }
//     else{
//         let frLetter = firstLetter.toUpperCase();
//         let string = str.slice(1);
//         return frLetter + string;
//     }
// }
// console.log(cuptFirstLetter("hello my world."));

// // Exercise 6 Check for period.
// function checkPeriod(str){
//     let period = str.includes('.');
//     if(period === true){
//         return 'contain period';
//     }else {
//         return 'no period';
//     }
// }
// console.log(checkPeriod("hello my world. Hello"));
// console.log(checkPeriod("hello my world"));

// // Exercise 7 Add sufix to numbers
// function addSufix(number){
//     let lastNumber = number % 10;
//     if(lastNumber === 1 & number != 11){
//         return `${number}st`;
//     } else if(lastNumber === 2 & number != 12) {
//         return `${number}nd`;
//     } else if(lastNumber === 3 & number != 13) {
//         return `${number}rd`;
//     } else {
//         return `${number}th`;
//     }
// }
// console.log(addSufix(11));