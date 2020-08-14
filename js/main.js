

function change(content){
    console.log('d')
    document.getElementById('content').innerHTML = content
}

function loadAbout() {
    change('<p class="block"><pre><code class="html"><div></div></code></pre></p>')
}