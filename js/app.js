/*
To add the question the list of questions*/
// none start quiz
let getStartQiuiz = document.getElementById("do-quiz");
let getEdit = document.getElementById("edit-question");
let appearQuestion = document.getElementById("display-qustions");
let getTitle = document.getElementById("title_text");
let getDescription = document.getElementById("description_text");
// make it none on first DOM
getStartQiuiz.style.display="none";
getEdit.style.display="none";
//hide bg
let hidebg=document.getElementById('pictures');
function addQuestion(e) {
    e.preventDefault();
    // TODO
    // get the question from input
    let getQuestion = document.getElementById("getQuestion");
    // get the choice from input
    let getChoice1= document.getElementById("getChoice1");
    let getChoice2= document.getElementById("getChoice2");
    let getChoice3= document.getElementById("getChoice3");
    let getChoice4= document.getElementById("getChoice4");
    let getChoiceClass = document.getElementsByName("answer-input");
    // declear a variable as an object
    let object = {};
    // when user not complete all field,it will alert to tell for complete
    if(getQuestion.value.length===0
        || getChoice1.value.length===0 
        || getChoice2.value.length===0
        || getChoice3.value.length===0
        || getChoice4.value.length===0
        || getTitle.value.length===0
        || getDescription.value.length===0){
            // message that tell all user who not yet complete all field
            alert("Please complete  information ");
        }
    else{
        // get the answer from input
        object["Question"]=getQuestion.value;
        object["Choice"]=[getChoice1.value,getChoice2.value,getChoice3.value,getChoice4.value];
        // loop get checked which one correct answer
        for (let i=0;i<getChoiceClass.length;i++){
            if(getChoiceClass[i].checked){
                //append index to answer
                object["answer"]=parseInt(i);
            }
        }
        questions.push(object);
    }
    // push this object to arrays
    displayQuestion();
}
/*       store data user input  */
let questions = [];
/*
To display the questions from the list
*/
function displayQuestion() {
    //TODO
    // loop on questions list
    /*create form store all element from input */
    let form  = document.createElement("form");
    form.id="from-display";
    for(let i=0;i<questions.length;i++){
        /*create html element follow your mock up*/
        // ul create ul cover all input
        let ul =document.createElement("ul");
        ul.classList.add("enter-question");
        let li = document.createElement("li");
        // div cover all input and label that user input
        let divCoverRadio = document.createElement("div");
        divCoverRadio.classList.add("d-flex");
        //break line on first  label 
        let breakLine1 = document.createElement("br");
        
        //create label for get answer 1 by index
        let label1= document.createElement("label");
        li.textContent= questions[i].Question;
        label1.textContent=questions[i].Choice[0];
        //break line on second  label 
        let breakLine2 = document.createElement("br");
        
        //create label for get answer 2 by index
        let label2= document.createElement("label");
        li.textContent= questions[i].Question;
        label2.textContent=questions[i].Choice[1];
        //break line on third  label 
        let breakLine3 = document.createElement("br");

        //create label for get answer 1 by index
        let label3= document.createElement("label");
        li.textContent= questions[i].Question;
        label3.textContent=questions[i].Choice[2];
        
        let breakLine4 = document.createElement("br");
        //create label for get answer 1 by index
        let label4= document.createElement("label");
        li.textContent= questions[i].Question;
        label4.textContent=questions[i].Choice[3];
        // draw line below question and multiple choice
        let hr = document.createElement("hr");

        let btnDelete = document.createElement("button");
        btnDelete.textContent="Delete";
        btnDelete.classList.add("delete");
        
        //create label for get answer 1 by index
        let label5 = document.createElement("label");
        label5.classList.add("correct-answer");
        li.textContent=questions[i].Question;
        // get answer to display below question make sure that we insert correct
        let number=0;
        number=questions[i].answer;
        label5.textContent="Answer: "+questions[i].Choice[number];
        
        // append to item 
        form.appendChild(ul);
        ul.appendChild(li);
        ul.appendChild(divCoverRadio);
        divCoverRadio.appendChild(breakLine1)
        divCoverRadio.appendChild(label1);
        divCoverRadio.appendChild(breakLine2)
        divCoverRadio.appendChild(label2);
        divCoverRadio.appendChild(breakLine3)
        divCoverRadio.appendChild(label3);
        divCoverRadio.appendChild(breakLine4)
        ul.appendChild(hr);
        divCoverRadio.appendChild(label4);
        ul.appendChild(btnDelete);
        ul.appendChild(label5 );
    }
    //remove element for not display again which one already insert
    let getDisplay = document.getElementById("from-display");
    if (getDisplay){
        getDisplay.remove();
    }
    // display all information to form 
    appearQuestion.appendChild(form);
}
// when user click on editQuiz show edit Quiz
// -----get check by name property get which one that user click----------
let getCorrection1 = document.getElementsByName("answer1");
let getCorrection2 = document.getElementsByName("answer2");
let getCorrection3 = document.getElementsByName("answer3");
let getCorrection4 = document.getElementsByName("answer4");
let getCorrection5 = document.getElementsByName("answer5");
let getCorrection6 = document.getElementsByName("answer6");
let getCorrection7 = document.getElementsByName("answer7");
let getCorrection8 = document.getElementsByName("answer8");
let getCorrection9 = document.getElementsByName("answer9");
let getCorrection10 = document.getElementsByName("answer10");
/* -- correct answers when click ----*/
function correction(){
    // display correct answer to DOM when user submit 
    let correct1=document.getElementById("correct1");
    let correct2=document.getElementById("correct2");
    let correct3=document.getElementById("correct3");
    let correct4=document.getElementById("correct4");
    let correct5=document.getElementById("correct5");
    let correct6=document.getElementById("correct6");
    let correct7=document.getElementById("correct7");
    let correct8=document.getElementById("correct8");
    let correct9=document.getElementById("correct9");
    let correct10=document.getElementById("correct10");
    // loop on name and use condition to get all user click
    for(let i=0;i<getCorrection1.length;i++){
        let score=0;
        if(getCorrection1[1].checked){
            correct1.textContent="correct: 1";
            score++;
        }
        else{
            correct1.textContent="Incorrect: 0 ;   S + V2 + Obj";
        }
        if(getCorrection2[2].checked){
            correct2.textContent="correct: 1";
            score++;
        }
        else{
            correct2.textContent="Incorrect: 0 ;  went";
        }
        if(getCorrection3[1].checked){
            correct3.textContent="correct: 1";
            score++;
        }
        else{
            correct3.textContent="Incorrect: 0 ; didn't";
        }
        if(getCorrection4[1].checked){
            correct4.textContent="correct: 1";
            score++;
        }
        else{
            correct4.textContent="Incorrect: 0 ; did";
        }
        if(getCorrection5[2].checked){
            correct5.textContent="correct: 1";
            score++;
        }
        else{
            correct5.textContent="Incorrect: 0 ; Did";
        }
        if(getCorrection6[2].checked){
            correct6.textContent="correct: 1";
            score++;
        }
        else{
            correct6.textContent="Incorrect: 0 ;  work";
        }
        if(getCorrection7[0].checked){
            correct7.textContent="correct: 1";
            score++;
        }
        else{
            correct7.textContent="Incorrect: 0  ;   happened and finished in the past";
        }
        if(getCorrection8[2].checked){
            correct8.textContent="correct: 1";
            score++;
        }
        else{
            correct8.textContent="Incorrect: 0  ;    Did + S + V1(base form) +Obj?";
        }
        if(getCorrection9[3].checked){
            correct9.textContent="correct: 1";
            score++;
        }
        else{
            correct9.textContent="Incorrect: 0  ;   S + did + not + V1(base form) + Obj";
        }
        if(getCorrection10[0].checked){
            correct10.textContent="correct: 1";
            score++;
        }
        else{
            correct10.textContent="Incorrect: 0  ;  finished";
        }
        let getTotalScore=document.getElementById("totalScore");
        getTotalScore.textContent=score;
    }
    
}
// funtion to edition quiz when user wrong
function editQuiz(e){
    e.preventDefault();
    getEdit.style.display="block";
    getStartQiuiz.style.display="none";
    hidebg.style.display='none';
}
//wheb user click on startQuiz show start quiz
function startQuiz(e){
    e.preventDefault();
    getEdit.style.display="none";
    getStartQiuiz.style.display="block";
    hidebg.style.display="none";
    btnEditQuiz.style.display="none";
}


//button user add question
let btnAddQuestion = document.getElementById("add-question");
btnAddQuestion.addEventListener("click",addQuestion);
//button  edit quiz
let btnEditQuiz= document.getElementById("btn-edit");
btnEditQuiz.addEventListener("click",editQuiz);
//button start quiz
let btnStartQuiz = document.getElementById("btn-quiz");
btnStartQuiz.addEventListener("click",startQuiz);
// button submit quiz
let submit = document.getElementById("submit-quiz");
submit.addEventListener("click",correction);