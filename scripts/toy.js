function createToy(){
    var toy = new Object();
    toy.color = document.myForm.color.value;
    toy.size  = document.getElementById("size").value;
    toy.isFuzzy = document.getElementById("softness").value;
    toy.play = function(){
        this.status = "playing";
    }
    document.getElementById("show-toy").innerHTML = JSON.stringify(toy);
}

function createPerson(){
    var person = {
        hairColor: document.getElementById("hair").value
        , gender: document.person.gender.value
    };
    
    document.getElementById("Display Person").innerHTML = "Person's hair color: " + person.hairColor;
}