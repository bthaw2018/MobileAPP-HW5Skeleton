var domap = function() { //This function should be used to build the map in the content element
    clean_buttons();
    document.getElementById('map').classList.add("selected");
    var workspace = document.getElementById("content");
    workspace.innerHTML = "";
    var elem = new Gmap(26.37517021171263, -80.10109548854577,16,400,400)
    workspace.appendChild(elem);
    
    

}
    
