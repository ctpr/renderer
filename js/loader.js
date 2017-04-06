$(document).ready(function() {
    $.ajax({
        url: "http://localhost:9000/geometry/sample_data_scalar.ply"
    }).then(function(data) {
       $('.geometry').append(data);
    });
});
