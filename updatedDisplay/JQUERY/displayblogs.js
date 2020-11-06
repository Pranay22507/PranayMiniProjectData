$("document").ready(() => {
    $.ajax({
        url: "http://localhost:3000/blogs",    //ajax called here to get the result
        method: "GET",
        success: (x) => {
            x.forEach(e => {
                let content1 = e.content;
                let halfcontent = content1.substr(0, 100);
                let z = '<div class="block1"><h2>"' + e.title + '"</h2><b>-"' + e.author + '"</b><i>-"' + e.Date + '"</i><img src="' + e.Image                          //div element is created here
                    + '" width="250px" height="250px"/><br><p>' + halfcontent
                    + '</p><a href="ReadMoreData.html?id=' + e.id + '" id=' + e.id + ' >Read More</a></div>';

                $("#sp1").append(z);                     //appending element in span
            });
            $(".block1").addClass("gridbox")            //applying style to div
        },
        error: (e) => {
            alert("error" + e)
        }
    })


})
