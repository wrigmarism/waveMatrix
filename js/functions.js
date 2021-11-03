function createMatrix(size){
    var matrix = []
    for (i = 0; i < size; i++) {
        var row = []
        for (j = 0; j < (size*1.6); j++) {
            row[j] = [(j+i), "■"]
        }
        matrix[i] = row        
    }
    return matrix
}

function clickEvent(count, reset, trigger){
    triggered = getRandomInt(21, 43)
    if (trigger == triggered){
        window.location.href = 'symbol.html';
    }
    if(reset){
        for (let i = 0; i < count; i++){
            setTimeout(function(){changeColor(i, "yellow"); }, (i*50))  
        }
    }
    else{
        for (let i = 0; i < count; i++){
            setTimeout(function(){changeColor(i, "black"); }, (i*50))   
        }
    }
}

function changeColor(count, color){
    cElements = document.getElementsByClassName('c' + count)
        for (let i = 0; i < cElements.length; i++) {
            document.getElementById(cElements[i].id).style.color=color
            
        }
}

function symbol(){
    gold = ["i49", "i410", "i411", "i59", "i510", "i511", "i512", 
            "i513", "i611", "i612", "i613"]
    
    red = ["i15","i16","i17","i18","i19","i27","i28","i29","i32",
            "i38","i39","i310","i316","i43","i44","i45","i415",
            "i416","i417","i54","i55","i56","i57","i58","i514",
            "i515","i516","i517","i518","i65","i66","i67","i617",
            "i618","i619","i76","i712","i713","i714","i720","i813",
            "i814","i815","i913","i914","i915","i916","i917"]

    white = ["i14","i110","i21","i26","i210","i215","i33","i34",
            "i37","i311","i314","i315","i46","i47","i48","i412",
            "i413", "i414","i68","i69","i610","i614","i615","i616",
            "i77","i78","i711","i715","i718","i719","i87","i812",
            "i816","i821","i912","i918"]

    for(i = 0; i < gold.length; i++){
        document.getElementById(gold[i]).style.color="gold"
    }
    for(i = 0; i < red.length; i++){
        document.getElementById(red[i]).style.color="red"
    }
    for(i = 0; i < white.length; i++){
        document.getElementById(white[i]).style.color="white"
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }