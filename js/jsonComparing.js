function compareJSON() {
if(document.getElementById('leftBox').value =='')
return

let leftJson = document.getElementById('leftBox').value.split("\n");  
let rightJson = document.getElementById('rightBox').value.split("\n");  
let result = ''
let addedLines = []
var missingLines =0


for(let i = 0; i< leftJson.length; i++){
    console.log(getTag(leftJson[i]),getTag(rightJson[i-missingLines]))
    if(getTag(leftJson[i]) == getTag(rightJson[i-missingLines])){
        result += rightJson[i-missingLines]+'\n'
        console.log('a',rightJson[i])
    }else{
        missingLines++
        if(leftJson[i].indexOf('{') <0 && leftJson[i].indexOf('}') <0){
            var pos = leftJson[i].indexOf(':')
            if(pos>0){
                result += leftJson[i].substring(0,pos+1)+'\n'
                console.log('c',leftJson[i].substring(0,pos+1)+'\n')
                addedLines.push(i)
            }
        }else{
            result += leftJson[i]+'\n'
            console.log('c',leftJson[i])
        }
        
    }
}

document.getElementById('resultBox').style ='display: block'
document.getElementById('resultBox').value = result
}

function getTag(str){
    var pos = str.indexOf(':')
    if(pos>0){
        return str.substring(0,pos+1)
    }
    /*else if(str.indexOf('{') >0 || str.indexOf('}') >0){
        return str
    }*/
    return str
}


function reset(){
document.getElementById('leftBox').value =''
document.getElementById('rightBox').value=''
document.getElementById('resultBox').style ='display: none'
}