var order = prompt("Where would you like go ");
var how = prompt("you wont go bus or car");
while(how != 'car'&& how!='bus')
{
    how = prompt("you wont go bus or car");
}
 var boc ='';
if (how =="bus")
{
 boc= '<img src="scanis-bus4.jpg"/>' ;

}
else{
    boc ='<img src="2018-Ford-Focus.jpg"/>' ;
}
var num =prompt("How many person");

var result ='';
for (var i=0;i<num;i++)
{
    result= result+boc;
}
document.write(result);
