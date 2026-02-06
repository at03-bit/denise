const noBtn = document.getElementById('no-btn');
const yesBtn = document.getElementById('yes-btn');
const bruhSound = document.getElementById('bruh-sound');
const whySound = document.getElementById('why-sound');
const questionSection = document.getElementById('question-section');
const successMessage = document.getElementById('success-message');

let yesSize = 1;
const noTexts = [
    "No",
    "Schatziii was machen Sie?",
    "Nein bitte nicht",
    "What da helllllll",
    "Denise... aufhören!",
    "bist du dir sicher 
    
    ? 🥺"
];
let textIndex = 0;

noBtn.addEventListener('mouseover', () => {
    // 1. Play the "Bruh" sound
    bruhSound.currentTime = 0;
    bruhSound.play();

    // 2. Change the button text
    textIndex = (textIndex + 1) % noTexts.length;
    noBtn.innerText = noTexts[textIndex];

    // 3. Move the button randomly
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;

    // 4. Make Yes button bigger
    yesSize += 0.2;
    yesBtn.style.transform = `scale(${yesSize})`;
});

yesBtn.addEventListener('click', () => {
    questionSection.classList.add('hidden');
    successMessage.classList.remove('hidden');
    // Optional: Play a win sound if you have one!
});
