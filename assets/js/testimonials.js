
document.addEventListener('DOMContentLoaded', function(){
    loadData();
});

function loadData(){
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://backtoespol-5fbc.restdb.io/rest/testimonials",
        "method": "GET",
        "headers": {
          "content-type": "application/json",
          "x-apikey": "5e86bbb1111788414066c5a9",
          "cache-control": "no-cache"
        }
      }
      
      $.ajax(settings).done(function (response) {
        for(var i in response){
          show(response[i]["url"]);
        }
      });
}

var owl = $('#data_view').owlCarousel();

function show(url){
  $.ajax({
    url: "https://api.instagram.com/oembed?hidecaption=true&url=" + url,
    dataType: 'json',
		success: function(data) {
      var html = data["html"];
      owl.trigger('add.owl.carousel', [jQuery('<div class="testimonial-item">' + html + '</div>')]);
      owl.trigger('refresh.owl.carousel');
    }
  });
  
}