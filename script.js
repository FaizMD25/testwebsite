// =====================================================
// ELEMENTS
// =====================================================

const intro =
    document.getElementById("intro");

const helloButton =
    document.getElementById("helloButton");

const countdown =
    document.getElementById("countdown");

const surprise =
    document.getElementById("surprise");

const gift =
    document.getElementById("gift");

const birthday =
    document.getElementById("birthday");

const cake =
    document.getElementById("cake");

const blowButton =
    document.getElementById("blowButton");

const birthdayExplosion =
    document.getElementById(
        "birthdayExplosion"
    );

const memoryIntro =
    document.getElementById("memoryIntro");

const startGallery =
    document.getElementById("startGallery");

const gallery =
    document.getElementById("gallery");

const galleryImage =
    document.getElementById("galleryImage");

const galleryTitle =
    document.getElementById("galleryTitle");

const photoCounter =
    document.getElementById("photoCounter");

const dotsContainer =
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

const confetti =
    document.getElementById("confetti");

const balloons =
    document.getElementById("balloons");



// =====================================================
// FOTO
// =====================================================

const photos = [

    "images/foto1.jpg",

    "images/foto2.jpg",

    "images/foto3.jpg",

    "images/foto4.jpg",

    "images/foto5.jpg",

    "images/foto6.jpg"

];



// =====================================================
// JUDUL FOTO
// =====================================================

const photoTitles = [

    "Memory #1 ❤️",

    "Memory #2 ✨",

    "Memory #3 💕",

    "Memory #4 🌸",

    "Memory #5 🥰",

    "Memory #6 💖"

];



// =====================================================
// VARIABLES
// =====================================================

let currentPhoto = 0;

let musicPlaying = false;

let countdownStarted = false;



// =====================================================
// HELLO THERE
// COUNTDOWN 5 DETIK
// =====================================================

helloButton.addEventListener(
    "click",
    function () {

        // Mencegah countdown
        // berjalan dua kali

        if (countdownStarted) {
            return;
        }

        countdownStarted = true;


        // Sembunyikan Hello There

        helloButton.style.display =
            "none";


        // Tampilkan countdown

        countdown.classList.remove(
            "hidden"
        );


        let number = 5;

        countdown.textContent =
            number;


        // Animasi angka pertama

        countdown.style.animation =
            "none";

        void countdown.offsetWidth;

        countdown.style.animation =
            "countPop .8s ease";


        // Countdown

        const timer =
            setInterval(
                function () {

                    number--;


                    // ==========================
                    // ANGKA 4 - 1
                    // ==========================

                    if (number >= 1) {

                        countdown.textContent =
                            number;


                        // Restart animation

                        countdown.style.animation =
                            "none";

                        void countdown.offsetWidth;

                        countdown.style.animation =
                            "countPop .8s ease";

                    }


                    // ==========================
                    // COUNTDOWN SELESAI
                    // ==========================

                    else {

                        clearInterval(timer);


                        // Hilangkan countdown

                        countdown.classList.add(
                            "hidden"
                        );


                        // =================================
                        // 🎵 PLAY MUSIK OTOMATIS
                        // =================================

                        music.play()
                            .then(
                                function () {

                                    musicPlaying =
                                        true;

                                    musicButton.textContent =
                                        "⏸️";

                                }
                            )
                            .catch(
                                function (error) {

                                    console.log(
                                        "Musik tidak dapat diputar:",
                                        error
                                    );

                                }
                            );


                        // =================================
                        // PINDAH KE HALAMAN SURPRISE
                        // =================================

                        intro.classList.add(
                            "hidden"
                        );


                        surprise.classList.remove(
                            "hidden"
                        );

                    }

                },
                1000
            );

    }
);



// =====================================================
// GIFT
// KLIK KADO
// =====================================================

gift.addEventListener(
    "click",
    function () {

        // Efek confetti

        createConfetti(70);


        // Efek balon

        createBalloons(8);


        // Sembunyikan surprise

        surprise.classList.add(
            "hidden"
        );


        // Tampilkan birthday

        birthday.classList.remove(
            "hidden"
        );

    }
);



