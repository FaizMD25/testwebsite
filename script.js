/* ==================================================
   ELEMENTS
================================================== */

const intro = document.getElementById("intro");
const helloContainer = document.getElementById("helloContainer");
const helloButton = document.getElementById("helloButton");
const tapToBegin = document.getElementById("tapToBegin");
const countdown = document.getElementById("countdown");

const surprise = document.getElementById("surprise");
const gift = document.getElementById("gift");

const birthday = document.getElementById("birthday");
const blowButton = document.getElementById("blowButton");
const birthdayExplosion =
    document.getElementById("birthdayExplosion");

const bouquetContainer =
    document.getElementById("bouquetContainer");

const memoryIntro =
    document.getElementById("memoryIntro");

const gallery =
    document.getElementById("gallery");

const startGallery =
    document.getElementById("startGallery");

const galleryImage =
    document.getElementById("galleryImage");

const galleryTitle =
    document.getElementById("galleryTitle");

const photoCounter =
    document.getElementById("photoCounter");

const dots =
    document.getElementById("dots");

const nextPhoto =
    document.getElementById("nextPhoto");

const letterIntro =
    document.getElementById("letterIntro");

const openLetter =
    document.getElementById("openLetter");

const letter =
    document.getElementById("letter");

const letterText =
    document.getElementById("letterText");

const finishLetter =
    document.getElementById("finishLetter");

const ending =
    document.getElementById("ending");

const restart =
    document.getElementById("restart");

const music =
    document.getElementById("music");

const musicButton =
    document.getElementById("musicButton");



/* ==================================================
   HELPER
================================================== */

function showScreen(screen) {

    document
        .querySelectorAll(".screen")
        .forEach(section => {

            section.classList.add("hidden");

        });

    screen.classList.remove("hidden");

}



/* ==================================================
   HELLO / COUNTDOWN
================================================== */

helloButton.addEventListener("click", () => {

    /* Mulai musik setelah user melakukan klik */
    startMusic();


    helloContainer.classList.add("hide");

    setTimeout(() => {

        countdown.classList.remove("hidden");

        startCountdown();

    }, 600);

});


function startCountdown() {

    let number = 5;

    countdown.textContent = number;

    countdown.style.animation =
        "countPop .7s ease forwards";


    const timer =
        setInterval(() => {

            number--;

            if (number > 0) {

                countdown.textContent =
                    number;

                countdown.style.animation =
                    "none";

                void countdown.offsetWidth;

                countdown.style.animation =
                    "countPop .7s ease forwards";

            }


            if (number === 0) {

                countdown.textContent =
                    "✨";

            }


            if (number < 0) {

                clearInterval(timer);

                countdown.classList.add(
                    "hidden"
                );

                surprise.classList.remove(
                    "hidden"
                );

            }

        }, 1000);

}



/* ==================================================
   GIFT
================================================== */

gift.addEventListener("click", () => {

    surprise.classList.add("hidden");

    birthday.classList.remove("hidden");

});



/* ==================================================
   BIRTHDAY EXPLOSION
================================================== */

blowButton.addEventListener(
    "click",
    () => {

        createBirthdayExplosion();

        blowButton.style.opacity = "0";

        blowButton.style.pointerEvents =
            "none";

        setTimeout(() => {

            blowButton.style.display =
                "none";

        }, 500);


        setTimeout(() => {

            birthday.classList.add(
                "hidden"
             );  

            memoryIntro.classList.remove(
                "hidden"
            );

        }, 1800);
    }
);



function createBirthdayExplosion() {

    birthdayExplosion.innerHTML = "";


    /* =========================================
       CORE
    ========================================= */

    const core =
        document.createElement("div");

    core.className =
        "explosion-core";

    birthdayExplosion.appendChild(core);



    /* =========================================
       RING
    ========================================= */

    const ring =
        document.createElement("div");

    ring.className =
        "explosion-ring";

    birthdayExplosion.appendChild(ring);



    /* =========================================
       PARTICLES
    ========================================= */

    const particleCount = 45;


    for (
        let i = 0;
        i < particleCount;
        i++
    ) {

        const particle =
            document.createElement("div");

        particle.className =
            "explosion-particle";


        const angle =
            Math.random() *
            Math.PI *
            2;


        const distance =
            100 +
            Math.random() *
            300;


        const x =
            Math.cos(angle) *
            distance;


        const y =
            Math.sin(angle) *
            distance;


        particle.style.setProperty(
            "--x",
            `${x}px`
        );


        particle.style.setProperty(
            "--y",
            `${y}px`
        );


        particle.style.setProperty(
            "--delay",
            `${Math.random() * .2}s`
        );


        birthdayExplosion.appendChild(
            particle
        );

    }



    /* =========================================
       HEARTS
    ========================================= */

    const hearts = [

        "❤️",
        "💗",
        "💖",
        "✨",
        "💕"

    ];


    for (
        let i = 0;
        i < 15;
        i++
    ) {

        const heart =
            document.createElement("div");

        heart.className =
            "explosion-heart";


        heart.textContent =
            hearts[
                Math.floor(
                    Math.random() *
                    hearts.length
                )
            ];


        const angle =
            Math.random() *
            Math.PI *
            2;


        const distance =
            120 +
            Math.random() *
            260;


        const x =
            Math.cos(angle) *
            distance;


        const y =
            Math.sin(angle) *
            distance;


        heart.style.setProperty(
            "--x",
            `${x}px`
        );


        heart.style.setProperty(
            "--y",
            `${y}px`
        );


        heart.style.setProperty(
            "--rotate",
            `${Math.random() * 360}deg`
        );


        heart.style.setProperty(
            "--delay",
            `${Math.random() * .3}s`
        );


        birthdayExplosion.appendChild(
            heart
        );

    }


    setTimeout(() => {

        birthdayExplosion.innerHTML =
            "";

    }, 2000);

}

