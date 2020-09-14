function set(str){
    console.log('Yeah this is the html that gets created :')
    console.log(str)
    document.getElementById("item").innerHTML = str
}


let currentPage= 'home';
let visits = ''
function getHome(){
    let currentPage= 'home';
    let html = getWave()
    html+='<center><h1>Hello!</h1><br>So.... there is a bomb in front of you with a detonation timer with only 10 seconds left. Which wire would you cut?<br> <button class="button1">Cut green wire</button><button class="button2">Cut red wire</button><br><div id="visits">'+ (sessionStorage.getItem('visits') != null ? sessionStorage.getItem('visits'): '') +'</div></center>'
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
    let html = '<div class="entries">'
    timeline.forEach(function(result) {
    html += '<div class="entry"><div class="title">'+result.date +'</div>'+
        '<div class="body"><p>'+result.text+'</p></div></div>'
    });

    set(html)
}

function getCareer(){
    urrentPage='career'
    let html = '<div class="container">  <div class="navbar">    <a href="">      <i class="fa fa-bars" aria-hidden="true"></i>    </a>    <div class="profile-pic">      <a href="https://www.instagram.com/CodeChrisB/"><img src="./img/meLogo.jpeg" alt="" /></a>      <div class="notification"></div>    </div>    <span>My Career</span>  </div>    <div class="header">    <div class="color-overlay">      <div class="day-number">'+getDay()+'</div>      <div class="date-right">        <div class="day-name">'+ getDayName()+'</div>        <div class="month">'+getMonthYear()+'</div>      </div>    </div>      </div>  <div class="timeline"><ul>'
    var left = true                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
    career.forEach(function(result) {
        html += '<li>'+
        '<div class="bullet green"></div>'+
        '<div class="time">'+result.date+'</div>'+
        '<div class="desc">'+
        '  <h3>'+result.title+'</h3>'+
        '  <h4>'+result.text+'</h4>'+
        '</div>'+
      '</li>'
      
    });
    html+='</ul></div><h2>ToDo: change the colors so it looks better :D</h2>'
    set(html)
}
function getDay(){
    var d = new Date();

    
    return d.getDate()
}

function getDayName(){
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    
    return weekday[d.getDay()];
}
function getMonthYear(){
    var d = new Date();
    var month = new Array(12);
    month[0] = "Jannuary";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";

    
    return month[d.getMonth()];
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
var thisSittingClicks=0;
const maxClicks = 1000000
const distance = 66564600 //meters between Linz and New York 
var maxed =-1
function getExpirment(){
    //the 3 game tabs
    let html
    ='<div style="width:100%">'+
    '<div class="gameInfo" id="gamePanel"><h1>Info about the Game</h1>This is a global clicking game, you and all the other people who are on this page can play this game in realTime. (Well sort of I can think of some bugs)<br><br>The name of the bee is CodeBee (Why tho?)</div>'+
    '<div id="gamePanel"><img src="./img/bee.png" width=50% onclick="addClick()"></div>'+
    '<div id="gamePanel"><div id="clicks">Loading Game</div></div>'+
    '</div><div style="height:80vh"><div>'
    //the bee flying range
    html+='<div class="slidecontainer" onmousedown="return false" onmouseout="return'+
    ' false" onmousemove="return false" onMouseClick="return false" `><input type="range"'+
    ' min="1" max="'+maxClicks+'"value="0" class="slider" id="myRange">'
    //reload when maxed out
    html+='<div id="reload"><h1 style="padding-top: 3vh;"></div>'
    set(html)
    setSlider();
    getClicks()
}



function addClick(){
    thisSittingClicks++;
    //let a player write his name down
    if(thisSittingClicks==1000)
    {
        getSecret()
    }else if(thisSittingClicks==2000){
        getSecret2()
    }
    console.log(thisSittingClicks)
    if(currentClicks<maxClicks){
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "https://api.countapi.xyz/hit/codebee");
        xhr.responseType = "json";
        xhr.onload = function() {
            var check =  Math.min(`${this.response.value}`,maxClicks);
            document.getElementById('clicks').innerHTML= (check+' ('+ (check/10000).toFixed(2)+'%)')
            document.getElementById('myRange').value= `${this.response.value}`
        }
        xhr.send();
    }
}
    
function getSecret(){
 alert('The Code is CC3')
}
function getSecret2(){
    window.open('https://codechrisb.github.io/phone.html')
}

