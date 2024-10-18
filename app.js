// DOM Nodes
const gimme5btn = document.getElementById("gimme5btn");
const muteBtn = document.getElementById("mute-btn");
const happinessDisplay = document.getElementById("happiness-display");
const aihgrdisplay = document.getElementById("aihgr-display");
const ytBtn = document.getElementById("yt-btn");
const ytreqhapDisplay = document.getElementById("ytreqhap-display");
const jcBtn = document.getElementById("jc-btn")
const jcreqhapDisplay = document.getElementById("jcreqhap-display");
const cbmBtn = document.getElementById("cbm-btn");
const cbmreqhapDisplay = document.getElementById("cbmreqhap-display");
const gttcBtn = document.getElementById("gttc-btn");
const gttcreqhapDisplay = document.getElementById("gttcreqhap-display");
const pBtn = document.getElementById("p-btn");
const preqhapDisplay = document.getElementById("preqhap-display");

window.addEventListener("DOMContentLoaded", function() {
    const pBtnClicked = localStorage.getItem("pBtnClicked");
    if (pBtnClicked === "true") {
        const savedImageSrc = localStorage.getItem("gimme5ImageSrc");
        if (savedImageSrc) {
            gimme5btn.src = savedImageSrc;
        }
    }
});

// Game State
let Arnyhappiness = localStorage.getItem("Arnyhappiness") ? parseInt(localStorage.getItem("Arnyhappiness")) : 0;
let aihgr = localStorage.getItem("aihgr") ? parseInt(localStorage.getItem("aihgr")) : 0;
let ytreqhap = localStorage.getItem("ytreqhap") ? parseInt(localStorage.getItem("ytreqhap")) : 100;
let jcreqhap = localStorage.getItem("jcreqhap") ? parseInt(localStorage.getItem("jcreqhap")) : 1000;
let cbmreqhap = localStorage.getItem("cbmreqhap") ? parseInt(localStorage.getItem("cbmreqhap")) : 10000;
let gttcreqhap = localStorage.getItem("gttcreqhap") ? parseInt(localStorage.getItem("gttcreqhap")) : 100000;
let preqhap = localStorage.getItem("preqhap") ? parseInt(localStorage.getItem("preqhap")) : 1000000;

happinessDisplay.textContent = Arnyhappiness;
aihgrdisplay.textContent = aihgr;
ytreqhapDisplay.textContent = `Cost: ${ytreqhap}`;
jcreqhapDisplay.textContent = `Cost: ${jcreqhap}`;
cbmreqhapDisplay.textContent = `Cost: ${cbmreqhap}`;
gttcreqhapDisplay.textContent = `Cost: ${gttcreqhap}`;
preqhapDisplay.textContent = `Cost: ${preqhap}`;

// Game Logic
setInterval(function () {
Arnyhappiness = Arnyhappiness + aihgr;
happinessDisplay.textContent = Arnyhappiness;
localStorage.setItem("Arnyhappiness", Arnyhappiness);
}, 1000);

// Give Arny a high five
gimme5btn.addEventListener("click", function () {
Arnyhappiness = Arnyhappiness + 1;
happinessDisplay.textContent = Arnyhappiness;
high5.play();
localStorage.setItem("Arnyhappiness", Arnyhappiness);
});

// Mute/unmute all audio
let isMuted = false;
muteBtn.addEventListener("click", function () {
    const audioElements = document.querySelectorAll("audio");
    isMuted = !isMuted;
    
    audioElements.forEach(function(audio) {
        audio.muted = isMuted;
    });

    muteBtn.textContent = isMuted ? "Unmute" : "Mute";
});


// Upgrades
ytBtn.addEventListener("click", function () {
if (Arnyhappiness >= ytreqhap) {
    aihgr = aihgr + 1;
    Arnyhappiness = Arnyhappiness - ytreqhap;
    happinessDisplay.textContent = Arnyhappiness;
    aihgrdisplay.textContent = aihgr;

    ytreqhap = Math.ceil(ytreqhap * 1.1);
    ytreqhapDisplay.textContent = `Cost: ${ytreqhap}`;
    upgrade.play();
    localStorage.setItem("Arnyhappiness", Arnyhappiness);
    localStorage.setItem("aihgr", aihgr);
    localStorage.setItem("ytreqhap", ytreqhap);
} else {
    ytBtn.style.backgroundColor = "red";
    notEnough.play()

    setTimeout(function () {
    ytBtn.style.backgroundColor = "rgb(221, 255, 0)";
    }, 500);
}
});

