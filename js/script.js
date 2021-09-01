var video = document.querySelector(".video"),
    juice = document.querySelector(".orange-juice"),
    btn = document.querySelector("#play-pause");

function togglePlayPause(){
    if(video.paused){
        btn.className = "pause";
        video.play();
    }else{
        btn.className = "play";
        video.pause();
    }
}
function timeupdateVideo(){
    var juicePos = video.currentTime / video.duration;
    juice.style.width = juicePos * 100 + "%";
    if(video.ended){
        btn.className = "play";
    }
}

btn.addEventListener("click", togglePlayPause);

video.addEventListener("timeupdate", timeupdateVideo);