/* ==================================================
   GALLERY
================================================== */

const photos = [
    "images/foto1.jpg",
    "images/foto2.jpeg",
    "images/foto3.jpeg",
    "images/foto4.jpeg",
    "images/foto5.jpeg",
    "images/foto6.jpeg",
    "images/foto7.jpeg",
    "images/foto8.jpeg",
    "images/foto9.jpeg",
    "images/foto10.jpeg",
    "images/foto11.jpeg",
    "images/foto12.jpeg",
    "images/foto13.jpeg",
    "images/foto14.jpeg",
    "images/foto15.jpeg",
    "images/foto16.jpeg"
];


let currentPhoto = 0;


startGallery.addEventListener(
    "click",
    () => {

        memoryIntro.classList.add(
            "hidden"
        );

        gallery.classList.remove(
            "hidden"
        );

        showPhoto(0);

    }
);


function showPhoto(index) {

    currentPhoto = index;

    galleryImage.src =
        photos[currentPhoto];

    galleryTitle.textContent =
        `Memory #${currentPhoto + 1}`;

    photoCounter.textContent =
        `${currentPhoto + 1} / ${photos.length}`;


    dots.innerHTML = "";


    photos.forEach(
        (_, i) => {

            const dot =
                document.createElement(
                    "div"
                );

            dot.className =
                "dot";


            if (
                i === currentPhoto
            ) {

                dot.classList.add(
                    "active"
                );

            }


            dots.appendChild(dot);

        }
    );

}


nextPhoto.addEventListener(
    "click",
    () => {

        currentPhoto++;


        if (
            currentPhoto >=
            photos.length
        ) {

            gallery.classList.add(
                "hidden"
            );

            letterIntro.classList.remove(
                "hidden"
            );

            return;

        }


        showPhoto(
            currentPhoto
        );

    }
);



/* ==================================================
   LETTER
================================================== */

openLetter.addEventListener(
    "click",
    () => {

        letterIntro.classList.add(
            "hidden"
        );

        letter.classList.remove(
            "hidden"
        );

        typeLetter();

    }
);


const message = `Happy Birthday to someone truly special. ❤️

Today is the day someone gets older. I may not always be able to put everything into words.
but I want you to know how grateful I am to have you in my life. Your presence makes ordinary moments feel a little more meaningful, and your smile has a way of making everything feel a little brighter.
And I hope you know just how precious you are.

May you always find me for reasons to smile, people who genuinely care about you, and the courage to chase everything your heart desires.
And also i hope may find ur peace and happiness in me. Thank you for being you all the time. 

Maybe this isn't much, but honestly, I wish I could give you so much more. And i'm always trying to.
But for now, all I can give you is this.
Thank you for being you. Thank you for existing. And thank you for becoming one of the people who make my world a little brighter.

I'm with you till the end of the line.

And remember one thing, with great power comes great responsibility.

Happy Birthday ❤️
I Love You So much Beb`;


function typeLetter() {

    letterText.textContent = "";

    finishLetter.classList.add(
        "hidden"
    );


    let index = 0;


    const typing =
        setInterval(() => {

            letterText.textContent +=
                message[index];

            index++;


            if (
                index >=
                message.length
            ) {

                clearInterval(typing);

                finishLetter.classList.remove(
                    "hidden"
                );

            }

        }, 35);

}



finishLetter.addEventListener(
    "click",
    () => {

        letter.classList.add(
            "hidden"
        );

        ending.classList.remove(
            "hidden"
        );

    }
);



/* ==================================================
   MUSIC
================================================== */

let musicPlaying = false;


/* =========================================
   PLAY MUSIC
========================================= */

function startMusic() {

    music.volume = 0.5;

    const playPromise = music.play();

    if (playPromise !== undefined) {

        playPromise
            .then(() => {

                musicPlaying = true;

                musicButton.textContent =
                    "⏸️";

            })
            .catch(() => {

                console.log(
                    "Music gagal diputar."
                );

            });

    }

}


/* =========================================
   MUSIC BUTTON
========================================= */

musicButton.addEventListener(
    "click",
    () => {

        if (music.paused) {

            music.play()
                .then(() => {

                    musicPlaying = true;

                    musicButton.textContent =
                        "⏸️";

                })
                .catch(() => {

                    console.log(
                        "Music tidak dapat diputar."
                    );

                });

        } else {

            music.pause();

            musicPlaying = false;

            musicButton.textContent =
                "🎵";

        }

    }
);


/* ==================================================
   RESTART
================================================== */

restart.addEventListener(
    "click",
    () => {

        location.reload();

    }
);