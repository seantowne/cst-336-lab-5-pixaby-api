$("#searchButton").on("click", function() {
    var urlbase = "https://pixabay.com/api/";
    urlbase += "key=15450334-54c089ab058c7a8209a75c73b";
    var searchString = $("#searchTermInput").val();
    var searchQuery = "";
    for ( var s in searchString.split(' ') ){
        searchQuery += s + "%20";
    }
    console.log("searchQuery");
    //$.ajax({
    //    method: "GET",
    //    url: ""
    //});
});

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