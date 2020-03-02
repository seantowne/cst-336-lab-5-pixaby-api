function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

$("#searchButton").on("click", function() {
    var urlbase = "https://pixabay.com/api/?";
    urlbase += "key=15450334-54c089ab058c7a8209a75c73b";
    
    var searchString = $("#searchTermInput").val();
    var searchString = searchString.replace(/ /g, '+');
    
    urlbase += '&q='+ searchString;
    urlbase += '&orientation=' + $("#orientationSelection").val();
    urlbase += '&image_type=photo';

    $.ajax({
        method: "GET",
        url: urlbase,
        dataType: "json",
        success: function(result, status){
            var picCount = result.hits.length;
            var picIndex1 = getRandomInt(picCount-1);
            var picIndex2 = getRandomInt(picCount-1);
            var picIndex3 = getRandomInt(picCount-1);
            var picIndex4 = getRandomInt(picCount-1);
            
            var img1 = result.hits[picIndex1].webformatURL;
            var img1 = result.hits[picIndex2].webformatURL;
            var img1 = result.hits[picIndex3].webformatURL;
            var img1 = result.hits[picIndex4].webformatURL;
            
            console.log("urls");
            console.log(img1);
            console.log(img2);
            console.log(img3);
            console.log(img4);
            console.log("end urls");
            
            $("#img1").attr("src",img1);
            $("#img2").attr("src",img2);
            $("#img3").attr("src",img3);
            $("#img4").attr("src",img4);
            
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