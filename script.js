const big = document.querySelector('.butt2');
const sub = document.querySelector('.butt1');

let clickCount = 0;

big.addEventListener('click', () => {
    // Get the current height, width, and font size of the element
    const currentHeight = parseInt(window.getComputedStyle(sub).height);
    const currentWidth = parseInt(window.getComputedStyle(sub).width);
    const currentFontSize = parseInt(window.getComputedStyle(sub).fontSize);

    // Increment the height, width, and font size
    sub.style.height = `${currentHeight + 10}px`; // Increase by 10px
    sub.style.width = `${currentWidth + 10}px`;   // Increase by 10px
    sub.style.fontSize = `${currentFontSize + 1}px`; // Increase font size by 2px (you can change this value)

    // Increment click count
    clickCount++;

    // Change the text of button 1 after specific number of clicks
    if (clickCount === 3) {
        sub.textContent = 'Ekhane press kor naಠ⁠︵⁠ಠ';
    }
    if (clickCount === 5) {
        sub.textContent = 'Eto tepar shok kiser༎ຶ⁠‿⁠༎ຶ';
    }
    if (clickCount === 7) {
        sub.textContent = 'Ebr ki korbi😠';
        big.style.display = 'none'; // Hides the button after 7 clicks
    }
});




