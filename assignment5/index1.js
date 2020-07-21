console.log("Higher Order Functions");

// MAP

let arr = [1,2,3,4,5,6];
arr.forEach((el)=>{
    console.log(el**3)
})
let cube = arr.map((el)=>el**3);
let cube1 = arr.map(function(el){
        return el**3;
})
console.log(cube);
//Filter

let odd = arr.filter(el=>el%2!==0);

let oddcube = arr.filter(el=>el%2!==0).map(el=>el**3);

console.log(odd);
console.log(oddcube);
