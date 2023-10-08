//Exercise #2: At Least Five Function

function LeastFive(studentscores){
  let result = 0;
  for(let i = 0; i < studentscores.length; i++){
    if (studentscores[i] >= 70){
      result =result +1
    }
}if(result>=5){
  return "True"
}else{
  return "False"
}
}
function atLeastFive(array,Operation) {
// Start coding here\
return Operation(array)
}

const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

// Using `atLeastFive` function here

let scoreRoom1Result1 = atLeastFive(studentScoresRoom1,LeastFive);
console.log(scoreRoom1Result1)
let scoreRoom2Result2 = atLeastFive(studentScoresRoom2,LeastFive);
console.log(scoreRoom2Result2)
let scoreRoom3Result3= atLeastFive(studentScoresRoom3,LeastFive);
console.log(scoreRoom3Result3)
