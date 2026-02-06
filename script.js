const noBtn = document.getElementById('no-btn');
const yesBtn = document.getElementById('yes-btn');
const bruhSound = document.getElementById('bruh-sound');
const questionSection = document.getElementById('question-section');
const successMessage = document.getElementById('success-message');

let yesSize = 1;
const noTexts = [
    "No",
    "Schatziii was machen Sie?",
    "Nein bitte nicht",
    "What da helllllll",
    "Denise... stop!",
    "Are you sure? 🥺"
];
let textIndex = 0;

noBtn.addEventListener('mouseover', () => {
    // 1. Play sound
    bruhSound.currentTime = 0;
    bruhSound.play();

    // 2. Change text
    textIndex = (textIndex + 1) % noTexts.length;
    noBtn.innerText = noTexts[textIndex];

    // 3. Make it absolute so it can move anywhere
    noBtn.style.position = 'absolute';

    // 4. Move button randomly
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;

    // 5. Grow Yes button
    yesSize += 0.2;
    yesBtn.style.transform = `scale(${yesSize})`;
});

yesBtn.addEventListener('click', () => {
    questionSection.classList.add('hidden');
    successMessage.classList.remove('hidden');
});
