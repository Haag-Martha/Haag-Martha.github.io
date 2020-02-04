function createToy(){
    var toy = new Object();
    toy.color = document.myForm.color.value;
    toy.size  = document.getElementById("size").value;
    toy.isSoft = document.getElementById("softness").value;
    toy.play = function(){
        this.status = "playing";
    }
    document.getElementById("Display Toy").innerHTML = JSON.stringify(toy);
}

function createPerson(){
    var person = {
        hairColor: document.getElementById("hair").value
        , gender: document.person.gender.value
    };
    
    document.getElementById("Display Person").innerHTML = "Person's hair color: " + person.hairColor;
}