
//test the code in https://repl.it/repls/ScornfulPerfectHoverfly

//**************start******************************

//bigText=(question1##question2   ...##question10()
//evry question=questionText**Answer1**Answer2**Answer3**The_Right_Answer
function startQuiz(){
  var bigText=`What are style sheets used for?**to store the keywords of web pages**to script web pages**to control the look and feel of web documents**3##Why use CSS?**it helps make the web page's browser independent**it helps create unique web pages**it allows for the separation of style and content**3##Select the attribute that organizes the inline styling:**style**id**class**1##Where should the style tag be declared to organize an internal CSS?**body**head**external file**2##In the rule, the "selector":**serves as a property**selects which element to style**allows to substitute the selected attribute**2##From the three types of styling, which one is the most useful in terms of website optimization?**Internal**External**Inline**2##What is the "style", when creating an internal CSS?**value**property**tag**3##Why is the name of one of the fonts put in quotes?**it consists of two or more words**it is a rarely used font**it shows a font family**1##Which of the values below is NOT applicable for the text-align property?**even**left**right**1##What value of the "display" property makes the inline element act as a blocking level element?**table-cell**block**inline**2`;
//spilt "bigText" and set evry part as a element in "x1" array

var x1=bigText.split("##");

//create object constructor "question"

function question(questionN,questionText,answer1,answer2,answer3,rightAnswer,questionPoint){
  this.questionN=questionN;
  this.questionText=questionText;
  this.answer1=answer1;
  this.answer2=answer2;
  this.answer3=answer3;
  this.rightAnswer=rightAnswer;
  this.questionPoint=questionPoint;
}
//spilt the elements from "x1" array and set the new parts in "qtext" array
//[0]question text,[1]answer1, [2]answer1, [2]answer1, [3]rightAnswer.
//move the "qtext" to "qObject"
//set evry object in "question" array
 var css=[];
 for(var i=0;i<x1.length;i++){
   var qtext=x1[i].split("**");
   var cssQuestions=new question(i+1,qtext[0],qtext[1],qtext[2],qtext[3],qtext[4],10);
   css.push(cssQuestions);
 }
 

//create object constructor "user"
function user(name){
  this.name=name;
  this.numRQ=0; //the correct Answer
  this.numWQ=0;  //the wrong Answer
  this.numEQ=0;  //the empty Answer
  this.sumPoint=0; //the points
  this.wrongQ="";
}
//create object from user (student)
var student=new user(prompt("write your Name:"));

  var start=prompt("write \"css\" to start Css Quiz");
  if(start=="css"){
    //get the questions from "css" array and show it by prompt to pick the answer number
    for(var i=0;i<css.length;i++){
      var an=prompt("Question "+css[i].questionN+" from "+css.length+".\n"
                +css[i].questionText+"\n1- "
                +css[i].answer1+"\n2- "
                +css[i].answer2+"\n3- "
                +css[i].answer3+"\n\n"
                +"type the Answer Number 1,2 or 3!!");
      //check the answer number to change the user's points,the correct Answer, the wrong Answer
      if (an!=1 && an!=2 && an!=3){
      student.numEQ++;
      student.wrongQ+=css[i].questionN+" .";
      }else if(an==css[i].rightAnswer){
      student.numRQ++;
      student.sumPoint+=css[i].questionPoint;
      }
      else if(an!=css[i].rightAnswer){
      student.numWQ++;
      student.wrongQ+=css[i].questionN+" .";
      }
    }

    //check the user's points than show the result by alert
    var result="";
    if(student.sumPoint==100){
          result="thank you "+student.name+" you have : "         +student.sumPoint+" point\n\n"+
            "*** Excellent, all answers are correct ***";
    }else if(student.sumPoint>=60){
          result="thank you "+student.name+" you have : "         +student.sumPoint+" point\n"+
          "Right Answer: "+student.numRQ+"\n"+
          "Wrong Answer: "+student.numWQ+"\n"+
          "no Answer: "+student.numEQ+"\n\n"+
          "The wrong Answers: "+student.wrongQ+"\n\n"+
          "*** very good ***";
    }else if(student.sumPoint>=40){
          result="thank you "+student.name+" you have : "+student.sumPoint+" point\n"+
          "Right Answer: "+student.numRQ+"\n"+
          "Wrong Answer: "+student.numWQ+"\n"+
          "no Answer: "+student.numEQ+"\n\n"+
          "The wrong Answers: "+student.wrongQ+"\n\n"+
          "*** not bad ***";
    }else{
          result="Thank you "+student.name+" you have : "+student.sumPoint+" point.\n"+
          "Right Answer: "+student.numRQ+".\n"+
          "Wrong Answer: "+student.numWQ+".\n"+
          "no Answer: "+student.numEQ+".\n\n"+
          "The wrong Answers: "+student.wrongQ+"\n\n"+
          "*** very bad ***";
    }
  alert(result);
  if(student.sumPoint!=100){
    if(confirm("try again ?")){
      startQuiz();
    }
  }
}
else{
      if(confirm("Start again please !!")){
        startQuiz();
      }else{
        alert("Good-bye "+student.name);
      }
  }
}
startQuiz();

//**************the end******************************
