var mystyle = {
    "version": 8,
    "name": "Mijn eigen Stijl",
    "glyphs": "https://ta.webmapper.nl/wm/glyphs/{fontstack}/{range}.pbf",
    "sources": {
    "cartiqo":{
        "type": "vector",
        "tiles":  [
            "https://ta.webmapper.nl/wm/cartiqo/{z}/{x}/{y}",
            "https://tb.webmapper.nl/wm/cartiqo/{z}/{x}/{y}",
            "https://tc.webmapper.nl/wm/cartiqo/{z}/{x}/{y}"
        ]
    }
},
"layers": [
        {
            "id": "background",
            "type": "background",
            "paint": {
                "background-color": "hsl(0,0%,95%)"
            }
        },
        {
            "id": "urban_area",
            "source": "cartiqo",
            "source-layer": "builtup",
            "filter": [
                "==",
                ["get", "type"],
                "area"
            ],
            "type": "fill",
            "paint": {
                "fill-color": [
                    "match",
                    [
                        "get",
                        "subtype"
                    ],
                    "courtyard",
                    "hsl(60,60%,94%)",
                    "industrial",
                    "hsl(295,87%,97%)",
                    "graveyard",
                    "hsl(0,0%,82%)",
                    "residential",
                    "hsl(342,63%,97%)",
                    "hsl(340,12%,91%)"
                ]
            }
        },
        {
            "id": "water",
            "source": "cartiqo",
            "source-layer": "water",
            "type": "fill",
            "paint": {
                "fill-color": "#a0c8f0"
        }
      },
      {
    "id": "place-labels",
    "type": "symbol",
    "source": "cartiqo",
    "source-layer": "labels",
    "filter":
        [
            "==",
            "type",
            "place"
        ],
    "minzoom": 8,
    "maxzoom": 16,
    "layout": {
        "text-allow-overlap": false,
        "text-padding": 1,
        "text-size": 16,
        "text-font":  ["Lato"],
        "text-field": "{name}",
    },
    "paint": {
        "text-halo-blur": 0.5,
        "text-color":"#1d464d",
        "text-halo-width": 1,
        "text-halo-color": "#fff"
    }
}
    ]
  }


var map = new mapboxgl.Map({
        container: 'map',
        style: mystyle,
        hash: true,
        zoom: 11,
        pitch: 60,
        bearing: 62.4,
        center: [ 4.8, 52.4]
    });
