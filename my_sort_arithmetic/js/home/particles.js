/* ---- stats.js config ---- */

particlesJS("particles", {
    "background": {
        "color": {
            "value": "#5467ff"
        }
    },
    "fpsLimit": 60,
    "interactivity": {
        "detectsOn": "canvas",
        "events": {
            "resize": true
        },
        "modes": {
            "bubble": {
                "distance": 400,
                "duration": 2,
                "opacity": 0.8,
                "size": 40
            },
            "push": {
                "quantity": 4
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            }
        }
    },
    "particles": {
        "color": {
            "value": "#fff"
        },
        "collisions": {
            "enable": true
        },
        "move": {
            "direction": "none",
            "enable": true,
            "outMode": "bounce",
            "random": false,
            "speed": 1,
            "straight": false
        },
        "number": {
            "density": {
                "enable": true,
                "value_area": 800
            },
            "value": 80
        },
        "opacity": {
            "value": 0.5
        },
        "line_linked": {
            "enable": false,
        },
        "shape": {
            "type": "circle"
        },
        "size": {
            "random": true,
            "value": 6
        }
    },
    "detectRetina": true
});


/* ---- stats.js config ---- */


update = function () {
    if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
        //   count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
    }
    requestAnimationFrame(update);
};
requestAnimationFrame(update);