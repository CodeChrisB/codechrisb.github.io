function set(str){
    console.log('Yeah this is the html that gets created :')
    console.log(str)
    document.getElementById("item").innerHTML = str
}


let currentPage= 'home';
let visits = ''
function getHome(){

    let currentPage= 'home';
    let html = '<center><h1>Hello!</h1><br>So.... there is a bomb in front of you with a detonation timer with only 10 seconds left. Which wire would you cut?<br> <button class="button1">Cut green wire</button><button class="button2">Cut red wire</button><br><div id="visits">'+ (sessionStorage.getItem('visits') != null ? sessionStorage.getItem('visits'): '') +'</div></center>'
    set(html)
}








function getAbout(){
    let html ='<br><h3>About me</h3><br>Hey, my name is Christopher Buchberger'+
    '<br><div id="age"></div><br>You can find me on Social Media<br>'+
    '&#8680;<a href= "https://www.instagram.com/CodeChrisB">Instagram</a><br>'+
    '&#8680;<a href= "https://twitter.com/CodeChrisB">Twitter</a><br>'

    html+='<br><h3>What do I do?</h3><br>'
    html+= 'I currently attend the higher technical college (HTL) in Leonding.<br>'+
    'Besides college I currently try to become a paramedic, you know, the people in red jackets.<br>'

    html +='<br><h3>What do I like?</h3><br>'+
    'Math puzzles <a href="https://www.youtube.com/watch?v=BPRueCu3fXU">Like that one</a><br>'+
    'Coding (random things like this Website)<br>'+
    'Spending time with my family<br>'+
    'Playing Video Games<br>'
   
    html+= '<br><h3>My Computer:</h3><br>'+
    'CPU :<a href="">Intel i7 10700k 8x 5,1GHzProzessor</a><br>'+
    'CPU :Cooling: <a href="">Jonsbo ARGB-LED</a><br>'+
    'RAM : <a href="">32 GB DDR4-3000Mhz Ram</a><br>'+
    'Storage : <a href="">2x Samsung SDD 860 QVO 1TB</a><br>'+
    'GPU : <a href="">Nvidia Geforce RTX 2080 Super 8GB</a><br>'+
    'Power Adapter : <a href="">Coolermaster 750 Watt 80+</a><br>'+
    'Mainboard : <a href="">GIGABYTE B460 Aorus Pro DDR4</a><br>'+
    'Case: <a href="">Observator ARGB Case</a><br>'
    currentPage='about'
    set(html)
    setMyLifeTime()

}



function setMyLifeTime(){

    var nowDate = new Date(new Date().setHours(0, 0, 0, 0));
    
    // Example date of birth.
    var dobDate = new Date("09/03/2001");

    var years = nowDate.getFullYear() - dobDate.getFullYear();
    var months = nowDate.getMonth() - dobDate.getMonth();
    var days = nowDate.getDate() - dobDate.getDate();

    // Work out the difference in months.
    months += years * 12;
    if (days < 0) {
      months -= 1;
    }
    // Now add those months to the date of birth.
    dobDate.setMonth(dobDate.getMonth() + months);
    // Calculate the difference in milliseconds.
    var diff = nowDate - dobDate;
    // Divide that by 86400 to get the number of days.
    var days = Math.round(diff / 86400 / 1000);
    // Now convert months back to years and months.
    years = parseInt(months / 12);
    months -= (years * 12);
    // Format age as "xx years, yy months, zz days"

    var text = "";
    if (years) {
      text = years + (years > 1 ? " years" : " year");
    }
    if (months) {
      if (text.length) {
        text = text + ", ";
      }
      text = text + months + (months > 1 ? " months" : " month")
    }
    if (days) {
      if (text.length) {
        text = text + " and ";
      }
      text = text + days + (days > 1 ? " days" : " day")
    }
    console.log(years<140);
    document.getElementById('age').innerHTML = 'I\'m currently ' + (years<125 ?  (text +' old.'): 'dead');
}


function getResume(){
    currentPage='resume'
    let html = '<div class="timeline">'
    var left = true
    timeline.forEach(function(result) {
        let align = left ? 'left' : 'right'
    html += '<div class="container '+ align+'"><div class="content">'+
        '<h3>'+ result.date+'</h3>'+
        '<p>'+result.text+'</p></div></div>'
        left =!left
    });
    set(html)
}

function getCareer(){
    urrentPage='career'
    let html = '<div class="timeline">'
    var left = true
    career.forEach(function(result) {
        let align = left ? 'left' : 'right'
    html += '<div class="container '+ align+'"><div class="content">'+
        '<h3>'+ result.date+'</h3>'+
        '<p>'+result.text+'</p></div></div>'
        left =!left
    });
    set(html)
}