jcBtn.addEventListener("click", function () {
    if (Arnyhappiness >= jcreqhap) {
    aihgr = aihgr + 10;
    Arnyhappiness = Arnyhappiness - jcreqhap;
    happinessDisplay.textContent = Arnyhappiness;
    aihgrdisplay.textContent = aihgr;

    jcreqhap = Math.ceil(jcreqhap * 1.1);
    jcreqhapDisplay.textContent = `Cost: ${jcreqhap}`;
    upgrade.play();
    localStorage.setItem("Arnyhappiness", Arnyhappiness);
    localStorage.setItem("aihgr", aihgr);
    localStorage.setItem("jcreqhap", jcreqhap);
} else {
    jcBtn.style.backgroundColor = "red";
    notEnough.play()

    setTimeout(function () {
        jcBtn.style.backgroundColor = "rgb(221, 255, 0)";
    }, 500);
    }
});

cbmBtn.addEventListener("click", function () {
    if (Arnyhappiness >= cbmreqhap) {
    aihgr = aihgr + 50;
    Arnyhappiness = Arnyhappiness - cbmreqhap;
    happinessDisplay.textContent = Arnyhappiness;
    aihgrdisplay.textContent = aihgr;

    cbmreqhap = Math.ceil(cbmreqhap * 1.1);
    cbmreqhapDisplay.textContent = `Cost: ${cbmreqhap}`;
    upgrade.play();
    localStorage.setItem("Arnyhappiness", Arnyhappiness);
    localStorage.setItem("aihgr", aihgr);
    localStorage.setItem("cbmreqhap", cbmreqhap);
} else {
    cbmBtn.style.backgroundColor = "red";
    notEnough.play()

    setTimeout(function () {
        cbmBtn.style.backgroundColor = "rgb(221, 255, 0)";
    }, 500);
    }
});

gttcBtn.addEventListener("click", function () {
    if (Arnyhappiness >= gttcreqhap) {
    aihgr = aihgr + 100;
    Arnyhappiness = Arnyhappiness - gttcreqhap;
    happinessDisplay.textContent = Arnyhappiness;
    aihgrdisplay.textContent = aihgr;

      gttcreqhap = Math.ceil(gttcreqhap * 1.1);
    gttcreqhapDisplay.textContent = `Cost: ${gttcreqhap}`;
    upgrade.play();
    localStorage.setItem("Arnyhappiness", Arnyhappiness);
    localStorage.setItem("aihgr", aihgr);
    localStorage.setItem("gttcreqhap", gttcreqhap);
} else {
    gttcBtn.style.backgroundColor = "red";
    notEnough.play()

    setTimeout(function () {
        gttcBtn.style.backgroundColor = "rgb(221, 255, 0)";
    }, 500);
    }
});

//prestige
pBtn.addEventListener("click", function () {
    if (Arnyhappiness >= preqhap) {
        aihgr = 0;
        Arnyhappiness = 0;
        happinessDisplay.textContent = Arnyhappiness;
        aihgrdisplay.textContent = aihgr;

        ytreqhap = 100;
        jcreqhap = 1000;
        cbmreqhap = 10000;
        gttcreqhap = 100000;

        ytreqhapDisplay.textContent = `Cost: ${ytreqhap}`;
        jcreqhapDisplay.textContent = `Cost: ${jcreqhap}`;
        cbmreqhapDisplay.textContent = `Cost: ${cbmreqhap}`;
        gttcreqhapDisplay.textContent = `Cost: ${gttcreqhap}`;

        localStorage.setItem("Arnyhappiness", Arnyhappiness);
        localStorage.setItem("aihgr", aihgr);
        localStorage.setItem("ytreqhap", ytreqhap);
        localStorage.setItem("jcreqhap", jcreqhap);
        localStorage.setItem("cbmreqhap", cbmreqhap);
        localStorage.setItem("gttcreqhap", gttcreqhap);

        const newImageSrc = "pres.PNG"; // Change this to your new image path
        gimme5btn.src = newImageSrc;
        localStorage.setItem("gimme5ImageSrc", newImageSrc);

        localStorage.setItem("pBtnClicked", "true");
        prestigesound.play();
    } else {
        pBtn.style.backgroundColor = "red";
        notEnough.play();

        setTimeout(function () {
            pBtn.style.backgroundColor = "rgb(221, 255, 0)";
        }, 500);
    }
});