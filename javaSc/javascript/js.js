confirm("welcome to our page");


var studentName=prompt("please enter the student name");
var mark1=prompt("enter mark 1");
var mark2=prompt("enter mark 2");
var mark3=prompt("enter mark 3");
var mark4=prompt("enter mark 4");
var mark5=prompt("enter mark 5");
var age =prompt("enter student age" );

var avg=calculateTheTotal(parseInt(mark1),parseInt(mark2),parseInt(mark3),parseInt(mark4),parseInt(mark5))/5;
chechTheAvareg(avg);


function calculateTheTotal(firstMark1,secondMark,thirdMark,fourthMark,fifthMark){
    var total=(firstMark1+secondMark+thirdMark+fourthMark+fifthMark);
    return total;   
}



function chechTheAvareg(avg){
if(avg>=50 && avg <=60){
    console.log("you passed ");
}
else if(avg>=61 && avg <=70){
    console.log("you passed with good grade  ");
}
else if(avg>=71 && avg <=80){
    console.log("you passed with very good grade  ");
}
else if(avg>=81 && avg <99){
    console.log("you passed with excelent grade  ");
}else{
    console.log("sorry you didnt pass ");
}
}
var element=document.getElementById("avareg")
console.log('---------->',element)
element.innerText="the avarege of the mark is " + avg;

var element2=document.getElementById("sName")
element2.innerText="the name is " + studentName;

var element3=document.getElementById("age")
element3.innerText="the age" + age;

