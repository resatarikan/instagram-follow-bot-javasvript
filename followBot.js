(() => {
    let i = 0;
    const followInterval = setInterval(() => {
        if (i >= 30) {
            clearInterval(followInterval);
            return;
        }
        const buttons = document.querySelectorAll('button');
        const nextButton = buttons[i];
        if (nextButton.textContent == "Follow"){ //write in your language
        nextButton.click();}
        i += 1;
    }, 500)
})()
