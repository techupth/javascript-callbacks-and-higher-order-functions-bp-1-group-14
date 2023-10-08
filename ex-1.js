const employeeSalaries = [20005, 40000, 32000, 14500, 344000];
const newEmployeeSalaries = [];

function Each(employeeSalaries){
   return employeeSalaries + 5000
}
function forEach( operation,array){
    const New = []
    for(let i = 0; i < array.length ; i++){
        New.push(operation(array[i]))
    }
    return New
}

let Excersice = forEach(Each,employeeSalaries)
console.log(Excercise)