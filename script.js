let lastTime = null; 
const HUE_CHANGE_RATE = 0.025; 

document.getElementById("capitalD").addEventListener("click", function() {
    window.location.href = "resume.pdf";
  });

document.getElementById("capitalE").addEventListener("click", function() {
    window.location.href = "resume.pdf";
  });
document.getElementById("capitalB").addEventListener("click", function() {
    window.location.href = "resume.pdf";
  });
document.getElementById("capitalR").addEventListener("click", function() {
    window.location.href = "resume.pdf";
  });

document.getElementById("capitalU").addEventListener("click", function() {
    window.location.href = "resume.pdf";
  });
document.getElementById("capitalP").addEventListener("click", function() {
    window.location.href = "resume.pdf";
  });


// --- Function to update the hue variable ---
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