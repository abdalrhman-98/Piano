const pianokeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume-slider input")
const keysCheckbox = document.querySelector(".keys-checkbox input")
let audio = new Audio("tunes/a.wav");

const playTune = (key) => {
    audio.src = `tunes/${key}.wav`;
    audio.play()
    const clickedkey = document.querySelector(`[data-key="${key}"]`)
    clickedkey.classList.add("active");
    setTimeout(() => {
        clickedkey.classList.remove("active");
    }, 200);
}

const handleVolume = (e) => {
    audio.volume = e.target.value;
}

const showHideKeys = () => {
    pianokeys.forEach(key => key.classList.toggle("hide"));
}

pianokeys.forEach(key => {
    key.addEventListener("click", () => playTune(key.dataset.key))
    //console.log(key.dataset.key);
});

const pressedkey = (e) => {
    playTune (e.key );
}

volumeSlider.addEventListener("input", handleVolume);
keysCheckbox.addEventListener("click", showHideKeys);
document.addEventListener("keydown", pressedkey);