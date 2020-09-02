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
    let html ='<h3>Languages :</h3>' +
    'Java (8/10)*<br>'+
    'C (7/10)*<br>'+
    'Javascript (7/10)*<br>'+
    'HTML & CSS (6/10)*<br>'+
    'C & C++ (4/10)*<br>'

    html+= 'You can see some example of my code on <a href="https://www.codewars.com/users/CodeChrisB/completed_solutions">Here on CodeWars</a>.'
    html+= '<br>Or check out my <a href ="https://github.com/CodeChrisB/">Github</a> (even though most projects are private so yeah...)'
   html +='<h6>* That\'s how I would rank my self in these languages</h6>'
    set(html)
}
function getContact(){
    let html = 'Christopher Buchberger<br>Phone : +43 623 67790005<br>Email : <a href="mailto:c.buchberger01@gmail.com">c.buchberger01@gmail.com></a>'
set(html)
}
function getPhone(){
set('getPhone')
}





var timeline = [
    {date: '2017-Current', text:'<h4>HTBLA Leonding</h4>Fifth Year: NaN<br>Fourth Year: NaN<br>Thrid Year: Avg 1,53<br>Second Year: Avg 1.75<br> First Year: Avg 2,36'},
    {date: '2014-2017', text:'<h4>NMS Neuhofen an der Krems</h4>Fourth Year: Avg 1.6<br>Thrid Year: Avg 1,4<br>Second Year: Avg 1.83<br> First Year: Avg 1.7<br>'},
    {date: '2014-2009', text:'<h4>Volksschule Kremsdorf</h4>Fourth Year: Avg 1.5<br>Thrid Year: Avg 1,5<br>Second Year: No Grades Here!<br>First Year: No Grades Here!'}
]
    
var career = [
    {date: 'Future', text:'Maybe at your Company ?<br><a  href="#" onclick="getContact()">Contact me</a>'},
    {date: '2020', text:'Internship at <a href="https://www.cadt-solutions.com">CAD+T</a><br>8 Weeks<br> Frontend Development Javascript + Vue.js<br>Unit Testing'},
    {date: '2016', text:'Internship at <a href="https://www.lpbz-ooeg.at/schloss-gschwendt">Schloss-Gschwendt</a><br>3 Days<br>We had to work at any Company for 3 days and I choosed this, because my Red Cross Group Leader recommended it to me.  </a>'},
]
