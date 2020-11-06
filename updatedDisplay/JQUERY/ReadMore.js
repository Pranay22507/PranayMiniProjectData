$("document").ready(() => {
    //getting param from url
    function $_GET(param) {
        var vars = {};
        window.location.href.replace(location.hash, '').replace(
            /[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
            function (m, key, value) { // callback
                vars[key] = value !== undefined ? value : '';
            }
        );

        if (param) {
            return vars[param] ? vars[param] : null;
        }
        return vars;
    }
    var id = $_GET("id");
    $.ajax({
        url: "http://localhost:3000/blogs/" + id,    //ajax called here to get the result
        method: "GET",
        success: (x) => {
            let z = '<div class="block1"><h2>"' + x.title + '"</h2><b>-"' + x.author + '"</b><i>-"' + x.Date + '"</i><img src="' + x.Image                          //div element is created here
                + '" width="500px" height="500px"/><br><p>' + x.content
                + '</div>';
            $("#sp1").append(z);                                 //appending element in div
            // });
            $(".block1").addClass("gridboxfullview")            //applying style to div
        },
        error: (e) => {
            alert("error" + e)
        }
    })


})