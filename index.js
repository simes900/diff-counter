
let total = 0
let band = 0
let lymph = 0
let mono = 0
let eos = 0
let baso = 0
let atypical = 0
let meta = 0
let myelocyte = 0
let other = 0 
let pmn = 0
let nrbc = 0

keyupColor = "red"
keydownColor ="grey"

// next time use array object . this is a lot of work . 
let otherNumber = document.getElementById("other")
let myeloNumber = document.getElementById("myelocyte")
let metaNumber = document.getElementById("metamyelocyte")
let atypicalNumber = document.getElementById("atypical")
let basophilNumber = document.getElementById("basophil")
let eosNumber = document.getElementById("eosinophil")
let monoNumber = document.getElementById("monocyte")
let lymphNumber = document.getElementById("lymphocyte")
let bandNumber = document.getElementById("band")
let pmnNumber = document.getElementById("neutraphil")
let totalNumber = document.getElementById("total")
let alertWarning = document.getElementById("alertStop")
let nrbcNumber = document.getElementById("nrbc")

let nrbcBtn = document.getElementById("nrbc-btn") 
let otherBtn = document.getElementById("other-btn") 
let myelocyteBtn = document.getElementById("myelocyte-btn") 
let metamyelocyteBtn = document.getElementById("metamyelocyte-btn") 
let atypicalBtn = document.getElementById("atypical-btn") 
let basophilBtn = document.getElementById("basophil-btn") 
let eosinophilBtn = document.getElementById("eosinophil-btn") 
let monocyteBtn = document.getElementById("monocyte-btn") 
let lymphocyteBtn = document.getElementById("lymphocyte-btn") 
let bandBtn = document.getElementById("band-btn") 
let neutraphilBtn = document.getElementById("neutraphil-btn") 


function hundredCount(){

}
function addPmn(){
    if(total > 99){
        alertCount()
    }else{
        playClick()
        pmn += 1
        total += 1
        totalNumber.textContent = total
        pmnNumber.textContent = pmn
    }
    
    
}

function addBand(){
    if(total > 99){
        alertCount()
    }else{
        playClick()
        band += 1
        total += 1
        totalNumber.textContent = total
        bandNumber.textContent = band
    }
}

function addLymph(){
    if(total > 99){
        alertCount()
    }else{
        playClick()
        lymph += 1
        total += 1
        totalNumber.textContent = total
        lymphNumber.textContent = lymph
    }
}

function addMono(){
    if(total > 99){
        alertCount()
    }else{
        playClick()
        mono += 1
        total += 1
        totalNumber.textContent = total
        monoNumber.textContent = mono
    }
}

function addEos(){
    if(total >99 ){
        alertCount()
    }else{
        playClick()
        eos += 1
        total += 1
        totalNumber.textContent = total
        eosNumber.textContent = eos
    }
    
}

function addBaso(){
    if(total > 99 ){
        alertCount()
    }else{
        playClick()
        baso += 1
        total += 1
        totalNumber.textContent = total
        basophilNumber.textContent = baso
    }
}

function addAtypical(){
    if(total > 99){
        alertCount()
    }else{
        playClick()
        atypical += 1
        total += 1
        totalNumber.textContent = total
        atypicalNumber.textContent = atypical
    }
}
function addMeta(){
    if(total > 99){
        alertCount()
    }else{
        playClick()
        meta +=1
        total += 1
        totalNumber.textContent = total
        metaNumber.textContent = meta
    }
}
function addMyelo(){
    if(total > 99){
        alertCount()
    }else{
        playClick()
        myelocyte += 1
        total += 1
        totalNumber.textContent = total
        myeloNumber.textContent = myelocyte
    }
}
function addOther(){
    if(total > 99){
        alertCount()
    }else{
        playClick()
        other +=1
        total += 1
        totalNumber.textContent = total
        otherNumber.textContent = other
    }
}

function addNrbc(){
    if(total > 99){
        alertCount()
    }else{
        playClick()        
        nrbc +=1
        nrbcNumber.textContent = nrbc
    }
}

