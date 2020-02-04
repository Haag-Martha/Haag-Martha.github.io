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
