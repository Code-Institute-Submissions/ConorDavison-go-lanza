function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 9,
        center: {
            lat: 28.920377440031874,
            lng: -13.435111946201184
        }
    });

    var labels = "ABCDEFGHIJKLMONPQRSTUVWXYZ";

    var locations = [{
        lat: 29.00048217606729, 
        lng:-13.490349575249473

    },

    {
        lat: 28.982038673291058,  
        lng:-13.511729802606315

    },

    {
        lat: 28.996209570176994,   
        lng:-13.491272044933622

    },

    {
        lat: 28.863701050742964,  
        lng:-13.827717005680116  

    },

    {
        lat: 28.917513928092596, 
        lng:-13.70403833329703   

    }];

    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, {
        imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
    });
}