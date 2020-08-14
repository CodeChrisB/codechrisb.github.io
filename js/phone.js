function close() {
  console.log('closing')
}

function loadHomeScreen() {
  let html = '<div class="flex-container">'
  html += toHtml(apps.top)
  html += "</div><div id='bottom'>"
  html+= '<div class="flex-container">'
  html += toHtml(apps.bottom)
  html += "</div></div></div>"
  document.getElementById("content").innerHTML=html;
}
function toHtml(apps){
  let html =''
  apps.forEach(function(app) {
    html += '<div class="fit" onclick="loadApp'+app.id+'()">';
    html += '<img src="img/'+app.src+'">'
    html += '</div>'
  });
  return html
}

const apps = {
  top : [
    {id: '1', src:'instagram.png',},
    {id: '2', src:'foodgent.png',},
    {id: '3', src:'nan.png',},
    {id: '4', src:'nan.png',},
    {id: '5', src:'nan.png',} 
  ],
  bottom : [
    {id: '6', src:'nan.png'},
    {id: '7', src:'nan.png'},
    {id: '8', src:'google.png'},
    {id: '9', src:'nan.png'},
    {id: '10', src:'gallery.png',}
  ]


}


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