// =====================================================
// BLOW CANDLES
// EXPLOSION → 5 DETIK → FLOWERS → MEMORIES
// =====================================================

blowButton.addEventListener(
    "click",
    function () {

        // Jangan bisa diklik dua kali

        blowButton.disabled = true;


        // =============================================
        // MATIKAN SEMUA API
        // =============================================

        document
            .querySelectorAll(".flame")
            .forEach(
                function (flame) {

                    flame.style.display =
                        "none";

                }
            );


        // =============================================
        // GETARKAN KUE
        // =============================================

        if (cake) {

            cake.classList.add(
                "exploding"
            );

        }


        // =============================================
        // LEDAKAN
        // =============================================

        createExplosion();


        // =============================================
        // CONFETTI
        // =============================================

        createConfetti(120);


        // =============================================
        // BALON
        // =============================================

        createBalloons(12);


        // =============================================
        // UBAH TOMBOL
        // =============================================

        blowButton.textContent =
            "✨ Make a Wish ✨";


        // =============================================
        // TUNGGU 5 DETIK
        // =============================================

        setTimeout(
            function () {

                // Munculkan bunga

                showBouquet();

            },
            5000
        );


        // =============================================
        // SETELAH BUNGA
        // MASUK KE MEMORIES
        // =============================================

        setTimeout(
    function () {

        const bouquet =
            document.getElementById(
                "bouquetContainer"
            );

        if (bouquet) {

            bouquet.classList.remove(
                "show"
            );

        }


        birthday.classList.add(
            "hidden"
        );


        memoryIntro.classList.remove(
            "hidden"
        );

    },
    10000
);

    }
);



// =====================================================
// CREATE EXPLOSION
// =====================================================

function createExplosion() {

    // Pastikan element tersedia

    if (!birthdayExplosion) {
        return;
    }


    // Kosongkan ledakan sebelumnya

    birthdayExplosion.innerHTML =
        "";


    // =================================
    // FLASH
    // =================================

    const flash =
        document.createElement(
            "div"
        );

    flash.className =
        "explosion-flash";


    birthdayExplosion.appendChild(
        flash
    );


    // =================================
    // SHOCKWAVE
    // =================================

    const ring =
        document.createElement(
            "div"
        );

    ring.className =
        "explosion-ring";


    birthdayExplosion.appendChild(
        ring
    );


    // =================================
    // PARTICLES
    // =================================

    const particleCount = 55;


    for (
        let i = 0;
        i < particleCount;
        i++
    ) {

        const particle =
            document.createElement(
                "div"
            );


        particle.className =
            "explosion-particle";


        // Sudut random

        const angle =
            Math.random() *
            Math.PI *
            2;


        // Jarak random

        const distance =
            100 +
            Math.random() * 300;


        // Posisi X

        const x =
            Math.cos(angle) *
            distance;


        // Posisi Y

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


        // Ukuran random

        const size =
            4 +
            Math.random() * 8;


        particle.style.width =
            `${size}px`;


        particle.style.height =
            `${size}px`;


        birthdayExplosion.appendChild(
            particle
        );

    }


    // =================================
    // BERSIHKAN
    // =================================

    setTimeout(
        function () {

            birthdayExplosion.innerHTML =
                "";

        },
        1600
    );


    // Hapus class getar

    setTimeout(
        function () {

            if (cake) {

                cake.classList.remove(
                    "exploding"
                );

            }

        },
        700
    );

}

// =====================================================
// SHOW BOUQUET
// =====================================================

function showBouquet() {

    const bouquet =
        document.getElementById(
            "bouquetContainer"
        );

    if (!bouquet) {
        return;
    }

    bouquet.classList.add(
        "show"
    );

}

// =====================================================
// START GALLERY
// =====================================================

