var emp1={id:505,name:"sirisha asapu",salary:25000};
var emp2={id:506,name:"shivangi joshi",salary:24000};
console.log(emp1);
console.log(emp2);
console.log(emp1.name);
console.log(emp2.name);
/*New keyword */
var student=new Object();
student.id=101;
student.name="mohsin";
student.branch='cse';
student.age=21;
console.log(student);
console.log(student.name);
/*object constructor */
function employee(id,name,salary)
{
    this.id=id;
    this.name=name;
    this.salary=salary;
} 
var emp=new employee(201,"tanmayrishi",20000);
console.log(emp);
console.log(emp.name);