function getCoding(){
    currentPage='coding'
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
    currentPage='contact'
    let html = 'Christopher Buchberger<br>Phone : +43 623 67790005<br>Email : <a href="mailto:c.buchberger01@gmail.com">c.buchberger01@gmail.com></a>'
set(html)
}
function getPhone(){
set('getPhone')
}

/******************************************************************************
Expirment Game
******************************************************************************/

var currentClicks = 0
const maxClicks = 100000
var maxed =-1
function getExpirment(){
    //the 3 game tabs
    let html
    ='<div style="width:100%">'+
    '<div class="gameInfo" id="gamePanel"><h1>Info about the Game</h1>This is a global clicking game, you and all the other people who are on this page can play this game in realTime. (Well sort of I can think of some bugs)<br><br>The name of the bee is CodeBee (Why tho?)</div>'+
    '<div id="gamePanel"><img src="./img/bee.png" width=50% onclick="addClick()"></div>'+
    '<div id="gamePanel"><div id="clicks">'+getClicks()+'</div></div>'+
    '</div><div style="height:80vh"><div>'
    //the bee flying range
    html+='<div class="slidecontainer" onmousedown="return false" onmouseout="return false" onmousemove="return false" onMouseClick="return false" `><input type="range" min="1" max="'+maxClicks+'"value="0" class="slider" id="myRange">'
    //reload when maxed out
    html+='<div id="reload"><h1 style="padding-top: 3vh;">Yes CodeBee Needs 100.000 Clicks to get to New York</h1></div>'
    set(html)
    setSlider();
}



function addClick(){

    console.log('start')
    if(currentClicks<maxClicks){
        console.log('click')
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "https://api.countapi.xyz/hit/codebee/awesomeclick");
        xhr.responseType = "json";
        xhr.onload = function() {
            var check =  Math.min(`${this.response.value}`,maxClicks);
           
            console.log(check)
            document.getElementById('clicks').innerHTML= check
            document.getElementById('myRange').value= `${this.response.value}`
        }
        xhr.send();
    }
}
    
function getClicks(){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.countapi.xyz/get/codebee/awesomeclick");
    xhr.responseType = "json";
    xhr.onload = function() {
        document.getElementById('clicks').innerHTML= `${this.response.value}`
        currentClicks = `${this.response.value}`
    }
    xhr.send();


    if(currentClicks>=maxClicks && maxed<1){
        maxed=1
        setReload()
    }

    t = setTimeout(function() {
        getClicks()
      }, 100);
}

function setReload(){
    maxed = 1
    let html = '<button class="button1">Reset the game</button>'
    document.getElementById("reload").innerHTML = html
}

function setSlider(){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.countapi.xyz/get/codebee/awesomeclick");
    xhr.responseType = "json";
    xhr.onload = function() {
        document.getElementById('myRange').value= `${this.response.value}`
    }
    xhr.send();
}



var timeline = [
    {date: '2017-Current', text:'<h4>HTBLA Leonding</h4>Fifth Year: Waiting for summer 2022<br>Fourth Year: Waiting for summer 2021<br>Thrid Year: Avg 1,53<br>Second Year: Avg 1.75<br> First Year: Avg 2,36'},
    {date: '2014-2017', text:'<h4>NMS Neuhofen an der Krems</h4>Fourth Year: Avg 1.6<br>Thrid Year: Avg 1,4<br>Second Year: Avg 1.83<br> First Year: Avg 1.7<br>'},
    {date: '2014-2009', text:'<h4>Volksschule Kremsdorf</h4>Fourth Year: Avg 1.5<br>Thrid Year: Avg 1,5<br>Second Year: No Grades Here!<br>First Year: No Grades Here!'}
]
    
var career = [
    {date: 'Future', text:'Maybe at your Company ?<br><a  href="#" onclick="getContact()">Contact me</a>'},
    {date: '2020', text:'Internship at <a href="https://www.cadt-solutions.com">CAD+T</a><br>8 Weeks<br> Frontend Development Javascript + Vue.js<br>Unit Testing'},
    {date: '2019', text:'Red Cross Youth Group leader<br>For more information on this topic <a href="https://www.jugendrotkreuz.at/oberoesterreich/angebote/jrk-gruppen/mithelfen-als-jugendgruppenleiter">click here.</a>'},
    {date: '2016', text:'Internship at <a href="https://www.lpbz-ooeg.at/schloss-gschwendt">Schloss-Gschwendt</a><br>3 Days<br>We had to work at any Company for 3 days and I choosed this, because my Red Cross Group Leader recommended it to me.  </a>'},

]
