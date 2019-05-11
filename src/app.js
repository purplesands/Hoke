document.addEventListener('DOMContentLoaded', e=> {

const jam = document.querySelector('.jam')
const body = document.querySelector('body')
const noteContainer = document.querySelector('.noteContainer')


songForm = document.querySelector('#songForm')
  songForm.addEventListener('submit', e => {
    e.preventDefault()
    let song = e.target.song.value.toLowerCase().split("")
    for(var i = 0;i < song.length; i++){
        let k = i;
        setTimeout(function(){
            soundCheck(song[k]);
        }, 2500 * (k + 1));
    }
  }
)

songForm2 = document.querySelector('#songForm2')
  songForm2.addEventListener('submit', e => {
    e.preventDefault()
    let song = e.target.song.value.toLowerCase().split("")
    for(var i = 0;i < song.length; i++){
        let k = i;
        setTimeout(function(){
            soundCheck(song[k]);
        }, 1250 * (k + 1));
    }
  }
)

songForm3 = document.querySelector('#songForm3')
  songForm3.addEventListener('submit', e => {
    e.preventDefault()
    let song = e.target.song.value.toLowerCase().split("")
    for(var i = 0;i < song.length; i++){
        let k = i;
        setTimeout(function(){
            soundCheck(song[k]);
        }, 500 * (k + 1));
    }
  }
)


jam.addEventListener("click", e=>{
  if (!jam.classList.contains("playing")) {
    body.addEventListener("keypress",
      soundCheck)
      jam.innerText = "stop"
      jam.classList.add("playing")
  } else if (jam.classList.contains("playing")) {
    jam.classList.remove("playing")
    jam.innerText = "jam"
    noteContainer.innerHTML = ""
    body.removeEventListener("keypress", soundCheck)
  }
})

document.querySelector('.noteContainer').addEventListener('click',e=>{
  e.preventDefault()
  soundCheck(e.target.innerText)
})



function soundCheck(ltr){
  if (typeof ltr === 'string' || ltr instanceof String) {ltr} else {ltr=ltr.key}
  if (ltr===" ") { ltr='&nbsp;'} else {ltr}
  noteContainer.innerHTML += `<div class="ltr">${ltr}</div>`
  console.log(ltr)
  let i = 0
  i++
  switch (ltr) {
    case "a":
    aS = new Audio("assets/1.wav", i)
    aS.play()
    break;
    case "b":
    bS = new Audio("assets/2.wav", i)
    bS.play()
    break;
    case "c":
    cS = new Audio("assets/3.wav", i)
    cS.play()
    break;
    case "d":
    dS = new Audio("assets/4.wav", i)
    dS.play()
    break;
    case "e":
    eS = new Audio("assets/5.wav", i)
    eS.play()
    break;
    case "f":
    fS = new Audio("assets/6.wav", i)
    fS.play()
    break;
    case "g":
    gS = new Audio("assets/7.wav", i)
    gS.play()
    break;
    case "h":
    hS = new Audio("assets/8.wav", i)
    hS.play()
    break;
    case "i":
    iS = new Audio("assets/9.wav", i)
    iS.play()
    break;
    case "j":
    jS  = new Audio("assets/10.wav", i)
    jS.play()
    break;
    case "k":
    kS  = new Audio("assets/11.wav", i)
    kS.play()
    break;
    case "l":
    lS  = new Audio("assets/12.wav", i)
    lS.play()
    break;
    case "m":
    mS  = new Audio("assets/13.wav", i)
    mS.play()
    break;
    case "n":
    nS  = new Audio("assets/14.wav", i)
    nS.play()
    break;
    case "o":
    oS  = new Audio("assets/15.wav", i)
    oS.play()
    break;
    case "p":
    pS  = new Audio("assets/16.wav", i)
    pS.play()
    break;
    case "q":
    qS  = new Audio("assets/17.wav", i)
    qS.play()
    break;
    case "r":
    rS  = new Audio("assets/18.wav", i)
    rS.play()
    break;
    case "s":
    sS  = new Audio("assets/19.wav", i)
    sS.play()
    break;
  }
}


renderSounds()

})

function Channel(audio_uri) {
	this.audio_uri = audio_uri;
	this.resource = new Audio(audio_uri);
}

Channel.prototype.play = function() {
	this.resource.play();
}

function Switcher(audio_uri, num) {
	this.channels = [];
	this.num = num;
	this.index = 0;

	for (var i = 0; i < num; i++) {
		this.channels.push(new Channel(audio_uri));
	}
}

Switcher.prototype.play = function() {
	this.channels[this.index++].play();
	this.index = this.index < this.num ? this.index : 0;
}


function renderSounds() {
  aS = new Audio("assets/1.wav", 20)
}
