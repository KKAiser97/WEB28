var token="";
$(document).ready(function(){
    $("#search").submit(function(event){
        event.preventDefault();
        $("#result-list").html("");
        // loader($("#result-list"));
        var inputVal = $("#keyword").value;
        $.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${inputVal}&type=video&key=AIzaSyA9gQZ-oYomFypZN7PsupZJtOfQqA6Q3qw`, function(data){
            if(data){
                token=data.nextPageToken;
                for (let i=0;i<data.items.length;i++){
                    $("#result-list").append(`<div>`);
                    $("#result-list").append(`<a href="https://www.youtube.com/watch?v=${data.items[i].id.videoId}">${data.items[i].snippet.title}</a>`);
                    $("#result-list").append(`<br><img src=${data.items[i].snippet.thumbnails.default.url} alt=""></br>`); 
                    $("#result-list").append(`<br><p>${data.items[i].snippet.description}</p></br>`)
                    $("#result-list").append(`</div>`);    
                }    
            }
        });
        
        function nextPage(token){
            $.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=chipu&type=video&key=AIzaSyA9gQZ-oYomFypZN7PsupZJtOfQqA6Q3qw&pageToken=${token}`, function(data){
                if(data){
                    for (let i=0;i<data.items.length;i++){
                        $("#result-list").append(`<div>`);
                        $("#result-list").append(`<a href="https://www.youtube.com/watch?v=${data.items[i].id.videoId}">${data.items[i].snippet.title}</a>`);
                        $("#result-list").append(`<br><img src=${data.items[i].snippet.thumbnails.default.url} alt=""></br>`); 
                        $("#result-list").append(`<br><p>${data.items[i].snippet.description}</p></br>`)
                        $("#result-list").append(`</div>`); 
                        if(data.items[i]===null){
                            $("#result-list").append(`<p>End of Results</p>`);
                        }   
                    }
                }
            }); 
        }
        $(window).scroll(function () {
            if ($(window).scrollTop() + $(window).height() == $(document).height()) {
                nextPage(token);
            } 
        });          
    });
    // function loader(){
    //     if ($("#result-list")==={}){
    //         $(".spinner-border").show();  
    //     }else{
    //         $(".spinner-border").hide();    
    //     }
    // }
});