function getClicks(){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.countapi.xyz/get/codebee");
    xhr.responseType = "json";
    xhr.onload = function() {
        var check =  Math.min(`${this.response.value}`,maxClicks);
        document.getElementById('clicks').innerHTML= (check+' ('+ (check/10000).toFixed(2)+'%)')
        currentClicks = `${this.response.value}`
        document.getElementById('reload').innerHTML= 
        '<h2><br>CodeBee needs ' +(1000000-currentClicks) + ' clicks ('+
         (distance/10000-((currentClicks/maxClicks)*(distance/(100*1000)))).toFixed(2)  +
        ' km) to get to New York<h2><br>This means CodeBee flew a total distance of : '+
        ((currentClicks/maxClicks)*(distance/(100*1000))).toFixed(2)+' kilometers.'+
        '<div id="beespeed">One click is the equivalent of Codebee flying for 10 Seconds at 24kph (~15mph)</div>'
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
    xhr.open("GET", "https://api.countapi.xyz/get/codebee");
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
    {title:'Right Now',date: 'Future', text:'Maybe at your Company ?<br><a  href="#" onclick="getContact()">Contact me</a>'},
    {title:'CAD+T',date: '2020', text:'Internship at <a href="https://www.cadt-solutions.com">CAD+T</a><br>8 Weeks<br> Frontend Development Javascript + Vue.js<br>Unit Testing'},
    {title:'Red Cross',date: '2019', text:'Red Cross Youth Group leader<br>For more information on this topic <a href="https://www.jugendrotkreuz.at/oberoesterreich/angebote/jrk-gruppen/mithelfen-als-jugendgruppenleiter">click here.</a>'},
    {title:'Schloss Geschwendt',date: '2016', text:'Internship at <a href="https://www.lpbz-ooeg.at/schloss-gschwendt">Schloss-Gschwendt</a><br>3 Days<br>We had to work at any Company for 3 days and I choosed this, because my Red Cross Group Leader recommended it to me.  </a>'},
]


function getWave(){
    return waves[(Date.now()/(1000*60)%11).toFixed(0)]
}

var waves = [
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,64L60,80C120,96,240,128,360,133.3C480,139,600,117,720,128C840,139,960,181,1080,165.3C1200,149,1320,75,1380,37.3L1440,0L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>',
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,64L60,64C120,64,240,64,360,74.7C480,85,600,107,720,128C840,149,960,171,1080,176C1200,181,1320,171,1380,165.3L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>',
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,64L60,101.3C120,139,240,213,360,250.7C480,288,600,288,720,282.7C840,277,960,267,1080,224C1200,181,1320,107,1380,69.3L1440,32L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>',
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,256L60,234.7C120,213,240,171,360,176C480,181,600,235,720,229.3C840,224,960,160,1080,149.3C1200,139,1320,181,1380,202.7L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>',
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,64L60,64C120,64,240,64,360,90.7C480,117,600,171,720,192C840,213,960,203,1080,197.3C1200,192,1320,192,1380,192L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>',
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,128L8.6,106.7C17.1,85,34,43,51,53.3C68.6,64,86,128,103,133.3C120,139,137,85,154,80C171.4,75,189,117,206,144C222.9,171,240,181,257,202.7C274.3,224,291,256,309,261.3C325.7,267,343,245,360,218.7C377.1,192,394,160,411,128C428.6,96,446,64,463,53.3C480,43,497,53,514,74.7C531.4,96,549,128,566,122.7C582.9,117,600,75,617,80C634.3,85,651,139,669,160C685.7,181,703,171,720,160C737.1,149,754,139,771,138.7C788.6,139,806,149,823,133.3C840,117,857,75,874,101.3C891.4,128,909,224,926,218.7C942.9,213,960,107,977,58.7C994.3,11,1011,21,1029,64C1045.7,107,1063,181,1080,202.7C1097.1,224,1114,192,1131,149.3C1148.6,107,1166,53,1183,53.3C1200,53,1217,107,1234,106.7C1251.4,107,1269,53,1286,58.7C1302.9,64,1320,128,1337,165.3C1354.3,203,1371,213,1389,218.7C1405.7,224,1423,224,1431,224L1440,224L1440,0L1431.4,0C1422.9,0,1406,0,1389,0C1371.4,0,1354,0,1337,0C1320,0,1303,0,1286,0C1268.6,0,1251,0,1234,0C1217.1,0,1200,0,1183,0C1165.7,0,1149,0,1131,0C1114.3,0,1097,0,1080,0C1062.9,0,1046,0,1029,0C1011.4,0,994,0,977,0C960,0,943,0,926,0C908.6,0,891,0,874,0C857.1,0,840,0,823,0C805.7,0,789,0,771,0C754.3,0,737,0,720,0C702.9,0,686,0,669,0C651.4,0,634,0,617,0C600,0,583,0,566,0C548.6,0,531,0,514,0C497.1,0,480,0,463,0C445.7,0,429,0,411,0C394.3,0,377,0,360,0C342.9,0,326,0,309,0C291.4,0,274,0,257,0C240,0,223,0,206,0C188.6,0,171,0,154,0C137.1,0,120,0,103,0C85.7,0,69,0,51,0C34.3,0,17,0,9,0L0,0Z"></path></svg>',
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,160L8.6,138.7C17.1,117,34,75,51,69.3C68.6,64,86,96,103,101.3C120,107,137,85,154,106.7C171.4,128,189,192,206,218.7C222.9,245,240,235,257,213.3C274.3,192,291,160,309,160C325.7,160,343,192,360,197.3C377.1,203,394,181,411,165.3C428.6,149,446,139,463,149.3C480,160,497,192,514,202.7C531.4,213,549,203,566,197.3C582.9,192,600,192,617,181.3C634.3,171,651,149,669,160C685.7,171,703,213,720,224C737.1,235,754,213,771,208C788.6,203,806,213,823,181.3C840,149,857,75,874,42.7C891.4,11,909,21,926,32C942.9,43,960,53,977,96C994.3,139,1011,213,1029,208C1045.7,203,1063,117,1080,112C1097.1,107,1114,181,1131,181.3C1148.6,181,1166,107,1183,90.7C1200,75,1217,117,1234,165.3C1251.4,213,1269,267,1286,272C1302.9,277,1320,235,1337,229.3C1354.3,224,1371,256,1389,272C1405.7,288,1423,288,1431,288L1440,288L1440,0L1431.4,0C1422.9,0,1406,0,1389,0C1371.4,0,1354,0,1337,0C1320,0,1303,0,1286,0C1268.6,0,1251,0,1234,0C1217.1,0,1200,0,1183,0C1165.7,0,1149,0,1131,0C1114.3,0,1097,0,1080,0C1062.9,0,1046,0,1029,0C1011.4,0,994,0,977,0C960,0,943,0,926,0C908.6,0,891,0,874,0C857.1,0,840,0,823,0C805.7,0,789,0,771,0C754.3,0,737,0,720,0C702.9,0,686,0,669,0C651.4,0,634,0,617,0C600,0,583,0,566,0C548.6,0,531,0,514,0C497.1,0,480,0,463,0C445.7,0,429,0,411,0C394.3,0,377,0,360,0C342.9,0,326,0,309,0C291.4,0,274,0,257,0C240,0,223,0,206,0C188.6,0,171,0,154,0C137.1,0,120,0,103,0C85.7,0,69,0,51,0C34.3,0,17,0,9,0L0,0Z"></path></svg>',
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,160L16,144C32,128,64,96,96,90.7C128,85,160,107,192,112C224,117,256,107,288,101.3C320,96,352,96,384,90.7C416,85,448,75,480,74.7C512,75,544,85,576,90.7C608,96,640,96,672,80C704,64,736,32,768,21.3C800,11,832,21,864,69.3C896,117,928,203,960,208C992,213,1024,139,1056,90.7C1088,43,1120,21,1152,37.3C1184,53,1216,107,1248,144C1280,181,1312,203,1344,176C1376,149,1408,75,1424,37.3L1440,0L1440,0L1424,0C1408,0,1376,0,1344,0C1312,0,1280,0,1248,0C1216,0,1184,0,1152,0C1120,0,1088,0,1056,0C1024,0,992,0,960,0C928,0,896,0,864,0C832,0,800,0,768,0C736,0,704,0,672,0C640,0,608,0,576,0C544,0,512,0,480,0C448,0,416,0,384,0C352,0,320,0,288,0C256,0,224,0,192,0C160,0,128,0,96,0C64,0,32,0,16,0L0,0Z"></path></svg>',
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,160L90,128L180,96L270,64L360,96L450,192L540,224L630,32L720,128L810,64L900,64L990,256L1080,320L1170,288L1260,96L1350,256L1440,128L1440,0L1350,0L1260,0L1170,0L1080,0L990,0L900,0L810,0L720,0L630,0L540,0L450,0L360,0L270,0L180,0L90,0L0,0Z"></path></svg>',
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,64L80,101.3C160,139,320,213,480,240C640,267,800,245,960,240C1120,235,1280,245,1360,250.7L1440,256L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>',
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,128L17.1,138.7C34.3,149,69,171,103,192C137.1,213,171,235,206,213.3C240,192,274,128,309,101.3C342.9,75,377,85,411,80C445.7,75,480,53,514,64C548.6,75,583,117,617,160C651.4,203,686,245,720,218.7C754.3,192,789,96,823,48C857.1,0,891,0,926,10.7C960,21,994,43,1029,42.7C1062.9,43,1097,21,1131,42.7C1165.7,64,1200,128,1234,165.3C1268.6,203,1303,213,1337,213.3C1371.4,213,1406,203,1423,197.3L1440,192L1440,0L1422.9,0C1405.7,0,1371,0,1337,0C1302.9,0,1269,0,1234,0C1200,0,1166,0,1131,0C1097.1,0,1063,0,1029,0C994.3,0,960,0,926,0C891.4,0,857,0,823,0C788.6,0,754,0,720,0C685.7,0,651,0,617,0C582.9,0,549,0,514,0C480,0,446,0,411,0C377.1,0,343,0,309,0C274.3,0,240,0,206,0C171.4,0,137,0,103,0C68.6,0,34,0,17,0L0,0Z"></path></svg>'
]
