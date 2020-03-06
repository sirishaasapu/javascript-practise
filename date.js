var d=new Date();
document.write(d);
document.write("</br>"+d.getDate()+":"+d.getMonth()+":"+d.getFullYear());
function hello()
{
setInterval(time,0);
function time()
{
var d=new Date();
var time=d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();
document.getElementById("day").innerHTML=time;
}
}
hello();