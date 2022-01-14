$('#upload-submit').on('click', function(e) {
    e.preventDefault();
    var data = new FormData();
    var file = $('#file-upload').get(0).files[0]
    data.append('file', file)

    $.ajax({
        type: "POST",
        dataType:"json",
        url:"http://localhost:8000/save_data/",
        data: data,
        contentType: 'form-data',
        processData: false,
        success: function(result) {
            alert(result)
        },
        error: function(xhr, ajaxOptions, thrownError){
            window.alert('Error')
        }
    })
})
