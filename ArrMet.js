//Map():create new Array by  calling provided function for every element in an array
const arrs=[0,1,2,3,4,5,6,7];
let x=arrs.map(item=> 
    item + 1
    );
console.log(x);