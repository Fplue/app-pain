function showSelectedHour() {
    let hour = document.getElementById("select").value;
    let calculate = Number(hour)+1
    document.getElementById("hoursDisplay").innerHTML = hour
    document.getElementById("hoursStep1").innerHTML = calculate
    
}

document.getElementById("select").addEventListener("change", showSelectedHour);