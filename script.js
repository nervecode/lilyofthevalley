const heartContainer = document.getElementById('heart-rain');
const bubbleContainer = document.getElementById('bubble-field');

function createHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '❤';
    heart.className = 'heart';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = '-20px';
    heart.style.fontSize = Math.random() * 12 + 10 + 'px';
    const duration = Math.random() * 3 + 5;
    heart.style.animationDuration = duration + 's';
    heartContainer.appendChild(heart);
    setTimeout(() => heart.remove(), duration * 1000);
}

function createBubble() {
    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    
    // Random size and position
    const size = Math.random() * 15 + 5 + 'px';
    bubble.style.width = size;
    bubble.style.height = size;
    bubble.style.left = Math.random() * 100 + 'vw';
    
    const duration = Math.random() * 4 + 6;
    bubble.style.animationDuration = duration + 's';
    
    bubbleContainer.appendChild(bubble);
    setTimeout(() => bubble.remove(), duration * 1000);
}

// Start the effects
setInterval(createHeart, 600);
setInterval(createBubble, 400);