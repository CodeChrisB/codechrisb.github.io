function compareJSON() {
if(document.getElementById('leftBox').value =='')
return

let leftJson = document.getElementById('leftBox').value.split("\n");  
let rightJson = document.getElementById('rightBox').value.split("\n");  
let result = ''
let addedLines = []
var missingLines =0


for(let i = 0; i< leftJson.length; i++){
    if(getTag(leftJson[i]) == getTag(rightJson[i-missingLines])){
        result += leftJson[i]+'\n'
        console.log('a',leftJson[i])
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
var log = {
    de: {
        hi: 'hallo',
        he: 'nein',
        help : {
            hue: 'hilfe',
            fd: 'fckno',
            df: 'fd'
        }
    }
}



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