function reset(){
   total = 0
    band = 0
    lymph = 0
    mono = 0
    eos = 0
    baso = 0
    atypical = 0
    meta = 0
    myelocyte = 0
    other = 0 
    pmn = 0
    nrbc = 0

    pmnNumber.textContent = pmn
    totalNumber.textContent = total
    bandNumber.textContent = band
    lymphNumber.textContent = lymph
    monoNumber.textContent = mono
    eosNumber.textContent = eos
    basophilNumber.textContent = baso
    atypicalNumber.textContent = atypical
    metaNumber.textContent = meta
    myeloNumber.textContent = myelocyte
    otherNumber.textContent = other
    nrbcNumber.textContent = nrbc

    alertWarning.textContent = ""
}

function playSound(){
    let audio = new Audio("ding.mp3")
    audio.loop = false
    audio.play()
}
function playClick(){
    let audio = new Audio("click.mp3")
    audio.loop = false
    audio.play()
}

function alertCount(){
    
    playSound()
    alertWarning.textContent = "100 cells have been counted"
    
}

document.addEventListener('keydown', (event)=> {    
    console.log(event); // all event related info
    console.log(event.type);
    console.log(event.key);
    console.log(event.code);

    switch(event.key){
        case "m":
        case "M":
            document.getElementById("neutraphil-btn").style.background=keydownColor;

            addPmn()
            
            break;
        case "n":
        case "N":
            document.getElementById("band-btn").style.background=keydownColor;

            addBand()
            break;
        case "b":
        case "B":
            document.getElementById("lymphocyte-btn").style.background=keydownColor;

            addLymph()
            break;
        case "v":
        case "V":
            document.getElementById("monocyte-btn").style.background=keydownColor;

            addMono()
            break;
        case "c":
        case "C":
            document.getElementById("eosinophil-btn").style.background=keydownColor;

            addEos()
            break;
        case "x":
        case "X":
            document.getElementById("basophil-btn").style.background=keydownColor;

            addBaso()
            break;
        case "f":
        case "F":
            document.getElementById("atypical-btn").style.background=keydownColor;

            addAtypical()
            break;
        case "h":
        case "H":
            
            document.getElementById("myelocyte-btn").style.background=keydownColor;
            addMyelo()
            break;
        case "g":
        case "G":
            addMeta()
            document.getElementById("metamyelocyte-btn").style.background=keydownColor;

            break;
        case "/":
        case "?":
            addOther()
            document.getElementById("other-btn").style.background=keydownColor;

            break;
        case "l":
        case "L":
            addNrbc()
            document.getElementById("nrbc-btn").style.background=keydownColor;

            break;
        
        

    }
});

document.addEventListener('keyup', (event)=> { 
    switch(event.key){
        case "m":
        case "M":
            document.getElementById("neutraphil-btn").style.background=keyupColor;

            
            break;
        case "n":
        case "N":
            document.getElementById("band-btn").style.background=keyupColor;

            break;
        case "b":
        case "B":
            document.getElementById("lymphocyte-btn").style.background=keyupColor;

            break;
        case "v":
        case "V":
            document.getElementById("monocyte-btn").style.background=keyupColor;

            break;
        case "c":
        case "C":
            document.getElementById("eosinophil-btn").style.background=keyupColor;

            break;
        case "x":
        case "X":
            document.getElementById("basophil-btn").style.background=keyupColor;

            break;
        case "f":
        case "F":
            document.getElementById("atypical-btn").style.background=keyupColor;

            break;
        case "h":
        case "H":
            document.getElementById("myelocyte-btn").style.background=keyupColor;

            break;
        case "g":
        case "G":
            document.getElementById("metamyelocyte-btn").style.background=keyupColor;

            break;
        case "/":
        case "?":
            document.getElementById("other-btn").style.background=keyupColor;

            break;
        case "l":
        case "L":
        
            document.getElementById("nrbc-btn").style.background=keyupColor;

            break;
        
        

    }
});