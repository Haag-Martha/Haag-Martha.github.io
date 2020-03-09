function changeAnim() {
    var div = document.getElementById("obj1");
    if (div.className == "anim1") { div.className = "anim2"; }
    else div.className = "anim1";
    }
    function transition(element, width, color){
                var element = document.getElementById(element);
                element.style.transition = "width 1s linear 0s, background 1s linear 0s";
                element.style.width = width;
                element.style.background = color;
    }
            
    function myFunction2(element, width, height, color){
                var element = document.getElementById(element);
                element.style.transition = "width 1s linear 0s, height 1s linear 0s, background 1s linear 0s";
                element.style.height = height;
                element.style.width = width;
                element.style.background = color;
    }

    function TurnOn(){
        var fanImg = document.getElementById("load-img");
        fanImg.classList.add('load-img2');
      }
      
      function TurnOff(){
        var fanImg = document.getElementById("load-img");
        fanImg.classList.remove('load-img2');
      }