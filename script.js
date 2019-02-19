function showSelectedHour() {
    let hours = document.getElementById("hoursSelect").value;
    let minutes = document.getElementById("minutesSelect").value;
    let totalMinutes = Number(hours)*60+Number(minutes)
    let hoursStep1 = "0"+hours;
    let minutesStep1 = "0"+minutes; 


    let minAddStep2 = 20;
    let totalMinStep2 = totalMinutes+minAddStep2;
    if (totalMinStep2 >= 1440) {
        totalMinStep2 = totalMinStep2-1440
    }
    let hoursStep2 = "0"+Math.floor(totalMinStep2/60);
    let minutesStep2 = "0"+Math.floor(totalMinStep2-(hoursStep2*60));


        let minAddStep3 = 30;
    let totalMinStep3 = totalMinutes+minAddStep3;
    if (totalMinStep3 >= 1440) {
        totalMinStep3 = totalMinStep3-1440
    }
    let hoursStep3 = "0"+Math.floor(totalMinStep3/60);
    let minutesStep3 = "0"+Math.floor(totalMinStep3-(hoursStep3*60));


    let minAddStep4 = 45;
    let totalMinStep4 = totalMinutes+minAddStep4;
    if (totalMinStep4 >= 1440) {
        totalMinStep4 = totalMinStep4-1440
    }
    let hoursStep4 = "0"+Math.floor(totalMinStep4/60);
    let minutesStep4 = "0"+Math.floor(totalMinStep4-(hoursStep4*60));


    let minAddStep5 = 60;
    let totalMinStep5 = totalMinutes+minAddStep5;
    if (totalMinStep5 >= 1440) {
        totalMinStep5 = totalMinStep5-1440
    }
    let hoursStep5 = "0"+Math.floor(totalMinStep5/60);
    let minutesStep5 = "0"+Math.floor(totalMinStep5-(hoursStep5*60));


    let minAddStep6 = 90;
    let totalMinStep6 = totalMinutes+minAddStep6;
    if (totalMinStep6 >= 1440) {
        totalMinStep6 = totalMinStep6-1440
    }
    let hoursStep6 = "0"+Math.floor(totalMinStep6/60);
    let minutesStep6 = "0"+Math.floor(totalMinStep6-(hoursStep6*60));


    let minAddStep7 = 300;
    let totalMinStep7 = totalMinutes+minAddStep7;
    if (totalMinStep7 >= 1440) {
        totalMinStep7 = totalMinStep7-1440
    }
    let hoursStep7 = "0"+Math.floor(totalMinStep7/60);
    let minutesStep7 = "0"+Math.floor(totalMinStep7-(hoursStep7*60));


    let minAddStep8 = 720;
    let totalMinStep8 = totalMinutes+minAddStep8;
    if (totalMinStep8 >= 1440) {
        totalMinStep8 = totalMinStep8-1440
    }
    let hoursStep8 = "0"+Math.floor(totalMinStep8/60);
    let minutesStep8 = "0"+Math.floor(totalMinStep8-(hoursStep8*60));


    let minAddStep9 = 750;
    let totalMinStep9 = totalMinutes+minAddStep9;
    if (totalMinStep9 >= 1440) {
        totalMinStep9 = totalMinStep9-1440
    }
    let hoursStep9 = "0"+Math.floor(totalMinStep9/60);
    let minutesStep9 = "0"+Math.floor(totalMinStep9-(hoursStep9*60));


    let minAddStep10 = 765;
    let totalMinStep10 = totalMinutes+minAddStep10;
    if (totalMinStep10 >= 1440) {
        totalMinStep10 = totalMinStep10-1440
    }
    let hoursStep10 = "0"+Math.floor(totalMinStep10/60);
    let minutesStep10 = "0"+Math.floor(totalMinStep10-(hoursStep10*60));



    
//display hours for every step

    document.getElementById("step1").innerHTML = hoursStep1.slice(-2)+":"+minutesStep1.slice(-2);
    document.getElementById("step2").innerHTML = hoursStep2.slice(-2)+":"+minutesStep2.slice(-2);
    document.getElementById("step3").innerHTML = hoursStep3.slice(-2)+":"+minutesStep3.slice(-2);
    document.getElementById("step4").innerHTML = hoursStep4.slice(-2)+":"+minutesStep4.slice(-2);
    document.getElementById("step5").innerHTML = hoursStep5.slice(-2)+":"+minutesStep5.slice(-2);
    document.getElementById("step6").innerHTML = hoursStep6.slice(-2)+":"+minutesStep6.slice(-2);
    document.getElementById("step7").innerHTML = hoursStep7.slice(-2)+":"+minutesStep7.slice(-2);
    document.getElementById("step8").innerHTML = hoursStep8.slice(-2)+":"+minutesStep8.slice(-2);
    document.getElementById("step9").innerHTML = hoursStep9.slice(-2)+":"+minutesStep9.slice(-2);
    document.getElementById("step10").innerHTML = hoursStep10.slice(-2)+":"+minutesStep10.slice(-2);
    
    

    
}



// FOR AUTO UPDATE AS SELECT CHANGES:   document.getElementById("select").addEventListener("change", showSelectedHour);

