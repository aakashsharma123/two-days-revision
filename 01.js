function operation (a,b) {
 return a + b
}


function displaydata (opp,a,b){
   return opp(a,b)
}

console.log(displaydata(operation,2,2));