startGallery.addEventListener(
    "click",
    function () {

        // Sembunyikan intro

        memoryIntro.classList.add(
            "hidden"
        );


        // Tampilkan gallery

        gallery.classList.remove(
            "hidden"
        );


        // Reset foto

        currentPhoto = 0;


        // Buat indicator

        createDots();


        // Tampilkan foto pertama

        showPhoto();

    }
);



// =====================================================
// CREATE PHOTO DOTS
// =====================================================

function createDots() {

    dotsContainer.innerHTML =
        "";


    photos.forEach(
        function (_, index) {

            const dot =
                document.createElement(
                    "span"
                );


            if (index === 0) {

                dot.classList.add(
                    "active"
                );

            }


            // Dot juga bisa diklik

            dot.addEventListener(
                "click",
                function () {

                    currentPhoto =
                        index;

                    showPhoto();

                }
            );


            dotsContainer.appendChild(
                dot
            );

        }
    );

}



// =====================================================
// SHOW PHOTO
// =====================================================

function showPhoto() {

    // Fade out

    galleryImage.style.opacity =
        "0";


    setTimeout(
        function () {

            // ==============================
            // FOTO
            // ==============================

            galleryImage.src =
                photos[currentPhoto];


            // ==============================
            // JUDUL
            // ==============================

            galleryTitle.textContent =
                photoTitles[currentPhoto];


            // ==============================
            // COUNTER
            // ==============================

            photoCounter.textContent =
                `${currentPhoto + 1} / ${photos.length}`;


            // ==============================
            // FADE IN
            // ==============================

            galleryImage.style.opacity =
                "1";


            // ==============================
            // DOTS
            // ==============================

            const dots =
                dotsContainer
                    .querySelectorAll(
                        "span"
                    );


            dots.forEach(
                function (
                    dot,
                    index
                ) {

                    dot.classList.toggle(
                        "active",
                        index ===
                        currentPhoto
                    );

                }
            );


            // ==============================
            // BUTTON
            // ==============================

            if (
                currentPhoto ===
                photos.length - 1
            ) {

                nextPhoto.textContent =
                    "Open My Letter 💌";

            }

            else {

                nextPhoto.textContent =
                    "Next ❤️";

            }

        },
        200
    );

}



// =====================================================
// NEXT PHOTO
// =====================================================

nextPhoto.addEventListener(
    "click",
    function () {

        // Kalau belum foto terakhir

        if (
            currentPhoto <
            photos.length - 1
        ) {

            currentPhoto++;

            showPhoto();

        }


        // Kalau sudah foto terakhir

        else {

            gallery.classList.add(
                "hidden"
            );


            letterIntro.classList.remove(
                "hidden"
            );

        }

    }
);



// =====================================================
// OPEN LETTER
// =====================================================

openLetter.addEventListener(
    "click",
    function () {

        // Sembunyikan intro

        letterIntro.classList.add(
            "hidden"
        );


        // Tampilkan surat

        letter.classList.remove(
            "hidden"
        );


        // Mulai efek mengetik

        typeLetter();

    }
);



// =====================================================
// LETTER TYPING
// =====================================================

function typeLetter() {

    const text =
`Happy Birthday, Beb ❤️

Hari ini adalah hari yang spesial, karena seseorang yang sangat berarti lahir ke dunia.

Aku berharap di umur yang baru ini kamu mendapatkan banyak kebahagiaan, kesehatan, dan semua hal baik yang kamu impikan.

Semoga setiap langkahmu selalu dipenuhi hal-hal indah.

Terima kasih sudah menjadi seseorang yang begitu spesial.

Terima kasih untuk semua senyum, cerita, dan momen yang sudah kita lewati.

Whatever happens, I hope you always remember that you deserve to be happy.

Enjoy your special day.

And once again...

Happy Birthday, my favorite person. ❤️`;


    // Kosongkan teks

    letterText.textContent =
        "";


    // Sembunyikan tombol

    finishLetter.classList.add(
        "hidden"
    );


    let index = 0;


    // =================================
    // TYPING FUNCTION
    // =================================

    function type() {

        if (
            index <
            text.length
        ) {

            letterText.textContent +=
                text[index];


            index++;


            let speed = 35;


            // Jeda ketika enter

            if (
                text[index - 1] ===
                "\n"
            ) {

                speed = 180;

            }


            setTimeout(
                type,
                speed
            );

        }

        else {

            // Surat selesai

            finishLetter.classList.remove(
                "hidden"
            );

        }

    }


    type();

}



