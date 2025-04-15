let lastTime = null; 
const HUE_CHANGE_RATE = 0.025; 

function update(time) {
    if (lastTime != null) {
        const delta = time - lastTime;

        const currentHue = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--hue'));

        const newHue = (currentHue + delta * HUE_CHANGE_RATE) % 360;

 
        document.documentElement.style.setProperty('--hue', newHue);
    }

 
    lastTime = time;

 
    requestAnimationFrame(update);
}

// --- Start the animation loop ---
window.requestAnimationFrame(update);