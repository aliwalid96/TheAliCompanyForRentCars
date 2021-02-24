var message =prompt("welcome to our page please enter your age"); 
while (message<=18){
     message =prompt("welcome to our page please enter your age"); 
}




var studentName=prompt("please enter the student name");
var mark1=prompt("enter mark 1");
var mark2=prompt("enter mark 2");
var mark3=prompt("enter mark 3");
var mark4=prompt("enter mark 4");
var mark5=prompt("enter mark 5");


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



var frequantcounter =prompt("enter how many do you want to repet the img  ");

if(frequantcounter >0 && frequantcounter<6){
    for(var i=1;i<=frequantcounter;i++){
   
    document.write('<img src="http://jpvitale.com/jpvitalewordpress/wp-content/uploads/2014/08/Great_Work.jpg" />');
  
   
    }
}else{
    var frequantcounter =prompt("enter the vlue of the repetation of the image from 1 to 5 ");
    for(var i=1;i<=frequantcounter;i++){
   
        document.write('<img src="http://jpvitale.com/jpvitalewordpress/wp-content/uploads/2014/08/Great_Work.jpg" />');
      
       
        }
}