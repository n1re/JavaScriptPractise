function moveRight(element) {
    const { innerWidth } = window;
    const { left, width } = getComputedStyle(element);
    const leftPx = parseInt(left);
    const widthPx = parseInt(width);

    if (leftPx + widthPx > innerWidth) {
        element.style.left = '0px';
    } else {
        element.style.left = `${leftPx + 1}px`;
    }
}

const timeoutEl = document.getElementById('set-timeout');

function loopTimeout() {
    setTimeout(function(){
        moveRight(timeoutEl);
        loopTimeout();
    });
}

const rafEl = document.getElementById('raf');

function loopFrame() {
    requestAnimationFrame(function(){
        moveRight(rafEl);
        loopFrame();
    })
}

loopTimeout();
loopFrame();