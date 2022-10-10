

function GetMap ()
    { 

     
      $(".loader").fadeIn(1000);
      var address= document.getElementById("search").value;

        var data = {
    "format": "json",
    "addressdetails": 1,
    "q":address,
    "limit": 1
};
$.ajax({
  method: "GET",
  url: "https://nominatim.openstreetmap.org",
  data: data
})
.done(function( data ) {
    console.log( data);
    var map = new ol.Map({
          target: 'map',
          layers: [
            new ol.layer.Tile({
              source: new ol.source.OSM()
            })
          ],
          view: new ol.View({
            center: ol.proj.fromLonLat([data[0].lon, data[0].lat]),
            zoom:10
          })
        });
    var disp = data[0].display_name;
    document.getElementById("lblDisp").innerHTML= disp;
    $(".loader").fadeOut(1000);
});

      
    }

    $(window).on('load',function(){
       $(".loader").fadeOut(1000);
      // $(".map").fadeIn(1000);
    })

                     