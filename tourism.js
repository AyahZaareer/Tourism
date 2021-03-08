var order = prompt("Where would you like go ");
    var how = prompt("you wont go bus or car");

var choise= function()
{
    while(how != 'car'&& how!='bus')
 { 
    
    how = prompt("you wont go bus or car");
 }
}

choise();
 
 
var boc ='';
if (how =="bus")
{
 boc = '<img src="scanis-bus4.jpg"/>' ;

}
else{
    boc ='<img src="2018-Ford-Focus.jpg"/>' ;
}
var num =prompt("How many person");
function reslt()
{   var result ='';
for (var i=0;i<num;i++)
{
    result= result+boc;
}
 document.write(result);
} reslt();



