window.addEventListener('load',start => {
  window.addEventListener('keydown',hitTheDrum);

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend',removeTransition));

});

function hitTheDrum(e){
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!audio) return; // stop the function from running
  audio.currentTime = 0; //auto rewind the audio to the start
  audio.play();
  key.classList.add('playing');
};

function removeTransition(e) {
  //if (e.propertyName !== 'transition') return;
  this.classList.remove('playing');
};