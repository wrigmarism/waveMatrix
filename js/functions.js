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

function clickEvent(count, reset){
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
