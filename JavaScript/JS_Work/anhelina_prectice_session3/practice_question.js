// // Problem 1
// var salutations = [
//     "bye",
//     "hello123",
//     "newhello",
//     "he20llo",
//     "hello",
//     "abchello",
//     "xyzabc",
//   ];
  
//   function getHello (arr) {
//     arr.filter(function (element){
//         if (/hello/i.test(element)) {
//             console.log(element);
//         }
//     })
//   }
// getHello(salutations);

// // Problem 2
// var strWith10 =
//   "There are 10 people in room number 10. Call all of the 10 people outside";

// function getHello(str) {
//   let number = /10/g;
//   console.log(str.replace(number, "ten"));
// }
// getHello(strWith10)

// // Problem 3
// function cleanUp(value) {
//     value = value
//       .replace(/([.!?])\s+/g, '$1 ')
//       .replace(/"/g, "'")
//       .replace(/\(\s+/g, '(')
//       .replace(/\s+\)/g, ')'); 
//     return value;
//   }
// console.log(cleanUp('This is a sentence.  This is another.'))
// console.log(cleanUp('One!  Two?  Three.'))
// console.log(cleanUp('This is "fun."'))
// console.log(cleanUp('A ( red) dog arrived.'))
// console.log(cleanUp('A (red  ) dog arrived.'))
// console.log(cleanUp('A (    red ) dog arrived.'))