document.addEventListener("DOMContentLoaded", () =>{
  let play = document.querySelector("#play");
  let audio = new Audio("sound/song.mp3");
  play.addEventListener("click", () =>{
    if(audio.paused){
      audio.play();
      play.innerHTML = "<i class='fa-solid fa-pause'></i>";
    }else{
      audio.pause();
      play.innerHTML = "<i class='fa-solid fa-play'></i>";
    }
  });

  audio.addEventListener("timeupdate", ()=>{
    let currentTime = formatTime(audio.currentTime);
    let duration = formatTime(audio.duration);
    document.querySelector(".prev").innerHTML = currentTime;
    document.querySelector(".next").innerHTML = duration;
    document.querySelector("#range").value = (audio.currentTime/audio.duration);
  });

  function formatTime(time){
    let min = Math.floor(time/60);
    let sec = Math.floor(time % 60);
    return(
      (min<10 ? "0" : "") + min + ":" + (sec<10 ? "0" : "") + sec
    );
  }
})