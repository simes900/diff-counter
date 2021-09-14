
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
function hundredCount(){

}
function addPmn(){
    if(total >= 100){
        alertCount()
    }else{
        pmn += 1
        total += 1
        totalNumber.textContent = total
        pmnNumber.textContent = pmn
    }
    
    
}

function addBand(){
    if(total >= 100){
        alertCount()
    }else{
        band += 1
        total += 1
        totalNumber.textContent = total
        bandNumber.textContent = band
    }
}

function addLymph(){
    if(total >= 100){
        alertCount()
    }else{
        lymph += 1
        total += 1
        totalNumber.textContent = total
        lymphNumber.textContent = lymph
    }
}

function addMono(){
    if(total >= 100){
        alertCount()
    }else{
        mono += 1
        total += 1
        totalNumber.textContent = total
        monoNumber.textContent = mono
    }
}

function addEos(){
    if(total >= 100){
        alertCount()
    }else{
        eos += 1
        total += 1
        totalNumber.textContent = total
        eosNumber.textContent = eos
    }
    
}

function addBaso(){
    if(total >= 100){
        alertCount()
    }else{
        baso += 1
        total += 1
        totalNumber.textContent = total
        basophilNumber.textContent = baso
    }
}

function addAtypical(){
    if(total >= 100){
        alertCount()
    }else{
        atypical += 1
        total += 1
        totalNumber.textContent = total
        atypicalNumber.textContent = atypical
    }
}
function addMeta(){
    if(total >= 100){
        alertCount()
    }else{
        meta +=1
        total += 1
        totalNumber.textContent = total
        metaNumber.textContent = meta
    }
}
function addMyelo(){
    if(total >= 100){
        alertCount()
    }else{
        myelocyte += 1
        total += 1
        totalNumber.textContent = total
        myeloNumber.textContent = myelocyte
    }
}
function addOther(){
    if(total >= 100){
        alertCount()
    }else{
        other +=1
        total += 1
        totalNumber.textContent = total
        otherNumber.textContent = other
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

    alertWarning.textContent = ""
}

function playSound(){
    let audio = new Audio("ding.mp3")
    audio.loop = false
    audio.play()
}

function alertCount(){
    
    playSound()
    alertWarning.textContent = "100 cells have been counted"
    
}