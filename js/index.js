function setVisibilityToDiv(divId, visibility) {
    let currentDiv = this.document.getElementById(divId);
    if (visibility === "hide") {
        if (currentDiv.style.display === "show") {
            currentDiv.style.display = "block";
        } else {
            currentDiv.style.display = "none";
        }
    } else if (visibility === "show") {
        currentDiv.style.display = "block";
    }
}

function doTheMagic() {

    const smallWidth = 500;
    const smallHeight = 1000;

    if (window.innerWidth < smallWidth && window.innerHeight < smallHeight) {
        setVisibilityToDiv('social-media-horizontal-list', "hide");
    }

    if (window.innerWidth == 688 && window.innerHeight == 1031) {
        setVisibilityToDiv('social-media-horizontal-list', "hide");
    }
}

doTheMagic();
//setVisibilityToDiv('social-media-horizontal-list', "hide");


// window.addEventListener("resize", function () { console.log('resize!') }, true);

// if (window.attachEvent) {
//     window.attachEvent('onresize', function () {
//         alert('attachEvent - resize');
//         doTheMagic();
//     });
// }
// else if (window.addEventListener) {
//     window.addEventListener('resize', function () {
//         console.log('addEventListener - resize');
//         doTheMagic();
//     }, true);
// }
// else {
//     //The browser does not support Javascript event binding
// }

