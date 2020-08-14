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
  console.log(html)
  document.getElementById("content").innerHTML=html;
}
function toHtml(apps){
  let html =''
  console.log(apps)
  apps.forEach(function(app) {
    html += '<div class="fit" onclick="load_app'+app.id+'()">';
    html += '<img src="img/'+app.src+'">'
    html += '</div>'
  });
  return html
}
/*
<div class="fit" onclick="load_home()">
  <img src="img/instagram.png">
</div>
*/

const apps = {
  top : [
    {id: '1', src:'instagram.png',url:'instagram.com/codechrisb'},
    {id: '2', src:'instagram.png',url:'coderwars.com/users/codechrisb'},
    {id: '3', src:'instagram.png',url:'instagram.com/codechrisb'},
    {id: '4', src:'instagram.png',url:'coderwars.com/users/codechrisb'},
    {id: '5', src:'instagram.png',url:'instagram.com/codechrisb'}
  ],
  bottom : [
    {id: '6', src:'instagram.png',url:'instagram.com/codechrisb'},
    {id: '7', src:'instagram.png',url:'coderwars.com/users/codechrisb'},
    {id: '8', src:'instagram.png',url:'instagram.com/codechrisb'},
    {id: '9', src:'instagram.png',url:'coderwars.com/users/codechrisb'},
    {id: '10', src:'instagram.png',url:'instagram.com/codechrisb'}
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
