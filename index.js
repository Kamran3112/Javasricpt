// for (let index = 1; index <=100; index++) {
//   if(index%2!==0){
//       document.write(index )
//   }
    
// }
// let result='pass'
// if(result='pass karar'){
//     alert('show percentage')
// }
// else{
//     document.write("not right")
// }

// document.write("<h></h>1")

//  let percentage=prompt();
//   if (percentage >=80 && percentage <=100) {
//       document.write("Exellent Beta")
//   }
//   else if(percentage >=60 && percentage <=80){
//     document.write("<h1>Good beta</h1>")
//   }
//   else if(percentage >=40 && percentage <=60){
//     document.write("fine Beta")
//   }

//   else if(percentage >=25 && percentage <=50){
//     document.write("Chal bhenchod")
//   }
//   else{
//     document.write("Result percentage")   
//   }
    




  function paractice(fname="name",lname="also name"){
    let a =  "Hello"+ "  ------" +fname+"_ "+lname
    return a
  }
   let b=paractice("Mr" ,"Kamal");
   document.write(b)

function sum(Math,eng ,bio) {
  let a=Math+eng+bio
  return a
}

let total=sum(60,60,60)
// document.write(total)
function percentage(tt) {
  let per= tt/300*100
  return per
}
let outcome=percentage(total)
  document.write(outcome)