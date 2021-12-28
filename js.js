document.addEventListener("DOMContentLoaded", function(){
    document.body.addEventListener("touchstart", playVideo);
    function playVideo() {
        const video = document.getElementById('video');
        if(video.playing) {
        } else {
            video.play();
        }
    }
});

function stupid() {
    document.getElementById("enter-overlay").className += " fade";
    document.getElementById("play-button").className = "button-style button-fade";
    document.getElementById("play-button").disabled = true;
    document.getElementById("audio").volume = 0.2; 
    document.getElementById("particles-js").className += " fadeInParticles";
    document.getElementById("title").className += " fadeIn";
    video.play();
    audio.play();
}

(function(c, a, m) {
  var title = (c || document.title) + " " + (a || "-") + " ";
  setInterval(function() {
    title = title.substring(1) + title.charAt(0);
    document.title = title;
  }, m || 300);
})(
  /* Tab Text */ "yufei ",
  /* Title Repeat Separator */ "  ",
  /* Scroll Speed (in milleseconds) */ 700
);