const sources = [
  "http://rd.shalombeatsradio.com:8006/stream", // Shalom Beats
  "http://88.198.138.88:8000/jesusradio/;.m3u", // Jesus Radio Malayalam
  "http://199.195.194.140:8012/stream", // Sehion Radio
  "http://5.79.88.132:7084/;stream.mp3", // Psalms Radio
  "https://dreamsiteradiocp2.com/proxy/rmindia1?mp=/stream", // Radio Maria
  "https://ephphatha.radioca.st/stream?type=http&nocache=15206", // Ephphatha
  "https://s2.radio.co/sf61790a26/listen", // Malayalam Christian Network
  "https://stream.radio.co/s1383afdc9/listen?ver=52115", // Shalom
  "http://live.jesuscomingfm.com:8132/;", // Jesus Coming FM
  "http://5.79.88.132:7233/;type=mp3", // Gloria Radio Malayalam
  "https://stream.radio.co/s9015a8e16/listen", // Radio Wind
  "https://listen.radioking.com/radio/378295/stream/428998", // Tharangam Radio
  "https://bozztv.com/36bay2/divine-event/tracks-v1a1/mono.m3u8", // DVN Radio
  "http://66.55.145.43:7704/stream/1/", // Malayalam English Christian Radio
  "https://gains.reviveradio.net/proxy/rafaradio?mp=/stream", // Rafa Radio
  "http://radio.zionmediait.com:5327/;", // Kripa FM Bhilai
  "https://gains.reviveradio.net/proxy/menorah?mp=/stream", // Menorah FM
  "http://37.187.93.104:8586/stream" // Blessings Radio
];

const labels = [
  [ "Shalom Beats", "http://rd.shalombeatsradio.com:8006/stream"],
  [ "Jesus Radio Malayalam", "http://88.198.138.88:8000/jesusradio/;.m3u"],
  [ "Sehion Radio", "http://199.195.194.140:8012/stream"],
  [ "Psalms Radio", "http://5.79.88.132:7084/;stream.mp3"],
  [ "Radio Maria", "https://dreamsiteradiocp2.com/proxy/rmindia1?mp=/stream"],
  [ "Ephphatha", "https://ephphatha.radioca.st/stream?type=http&nocache=15206"],
  [ "Malayalam Christian Network", "https://s2.radio.co/sf61790a26/listen"],
  [ "Shalom", "https://stream.radio.co/s1383afdc9/listen?ver=52115"],
  [ "Jesus Coming FM", "http://live.jesuscomingfm.com:8132/;"],
  [ "Gloria Radio Malayalam", "http://5.79.88.132:7233/;type=mp3"],
  [ "Radio Wind", "https://stream.radio.co/s9015a8e16/listen"],
  [ "Tharangam Radio", "https://listen.radioking.com/radio/378295/stream/428998"],
  [ "DVN Radio", "https://bozztv.com/36bay2/divine-event/tracks-v1a1/mono.m3u8"],
  [ "Malayalam English Christian Radio", "http://66.55.145.43:7704/stream/1/"],
  [ "Rafa Radio", "https://gains.reviveradio.net/proxy/rafaradio?mp=/stream"],
  [ "Kripa FM Bhilai", "http://radio.zionmediait.com:5327/;"],
  [ "Menorah FM", "https://gains.reviveradio.net/proxy/menorah?mp=/stream"],
  [ "Blessings Radio", "http://37.187.93.104:8586/stream"]
];

let playingIndex = 0; // current radio
let playing = true; // stream status
let music = null;

setTimeout(function(){
    loadStream(playingIndex);
}, 1);

function loadStream(index){
  if(playing && music !== null)
    destroyStream();

  music = new Audio();
  music.src = sources[index];
  music.load();
  music.play();
  setLabel(index);
  pauseIcon();
  playingIndex = index;
  playing = true;
}

function destroyStream(){
  music.pause();
  music.src = "";
  playIcon();
  playing = false;
}

function changePlayback(){
  if(playing){ destroyStream();  }else{  loadStream(playingIndex);  }
}

function setLabel(index){
  document.getElementById("label").innerHTML = '<h6> <a target="_blank" href="' + labels[index][1] + '">' + labels[index][0] + '</a></h6>';
}

document.onkeydown = function(e) {
  e = e || window.event;
  switch(e.which || e.keyCode) {
    case 32:
      changePlayback();
    break;
  }
};

// icons
function pauseIcon(){
  document.getElementById('playbackButton').className = 'icon fa-pause';
}
function playIcon(){
  document.getElementById('playbackButton').className = 'icon fa-play';
}
