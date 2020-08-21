$(document).ready(function () {
    $("#form").submit(function(event){
        event.preventDefault()

        var username = $("#username").val()
        var password = $("#password").val()
        var username = $("#username").val()
        console.log(username+'\n'+password)

        var header = btoa(username+'.'+password)
        fetch("https://api.github.com/user",{
            headers:{
                'Authorization' : 'Basic' +header
            }
        }).then(function(data) {
            return data.json()
        }).then(function(data){
            console.log(data)

            $('#username').val("")
            $('#password').val("")

        })
    })
})