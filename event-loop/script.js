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
const timeoutTimes = [];

function refreshTime(arr, time) {
    if (arr.length === 1000) {
        arr.pop();
        arr.unshift(time);
    } else {
        arr.push(time);
    }

    return arr.reduce((a,c) => a + c) / arr.length;
}

function loopTimeout() {
    const t1 = performance.now();
    setTimeout(function(){
        moveRight(timeoutEl);
        document.getElementById('set-timeout-time').innerHTML = refreshTime(timeoutTimes, performance.now() - t1);
        loopTimeout();
    });
}

const rafEl = document.getElementById('raf');
const rafTimes = [];

function loopFrame() {
    const t1 = performance.now();
    requestAnimationFrame(function(){
        moveRight(rafEl);
        document.getElementById('raf-time').innerHTML = refreshTime(rafTimes, performance.now() - t1);
        loopFrame();
    })
}

loopTimeout();
loopFrame();