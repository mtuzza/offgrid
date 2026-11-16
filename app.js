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
