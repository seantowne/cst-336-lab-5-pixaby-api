$("#searchButton").on("click", function() {
    var urlbase = "https://pixabay.com/api/";
    urlbase += "key=15450334-54c089ab058c7a8209a75c73b";
    
    var searchString = $("#searchTermInput").val();
    var searchString = searchString.replace(/ /g, '%20');
    
    urlbase += '&q='+ searchString;
    urlbase += '&orientation=' + $("#orientationSelection").val();
    urlbase += '&image_type=vector';
//https://pixabay.com/api/?key=5589438-47a0bca778bf23fc2e8c5bf3e&q=sun&orientation=vertical&image_type=vector
    $.ajax({
        method: "GET",
        url: urlbase,
        dataType: "json",
        success: function(result, status){
            console.log(result);
        },
        error: function(status, error){
            console.log('something went wrong');
        }
    });
});
/*
$.ajax({
        method: "GET",
        url: "https://cst-336-hw-2-calculator.herokuapp.com/evaluate/",
        dataType: "text",
        data: {"expression":$("#expression").val()},
        success: function(result, status){
            console.log(result);
            if ( !result || result.length == 0){
                $("#expression").val("error");
                return;
            }
            r = result.split('"')[1];
            $("#expression").val(r);
        },
        error: function(status, error){
            $("#expression").val("error");
        }
    });
*/