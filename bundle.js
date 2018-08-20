(() => {
    const drumKeys = document.querySelectorAll('.drumkey');

    function playSound(event) {
        let sound, pressed;
        for (let i = 0; i < drumKeys.length; i++) {
            if (event.key === drumKeys[i].querySelector('h4').innerText.toLowerCase()) {
                sound = drumKeys[i].querySelector('audio');
                pressed = drumKeys[i];
            }
        }

        if (sound) {
            sound.currentTime = 0;
            sound.play();
            pressed.classList.add('pressed');
            setTimeout(() => pressed.classList.remove('pressed'), 100);
        }
    }

    window.addEventListener('keypress', playSound);

})()