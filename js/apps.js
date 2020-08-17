//setup
let html = ''
function set(str){
  console.log('Yeah this is the html that gets created :')
  console.log(str)
  document.getElementById("content").innerHTML = str
}


function loadApp1() {
  /* load App1 here */
  window.open('https://www.instagram.com/codechrisb/')
}
function loadApp2() {
  /* load App2 here */
  window.open('https://play.google.com/store/apps/details?id=com.foodgent.buchfrei&hl=de_AT')
}
function loadApp3() {
  /* load App3 here */
  currentPage ='twitter'
  html += '<div class="scrolling" overflow-x:hidden; height:100%">'
  html+="<a class='twitter-timeline'  href='https://twitter.com/CodeChrisB' data-widget-id='your-widget-id' data-screen-name='twitterUsername'>Tweets by @twitterUsername</a>"         
  html+='</div>'
  set(html)
  !function(d,s,id){var js,fjs=d.getElementsByTagName(s)  [0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','twitter-wjs');
  //<blockquote class="twitter-tweet"></a><a href="https://twitter.com/CodeChrisB/status/1295414547008892929"></a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
}
function loadApp4() {
  /* load App4 here */
  alert('3One day here will be more information')
}
function loadApp5() {
  /* load App5 here */
  alert('2One day here will be more information')
}
function loadApp6() {
  /* load App6 here */
  alert('One day here will be more information')
}
function loadApp7() {
  /* load App7 here */
  alert('A small calculator will be here.')
}
function loadApp8() {
  /* load App8 here */

  //head
  html='<div class="grid-container"><div class="header">'
  html+='<img class="logo"src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="Google Logo"/>'
  html+='<input readonly class="search-box" type="text" value="Who is CodeChrisB ?"/>'
  html+='</div>'
  html += '<h5>About 1,'+(Math.floor(Math.random() * 995) + 110) +',000 results (0.'+ Math.round(Math.random()*85) + ' seconds) </h5>'
  html += '<div class="scrolling" overflow-x:hidden; height:100%">'

  //websites
  const data = google.results
  data.forEach(function(result) {
  html +='<div class="websearch"><div class="entry">'+
  '<a class="lead" onclick="openWeb('+result.id+ ')">'+ result.name  +'</a>'+
  '<p class="url" onclick="openWeb('+result.id+ ')" >'+ result.url+'</p>'+
  '<p class="detail">'+ result.desc+'</p>'+
  '</div></div>'
  });
  html+='</div></div>'

  //footer missing rn
  set(html)
 }

 function openWeb(num){
  alert('One day the website with the id :' +num + ' will be called')
 }




function loadApp9() {
  /* load Messages*/
  alert('1One day you will be able to contact me here')
}
function loadApp10() {
  /* load Gallery */ 
  const data = gallery.images    
  html =''
  html += '<div class="scrolling" overflow-x:hidden; height:100%">'
  data.forEach(function(image) {
    html += '<div class="responsive">'
    html += '<div class="gallery">'
    html += '<img src="img/phone/gallery/'+image.src+'" href="img/phone/gallery/'+image.src +'">'
    html += '<div class="desc">'+ image.desc +'</div>'
    html += '</div></div>'
  });
  html +='</div>'
  set(html)
}
