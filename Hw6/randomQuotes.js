var btn=$("#btn").html;
    $("#btn").click(function(){
        $.get("https://api.quotable.io/random", function(data, status){
            for( attribute in data) {
                let content= data['content'];
                let author= data['author'];
                var quote='"'+content+'"';
                var auth='-'+author+'-';
                $("#content").html(quote);
                $("#author").html(auth);
            }
            if (err) {
                alert("Something goes wrong!"+ status);
            }
        });
    });