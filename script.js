document.addEventListener("DOMContentLoaded", function() {
    animateTyping();
});

function animateTyping() {
    const text = "Hello, I'm Lavuri Simhadri"; // Text to type
    const element = document.querySelector(".typing-effect");

    let i = 0;
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, 250); // Adjust typing speed here (in milliseconds)
        } else {
            // Text is fully typed, reset to start typing again
            element.textContent = "";
            i = 0;
            setTimeout(type, 200); // Delay before restarting (1 second in this example)
        }
    }

    type();
}
