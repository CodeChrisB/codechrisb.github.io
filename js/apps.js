//setup
let html = ''
function set(str){
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
  alert('One day here will be more information')
}
function loadApp4() {
  /* load App4 here */
  alert('One day here will be more information')
}
function loadApp5() {
  /* load App5 here */
  alert('One day here will be more information')
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
  alert('A fake google chrome with pretty articles about\nmyselfs will be shown here :)')
}
function loadApp9() {
  /* load Messages*/
  alert('One day you will be able to contact me here')
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

/*
<div class="responsive">
  <div class="gallery">
      <img src="img_5terre.jpg" width="600" height="400">
    <div class="desc">Add a description of the image here</div>
  </div>
</div>
*/