// =====================================================
// FINISH LETTER
// =====================================================

finishLetter.addEventListener(
    "click",
    function () {

        // Sembunyikan surat

        letter.classList.add(
            "hidden"
        );


        // Tampilkan ending

        ending.classList.remove(
            "hidden"
        );


        // Efek akhir

        createConfetti(120);

        createBalloons(15);

    }
);



// =====================================================
// MUSIC
// AUTO PLAY + PLAY / PAUSE
// =====================================================

musicButton.addEventListener(
    "click",
    async function () {

        // ===============================
        // PLAY
        // ===============================

        if (
            music.paused
        ) {

            try {

                await music.play();


                musicPlaying =
                    true;


                musicButton.textContent =
                    "⏸️";

            }

            catch (error) {

                console.log(
                    "Musik tidak dapat diputar:",
                    error
                );

            }

        }


        // ===============================
        // PAUSE
        // ===============================

        else {

            music.pause();


            musicPlaying =
                false;


            musicButton.textContent =
                "🎵";

        }

    }
);



// =====================================================
// MUSIC STATE
// Kalau musik selesai / error
// =====================================================

music.addEventListener(
    "play",
    function () {

        musicPlaying =
            true;


        musicButton.textContent =
            "⏸️";

    }
);


music.addEventListener(
    "pause",
    function () {

        musicPlaying =
            false;


        musicButton.textContent =
            "🎵";

    }
);



// =====================================================
// CONFETTI
// =====================================================

function createConfetti(
    amount
) {

    const symbols = [

        "✦",

        "♥",

        "•",

        "✧",

        "★",

        "♡"

    ];


    for (
        let i = 0;
        i < amount;
        i++
    ) {

        const piece =
            document.createElement(
                "div"
            );


        piece.className =
            "confetti-piece";


        // Simbol random

        piece.textContent =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];


        // Posisi random

        piece.style.left =
            Math.random() *
            100 +
            "%";


        // Ukuran random

        piece.style.fontSize =
            (
                8 +
                Math.random() *
                15
            ) +
            "px";


        // Durasi random

        piece.style.animationDuration =
            (
                2 +
                Math.random() *
                3
            ) +
            "s";


        // Delay random

        piece.style.animationDelay =
            Math.random() *
            1.5 +
            "s";


        confetti.appendChild(
            piece
        );


        // Hapus

        setTimeout(
            function () {

                piece.remove();

            },
            6000
        );

    }

}



// =====================================================
// BALLOONS
// =====================================================

function createBalloons(
    amount
) {

    const balloonSymbols = [

        "🎈",

        "🎈",

        "🎈"

    ];


    for (
        let i = 0;
        i < amount;
        i++
    ) {

        const balloon =
            document.createElement(
                "div"
            );


        balloon.className =
            "balloon";


        // Simbol

        balloon.textContent =
            balloonSymbols[
                Math.floor(
                    Math.random() *
                    balloonSymbols.length
                )
            ];


        // Posisi random

        balloon.style.left =
            Math.random() *
            100 +
            "%";


        // Durasi random

        balloon.style.animationDuration =
            (
                5 +
                Math.random() *
                4
            ) +
            "s";


        // Delay random

        balloon.style.animationDelay =
            Math.random() *
            2 +
            "s";


        balloons.appendChild(
            balloon
        );


        // Hapus setelah selesai

        setTimeout(
            function () {

                balloon.remove();

            },
            10000
        );

    }

}



// =====================================================
// RESTART
// =====================================================

restart.addEventListener(
    "click",
    function () {

        location.reload();

    }
);