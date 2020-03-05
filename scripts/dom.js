function changeGoButton(){
    if (document.getElementById("goButton").value == "Go")
        document.getElementById("goButton").value = "Stop";
    else
        document.getElementById("goButton").value = "Go";
}


function changeBackground(id, color) {
    document.getElementById(id).style.background = color;
}

var myList = document.getElementById("myList");
var txtTodo = document.getElementById("txtTodo");
var toDoList = [];

function removeItem(itemToRemove){  
  myList.removeChild(itemToRemove);
  
  var positionInArray = toDoList.indexOf(itemToRemove.innerText);
  toDoList.splice(positionInArray, 1);
  
  
  
  localStorage.setItem('toDList', JSON.stringify(toDoList));
}

function addItem(text){
  var newLiChild = document.createElement("li"); 
  
  if(text == undefined) {
    newLiChild.innerText = txtTodo.value;
    toDoList.push(newLiChild.innerText);
  }
  else
    newLiChild.innerText = text;
  
  newLiChild.onclick = function(){ removeItem(this); };
  myList.appendChild(newLiChild);
  
  txtTodo.value = "";  
  
  localStorage.setItem('toDoList', JSON.stringify(toDoList));
}

function loadSavedItems(){
      var JSONObject = localStorage.getItem("toDoList");
    if(JSONObject != undefined){
      toDoList = JSON.parse(JSONObject);
      
      for(var i = 0; i <= toDoList.length - 1; i++){
        addItem(toDoList[i]);
      }
    }
}

loadSavedItems();
