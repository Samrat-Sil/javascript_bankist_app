// // const sam={
// //     degreeName:'MCA',
// //     collegeName:'Lpu',
// //     ageName:2024-2000,
// //     PassingYear:2023,
// //     detailsYear:['CTS',"MCA",'BCA'],
// //     duration: function (){
// //         sam.age=sam.PassingYear-2021
// //         return sam.age
// //     }

// // }
// // console.log(sam.duration(sam.PassingYear))
// console.log(sam.duration(sam['PassingYear']))
// console.log(sam.age)
const oldArray=[1,2,3,4,5,6,7,8,9,10];
const newArray1=[];
const newArray2=[];
 for(let i =0;i<oldArray.length;i++){   
    newArray2.push(oldArray[i])
   //  
 }
 for(let j=0;j<newArray2.length;j++)
 {
   let k=newArray2.shift()
   newArray1.push(k)
   // console .log(newArray1)
   
 }
 console.log(newArray2)
 
  
