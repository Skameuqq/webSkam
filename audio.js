window.addEventListener('DOMContentLoaded', function () {
    var audio = document.getElementById('myAudio');
    audio.play();
});

var audio = document.getElementById('myAudio');
function playAudio() {
    audio.play();
}

function pauseAudio() {
    audio.pause();
}