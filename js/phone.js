//Homescreen
function loadHomeScreen() {


  var sum=0
  for(var i=1;i<=1000;i++){ 
    if(i%3==0 ||i%5==0)
      sum+=i
  }
  console.log(sum)
  //Sum = 234168

  startTime()
  let html = '<div class="flex-container">'
  html += createIconRow(apps.top)
  html += "</div><div id='bottom'>"
  html+= '<div class="flex-container">'
  html += createIconRow(apps.bottom)
  html += "</div></div></div>"
  document.getElementById("content").innerHTML=html;
}
//icon row for homescreen
function createIconRow(apps){
  let html =''
  apps.forEach(function(app) {
    html += '<div class="fit" onclick="loadApp'+app.id+'()">';
    html += '<img src="img/phone/icons/'+app.src+'">'
    html += '</div>'
  });
  return html
}
//data of the apps needed for creation



//pages to add

/*
pages to add
top
insta
about

bottom
chrome
galerie mit bildern aus nem ordner die dynamic reingeladen werden
calculator
messages weg um mich zu kontaktierern
flappy bird ????


*/

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  // add a zero in front of numbers<10
  m = checkTime(m);
  document.getElementById('time').innerHTML = h + ":" + m;
  t = setTimeout(function() {
    startTime()
  }, 1000);
}

