var APP_DATA = {
  "scenes": [
    {
      "id": "0-tv-pooja",
      "name": "tv pooja",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.04876422520280066,
        "pitch": 0.0034400664821916394,
        "fov": 1.135060422468825
      },
      "linkHotspots": [
        {
          "yaw": 0.5796959370114756,
          "pitch": 0.07075357396124993,
          "rotation": 10.995574287564278,
          "target": "1-dining-breakfast-counter"
        },
        {
          "yaw": 0.5445221431223697,
          "pitch": 0.0060366284781228075,
          "rotation": 0,
          "target": "3-partition"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-dining-breakfast-counter",
      "name": "dining breakfast counter",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.16794516637473222,
        "pitch": 0.04682406966640684,
        "fov": 1.2579409239652903
      },
      "linkHotspots": [
        {
          "yaw": 1.3265701170390756,
          "pitch": 0.12069466479640667,
          "rotation": 0,
          "target": "3-partition"
        },
        {
          "yaw": 0.9891438703375268,
          "pitch": 0.031217657427060175,
          "rotation": 4.71238898038469,
          "target": "2-wash-unit"
        },
        {
          "yaw": 2.068712713394877,
          "pitch": 0.07890371020299902,
          "rotation": 1.5707963267948966,
          "target": "0-tv-pooja"
        },
        {
          "yaw": 0.1415986170321979,
          "pitch": 0.07098249259131073,
          "rotation": 0,
          "target": "4-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-wash-unit",
      "name": "wash unit",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.03577480556860735,
        "pitch": -0.02730137029756463,
        "fov": 1.0685462050164771
      },
      "linkHotspots": [
        {
          "yaw": -0.6113441790923275,
          "pitch": 0.08797066781053076,
          "rotation": 5.497787143782138,
          "target": "4-kitchen"
        },
        {
          "yaw": -3.0510707581896668,
          "pitch": 0.07078827196725612,
          "rotation": 1.5707963267948966,
          "target": "0-tv-pooja"
        },
        {
          "yaw": -1.4638268656590263,
          "pitch": 0.13166701023398097,
          "rotation": 1.5707963267948966,
          "target": "1-dining-breakfast-counter"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-partition",
      "name": "partition",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.0038807561643636745,
        "pitch": -0.002275227020748005,
        "fov": 0.8472941690613014
      },
      "linkHotspots": [
        {
          "yaw": -0.6758672132882086,
          "pitch": -0.05100899945405146,
          "rotation": 4.71238898038469,
          "target": "2-wash-unit"
        },
        {
          "yaw": 0.7367712097774017,
          "pitch": -0.0035605576434249997,
          "rotation": 1.5707963267948966,
          "target": "0-tv-pooja"
        },
        {
          "yaw": 3.059373605944673,
          "pitch": 0.09719821744064916,
          "rotation": 1.5707963267948966,
          "target": "1-dining-breakfast-counter"
        },
        {
          "yaw": -2.2743343141977377,
          "pitch": -0.001123315903974742,
          "rotation": 0,
          "target": "4-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-kitchen",
      "name": "kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.002167393057115774,
        "pitch": 0.03870642061226803,
        "fov": 1.38217411905719
      },
      "linkHotspots": [],
      "infoHotspots": []
    }
  ],
  "name": "BLUE Diamond",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
