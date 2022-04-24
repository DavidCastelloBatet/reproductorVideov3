// set els volums inicials dels videos
document.getElementById("video1").volume = 0.5;
document.getElementById("video2").volume = 0.5;

class Video {
  constructor(video) {
    this.video = video;
  }
  // per regular el play, la pausa i l'stop
  play() {
    this.video.play();
  }

  paused() {
    this.video.pause();
  }

  stop() {
    this.video.pause();
    this.video.currentTime = 0;
  }

  // metodes per tirar endavant i endarrera 10 segons
  back10Seconds() {
    this.video.currentTime = this.video.currentTime - 10;
  }

  forw10Seconds() {
    this.video.currentTime = this.video.currentTime + 10;
  }

  // mute, baixar volum, pujar volum

  mute() {
    this.video.muted == false
      ? (this.video.muted = true)
      : (this.video.muted = false);
  }

  downVolume() {
    if (this.video.volume < 0.1) {
      this.video.volume = 0;
    } else {
      this.video.volume = this.video.volume - 0.1;
    }
  }

  upVolume() {
    if (this.video.volume > 0.9) {
      this.video.volume = 1;
    } else {
      this.video.volume = this.video.volume + 0.1;
    }
  }

  openFullscreen() {
    if (this.video.requestFullscreen) {
      this.video.requestFullscreen();
    } else if (this.video.webkitRequestFullscreen) {
      /* Safari */
      this.video.webkitRequestFullscreen();
    } else if (this.video.msRequestFullscreen) {
      /* IE11 */
      this.video.msRequestFullscreen();
    }
  }
}

// EVENTS
// Events Play
document.getElementById("play1").addEventListener("click", function () {
  let video1 = document.getElementById("video1");
  console.log("conectat");
  reproduir = new Video(video1);
  reproduir.play();
});

document.getElementById("play2").addEventListener("click", function () {
  let video2 = document.getElementById("video2");
  console.log("conectat");
  reproduir = new Video(video2);
  reproduir.play();
});

document.getElementById("play3").addEventListener("click", function () {
  let video1 = document.getElementById("video1");
  let video2 = document.getElementById("video2");
  console.log("conectat");
  reproduir = new Video(video1);
  reproduir.play();
  reproduir = new Video(video2);
  reproduir.play();
});

// Events Paused
document.getElementById("pause1").addEventListener("click", function () {
  let video1 = document.getElementById("video1");
  console.log("conectat");
  reproduir = new Video(video1);
  reproduir.paused();
});

document.getElementById("pause2").addEventListener("click", function () {
  let video2 = document.getElementById("video2");
  console.log("conectat");
  reproduir = new Video(video2);
  reproduir.paused();
});

document.getElementById("pause3").addEventListener("click", function () {
  let video1 = document.getElementById("video1");
  let video2 = document.getElementById("video2");
  console.log("conectat");
  reproduir = new Video(video1);
  reproduir.paused();
  reproduir = new Video(video2);
  reproduir.paused();
});

// Events stop video
document.getElementById("stop1").addEventListener("click", function () {
  let video1 = document.getElementById("video1");
  console.log("conectat");
  reproduir = new Video(video1);
  reproduir.stop();
});

document.getElementById("stop2").addEventListener("click", function () {
  let video2 = document.getElementById("video2");
  console.log("conectat");
  reproduir = new Video(video2);
  reproduir.stop();
});

document.getElementById("stop3").addEventListener("click", function () {
  let video1 = document.getElementById("video1");
  let video2 = document.getElementById("video2");
  console.log("conectat");
  reproduir = new Video(video1);
  reproduir.stop();
  reproduir = new Video(video2);
  reproduir.stop();
});

// Events back 10 seconds
document.getElementById("back1").addEventListener("click", function () {
  let video1 = document.getElementById("video1");
  console.log("conectat");
  reproduir = new Video(video1);
  reproduir.back10Seconds();
});

document.getElementById("back2").addEventListener("click", function () {
  let video2 = document.getElementById("video2");
  console.log("conectat");
  reproduir = new Video(video2);
  reproduir.back10Seconds();
});

document.getElementById("back3").addEventListener("click", function () {
  let video1 = document.getElementById("video1");
  let video2 = document.getElementById("video2");
  console.log("conectat");
  reproduir = new Video(video1);
  reproduir.back10Seconds();
  reproduir = new Video(video2);
  reproduir.back10Seconds();
});

