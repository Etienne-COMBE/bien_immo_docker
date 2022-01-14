$('#submit').on('click', function(e) {
    e.preventDefault();
    
    $.ajax({
        type: "POST",
        url:"http://localhost:8000/login",
        data: {
            "username": document.getElementById("username").value,
            "password": document.getElementById("password").value
        },
        success: function(result) {
            if (result == 'OK'){
                window.location.replace("/src/upload.html")
            }
            else{
                window.location.replace("/src/stats.html")
            }
          },
        error: function(xhr, ajaxOptions, thrownError){
            alert(chr.responseText);
        }
    })
})