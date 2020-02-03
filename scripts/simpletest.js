function aSimpleTest(obj){
    return document.getElementById(obj);
  }
  
  
  function checkAnswers(){
    var question1 = aSimpleTest("txtQuestion1").value;
    var question2 = document.getElementsByName("question2");
    var answer1 = 0;
    var answer2 = "";
    
    var resposeToAnswers = [];
    
    //try to grab the number from the text if its a valid number
    if(isNaN(question1) == false){
      answer1 = parseInt(question1);
    }
    
    //check if the answer #1 is right
    if(answer1 === 4) {
      resposeToAnswers.push("Answer #1 is correct!");
    }
    else{
      resposeToAnswers.push("Answer #1 is incorrect.");
    }
    
    //get checked option from question #2
    for(var i = 0; i <= question2.length-1; i++){
      if(question2[i].checked){
        answer2 = question2[i].value;
      }
    }
    
    //check to see if answer #2 is right
    if(answer2 == "brazil"){
      resposeToAnswers.push("Answer #2 is correct!");
    }
    else{
      resposeToAnswers.push("Answer #2 is incorrect.");
    }
    
    
    alert(displayResult(resposeToAnswers));
  }
  
  function displayResult(resposeToAnswers){
    var message = "Final Result: \n\n";
    if(resposeToAnswers != undefined && resposeToAnswers.length > 0){
      for(var i = 0; i<= resposeToAnswers.length -1; i++){
        message += resposeToAnswers[i] + "\n\n";
      }
    }
    
    return message;
  }