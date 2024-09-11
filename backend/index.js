let date = "24-12-2024"

// let tostring= date.toString("")
// console.log(tostring)
// let splitted =date.split("-")

// console.log(date)
// console.log(splitted)

// let some =splitted.join(+)
// console.log(some)
let sum = 0

for(let i=0; i<date.length; i++){
    if(date[i]==NaN)
        sum = sum + +date[i]
}
console.log(sum)

// let sum = 0

// for(let i=0; i<date.length; i++){
//     if(typeof(date[i])== "number")
//         sum = sum + +date[i]
// }
// console.log(sum)
var data = []
// for(i=0; i<date.length; i++){
//     if(typeof(date[i])== "number")
//        return data()
//     sum = sum + +data[i]
// };
// console.log(sum)
// for(i=0; i<data.length; i++){
//     sum = sum + data[i]
// }