// Events forw 10 seconds
document.getElementById("forward1").addEventListener("click", function () {
  let video1 = document.getElementById("video1");
  console.log("conectat");
  reproduir = new Video(video1);
  reproduir.forw10Seconds();
});

document.getElementById("forward2").addEventListener("click", function () {
  let video2 = document.getElementById("video2");
  console.log("conectat");
  reproduir = new Video(video2);
  reproduir.forw10Seconds();
});

document.getElementById("forward3").addEventListener("click", function () {
  let video1 = document.getElementById("video1");
  let video2 = document.getElementById("video2");
  console.log("conectat");
  reproduir = new Video(video1);
  reproduir.forw10Seconds();
  reproduir = new Video(video2);
  reproduir.forw10Seconds();
});

// Events mute
document.getElementById("mute1").addEventListener("click", function () {
  let video1 = document.getElementById("video1");
  console.log("conectat");
  reproduir = new Video(video1);
  reproduir.mute();
});

document.getElementById("mute2").addEventListener("click", function () {
  let video2 = document.getElementById("video2");
  console.log("conectat");
  reproduir = new Video(video2);
  reproduir.mute();
});

document.getElementById("mute3").addEventListener("click", function () {
  let video1 = document.getElementById("video1");
  let video2 = document.getElementById("video2");
  console.log("conectat");
  reproduir = new Video(video1);
  reproduir.mute();
  reproduir = new Video(video2);
  reproduir.mute();
});

// Events baixa vol
document.getElementById("volDown1").addEventListener("click", function () {
  let video1 = document.getElementById("video1");
  console.log("conectat");
  console.log("Vol video 1: " + video1.volume);

  reproduir = new Video(video1);
  reproduir.downVolume();
});

document.getElementById("volDown2").addEventListener("click", function () {
  let video2 = document.getElementById("video2");
  console.log("conectat");
  console.log("Vol video 2: " + video2.volume);

  reproduir = new Video(video2);
  reproduir.downVolume();
});

document.getElementById("volDown3").addEventListener("click", function () {
  let video1 = document.getElementById("video1");
  let video2 = document.getElementById("video2");
  console.log("conectat");
  console.log("Vol video 1 :" + video1.volume);
  console.log("Vol video 2 :" + video2.volume);
  reproduir = new Video(video1);
  reproduir.downVolume();
  reproduir = new Video(video2);
  reproduir.downVolume();
});

// Events puja vol

document.getElementById("volUp1").addEventListener("click", function () {
  let video1 = document.getElementById("video1");
  console.log("Vol video 1: " + video1.volume);
  console.log("conectat");
  reproduir = new Video(video1);
  reproduir.upVolume();
});

document.getElementById("volUp2").addEventListener("click", function () {
  let video2 = document.getElementById("video2");
  console.log("conectat");
  console.log("Vol video : " + video2.volume);

  reproduir = new Video(video2);
  reproduir.upVolume();
});

document.getElementById("volUp3").addEventListener("click", function () {
  let video1 = document.getElementById("video1");
  let video2 = document.getElementById("video2");
  console.log("conectat");
  console.log("Vol video 1: " + video1.volume);
  console.log("Vol video 2: " + video2.volume);

  reproduir = new Video(video1);
  reproduir.upVolume();
  reproduir = new Video(video2);
  reproduir.upVolume();
});

// Events maximitçar pantalla
document.getElementById("expand1").addEventListener("click", function () {
  let video1 = document.getElementById("video1");

  reproduir = new Video(video1);
  reproduir.openFullscreen();
});

document.getElementById("expand2").addEventListener("click", function () {
  let video2 = document.getElementById("video2");
  console.log("conectat");

  reproduir = new Video(video2);
  reproduir.openFullscreen();
});

// Detectar i injectar posicio video
setInterval(() => {
  document.getElementById("temps1").innerHTML = Math.round(video1.currentTime);
  document.getElementById("temps2").innerHTML = Math.round(video2.currentTime);
}, 1000);

// Injectar Longitud dels videos
// per prevenir el NaN faig servir l'event 'loadedmetadata'
// Font: https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/loadedmetadata_event
video1.addEventListener("loadedmetadata", (event) => {
  document.getElementById("restant1").innerHTML = Math.round(video1.duration);
});

video2.addEventListener("loadedmetadata", (event) => {
  document.getElementById("restant2").innerHTML = Math.round(video2.duration);
});
