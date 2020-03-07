

function toggleClass(className){
    document.getElementById("toggle-js").classList.toggle(className);
  }

function hideMe() {
    document.getElementById("css-widget").style.visibility = "hidden";
}

function showMe() {
    document.getElementById("css-widget").style.visibility = "visible";
}

function mouseOver(obj) {
    obj.innerHTML = "BOO!";
    obj.style.width = "250px";
    obj.style.height = "60px";
    obj.style.fontWeight = "800";
    obj.style.fontSize = "26px";
    obj.style.color = "black";
    obj.style.backgroundColor = "red";
}

function mouseOut(obj) {
    obj.innerHTML = "Hover your mouse over me?"
    obj.style.width = "150px";
    obj.style.height = "50px";
    obj.style.backgroundColor = "#e6d5ca";
    obj.style.fontWeight = "600";
    obj.style.fontSize = "20px";
    obj.style.color = "black";    
}



