//Homescreen
function loadHomeScreen() {
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
