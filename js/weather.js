var doweather = function() {
    clean_buttons();
    document.getElementById('weather').classList.add("selected");
    var workspace = document.getElementById("content");
    workspace.innerHTML = "";

    var btn = document.createElement("button");
    var winfo = document.createElement("div")
    var txtbox = document.createElement("input")
    txtbox.setAttribute("id","weatherq");
    txtbox.setAttribute("placeholder","Enter a city or zip...")
    winfo.setAttribute("id","weatherdata");
    btn.innerHTML = "Go!";

    btn.onclick = getWeatherInfo;

    workspace.appendChild(txtbox);
    workspace.appendChild(btn);
    workspace.appendChild(winfo);




}


//Get weather from Yahoo
function getWeatherInfo() {
    var token = window.sessionStorage.getItem("token");
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("weatherdata").innerHTML = ""            
            document.getElementById("weatherdata").appendChild(document.createTextNode(this.response))


        }
    };
    xhr.open('GET', 'https://weather-ydn-yql.media.yahoo.com/forecastrss?location=' + document.getElementById("weatherq").value + '&format=json');

    //Set header for OAuth
    xhr.setRequestHeader("Authorization", "Bearer " + token);
    xhr.send();
}


