//Map():create new Array by  calling provided function for every element in an array
const arrs=[0,1,2,3,4,5,6,7];
let x=arrs.map(item=> 
    item + 1
    );
console.log(x);


//reverse Method
console.log(arrs.reverse(item=>item));


//filter
console.log(arrs.filter(item=>item>=2));

//sort
console.log(arrs.sort((a,b)=>a>b?1 :-1));

//ForEach
arrs.forEach(item=(value,index)=> {
    console.log(index +":"+ (value+1));
}
    );