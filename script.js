const tutorialModal = document.getElementById("tutorialModal");

const tutorialClose = document.getElementById("tutorialClose");

const tutorialTitle = document.getElementById("tutorialTitle");

const tutorialImage1 = document.getElementById("tutorialImage1");

const tutorialImage2 = document.getElementById("tutorialImage2");


/* ==============================
   TUTORIAL DATA
============================== */

const tutorials = {

    1: {
        title: "Modern Type",
        image1: "tutorialImage1-1.png",
        image2: "tutorialImage1-2.png"
    },

    2: {
        title: "Bold Yellow Captions",
        image1: "tutorialImage2-1.png",
        image2: "tutorialImage2-2.png"
    },

    3: {
        title: "Clean White Subtitles",
        image1: "tutorialImage3-1.png",
        image2: "tutorialImage3-2.png"
    },

    4: {
        title: "Viral Red Highlight",
        image1: "tutorialImage4-1.png",
        image2: "tutorialImage4-2.png"
    },

    5: {
        title: "Typing Style",
        image1: "tutorialImage5-1.png",
        image2: "tutorialImage5-2.png"
    },

    6: {
        title: "Minimal Podcast Captions",
        image1: "tutorialImage6-1.png",
        image2: "tutorialImage6-2.png"
    },

    7: {
        title: "Gaming Neon Style",
        image1: "tutorialImage7-1.png",
        image2: "tutorialImage7-2.png"
    },

    8: {
        title: "White & Yellow Combo",
        image1: "tutorialImage8-1.png",
        image2: "tutorialImage8-2.png"
    },

    9: {
        title: "Big Impact Captions",
        image1: "tutorialImage9-1.png",
        image2: "tutorialImage9-2.png"
    },

    10: {
        title: "Fast Word Highlight",
        image1: "tutorialImage10-1.png",
        image2: "tutorialImage10-2.png"
    },

    11: {
        title: "Red & White Style",
        image1: "tutorialImage11-1.png",
        image2: "tutorialImage11-2.png"
    },

    12: {
        title: "Modern TikTok Captions",
        image1: "tutorialImage12-1.png",
        image2: "tutorialImage12-2.png"
    },

    13: {
        title: "Classic White Captions",
        image1: "tutorialImage13-1.png",
        image2: "tutorialImage13-2.png"
    },

    14: {
        title: "Aesthetics Subtitles",
        image1: "tutorialImage14-1.png",
        image2: "tutorialImage14-2.png"
    },

    15: {
        title: "Yellow Highlight Style",
        image1: "tutorialImage15-1.png",
        image2: "tutorialImage15-2.png"
    },

    16: {
        title: "Creator Bold Style",
        image1: "tutorialImage16-1.png",
        image2: "tutorialImage16-2.png"
    },

    17: {
        title: "Dynamic Gaming Captions",
        image1: "tutorialImage17-1.png",
        image2: "tutorialImage17-2.png"
    },

    18: {
        title: "Shorts Viral Style",
        image1: "tutorialImage18-1.png",
        image2: "tutorialImage18-2.png"
    },

    19: {
        title: "Clean Professional Style",
        image1: "tutorialImage19-1.png",
        image2: "tutorialImage19-2.png"
    },

    20: {
        title: "Ultimate Viral Captions",
        image1: "tutorialImage20-1.png",
        image2: "tutorialImage20-2.png"
    }

};


/* ==============================
   OPEN TUTORIAL
============================== */

function openTutorial(id) {

    const tutorial = tutorials[id];

    if (!tutorial) {
        return;
    }


    tutorialTitle.textContent = tutorial.title;


    tutorialImage1.src = tutorial.image1;

    tutorialImage2.src = tutorial.image2;


    tutorialImage1.alt =
        tutorial.title + " - CapCut tutorial step 1";

    tutorialImage2.alt =
        tutorial.title + " - CapCut tutorial step 2";


    tutorialModal.classList.add("show");


    document.body.style.overflow = "hidden";

}


/* ==============================
   CLOSE TUTORIAL
============================== */

function closeTutorial() {

    tutorialModal.classList.remove("show");


    document.body.style.overflow = "";


    /*
       Clear images after closing.
       This prevents old screenshots
       from staying loaded.
    */

    tutorialImage1.src = "";

    tutorialImage2.src = "";

}


/* ==============================
   TUTORIAL BUTTONS
============================== */

const tutorialButtons =
    document.querySelectorAll(".tutorial-button");


tutorialButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const id = button.dataset.id;

        openTutorial(id);

    });

});


/* ==============================
   CLOSE BUTTON
============================== */

tutorialClose.addEventListener(
    "click",
    closeTutorial
);


/* ==============================
   CLICK OUTSIDE
============================== */

const tutorialOverlay =
    document.querySelector(".tutorial-overlay");


tutorialOverlay.addEventListener(
    "click",
    closeTutorial
);


/* ==============================
   ESC KEY
============================== */

document.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key === "Escape" &&
            tutorialModal.classList.contains("show")
        ) {

            closeTutorial();

        }

    }
);