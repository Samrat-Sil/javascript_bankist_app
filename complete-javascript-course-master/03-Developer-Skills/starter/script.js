// // Remember, we're gonna use strict mode in all scripts now!
'use strict';

// /* Write your code below. Good luck! 🙂 */


// function calcTip(bills) {
//     return(
//      bills>=50 && bills<=300 ? bills*0.15 : bills*0.20
//     )
//  }
//  const bills=[125,555,44];
//  const tip=[calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];
//  console.log(bills,tip)
 
const sam={
    degreeName:'MCA',
    collegeName:'Lpu',
    ageName:2024-2000,
    PassingYear:2023,
    detailsYear:['CTS',"MCA",'BCA']
}
const name1key='Name';
const Yearkey='Year';
// console.log(sam['degree'])
console.log(sam['degree' + name1key])
console.log(sam['college' + name1key])
console.log(sam['age' + name1key])
console.log(sam['Passing' + Yearkey])
