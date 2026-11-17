function updateContinuePrompt() {
    const prompt = document.getElementById('continue-prompt');

    if (window.innerWidth <= 600) {
        prompt.textContent = 'touch anywhere to continue';
    } else {
        prompt.textContent = 'press Enter to continue';
    }
}

updateContinuePrompt();

window.addEventListener('resize', updateContinuePrompt);

function hideIntro() {
    document.querySelector('.container').style.visibility = 'hidden';
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        hideIntro();
    }
});

document.addEventListener('pointerdown', function (event) {
    if (event.pointerType === 'touch') {
        hideIntro();
    }
});
