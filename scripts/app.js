const isVisible = (ele) => {
    const rect = ele.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom >= 0;
}

// e.g. 100x100 viewport and a 10x10px element at position
// {top: -1, left: 0, bottom: 9, right: 10}
// elementIsVisibleInViewport(el); // false - (not fully visible)
// elementIsVisibleInViewport(el, true); // true - (partially visible)
window.onscroll = function (e) {
    if (isVisible(document.getElementById("hero"))) {
        if (!document.getElementById("navbar").classList.contains("nav-top")) {
            document.getElementById("navbar").classList.add("nav-top")
        }
        if (document.getElementById("navbar").classList.contains("nav-moved")) {
            document.getElementById("navbar").classList.remove("nav-moved")
        }
    } else {
        if (document.getElementById("navbar").classList.contains("nav-top")) {
            document.getElementById("navbar").classList.remove("nav-top")
        }
        if (!document.getElementById("navbar").classList.contains("nav-moved")) {
            document.getElementById("navbar").classList.add("nav-moved")
        }
    }
}

var mapOptions = {
    center: [43.48510, -5.43414],
        zoom: 15
    }
    
    // Creating a map object
    var map = new L.map('map', mapOptions);
    
    // Creating a Layer object
    var layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
    let marker = new L.Marker([43.48510, -5.43414]);
    marker.addTo(map);
    
    // Adding layer to the map
    map.addLayer(layer);