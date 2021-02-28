var dohome = function(){

    clean_buttons();
    document.getElementById('home').classList.add("selected");
    var workspace = document.getElementById("content");
    workspace.innerHTML = "";

    var h1 = document.createElement('h1');
    var text = document.createTextNode("Welcome to my FAU APP");
    h1.appendChild(text);
    workspace.append(h1);

    var h3 = document.createElement('h3');
    text = document.createTextNode("Daniel Bennett : Z23024988");
    h3.appendChild(text);
    workspace.appendChild(h3);




}
