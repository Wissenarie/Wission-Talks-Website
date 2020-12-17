// var textWrapper = document.querySelector('.ml12');
// textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

// anime.timeline({ loop: false })
//     .add({
//         targets: '.ml12 .letter',
//         translateX: [40, 0],
//         translateZ: 0,
//         opacity: [0, 1],
//         easing: "easeOutExpo",
//         duration: 1200,
//         delay: (el, i) => 500 + 30 * i
//     });

// anime.timeline({ cycles: 1 })
//     .add({
//         targets: '.ml5 .line',
//         opacity: [0.5, 1],
//         scaleX: [0, 1],
//         easing: "easeInOutExpo",
//         duration: 700
//     }).add({
//         targets: '.ml5 .line',
//         duration: 600,
//         easing: "easeOutExpo",
//         translateY: (el, i) => (-0.625 + 0.625 * 2 * i) + "em"
//     }).add({
//         targets: '.ml5 .ampersand',
//         opacity: [0, 1],
//         scaleY: [0.5, 1],
//         easing: "easeOutExpo",
//         duration: 600,
//         offset: '-=600'
//     }).add({
//         targets: '.ml5 .letters-left',
//         opacity: [0, 1],
//         translateX: ["0.5em", 0],
//         easing: "easeOutExpo",
//         duration: 600,
//         offset: '-=300'
//     }).add({
//         targets: '.ml5 .letters-right',
//         opacity: [0, 1],
//         translateX: ["-0.5em", 0],
//         easing: "easeOutExpo",
//         duration: 600,
//         offset: '-=600'
//     })


var count = 0
function loop() {
    if (count == 0) {
        var x = 0; y = 0; w = 0; z = 0;
        var speakers = document.getElementById("1");
        var events = document.getElementById("2");
        var cities = document.getElementById("3");
        var people = document.getElementById("4");
        console.log(speakers);
        var idlong = setInterval(longbegin, 25);
        function longbegin() {
            if (w == 10000) {
                clearInterval(idlong);
            } else {
                if (w < 10000) {
                    w += 100;
                    people.innerHTML = w + "+";
                }
            }
        }
        var id = setInterval(begin, 42);
        function begin() {
            if ((x == 60) && (y == 40) && (z = 35)) {
                clearInterval(id);
            } else {
                if (x < 60) {
                    x++;
                    speakers.innerHTML = x + "+";
                }
                if (y < 40) {
                    y++;
                    events.innerHTML = y + "+";
                }
                if (z < 35) {
                    z++;
                    cities.innerHTML = z + "+";
                }
            }
        }
        count++;
    }

}

