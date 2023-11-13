
jQuery(function ($) {
    $("#Frame").animate360(
{
"controls": {
"desktop": {
"align": "center",
"autohide": true,
"backgroundcolor": "#4a89dc",
"foregroundcolor": "#000000",
"fullscreen": "none",
"guide": false,
"hint": false,
"link": {
    "display": false,
    "uri": ""
},
"magnifier": "none",
"share": {
    "email": false,
    "facebook": false,
    "googleplus": false,
    "qrcode": false,
    "twitter": false,
    "weibo": false
},
"spin": "none",
"style": "line",
"zoom": "separate"
},
"mobile": {
"align": "center",
"autohide": true,
"backgroundcolor": "#4a89dc",
"foregroundcolor": "#000000",
"fullscreen": "none",
"guide": false,
"link": {
    "display": false,
    "uri": ""
},
"magnifier": "none",
"share": {
    "email": false,
    "facebook": false,
    "googleplus": false,
    "qrcode": false,
    "twitter": false,
    "weibo": false
},
"spin": "none",
"style": "line",
"zoom": "separate"
}
},
"initview": {
"column": 1,
"partial": true
},
"layout": {
"center": true,
"fit": true
},
"object": {
"columns": 40,
"height": 1000,
"model": "cylindrical",
"name": "108482",
"sector": false,
"width": 1500
},
"path": {
"extension": ".jpg",
"icon": "./icons/",
"image": "./108482/images/"
},
"rotation": {
"axis": "horizontal",
"direction": "cw",
"event": "drag",
"hint": false,
"inertia": false
},
"spin": {
"direction": "cw",
"repeat": false,
"time": 200,
"type": "static"
},
"sprite": {
"eachHeight": 533,
"eachWidth": 800
},
"version": "v3",
"zoom": {
"magnifierevent": "drag",
"ratio": 2,
"type": "zoom"
}
}

    );
});
