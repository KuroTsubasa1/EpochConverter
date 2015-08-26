/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'splash',
                            type: 'image',
                            rect: ['0px', '0px', '400px', '200px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"splash.png",'0px','0px'],
                            transform: [[],[],[],['1','0']]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: [undefined, undefined, '550px', '400px'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,0.00)",[270,[['rgba(81,44,139,0.00)',0],['rgba(255,255,255,1.00)',100]]]]
                        }
                    }
                },
                timeline: {
                    duration: 3000,
                    autoPlay: true,
                    data: [
                        [
                            "eid2",
                            "opacity",
                            0,
                            1000,
                            "linear",
                            "${splash}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid22",
                            "opacity",
                            2000,
                            1000,
                            "linear",
                            "${splash}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11",
                            "width",
                            2000,
                            0,
                            "linear",
                            "${splash}",
                            '400px',
                            '400px'
                        ],
                        [
                            "eid20",
                            "scaleY",
                            2000,
                            1000,
                            "linear",
                            "${splash}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12",
                            "height",
                            2000,
                            0,
                            "linear",
                            "${splash}",
                            '400px',
                            '400px'
                        ],
                        [
                            "eid3",
                            "scaleX",
                            2000,
                            0,
                            "linear",
                            "${splash}",
                            '1',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("Splash_edgeActions.js");
})("EDGE-74399309");
