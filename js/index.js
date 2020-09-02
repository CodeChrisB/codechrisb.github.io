function set(str){
    console.log('Yeah this is the html that gets created :')
    console.log(str)
    document.getElementById("item").innerHTML = str
}


let currentPage= 'home';

function getHome(){

    set('getHome')
}

function getAbout(){

    set('getAbout')
}

function getResume(){

    let html = '<div class="timeline">'
    var left = true
    timeline.forEach(function(result) {
        let align = left ? 'left' : 'right'
    html += '<div class="container '+ align+'"><div class="content">'+
        '<h2>'+ result.date+'</h2>'+
        '<p>'+result.text+'</p></div></div>'
        left =!left
    });
    set(html)
}

function getCareer(){
    let html = '<div class="timeline">'
    var left = true
    career.forEach(function(result) {
        let align = left ? 'left' : 'right'
    html += '<div class="container '+ align+'"><div class="content">'+
        '<h2>'+ result.date+'</h2>'+
        '<p>'+result.text+'</p></div></div>'
        left =!left
    });
    set(html)
}

function getCoding(){

    set('getCoding')
}
function getContact(){
set('getContact')
}
function getPhone(){
set('getPhone')
}





var timeline = [
        {date: '2017-Current', text:'HTBLA Leonding'},
        {date: '2014-2017', text:'NMS Neuhofen an der Krems'},
        {date: '2014-2009', text:'Volksschule Kremsdorf'}
]
    
var career = [
    {date: '2020', text:'Internship at <a href="https://www.cadt-solutions.com">CAD+T</a>'},
    {date: '2016', text:'Internship at <a href="https://www.lpbz-ooeg.at/schloss-gschwendt">Schloss-Gschwendt</a>'},
]
